var App = angular.module('Hexangular');

/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* Content Tabs Directive -
* Requires Modernizr detect: cssanimations
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
App.directive('contentTabs', ['$rootScope', '$timeout', '$q', function($rootScope, $timeout, $q) {

    return {
        restrict: 'A',
        template: '@@include("../../partials/content_tabs.html")',
        replace: false,
        transclude: true,
        scope: {
        },

        link: function($scope, $element, $attrs) {

            // contants
            var SWIPE_VELOCITY = 0.4;

            // properties
            var windowWidth = 0,
                cssanimations = false,
                lastDelta = 0,
                tabContainerPosition = 0,
                tabContainerAtStart = false,
                tabContainerAtEnd = false;

            // objects
            var scroller = null;

            // jquery elements
            var $htmlRoot = $('html'),
                $contentTabs = $element,

                $tabsContainer = $element.find('.tabs-container'),
                $tabs = $tabsContainer.find('section'),

                $tabsContentContainer = $element.find('.tabs-content-container');
                $tabsContent = $tabsContentContainer.find('section'),

                $activeTab = null;

            $scope.state = {
                'tabCount': 0,
                'currentTabIndex': 0,
                'tabsContainerWidth': 0,
                'tabsContentContainerWidth': 0,
                'tabContentWidth': 0
            };

            initialize();

            /* initialize -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function initialize() {

                // modernizr detect cssanimations
                if ($htmlRoot.hasClass('cssanimations')) {
                    cssanimations = true;
                }

                renderContentTabs();
            }

             /* createEventHandlers -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function createEventHandlers() {

                // window: resized
                $(window).on('resize', function(e) {

                    // update window height
                    windowWidth = $(window).width();

                    updateBoundingBox(false);
                });


                if ('ontouchstart' in window) {

                    $contentTabs[0].addEventListener("touchstart", function(e) {

                        // Don't react if initial down happens on a form element
                        if (e.target.tagName.match(/input|textarea|select/i)) {
                            return;
                        }

                        scroller.doTouchStart(e.touches, e.timeStamp);
                        e.preventDefault();
                    }, false);

                    document.addEventListener("touchmove", function(e) {
                        scroller.doTouchMove(e.touches, e.timeStamp);
                    }, false);

                    document.addEventListener("touchend", function(e) {
                        scroller.doTouchEnd(e.timeStamp);
                    }, false);

                } else {

                    var mousedown = false;

                    $contentTabs[0].addEventListener("mousedown", function(e) {
                        // Don't react if initial down happens on a form element
                        if (e.target.tagName.match(/input|textarea|select/i)) {
                            return;
                        }

                        scroller.doTouchStart([{
                            pageX: e.pageX,
                            pageY: e.pageY
                        }], e.timeStamp);

                        mousedown = true;
                    }, false);

                    document.addEventListener("mousemove", function(e) {
                        if (!mousedown) {
                            return;
                        }

                        scroller.doTouchMove([{
                            pageX: e.pageX,
                            pageY: e.pageY
                        }], e.timeStamp);

                        mousedown = true;
                    }, false);

                    document.addEventListener("mouseup", function(e) {
                        if (!mousedown) {
                            return;
                        }

                        scroller.doTouchEnd(e.timeStamp);

                        mousedown = false;
                    }, false);

                }
            }


            /* DOM-based rendering (Uses 3D when available, falls back on margin when transform not available) */
            var render = (function(global) {

                var docStyle = document.documentElement.style;

                var engine;
                if (global.opera && Object.prototype.toString.call(opera) === '[object Opera]') {
                    engine = 'presto';
                } else if ('MozAppearance' in docStyle) {
                    engine = 'gecko';
                } else if ('WebkitAppearance' in docStyle) {
                    engine = 'webkit';
                } else if (typeof navigator.cpuClass === 'string') {
                    engine = 'trident';
                }

                var vendorPrefix = {
                    trident: 'ms',
                    gecko: 'Moz',
                    webkit: 'Webkit',
                    presto: 'O'
                }[engine];

                var helperElem = document.createElement("div");
                var undef;

                var perspectiveProperty = vendorPrefix + "Perspective";
                var transformProperty = vendorPrefix + "Transform";

                if (helperElem.style[perspectiveProperty] !== undef) {

                    return function(left, top, zoom) {
                        $tabsContentContainer[0].style[transformProperty] = 'translate3d(' + (-left) + 'px,' + (-top) + 'px,0) scale(' + zoom + ')';
                    };

                } else if (helperElem.style[transformProperty] !== undef) {

                    return function(left, top, zoom) {
                        $tabsContentContainer[0].style[transformProperty] = 'translate(' + (-left) + 'px,' + (-top) + 'px) scale(' + zoom + ')';
                    };

                } else {

                    return function(left, top, zoom) {
                        $tabsContentContainer[0].style.marginLeft = left ? (-left/zoom) + 'px' : '';
                        $tabsContentContainer[0].style.marginTop = top ? (-top/zoom) + 'px' : '';
                        $tabsContentContainer[0].style.zoom = zoom || '';
                    };

                }
            })(window);


            /* renderContentTabs -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function renderContentTabs() {

                // calculate tab content widths
                $scope.state.tabCount = $tabsContent.length;
                $scope.state.tabsContentContainerWidth = $scope.state.tabCount * 100;
                $scope.state.tabContentWidth = 100 / $scope.state.tabCount;

                var tabsContainerWidth = 0;

                // calculate tab widths
                $.each($tabs, function(index, tab) {
                    tabsContainerWidth += $(tab).width();
                });

                $scope.state.tabsContainerWidth = tabsContainerWidth;

                setTabsContentContainerStyle($scope.state.tabsContentContainerWidth, 0);
                setTabsContainerStyle($scope.state.tabsContainerWidth, 0);

                $tabsContent.css({
                    'width': $scope.state.tabContentWidth + '%'
                });


                setTimeout(function() {

                    // Initialize Scroller
                    scroller = new Scroller(render, {
                        scrollingY: false,
                        paging: true,
                        bouncing: false
                    });

                    updateBoundingBox(true);

                    createEventHandlers();
                }, 1000);
            }

            /* setTabsContentContainerStyle -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function setTabsContentContainerStyle(width, translateAmount) {

                $tabsContentContainer.css({
                    'width': width + '%'
                });
            }

            function updateBoundingBox(updatePosition) {

                var container = $contentTabs[0];
                var content = $tabsContentContainer[0];

                // Setup Scroller
                var rect = container.getBoundingClientRect();

                if (updatePosition) {
                    scroller.setPosition(rect.left+container.clientLeft, rect.top+container.clientTop);
                }

                scroller.setDimensions(container.clientWidth, container.clientHeight, content.offsetWidth, content.offsetHeight);
                scroller.setSnapSize($($tabsContent[0]).width(), 100);
            }

            /* setTabsContainerStyle -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function setTabsContainerStyle(width, translateAmount) {

                $tabsContainer.css({
                    'width': width + 'px'
                });
            }

            /* setActiveTab -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function setActiveTab(index) {

                // set active if index greater than -1, less than tabCount
                if (index > -1 && index < $scope.state.tabCount) {

                    if (cssanimations) {
                        sliderInTransition = true;
                    }

                    // save current index
                    $scope.state.currentTabIndex = index;

                    // set active slider
                    $activeTab = $tabsContent[index];

                    // calculate translation amount
                    var translateAmount = index * $scope.state.tabContentWidth;

                    setTabsContentContainerStyle($scope.state.tabsContentContainerWidth, translateAmount);
                }
            }

            /* Scope Methods
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            $scope.setActiveTab = setActiveTab;
        }
    };
}]);
