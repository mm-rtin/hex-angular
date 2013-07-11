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
                });

                // content gallery: drag
                $tabsContainer.hammer().on('drag', function(e) {

                    console.log(e.gesture);

                    var delta = e.gesture.deltaX;

                    dragTabContainer(delta);
                });

                // content gallery: drag end
                $tabsContainer.hammer().on('dragend', function(e) {
                    lastDelta = 0;
                });

                // content gallery: tap
                $tabsContainer.hammer().on('tap', function(e) {

                });

                // content gallery: swipeleft
                $contentTabs.hammer({'swipe_velocity': SWIPE_VELOCITY}).on('swipeleft', function(e) {

                    $rootScope.safeApply(function() {
                        setActiveTab($scope.state.currentTabIndex + 1);
                    });
                });

                // content gallery: swiperight
                $contentTabs.hammer({'swipe_velocity': SWIPE_VELOCITY}).on('swiperight', function(e) {
                });

                // sliderContainer: transitionend
                $contentTabs.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd msTransitionEnd', function() {

                });
            }

            /* renderContentTabs -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function renderContentTabs() {

                createEventHandlers();

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
            }

            /* setTabsContentContainerStyle -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function setTabsContentContainerStyle(width, translateAmount) {

                $tabsContentContainer.css({
                    'width': width + '%',
                    '-webkit-transform': 'translate3d(' + -translateAmount + '%, 0px, 0px)',
                    '-moz-transform': 'translate3d(' + -translateAmount + '%, 0px, 0px)',
                    '-ms-transform': 'translate(' + -translateAmount + '%, 0px)',
                    '-o-transform': 'translate3d(' + -translateAmount + '%, 0px, 0px)',
                    'transform': 'translate3d(' + -translateAmount + '%, 0px, 0px)'
                });
            }


            /* setTabsContainerStyle -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function setTabsContainerStyle(width, translateAmount) {

                $tabsContainer.css({
                    'width': width + 'px',
                    '-webkit-transform': 'translate3d(' + translateAmount + 'px, 0px, 0px)',
                    '-moz-transform': 'translate3d(' + translateAmount + 'px, 0px, 0px)',
                    '-ms-transform': 'translate(' + translateAmount + 'px, 0px)',
                    '-o-transform': 'translate3d(' + translateAmount + 'px, 0px, 0px)',
                    'transform': 'translate3d(' + translateAmount + 'px, 0px, 0px)'
                });
            }

            /* dragTabContainer -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function dragTabContainer(delta) {

                var tabsContainerWidth = $contentTabs.width();
                var negativeLimit = 500;

                tabContainerPosition += delta - lastDelta;

                console.log(delta, tabContainerPosition);

                tabContainerAtStart = false;
                tabContainerAtEnd = false;

                // restrict scroll down amount
                // if (tabContainerPosition <= negativeLimit) {
                //     tabContainerPosition = negativeLimit;
                //     tabContainerAtStart = true;
                //     tabContainerAtEnd = false;
                // }

                // // restrict scroll up amount
                // if (tabContainerPosition >= 0) {
                //     tabContainerPosition = 0;
                //     tabContainerAtStart = false;
                //     tabContainerAtEnd = true;
                // }

                lastDelta = delta;

                setTabsContainerStyle($scope.state.tabsContainerWidth, tabContainerPosition);
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
