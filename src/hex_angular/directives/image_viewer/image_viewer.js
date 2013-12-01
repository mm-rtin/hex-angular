var App = angular.module('hexAngular');

/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* Image Viewer Directive -
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
App.directive('imageViewer', function($rootScope) {
    'use strict';

    // constants
    var SCROLL_MARGIN = 15;

    return {
        restrict: 'A',
        templateUrl: '/static/partials/hex_angular/image_viewer/image_viewer.html',
        replace: true,
        scope: {
        },

        link: function($scope, $element, $attrs) {

            // jquery elements
            var $imageViewer = $element,
                $imageSlides = $element.find('.image-slides'),
                $currentSlide = $element.find('.current');

            // properties
            var mousedown = false,
                currentSlide = {
                    'x': 0,
                    'y': 0
                };

            // scope data
            $scope.imageViewer = {
                image: {
                    'url': null,
                    'width': 0,
                    'height': 0
                },
                open: false
            };

            createEventListeners();
            initialize();

            /**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            * initialize -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function initialize() {


                setImageViewerSize();
            }

            /* createEventListeners -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function createEventListeners() {

                // event-name listener
                $scope.$on('image-viewer:view-image', function(e, image) {
                    openImage(image);
                });

                // Slide image: click
                $imageSlides.on('click', '.image', function(e) {
                    e.stopPropagation();
                });

                // document: keyup
                $(document).on('keyup', function(e) {

                    // esc key
                    if (e.which === 27) {
                        closeImage();
                    }
                });

                // window: resize
                $(window).resize(setImageViewerSize);

                // imageViewer: mousewheel
                $element.bind('mousewheel', scrollSlideImage);
            }

            /* setImageViewerSize - handle window resize event
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function setImageViewerSize(e) {

                var imageViewerCSS = {
                    width : $(window).width(),
                    height : window.innerHeight ? window.innerHeight : $(window).height() // fix IOS bug
                };

                $imageViewer.css(imageViewerCSS);

                resetScroll();
            }

            /* scrollSlideImage - handle mouse scroll event
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function scrollSlideImage(e) {

                var $image = $currentSlide.find('img');

                // get window and image height
                var windowHeight = $(window).height();
                var imageHeight = $image.height();

                // skip if image not beyond window height
                if (isImageTallerThanWindow()) {

                    var delta = e.originalEvent.wheelDelta;

                    var negativeScrollLimit = windowHeight - imageHeight - SCROLL_MARGIN;

                    // add scroll direction to current y position
                    currentSlide.y += delta;

                    // restrict scroll down amount
                    if (currentSlide.y < negativeScrollLimit) {
                        currentSlide.y = negativeScrollLimit;
                    }

                    // restrict scroll up amount
                    if (currentSlide.y > SCROLL_MARGIN) {
                        currentSlide.y = SCROLL_MARGIN;
                    }

                    // set new scroll position
                    scrollCurrentSlide(currentSlide.y);

                // reset scroll position to default
                } else {
                    resetScroll();
                }
            }

            /* scrollCurrentSlide - move current slide vertical position
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function scrollCurrentSlide(yPosition) {

                $currentSlide.css({'top': yPosition + 'px'});
            }

            /* isImageTallerThanWindow - return true if image height larger than current window height
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function isImageTallerThanWindow() {

                var $image = $currentSlide.find('img');

                var windowHeight = $(window).height();
                var imageHeight = $image.height();

                return (imageHeight > windowHeight);
            }


            /* resetScroll - reset scroll position to either 0 or SCROLL_MARGIN
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function resetScroll() {

                var scrollPosition = SCROLL_MARGIN;

                if (isImageTallerThanWindow()) {
                    scrollPosition = SCROLL_MARGIN;
                } else {
                    scrollPosition = 0;
                }

                scrollCurrentSlide(scrollPosition);
            }

            /* closeImage -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function closeImage() {

                $('body').removeClass('overflow-hidden');

                $scope.imageViewer.open = false;
                $scope.imageViewer.image.url = null;
            }

            /* openImage -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function openImage(image) {

                $('body').addClass('overflow-hidden');

                loadImage(image.url);
            }

            /* loadImage -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function loadImage(url) {

                var image = new Image();
                image.src = url;

                // on image load
                image.onload = function() {

                    $rootScope.safeApply(function() {

                        $scope.imageViewer.image.width = image.width;
                        $scope.imageViewer.image.height = image.height;

                        $scope.imageViewer.open = true;
                        $scope.imageViewer.image.url = url;

                        // set current slide
                        $currentSlide = $element.find('.current');

                        resetScroll();
                    });
                };
            }

            /**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            * Scope Methods
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            $scope.closeImage = closeImage;
        }
    };
});
