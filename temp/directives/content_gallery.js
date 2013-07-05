var App = angular.module('Hexangular');

/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* Content Gallery Directive -
* Requires Modernizr detect: cssanimations
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
App.directive('contentGallery', ['$rootScope', '$timeout', function($rootScope, $timeout) {

    return {
        restrict: 'A',
        template: '<div class="content-gallery"><div class="gallery-container" ng-class="{active: state.sliderActive}"><div class="slider-container" ng-style="sliderContainerStyle"><div class="slider slider-[[ key ]]" ng-style="sliderStyle" ng-class="{active: key == state.currentImageIndex}" ng-repeat="(key, image) in imageList" ng-click="setActiveImage(key + 1)"><img class="image-content" ng-src="[[ image.url ]]"></div></div></div><div thumbnail-gallery thumbnail-list="thumbnailList" width="180" spacing="5"></div></div>',
        replace: false,
        scope: {
            imageList: '=',
            thumbnailList: '='
        },

        link: function($scope, $element, $attrs) {

            // properties
            var sliderInTransition = false,
                slideCount = 0,
                cssanimations = false;

            // jquery elements
            var $contentGallery = $element,
                $galleryContainer = $element.find('.gallery-container'),
                $sliderContainer = $element.find('.slider-container'),
                $activeSlider = null;

            // scope data
            $scope.state = {
                'sliderActive': false,
                'currentImageIndex': -1,
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
                slideCount = $scope.imageList.length;
                $scope.state.sliderContainerWidth = slideCount * 100;
                $scope.state.sliderWidth = 100 / slideCount;

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

                // sliderContainer: transitionend
                $sliderContainer.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd msTransitionEnd', function() {
                    sliderInTransition = false;
                });

                // thumbnail-gallery:set-active
                $scope.$on('thumbnail-gallery:set-active', function(e, index) {
                    setActiveImage(index, false);
                });
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

                    // set active image once first image has loaded
                    if (index === 0) {

                        // wait for image to render on page
                        $timeout(function() {

                            // set slider to active state
                            $scope.state.sliderActive = true;
                            setActiveImage(0, false);

                        }, 500);
                    }
                };
            }

            /* setActiveImage -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function setActiveImage(index, emitEvent) {

                // emit event by default
                emitEvent = (typeof emitEvent === 'undefined') ? true : false;

                // set active if index less than imageList lenght, slider not in transitions and image at index is loaded
                if (index < $scope.imageList.length && !sliderInTransition && $scope.imageList[index].loaded) {

                    if (cssanimations) {
                        sliderInTransition = true;
                    }

                    // save current index
                    $scope.state.currentImageIndex = index;

                    // set active slider
                    $activeSlider = $sliderContainer.find('.slider-' + index);

                    // var get image object
                    var image = $scope.imageList[index];

                    // calculate translation amount
                    var translateAmount = index * $scope.state.sliderWidth;

                    // apply transform/width styles
                    $scope.sliderContainerStyle = {
                        'width': (slideCount * 100) + '%',
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

                // set slider height
                $galleryContainer.css({
                    'max-height': activeHeight + 'px'
                });
            }

            /* Scope Methods
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            $scope.setActiveImage = setActiveImage;
        }
    };

}]);
