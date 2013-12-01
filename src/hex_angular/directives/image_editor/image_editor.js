var App = angular.module('hexAngular');

/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* Image Editor Directive -
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
App.directive('imageEditor', function($rootScope, $http, $timeout, Utilities) {
    'use strict';

    return {
        restrict: 'A',
        templateUrl: '/static/partials/hex_angular/image_editor/image_editor.html',
        replace: true,
        scope: {
            imageSource: '=',
            mode: '@',
            hideControls: '@',
            saveMode: '@',
            aspectX: '=',
            aspectY: '=',
            minWidth: '=',
            minHeight: '='
        },

        link: function($scope, $element, $attrs) {

            // constants
            var X_OFFSET   = 0,
                Y_OFFSET   = 0,
                MIN_HEIGHT = 10,
                MIN_WIDTH  = 10,
                RESIZE_GUIDES_MIN_SIZE = 20,
                RESIZE_HANDLE_SIZE = 15,
                SCROLL_PADDING = 50,

                MOVE = 'move',
                CREATE = 'create',

                N_RESIZE = 'n-resize',
                E_RESIZE = 'e-resize',
                S_RESIZE = 's-resize',
                W_RESIZE = 'w-resize',

                NE_RESIZE = 'ne-resize',
                SE_RESIZE = 'se-resize',
                SW_RESIZE = 'sw-resize',
                NW_RESIZE = 'nw-resize';

            // properties
            var frameID = null,
                animationFrame = new AnimationFrame(60),
                cropActiveTimeout = null,
                mouseMoveAction = null;

            // jquery elements
            var $image = $element.find('.image');

            // data
            var image = null;

            // scope data
            $scope.state = {
                cropActive: false,
                guidesActive: false,
                // if true - bring in handle to prevent overscroll bug
                cropAtBottomEdge: false,
                cropAtRightEdge: false,
                movingSelection: false,
                hideControls: ($attrs.hideControls && $attrs.hideControls === 'true') ? true : false
            };

            $scope.crop = {

                // the real origin point, used so drawing a selection 'behind' the origin works correctly
                x: 0,
                y: 0,

                // the origin point used to control crop selection style
                cropX: 0,
                cropY: 0,

                // the real dimensions, used for resizing 'behind'
                width: 0,
                height: 0,

                // the dimensions used to control crop selection style
                cropWidth: 0,
                cropHeight: 0,

                moveOriginX: 0,
                moveOriginY: 0
            };

            $scope.imageEditor = {
                progress: false,
                aspectRatio: 0,
                aspectX: 0,
                aspectY: 0,
                minWidth: 0,
                minHeight: 0
            };

            $scope.image = {
                width: 0,
                height: 0,
                uploading: false
            };

            // styles
            $scope.editorContainerStyle = {};

            $scope.imageStyle = {};
            $scope.cropStyle = {};

            // jquery elements
            var $imageEditor = $element.find('.image-editor'),
                $crop        = $element.find('.crop-selection'),
                $cropOverlay = $element.find('.crop-overlay');


            initialize();
            createEventHandlers();


            /* createEventHandlers - handles angular events
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function createEventHandlers() {

                // watch: imageSource
                $scope.$watch('imageSource', function(imageSource, oldValue) {

                    if (imageSource) {
                        renderImage(imageSource);
                    }
                });

                // watch: aspectX
                $scope.$watch('aspectX', function(aspectX, oldValue) {
                    setParameters();
                });

                // watch: aspectY
                $scope.$watch('aspectY', function(aspectX, oldValue) {
                    setParameters();
                });

                // watch: state.cropActive
                $scope.$watch('state.cropActive', function(cropActive, oldValue) {
                    $rootScope.$broadcast('image-editor:crop-active-changed', cropActive);
                });

                // event: show-image-editor
                $scope.$on('image-editor:show-image-editor', function(e) {
                    showImageEditor();
                });

                // render cropped image
                $scope.$on('image-editor:save-edited-image', function(e) {
                    saveImage();
                });

                // close image editor
                $scope.$on('image-editor:hide-image-editor', function(e) {
                    hideImageEditor();
                });

                // load pasted image
                $scope.$on('image-editor:image-pasted', function(e, pasteProperties) {
                    renderImage(pasteProperties.source);
                });

                // edit uploaded iamge
                $scope.$on('image-editor:edit-image', function(e, imageSource) {
                    renderImage(imageSource);
                });

                // event: image-saved
                $scope.$on('image-editor:image-saved', function(e, data) {
                    disableEditor();
                });

                // event: image-editor:config-updated
                $scope.$on('image-editor:config-updated', function(e, config) {

                    console.log('config updated');
                });

                // event: image-editor:increase-dimensions
                $scope.$on('image-editor:increase-dimensions', function(e, dimensions) {

                    var crop = {
                        'x': $scope.crop.cropX,
                        'y': $scope.crop.cropY,
                        'width': $scope.crop.cropWidth + dimensions.width,
                        'height': $scope.crop.cropHeight + dimensions.height
                    };

                    updateCropSelection(crop);
                });

                // imageEditor: mousewheel - scroll image position
                $imageEditor.mousewheel(function(event, delta, deltaX, deltaY) {

                });

                // imageEditor: mouseup - stop selection
                $(document).on('mouseup', function(e) {

                    $('body').removeClass('disable-selection');

                    mouseMoveAction = null;

                    // update new original origin and dimensions after crop resize complete
                    $rootScope.safeApply(function() {

                        $scope.crop.x = $scope.crop.cropX;
                        $scope.crop.y = $scope.crop.cropY;

                        $scope.crop.width = $scope.crop.cropWidth;
                        $scope.crop.height = $scope.crop.cropHeight;
                    });

                    $crop.removeClass('drag');

                    if ($scope.crop.width === 0 || $scope.crop.height === 0) {
                        $cropOverlay.removeClass('active');
                        $crop.removeClass('active');
                    }
                });

                // event: mousemove
                $(document).on('mousemove', function(e) {

                    var offset = $element.offset(),
                        mouseX = e.pageX - offset.left + $imageEditor.scrollLeft(),
                        mouseY = e.pageY - offset.top + $imageEditor.scrollTop();

                    $timeout.cancel(cropActiveTimeout);

                    // process mouse move
                    processMouseMove(mouseX, mouseY);
                });

                // $image: resize
                $image.resize(function(e) {

                    // get image width
                    $scope.$emit('image-editor:image-width-updated', $image.width());
                });
            }

            /**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            /* initialize -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function initialize() {
                setParameters();
            }

            /* setParameters -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function setParameters() {

                // extend defaults
                Utilities.extendSettings($scope.imageEditor, $scope);

                // update aspect ratio
                calculateAspectRatio();
            }

            /* calculateAspectRatio -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function calculateAspectRatio() {
                $scope.imageEditor.aspectRatio = parseInt($scope.imageEditor.aspectX, 10) / parseInt($scope.imageEditor.aspectY, 10);
            }

            /* showImageEditor -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function showImageEditor() {
                enableEditor();
            }

            /* hideImageEditor -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function hideImageEditor() {
                disableEditor();
            }

            /* renderImage - set image background url from source url
            * source - source url created from data blob
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function renderImage(source) {

                enableEditor();
                $scope.imageEditor.progress = true;

                image = new Image();
                image.src = source;

                // on image load
                image.onload = function() {

                    $rootScope.safeApply(function() {

                        $scope.imageEditor.progress = false;
                        $scope.image.width = image.width;
                        $scope.image.height = image.height;

                        // set style
                        $scope.editorContainerStyle['max-height'] = image.height + SCROLL_PADDING + 'px';

                        $scope.imageStyle['background-image'] = 'url(' + source + ')';
                        $scope.imageStyle['width'] = image.width;
                        $scope.imageStyle['height'] = image.height;
                    });
                };
            }

            /* enableEditor - activate image editor
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function enableEditor() {
                $element.removeClass('inactive');

                $rootScope.$broadcast('image-editor:enabled', {});
            }

            /* disableEditor - deactivate image editor
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function disableEditor() {

                $scope.imageEditor.progress = false;
                $element.addClass('inactive');

                $scope.imageStyle['background-image'] = '';
                $scope.imageStyle['width'] = '0px';
                $scope.imageStyle['height'] = '0px';

                $scope.cropStyle = {};

                $scope.editorContainerStyle = {};

                $scope.state.cropActive = false;
                $scope.state.guidesActive = false;

                $rootScope.$broadcast('image-editor:disabled', {});
            }

            /* startCropSelection - draw out initial crop selection
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function startCropSelection(e) {

                $('body').addClass('disable-selection');

                mouseMoveAction = CREATE;
                $scope.state.movingSelection = false;

                clearSelectionDimensions();

                var offset = $element.offset(),
                    mouseX = e.pageX - offset.left + $imageEditor.scrollLeft(),
                    mouseY = e.pageY - offset.top + $imageEditor.scrollTop();

                setSelectionOrigin(mouseX, mouseY);
            }

            /* moveCropSelection - reposition crop origin x,y
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function moveCropSelection(e) {

                $('body').addClass('disable-selection');

                mouseMoveAction = MOVE;
                $scope.state.movingSelection = true;

                $crop.addClass('drag');

                var offset = $crop.offset(),
                    mouseX = e.pageX - offset.left,
                    mouseY = e.pageY - offset.top;

                $scope.crop.moveOriginX = mouseX;
                $scope.crop.moveOriginY = mouseY;

                e.stopPropagation();
            }

            /* processMouseMove - handle mouse move event with current mouse x,y position
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function processMouseMove(mouseX, mouseY) {

                // truncate mouseX, mouseY to 0,0
                if (mouseX < 0) {
                    mouseX = 0;
                }
                if (mouseY < 0) {
                    mouseY = 0;
                }

                var cropHeight = $scope.crop.height,
                    cropWidth = $scope.crop.width;

                // if aspect ratio enabled use image width/height for the selection crop width/height
                if ($scope.imageEditor.aspectX !== 0 && $scope.imageEditor.aspectY !== 0) {
                    cropHeight = $scope.image.height;
                    cropWidth = $scope.image.width;
                }

                switch(mouseMoveAction) {

                    case MOVE:
                        var cropMouseX = mouseX - $scope.crop.moveOriginX,
                            cropMouseY = mouseY - $scope.crop.moveOriginY;

                        setSelectionOrigin(cropMouseX, cropMouseY);

                        break;

                    case CREATE:
                        createCropSelection($scope.crop.x,
                                            $scope.crop.y,
                                            mouseX - $scope.crop.x,
                                            mouseY - $scope.crop.y);

                        break;

                    case N_RESIZE:
                        var reduceHeight = $scope.crop.y - mouseY;
                        createCropSelection($scope.crop.x,
                                            mouseY,
                                            cropWidth,
                                            $scope.crop.height + reduceHeight);

                        break;

                    case W_RESIZE:
                        var reduceWidth = $scope.crop.x - mouseX;
                        createCropSelection(mouseX,
                                            $scope.crop.y,
                                            $scope.crop.width + reduceWidth,
                                            cropHeight);
                        break;

                    case S_RESIZE:
                        createCropSelection($scope.crop.x,
                                            $scope.crop.y,
                                            cropWidth,
                                            mouseY - $scope.crop.y);
                        break;

                    case E_RESIZE:
                        createCropSelection($scope.crop.x,
                                            $scope.crop.y,
                                            mouseX - $scope.crop.x,
                                            cropHeight);
                        break;

                }
            }

            /* createCropSelection - set origin point, width/height of crop selection
            * x, y - crop origin point
            * width, height - selection width, height
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function createCropSelection(x, y, width, height) {

                var crop = {
                    x: x,
                    y: y,
                    width: width,
                    height: height
                };

                // update dimensions
                var dimensions = constrainCropDimensions(crop.x, crop.y, crop.width, crop.height);
                crop.width = dimensions.width;
                crop.height = dimensions.height;

                // create selection and handle negative width/height
                crop = calculateCropDimensions(crop.x, crop.y, crop.width, crop.height);

                // contrain crop origin
                var origin = constrainCropOrigin(crop.x, crop.y, crop.width, crop.height);
                crop.x = origin.x;
                crop.y = origin.y;

                // draw crop selection
                updateCropSelection(crop);
            }

            /* constrainCropDimensions - constrain crop width/height to aspect and image boundary
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function constrainCropDimensions(x, y, width, height) {

                // min width
                if ($scope.imageEditor.minWidth !== 0) {
                    if (width < $scope.imageEditor.minWidth) {
                        width = $scope.imageEditor.minWidth;
                    }
                }
                // min height
                if ($scope.imageEditor.minHeight !== 0) {
                    if (height < $scope.imageEditor.minHeight) {
                        height = $scope.imageEditor.minHeight;
                    }
                }

                var maxDimensions = getMaxDimensionsForOrigin(x, y, width, height);

                var dimensions = {
                    'width': maxDimensions.width,
                    'height': maxDimensions.height
                };

                return dimensions;
            }

            /* getMaxDimensionsForOrigin - bounding box is either image dimensions or current mouse x,y boundary whichever is lesser
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function getMaxDimensionsForOrigin(cropOriginX, cropOriginY, mouseX, mouseY) {

                var imageBoundary = {
                    'width': $scope.image.width - cropOriginX,
                    'height': $scope.image.height - cropOriginY
                };

                // absolute dimension limits, use either image boundary or mouse boundary individually
                var maxDimensions = {
                    'width': (imageBoundary.width > mouseX) ? mouseX : imageBoundary.width,
                    'height': (imageBoundary.height > mouseY) ? mouseY : imageBoundary.height
                };

                var dimensions = {
                    'width': maxDimensions.width,
                    'height': maxDimensions.height
                };

                // has aspect ratio enforcement
                if ($scope.imageEditor.aspectX !== 0 && $scope.imageEditor.aspectY !== 0) {

                    // get quadrant
                    /*
                        |----|
                        |4  1|
                        |3  2|
                        |----|
                    */
                    var quadrant = getQuadrant(maxDimensions.width, maxDimensions.height);

                    // get absolute value hypothetical dimensions
                    var hypotheticalDimensions = getHypotheticalDimensions(maxDimensions.width, maxDimensions.height);

                    // modify the hypothetical dimensions based on which quadrant we are in
                    switch(quadrant) {
                        case 1:
                            hypotheticalDimensions.height *= -1;
                            break;
                        case 2:
                            break;
                        case 3:
                            hypotheticalDimensions.width *= -1;
                            break;
                        case 4:
                            hypotheticalDimensions.width *= -1;
                            hypotheticalDimensions.height *= -1;
                            break;
                    }

                    // if width exceeds max possible width - set width to max width and set height to match aspect
                    if (Math.abs(hypotheticalDimensions.width) > Math.abs(maxDimensions.width)) {
                        dimensions.width = maxDimensions.width;
                        dimensions.height = hypotheticalDimensions.height;
                    }

                    // if height exceeds max possible height - set height to max height and set width to match aspect
                    if (Math.abs(hypotheticalDimensions.height) > Math.abs(maxDimensions.height)) {
                        dimensions.width = hypotheticalDimensions.width;
                        dimensions.height = maxDimensions.height;
                    }

                    // if mouseX or mouseY is 0 - set dimensions to 0
                    if (mouseX === 0 || mouseY === 0) {
                        dimensions.width = 0;
                        dimensions.height = 0;
                    }
                }

                dimensions.width = Math.floor(dimensions.width);
                dimensions.height = Math.floor(dimensions.height);

                return dimensions;
            }

            /* getQuadrant -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function getQuadrant(mouseX, mouseY) {
                /*
                |----|
                |4  1|
                |3  2|
                |----|
                */
                var quadrant = 1;

                // bottom-right
                if (mouseX > 0 && mouseY > 0) {
                    quadrant = 2;

                // bottom-left
                } else if (mouseX < 0 && mouseY > 0) {
                    quadrant = 3;

                // top-left
                } else if (mouseX < 0 && mouseY < 0) {
                    quadrant = 4;
                }

                return quadrant;
            }

            /* getHypotheticalDimensions -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function getHypotheticalDimensions(maxWidth, maxHeight) {

                var dimensions = {};

                var hypotheticalDimensions = {
                    // given the maxDimensions height find the width it would have to be to match aspect ratio
                    'width': Math.abs(maxHeight * $scope.imageEditor.aspectRatio),
                    // given the maxDimensions width find the height it would have to be to match aspect ratio
                    'height': Math.abs(maxWidth / $scope.imageEditor.aspectRatio)
                };

                return hypotheticalDimensions;
            }

            /* constrainCropOrigin - constrain to top/left image boundary
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function constrainCropOrigin(x, y, width, height) {

                // limit - minimum origin x, y
                if (x <= 0) {
                    x = 0;
                }
                if (y <= 0) {
                    y = 0;
                }

                var origin = {
                    'x': x,
                    'y': y
                };

                return origin;
            }

            /* calculateCropDimensions - create crop selection and handle negative width/height
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function calculateCropDimensions(x, y, width, height) {

                // invert if mouse position above or left of origin point
                // switch x with width or y with height
                if (width < 0) {
                    width *= -1;
                    x -= width;
                }
                if (height < 0) {
                    height *= -1;
                    y -= height;
                }

                var dimensions = {
                    'x': x,
                    'y': y,
                    'width': width,
                    'height': height
                };

                return dimensions;
            }

            /* updateCropSelection - draw crop selection and update state
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function updateCropSelection(crop) {

                // update origin/dimensions
                $scope.crop.cropX = crop.x;
                $scope.crop.cropY = crop.y;

                $scope.crop.cropWidth = crop.width;
                $scope.crop.cropHeight = crop.height;

                // update crop state
                $rootScope.safeApply(function() {

                    setHandleStatus();

                    // set style
                    $scope.cropStyle['left'] = crop.x;
                    $scope.cropStyle['top'] = crop.y;
                    $scope.cropStyle['width'] = crop.width;
                    $scope.cropStyle['height'] = crop.height;
                    $scope.cropStyle['background-position'] = -crop.x + 'px ' + -crop.y + 'px';

                    // cancel inactive timeout and set crop active
                    if (crop.width > MIN_WIDTH && crop.height > MIN_HEIGHT) {
                        $scope.state.cropActive = true;

                    // set to inactive after delay
                    } else {
                        cropActiveTimeout = $timeout(function() {
                            $scope.state.cropActive = false;
                        }, 250);
                    }

                    if (crop.width > RESIZE_GUIDES_MIN_SIZE && crop.height > RESIZE_GUIDES_MIN_SIZE) {
                        $scope.state.guidesActive = true;
                    } else {
                        $scope.state.guidesActive = false;
                    }
                });
            }


            /* setSelectionOrigin - set starting position of crop selection
            * x, y - mouse offset
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function setSelectionOrigin(x, y) {

                // limit
                if (x < 0) {
                    x = 0;
                }
                if ((x + $scope.crop.width) > $scope.image.width) {
                    x = $scope.image.width - $scope.crop.width;
                }
                if (y < 0) {
                    y = 0;
                }
                if ((y + $scope.crop.height) > $scope.image.height) {
                    y = $scope.image.height - $scope.crop.height;
                }

                $scope.crop.x = x;
                $scope.crop.y = y;

                $scope.crop.cropX = x;
                $scope.crop.cropY = y;

                $rootScope.safeApply(function() {

                    setHandleStatus();

                    $scope.cropStyle['left'] = x;
                    $scope.cropStyle['top'] = y;
                    $scope.cropStyle['background-position'] = -x + 'px ' + -y + 'px';
                });
            }

            /* setHandleStatus - set atBottom or atRight for south and east handles to prevent overflow bug
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function setHandleStatus() {

                var atBottomEdge = false,
                    atRightEdge = false;

                // set bottom/right edge status
                if (($scope.crop.cropX + $scope.crop.cropWidth) + RESIZE_HANDLE_SIZE >= $scope.image.width) {
                    atRightEdge = true;
                }
                if (($scope.crop.cropY + $scope.crop.cropHeight) + RESIZE_HANDLE_SIZE >= $scope.image.height) {
                    atBottomEdge = true;
                }

                $scope.state.cropAtRightEdge = atRightEdge;
                $scope.state.cropAtBottomEdge = atBottomEdge;
            }


            /* clearSelectionDimensions - remove crop selection width and height
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function clearSelectionDimensions() {

                $scope.crop.width = 0;
                $scope.crop.height = 0;

                $scope.state.cropActive = false;
                $scope.state.guidesActive = false;

                $rootScope.safeApply(function() {
                    $scope.cropStyle['width'] = '0px';
                    $scope.cropStyle['height'] = '0px';
                });
            }

            /* northResize -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function northResize(e) {
                $('body').addClass('disable-selection');
                mouseMoveAction = N_RESIZE;
                e.stopPropagation();
            }
            /* eastResize -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function eastResize(e) {
                $('body').addClass('disable-selection');
                mouseMoveAction = E_RESIZE;
                e.stopPropagation();
            }
            /* southResize -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function southResize(e) {
                $('body').addClass('disable-selection');
                mouseMoveAction = S_RESIZE;
                e.stopPropagation();
            }
            /* westResize -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function westResize(e) {
                $('body').addClass('disable-selection');
                mouseMoveAction = W_RESIZE;
                e.stopPropagation();
            }


            /* northEastResize -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function northEastResize(e) {
                mouseMoveAction = NE_RESIZE;
                e.stopPropagation();
            }
            /* southEastResize -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function southEastResize(e) {
                mouseMoveAction = SE_RESIZE;
                e.stopPropagation();
            }
            /* southWestResize -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function southWestResize(e) {
                mouseMoveAction = SW_RESIZE;
                e.stopPropagation();
            }
            /* northWestResize -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function northWestResize(e) {
                mouseMoveAction = NW_RESIZE;
                e.stopPropagation();
            }

            /* saveImage - crop and save image
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function saveImage() {

                $scope.imageEditor.progress = true;

                var canvas = null,
                    context = null;

                canvas = document.createElement('canvas');

                // get cropped image
                canvas.width = $scope.crop.width;
                canvas.height = $scope.crop.height;
                context = canvas.getContext('2d');
                context.drawImage(image, -$scope.crop.cropX, -$scope.crop.cropY);

                convertImage(canvas, $scope.saveMode);
            }

            /* convertImage - convert image from canvas to base64 or blob
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function convertImage(canvas, saveMode) {

                // base64
                if (saveMode === 'base64' && canvas.toDataURL) {

                    // compress image
                    var dataURL = canvas.toDataURL('image/jpeg', 0.90),
                        // strip header - uneeded for proper decode to image from base64
                        file = dataURL.replace('data:image/jpeg;base64,', '');

                    // emit save-event
                    $scope.$emit('image-editor:save-image', file);

                // blob
                } else if (canvas.toBlob) {

                    // convert canvas to blob
                    var blob = canvas.toBlob(function(file) {

                        // get file type
                        var fileComponents = $scope.imageSource.split('/'),
                            fileName = fileComponents[fileComponents.length - 1],
                            fileNameComponents = fileName.split('.'),
                            extension = fileComponents[fileNameComponents.length - 1];

                        var fileData = {
                            'file': file,
                            'fileName': fileName,
                            'extension': extension
                        };

                        // emit save-event
                        $scope.$emit('image-editor:save-image', fileData);
                    });

                } else {

                    // emit save-event
                    $scope.$emit('image-editor:save-image', false);
                }
            }


            /* Scope Methods
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            $scope.saveImage = saveImage;
            $scope.hideImageEditor = hideImageEditor;

            $scope.startCropSelection = startCropSelection;
            $scope.moveCropSelection = moveCropSelection;

            // resize methods
            $scope.northResize = northResize;
            $scope.eastResize = eastResize;
            $scope.southResize = southResize;
            $scope.westResize = westResize;
            $scope.northEastResize = northEastResize;
            $scope.southEastResize = southEastResize;
            $scope.southWestResize = southWestResize;
            $scope.northWestResize = northWestResize;
        }
    };
});
