var App = angular.module('Hexangular');

/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* Touch Scroller Directive -
* Requires Modernizr detect: cssanimations, csstransforms, csstransforms3d
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
App.directive('touchScroller', ['$rootScope', '$timeout', function($rootScope, $timeout) {

    return {
        restrict: 'A',
        scope: true,

        link: function($scope, $element, $attrs) {

            // contants

            // properties
            var cssanimations = false,
                csstransforms = false,
                csstransforms3d = false,

                touchStart = null,
                touchExceeded = false,
                mousedown = false;

            // objects
            var scroller = null;

            // jquery elements
            var $htmlRoot = $('html'),
                $viewPort = null,
                $contentContainer = null;

            $scope.state = {
            };

            initialize();

            /* initialize -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function initialize() {

                // modernizr detect cssanimations
                if ($htmlRoot.hasClass('cssanimations')) {
                    cssanimations = true;
                }
                // modernizr detect csstransforms
                if ($htmlRoot.hasClass('csstransforms')) {
                    csstransforms = true;
                }
                // modernizr detect csstransforms3d
                if ($htmlRoot.hasClass('csstransforms3d')) {
                    csstransforms3d = true;
                }

                // event: touch-scroller:initialize
                $scope.$on('touch-scroller:initialize', function(e, scrollerName) {

                    intializeScroller(scrollerName);
                });

                // event: touch-scroller:scroll-to
                $scope.$on('touch-scroller:scroll-to', function(e, properties) {

                    scrollerScrollTo(properties.scrollerName, properties.x, properties.y);
                });
            }

            /* intializeScroller -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function intializeScroller(scrollerName) {

                if ($attrs.touchScroller === scrollerName) {

                    // set jquery elements
                    $viewPort = $($attrs.viewPort);
                    $contentContainer = $($attrs.contentContainer);

                    // Initialize Scroller
                    scroller = new Scroller(transformContent, {
                        scrollingX: ($attrs.scrollingX && $attrs.scrollingX === 'true') ? true : false,
                        scrollingY: ($attrs.scrollingY && $attrs.scrollingY === 'true') ? true : false,
                        paging: ($attrs.paging && $attrs.paging === 'true') ? true : false,
                        locking: ($attrs.locking && $attrs.locking === 'true') ? true : false,
                        bouncing: ($attrs.bouncing && $attrs.bouncing === 'true') ? true : false,
                        animating: ($attrs.animating && $attrs.animating === 'true') ? true : false,
                        scrollingComplete: scrollingComplete
                    });

                    updateBoundingBox(true);

                    createEventHandlers();
                }
            }

            /* createEventHandlers -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function createEventHandlers() {

                // window: resized
                $(window).on('resize', function(e) {

                    updateBoundingBox(false);
                });

                /* mobile touch events */
                if ('ontouchstart' in window && $attrs.touch === 'true') {

                    // event: touchstart
                    $viewPort[0].addEventListener("touchstart", function(e) {

                        if (mousedown) return;

                        touchStart = touchEnd = e.touches[0].pageX;

                        touchExceeded = false;
                        scroller.doTouchStart(e.touches, e.timeStamp);
                    }, false);

                    // event: touchmove
                    $viewPort[0].addEventListener("touchmove", function(e) {

                        if (mousedown) return;

                        touchEnd = e.touches[0].pageX;

                        // get vector instead of X translation


                        // enable horizontal scrolling if horizontal distance greater than 15
                        if(touchExceeded || touchStart - touchEnd > 15 || touchEnd - touchStart > 15) {

                            // prevent vertical scrolling
                            e.preventDefault();

                            touchExceeded = true;
                            scroller.doTouchMove(e.touches, e.timeStamp);
                        }
                    }, false);

                    // event: touchend
                    $viewPort[0].addEventListener("touchend", function(e) {
                        scroller.doTouchEnd(e.timeStamp);
                    }, false);
                }
            }

            /* transformContent - create render function
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            var transformContent = (function(global) {

                var docStyle = document.documentElement.style;

                // get vendor prefix
                var vendorPrefix = '';
                if (global.opera && Object.prototype.toString.call(opera) === '[object Opera]') {
                    vendorPrefix = 'O';

                } else if ('MozAppearance' in docStyle) {
                    vendorPrefix = 'Moz';

                } else if ('WebkitAppearance' in docStyle) {
                    vendorPrefix = 'Webkit';

                } else if (typeof navigator.cpuClass === 'string') {
                    vendorPrefix = 'ms';
                }

                var transformProperty = vendorPrefix + "Transform";

                // return render function

                // 3d transform
                if (csstransforms3d) {

                    return function(left, top, zoom) {
                        $contentContainer[0].style[transformProperty] = 'translate3d(' + (-left) + 'px,' + (-top) + 'px,0) scale(' + zoom + ')';
                    };

                // 2d transform
                } else if (csstransforms) {

                    return function(left, top, zoom) {
                        $contentContainer[0].style[transformProperty] = 'translate(' + (-left) + 'px,' + (-top) + 'px) scale(' + zoom + ')';
                    };

                // no transforms
                } else {

                    return function(left, top, zoom) {
                        $contentContainer[0].style.marginLeft = left ? (-left/zoom) + 'px' : '';
                        $contentContainer[0].style.marginTop = top ? (-top/zoom) + 'px' : '';
                        $contentContainer[0].style.zoom = zoom || '';
                    };
                }

            })(window);


            /* scrollerScrollTo -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function scrollerScrollTo(scrollerName, x, y) {

                if ($attrs.touchScroller === scrollerName) {

                    scroller.scrollTo(x, y, false);
                }
            }

            /* scrollingComplete -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function scrollingComplete() {

                var properties = {
                    'values': scroller.getValues(),
                    'scrollerName': $attrs.touchScroller
                };

                $rootScope.$broadcast('touch-scroller:scrolling-complete', properties);
            }

            /* updateBoundingBox -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function updateBoundingBox(updatePosition) {

                var container = $viewPort[0];
                var content = $contentContainer[0];

                // Setup Scroller
                var rect = container.getBoundingClientRect();

                if (updatePosition) {
                    scroller.setPosition(rect.left+container.clientLeft, rect.top+container.clientTop);
                }

                scroller.setDimensions(container.clientWidth, container.clientHeight, content.offsetWidth, content.offsetHeight);
            }
        }
    };
}]);
