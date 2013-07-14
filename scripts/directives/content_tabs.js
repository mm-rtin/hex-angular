var App = angular.module('Hexangular');

/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* Content Tabs Directive -
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
App.directive('contentTabs', ['$rootScope', '$timeout', '$q', function($rootScope, $timeout, $q) {

    return {
        restrict: 'A',
        scope: true,

        link: function($scope, $element, $attrs) {

            // contants
            var HEIGHT_PADDING = 24;    // compensate for inacurate height measurement

            // properties

            // objects
            var throttledUpdateViewportHeight = updateViewportHeight.debounce(250);

            // jquery elements
            var $htmlRoot = $('html'),
                $contentTabs = $element,

                $tabsContainer = $element.find('.tabs-container'),
                $tabs = $tabsContainer.find('section'),

                $tabsContentViewport = $element.find('.tabs-content-viewport'),
                $tabsContentContainer = $element.find('.tabs-content-container'),
                $tabsContent = $tabsContentContainer.find('section'),

                $activeTab = null;

            $scope.state = {
                'tabCount': 0,
                'currentTabIndex': 0,
                'viewportWidth': 0,
                'tabsContainerWidth': 0,
                'tabsContentContainerWidth': 0,
                'tabContentWidth': 0
            };

            initialize();

            /* initialize -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function initialize() {

                renderContentTabs();

                createEventHandlers();
            }

             /* createEventHandlers -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function createEventHandlers() {

                // window: resized
                $(window).on('resize', function(e) {

                    updateBoundingBox();
                });

                // element: click
                $tabs.on('click', function(e) {

                    var index = parseInt($(this).data('index'), 10);
                    setActiveTab(index);
                });

                // tabsContent: resized
                $tabsContent.bind('resize', function(e) {
                    updateViewportHeight($scope.state.currentTabIndex);
                });

                // touch-scroller:scrolling-complete
                $scope.$on('touch-scroller:scrolling-complete', function(e, properties) {

                    if (properties.scrollerName === 'tabs-content') {

                        var index = getCurrentIndex(properties.values.left);
                        throttledUpdateViewportHeight(index);
                    }
                });
            }

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

                // initialize touch scroller
                $timeout(function() {

                    updateViewportHeight(0);
                    updateBoundingBox();

                    $rootScope.$broadcast('touch-scroller:initialize', 'tabs-content');
                    $rootScope.$broadcast('touch-scroller:initialize', 'tabs');
                }, 500);
            }

            /* updateBoundingBox -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function updateBoundingBox() {

                $scope.state.viewportWidth = $element.width();
            }

            /* setTabsContentContainerStyle -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function setTabsContentContainerStyle(width, translateAmount) {

                $tabsContentContainer.css({
                    'width': width + '%'
                });
            }

            /* setTabsContainerStyle -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function setTabsContainerStyle(width, translateAmount) {

                $tabsContainer.css({
                    'width': width + 'px'
                });
            }

            /* updateViewportHeight -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function updateViewportHeight(index) {

                var height = getSectionHeight(index);

                $tabsContentViewport.css({'height': height + 'px'});

                $scope.state.currentTabIndex = index;
            }

            /* getCurrentIndex - return index based on scroll position and viewportWidth
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function getCurrentIndex(scrollPosition) {
                return Math.floor(scrollPosition/ $scope.state.viewportWidth);
            }

            /* getSectionHeight -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function getSectionHeight(index) {

                return $tabsContent.eq(index).height() + HEIGHT_PADDING;
            }

            /* setActiveTab -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function setActiveTab(index) {

                // set active if index greater than -1, less than tabCount
                if (index > -1 && index <= $scope.state.tabCount) {

                    // save current index
                    $scope.state.currentTabIndex = index;

                    // set active slider
                    $activeTab = $tabsContent[index];

                    var properties = {
                        'scrollerName': 'tabs-content',
                        'x': $scope.state.viewportWidth * index,
                        'y': 0
                    };

                    $rootScope.$broadcast('touch-scroller:scroll-to', properties);

                    updateViewportHeight(index);
                }
            }

            /* Scope Methods
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            $scope.setActiveTab = setActiveTab;
        }
    };
}]);
