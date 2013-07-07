var App = angular.module('Hexangular');

/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* Content Gallery Directive -
* Requires Modernizr detect: cssanimations
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
App.directive('contentGallery', ['$rootScope', '$timeout', function($rootScope, $timeout) {

    return {
        restrict: 'A',
        template: '@@include("../../partials/content_gallery.html")',
        replace: false,
        scope: {
            imageList: '=',
            thumbnailList: '='
        },

        link: function($scope, $element, $attrs) {

            // contants
            var DEBOUNCE_TIME = 600,
                GALLERY_HEIGHT = 110,
                SCROLL_MARGIN = 15;

            // properties
            var ctrlModifier = false,
                sliderInTransition = false,
                cssanimations = false,

                currentSlide = null;

            // functions
            var throttledKeydownHandler = keydownHandler.throttle(DEBOUNCE_TIME);

            // jquery elements
            var $contentGallery = $element,
                $galleryContainer = $element.find('.gallery-container'),
                $sliderContainer = $element.find('.slider-container'),
                $activeSlider = null;

            // scope data
            $scope.state = {
                'fullscreen': false,
                'sliderActive': false,
                'slideCount': 0,
                'currentSlideIndex': -1,
                'sliderContainerWidth': 0,
                'sliderWidth': 0
            };

            $scope.sliderContainerStyle = {};
            $scope.sliderStyle = {};

            // wait for imageList data before intialization
            $scope.$watch('imageList', function(imageList, oldValue) {
                initialize();
            });

            /* initialize -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function initialize() {

                createEventHandlers();

                // modernizr detect cssanimations
                if ($('html').hasClass('cssanimations')) {
                    cssanimations = true;
                }

                // calculate container and slider width
                $scope.state.slideCount = $scope.imageList.length;
                $scope.state.sliderContainerWidth = $scope.state.slideCount * 100;
                $scope.state.sliderWidth = 100 / $scope.state.slideCount;

                // apply styles
                $scope.sliderContainerStyle = {
                    'width': $scope.state.sliderContainerWidth + '%'
                };
                $scope.sliderStyle = {
                    'width': $scope.state.sliderWidth + '%'
                };

                // load images
                $scope.imageList.each(function(image, index) {
                    loadImage(image, index);
                });
            }

            /* createEventHandlers -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function createEventHandlers() {

                // window: resized
                $(window).on('resize', function(e) {
                    // set new gallery height
                    setGalleryHeight();
                });

                // window: keyup
                $(window).on('keydown', function(e) {
                    throttledKeydownHandler(e.which);
                });

                // window: keyup
                $(window).on('keyup', function(e) {

                    // reset throttle
                    throttledKeydownHandler = keydownHandler.throttle(DEBOUNCE_TIME);

                    if (e.which === 17) {
                        ctrlModifier = false;
                    }
                });

                // sliderContainer: transitionend
                $sliderContainer.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd msTransitionEnd', function() {
                    sliderInTransition = false;
                });

                // thumbnail-gallery:set-active
                $scope.$on('thumbnail-gallery:set-active', function(e, index) {
                    setActiveSlide(index, false);
                });

                // imageViewer: mousewheel
                $galleryContainer.bind('mousewheel', scrollSlideImage);
            }

            /* keydownHandler
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function keydownHandler(key) {

                if (key === 17) {
                    // reset throttle
                    throttledKeydownHandler = keydownHandler.throttle(DEBOUNCE_TIME);
                    ctrlModifier = true;
                }

                // previous slide
                if (key === 37) {
                    $rootScope.safeApply(function() {
                        if (ctrlModifier) {
                            setActiveSlide(0);
                        } else {
                            previousSlide();
                        }
                    });

                // next slide
                } else if (key === 39) {
                    $rootScope.safeApply(function() {
                        if (ctrlModifier) {
                            setActiveSlide($scope.state.slideCount - 1);
                        } else {
                            nextSlide();
                        }
                    });
                }
            }

            /* loadImage
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function loadImage(image, index) {

                var loadedImage = new Image();
                loadedImage.src = image.url;

                // on image load
                loadedImage.onload = function() {

                    // set image properties
                    image.width = loadedImage.width;
                    image.height = loadedImage.height;
                    image.loaded = true;
                    image.yPos = 0;
                    image.atTop = true;
                    image.atBottom = false;

                    // set active image once first image has loaded
                    if (index === 0) {

                        // wait for image to render on page
                        $timeout(function() {

                            // set slider to active state
                            $scope.state.sliderActive = true;
                            setActiveSlide(0, true);

                        }, 500);
                    }
                };
            }

            /* nextSlide -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function nextSlide() {
                setActiveSlide($scope.state.currentSlideIndex + 1);
            }

            /* previousSlide -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function previousSlide() {
                setActiveSlide($scope.state.currentSlideIndex - 1);
            }

            /* setActiveSlide -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function setActiveSlide(index, emitEvent) {

                // emit event by default
                emitEvent = (typeof emitEvent === 'undefined' || emitEvent) ? true : false;

                // set active if index greater than -1, less than imageList lenght, slider not in transitions and image at index is loaded
                if (index > -1 && index < $scope.imageList.length && !sliderInTransition && $scope.imageList[index].loaded) {

                    if (cssanimations) {
                        // sliderInTransition = true;
                    }

                    // save current index
                    $scope.state.currentSlideIndex = index;

                    // set active slider
                    $activeSlider = $sliderContainer.find('.slider-' + index);

                    // set image object
                    currentSlide = $scope.imageList[index];

                    // calculate translation amount
                    var translateAmount = index * $scope.state.sliderWidth;

                    // apply transform/width styles
                    $scope.sliderContainerStyle = {
                        'width': ($scope.state.slideCount * 100) + '%',
                        '-webkit-transform': 'translate3d(' + -translateAmount + '%, 0px, 0px)',
                        '-moz-transform': 'translate3d(' + -translateAmount + '%, 0px, 0px)',
                        '-ms-transform': 'translate(' + -translateAmount + '%, 0px)',
                        '-o-transform': 'translate3d(' + -translateAmount + '%, 0px, 0px)',
                        'transform': 'translate3d(' + -translateAmount + '%, 0px, 0px)'
                    };

                    setGalleryHeight();

                    // broadcast active selection
                    if (emitEvent) {
                        $scope.$broadcast('content-gallery:set-active', index);
                    }
                }
            }

            /* setGalleryHeight - set gallery max height based on image width/height
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function setGalleryHeight() {

                // get active slider element
                var activeHeight = $activeSlider.height(),
                    windowHeight = $(window).height() - GALLERY_HEIGHT;

                var styles = {
                    'margin-top': 0,
                    'margin-bottom': 0
                };

                if ($scope.state.fullscreen) {

                    if (activeHeight > windowHeight) {
                        activeHeight = windowHeight;
                    }

                    var topMargin = (windowHeight - activeHeight) / 2;

                    styles['margin-top'] = topMargin + 'px';
                    styles['margin-bottom'] = topMargin  + 'px';
                }

                styles['max-height'] = activeHeight + 'px';

                // set slider height
                $galleryContainer.css(styles);

            }

            /* extractDelta - get mouse wheel delta
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function extractDelta(e) {

                if (e.wheelDelta) {
                    return e.wheelDelta;
                }

                if (e.originalEvent.detail) {
                    return e.originalEvent.detail * -40;
                }

                if (e.originalEvent && e.originalEvent.wheelDelta) {
                    return e.originalEvent.wheelDelta;
                }
            }

            /* scrollSlideImage - handle mouse scroll event
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function scrollSlideImage(e) {

                // skip if image not beyond window height
                if (isImageTallerThanWindow() && $scope.state.fullscreen) {
                    var delta = extractDelta(e);

                    // set new scroll position
                    scrollCurrentSlide(delta);

                // reset scroll position to default
                } else {
                    resetScroll();
                }
            }

            /* scrollCurrentSlide - move current slide vertical position
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function scrollCurrentSlide(delta) {

                // get window and image height
                var $image = $activeSlider.find('img'),
                    windowHeight = $(window).height(),
                    imageHeight = $image.height();

                var negativeScrollLimit = windowHeight - imageHeight - SCROLL_MARGIN - GALLERY_HEIGHT;

                $rootScope.safeApply(function() {

                    // add scroll direction to current y position
                    currentSlide.yPos += delta;
                    currentSlide.atBottom = false;
                    currentSlide.atTop = false;

                    // restrict scroll down amount
                    if (currentSlide.yPos < negativeScrollLimit) {
                        currentSlide.yPos = negativeScrollLimit;
                        currentSlide.atBottom = true;
                        currentSlide.atTop = false;
                    }

                    // restrict scroll up amount
                    if (currentSlide.yPos > SCROLL_MARGIN) {
                        currentSlide.yPos = SCROLL_MARGIN;
                        currentSlide.atBottom = false;
                        currentSlide.atTop = true;
                    }
                });

                $activeSlider.css({'margin-top': currentSlide.yPos + 'px'});
            }

            /* isImageTallerThanWindow - return true if image height larger than current window height
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function isImageTallerThanWindow() {

                if ($activeSlider) {

                    var $image = $activeSlider.find('img');

                    var windowHeight = $(window).height();
                    var imageHeight = $image.height();

                    return (imageHeight > windowHeight - GALLERY_HEIGHT);
                }
            }

            /* resetScroll - reset scroll position to either 0 or SCROLL_MARGIN
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function resetScroll() {

                $rootScope.safeApply(function() {

                    if (isImageTallerThanWindow()) {
                        currentSlide.yPos = SCROLL_MARGIN;
                    } else {
                        currentSlide.yPos = 0;
                    }

                    currentSlide.atTop = true;
                    currentSlide.atBottom = false;
                });

                $activeSlider.css({'margin-top': currentSlide.yPos + 'px'});
            }

            /* scrollUp -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function scrollUp(yPosition) {
                scrollCurrentSlide(100);
            }

            /* scrollDown -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function scrollDown(yPosition) {
                scrollCurrentSlide(-100);
            }

            /* enableFullscreen -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function enableFullscreen() {
                $scope.state.fullscreen = true;

                $timeout(function() {
                    setGalleryHeight();
                }, 0);
            }

            /* disableFullscreen -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function disableFullscreen() {
                $scope.state.fullscreen = false;
                $timeout(function() {
                    setGalleryHeight();
                }, 0);
            }

            /* Scope Methods
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            $scope.setActiveSlide = setActiveSlide;
            $scope.nextSlide = nextSlide;
            $scope.previousSlide = previousSlide;
            $scope.scrollUp = scrollUp;
            $scope.scrollDown = scrollDown;
            $scope.isImageTallerThanWindow = isImageTallerThanWindow;
            $scope.enableFullscreen = enableFullscreen;
            $scope.disableFullscreen = disableFullscreen;
        }
    };
}]);
