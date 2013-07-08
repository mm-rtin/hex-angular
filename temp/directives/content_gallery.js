var App = angular.module('Hexangular');

/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* Content Gallery Directive -
* Requires Modernizr detect: cssanimations
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
App.directive('contentGallery', ['$rootScope', '$timeout', function($rootScope, $timeout) {

    return {
        restrict: 'A',
        template: '<div class="content-gallery" ng-class="{fullscreen: state.fullscreen, embedded: !state.fullscreen}"><!-- gallery interface --><div class="gallery-interface" ng-style="galleryInterfaceStyle"><!-- zoom --><div class="zoom-button only-icon icon-zoom-out" ng-show="state.fullscreen" ng-tap="disableFullscreen()"></div><div class="zoom-button only-icon icon-zoom-in" ng-show="!state.fullscreen" ng-tap="enableFullscreen()"></div><!-- next slide --><div class="activation-area next" ng-tap="nextSlide()" ng-hide="state.slideCount - 1 == state.currentSlideIndex"><div class="navigation-button next only-icon icon-chevron-right"></div></div><!-- previous slide --><div class="activation-area previous" ng-tap="previousSlide()" ng-hide="state.currentSlideIndex == 0"><div class="navigation-button previous only-icon icon-chevron-left"></div></div><!-- scroll up --><div class="activation-area up" ng-mousedown="scrollUp()" ng-hide="imageList[state.currentSlideIndex].atTop || !isImageTallerThanWindow() || !state.fullscreen"><div class="scroll-button up only-icon icon-chevron-up"></div></div><!-- scroll down --><div class="activation-area down" ng-mousedown="scrollDown()" ng-hide="imageList[state.currentSlideIndex].atBottom || !isImageTallerThanWindow() || !state.fullscreen"><div class="scroll-button down only-icon icon-chevron-down"></div></div></div><div class="gallery-container" ng-class="{active: state.sliderActive}"><!-- slider container --><div class="slider-container" ng-style="sliderContainerStyle"><div class="slider slider-[[ key ]]" ng-style="sliderStyle" ng-class="{active: key == state.currentSlideIndex}" ng-repeat="(key, image) in imageList"><img class="image-content" ng-src="[[ image.url ]]"></div></div></div><!-- directive: thumbnail-gallery --><div thumbnail-gallery thumbnail-list="thumbnailList" width="thumbnailWidth" spacing="4" fullscreen="state.fullscreen"></div></div>',
        replace: false,
        scope: {
            imageList: '=',
            thumbnailList: '=',
            thumbnailWidth: '@',
            thumbnailHeight: '@'
        },

        link: function($scope, $element, $attrs) {

            // contants
            var DEBOUNCE_TIME = 350,
                SCROLL_MARGIN = 15;

            // properties
            var ctrlModifier = false,
                sliderInTransition = false,
                cssanimations = false,
                lastDelta = 0,
                currentYPos = 0,

                windowHeight = 0,
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
            $scope.galleryInterfaceStyle = {};
            $scope.sliderStyle = {};

            // wait for imageList data before intialization
            $scope.$watch('imageList', function(imageList, oldValue) {
                initialize();
            });

            /* initialize -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function initialize() {

                createEventHandlers();

                // set window height
                windowHeight = $(window).height();

                // convert to integer
                $scope.thumbnailHeight = parseInt($scope.thumbnailHeight, 10);
                $scope.thumbnailWidth = parseInt($scope.thumbnailWidth, 10);

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
                $scope.galleryInterfaceStyle = {
                    'bottom': $scope.thumbnailHeight + 'px'
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

                    // update window height
                    windowHeight = $(window).height();

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

                    // ctrl
                    if (e.which === 17) {
                        ctrlModifier = false;

                    // escape
                    } else if (e.which === 27) {

                        $rootScope.safeApply(function() {
                            disableFullscreen();
                        });
                    }
                });

                $contentGallery.hammer().on("drag", function(e) {

                    var delta = e.gesture.deltaY;

                    currentYPos += delta - lastDelta;

                    $activeSlider.css({'margin-top': currentYPos + 'px'});

                    lastDelta = delta;

                    e.preventDefault();
                    e.gesture.preventDefault();
                });

                $contentGallery.hammer().on("dragend", function(e) {
                    lastDelta = 0;
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
                $contentGallery.bind('mousewheel', scrollSlideImage);
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

                lastDelta = 0;
                currentYPos = 0;

                // emit event by default
                emitEvent = (typeof emitEvent === 'undefined' || emitEvent) ? true : false;

                // set active if index greater than -1, less than imageList length, slider not in transitions and image at index is loaded
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
                var activeHeight = $activeSlider.height();

                var galleryStyles = {
                    'padding-top': 0
                };

                // fullscreen
                if ($scope.state.fullscreen) {

                    var fullScreenWindowHeight = windowHeight - $scope.thumbnailHeight;

                    var topPadding = 0;
                    if (!isImageTallerThanWindow()) {
                        topPadding = (fullScreenWindowHeight - activeHeight) / 2;
                    }

                    // gallery styles
                    galleryStyles['padding-top'] = topPadding + 'px';
                    galleryStyles['height'] = fullScreenWindowHeight + 'px';

                // embedded
                } else {

                    // gallery styles
                    galleryStyles['height'] = activeHeight + 'px';
                }

                // set styles
                $galleryContainer.css(galleryStyles);

                resetScroll();
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
                if ($scope.state.fullscreen) {
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

                if (!isImageTallerThanWindow()) return;

                // get window and image height
                var $image = $activeSlider.find('img'),
                    imageHeight = $image.height();

                var negativeScrollLimit = windowHeight - imageHeight - SCROLL_MARGIN - $scope.thumbnailHeight;

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
                    if (currentSlide.yPos > 0) {
                        currentSlide.yPos = 0;
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

                    var imageHeight = $image.height();

                    return (imageHeight > windowHeight - $scope.thumbnailHeight);
                }
            }

            /* resetScroll - reset scroll position to either 0 or SCROLL_MARGIN
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function resetScroll() {

                $rootScope.safeApply(function() {

                    currentSlide.yPos = 0;

                    currentSlide.atTop = true;
                    currentSlide.atBottom = false;
                });

                $activeSlider.css({'margin-top': currentSlide.yPos + 'px'});
            }

            /* scrollUp -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function scrollUp() {
                scrollCurrentSlide(100);
            }

            /* scrollDown -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function scrollDown() {
                scrollCurrentSlide(-100);
            }

            /* enableFullscreen -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function enableFullscreen() {

                $('body').addClass('overflow-hidden');
                $scope.state.fullscreen = true;

                $timeout(function() {
                    setGalleryHeight();
                }, 0);
            }

            /* disableFullscreen -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function disableFullscreen() {

                $('body').removeClass('overflow-hidden');
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
