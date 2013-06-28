var App = angular.module('Hexangular');

/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* Content Gallery Directive -
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
App.directive('contentGallery', ['$rootScope', function($rootScope) {

    return {
        restrict: 'A',
        template: '@@include("../../partials/content_gallery.html")',
        replace: false,
        scope: {
            images: '='
        },

        link: function($scope, $element, $attrs) {

            // jquery elements
            var $contentGallery = $element,
                $galleryContainer = $element.find('.gallery-container'),
                $sliderContainer = $element.find('.slider-container');

            // scope data
            $scope.state = {
                'firstImageLoaded': false,
                'currentImageIndex': -1,
                'smallestHeight': 99999
            };

            // wait for images data before intialization
            $scope.$watch('images', function(images, oldValue) {
                initialize();
            });

            /* initialize -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function initialize() {

                createEventHandlers();

                Object.extended($scope.images).each(function(key, image) {
                    loadImage(image);
                });

                console.log($scope.images);
            }


            /* createEventHandlers -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function createEventHandlers() {

            }

            /* loadImage
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function loadImage(image) {

                var loadedImage = new Image();
                loadedImage.src = image.url;

                // on image load
                loadedImage.onload = function() {

                    $rootScope.safeApply(function() {

                        image.width = loadedImage.width;
                        image.height = loadedImage.height;

                        // set smallest height
                        if (image.height < $scope.smallestHeight) {
                            $scope.state.smallestHeight = image.height;
                        }

                        if (!$scope.state.firstImageLoaded) {
                            $scope.state.firstImageLoaded = true;
                            setActiveImage(0);
                        }
                    });
                };
            }

            /* setActiveImage -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function setActiveImage(index) {

                if (index < $scope.images.length) {

                    // var get image object
                    var image = $scope.images[index];

                    $scope.state.currentImageIndex = index;

                    $sliderContainer.css({
                        '-webkit-transform': 'translate3d(' + -$scope.state.currentImageIndex + '%, 0px, 0px)',
                        '-moz-transform': 'translate3d(' + -$scope.state.currentImageIndex + '%, 0px, 0px)',
                        '-ms-transform': 'translate(' + -$scope.state.currentImageIndex + '%, 0px)',
                        '-o-transform': 'translate3d(' + -$scope.state.currentImageIndex + '%, 0px, 0px)',
                        'transform': 'translate3d(' + -$scope.state.currentImageIndex + '%, 0px, 0px)'
                    });

                    // get active slider element
                    var $activeSlider = $sliderContainer.find('.slider-' + index);
                    var activeHeight = $activeSlider.height();

                    // set slider height
                    $galleryContainer.css({
                        'max-height': activeHeight + 'px'
                    });
                }
            }

            /* Scope Methods
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            $scope.setActiveImage = setActiveImage;
        }
    };

}]);
