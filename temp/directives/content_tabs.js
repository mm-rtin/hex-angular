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
            var TAB_WIDTH_ERROR_MARGIN = 5;

            // jquery elements
            var $htmlRoot = $('html'),
                $contentTabs = $element,

                // tabs
                $tabsContainer = $element.find('.tabs-container'),
                $tabs = $tabsContainer.find('section'),

                // tab content
                $tabsContentViewport = $element.find('.tabs-content-viewport'),
                $tabsContentContainer = $element.find('.tabs-content-container'),
                $tabsContent = $tabsContentContainer.find('section'),

                $activeTab = null;
                $activeContent = null;

            $scope.state = {
                'tabCount': 0,
                'currentTabIndex': 0
            };

            initialize();

            /* initialize -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function initialize() {

                renderContentTabs();
                setActiveTab(0);
                createEventHandlers();
            }

             /* createEventHandlers -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function createEventHandlers() {

                // element: click
                $tabs.on('click', function(e) {

                    var index = parseInt($(this).index(), 10);
                    setActiveTab(index);
                });
            }

            /* renderContentTabs -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function renderContentTabs() {

                // calculate tab content widths
                $scope.state.tabCount = $tabsContent.length;

                var tabsContainerWidth = 0;

                // calculate tab widths
                $.each($tabs, function(index, tab) {
                    tabsContainerWidth += $(tab).width() + TAB_WIDTH_ERROR_MARGIN;
                });

                // update tabs container style
                setTabsContainerStyle(tabsContainerWidth, 0);

                // initialize touch scroller on tabs
                $timeout(function() {
                    $rootScope.$broadcast('touch-scroller:initialize', 'tabs');
                }, 500);
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
                if (index > -1 && index <= $scope.state.tabCount) {

                    // save current index
                    $scope.state.currentTabIndex = index;

                    if ($activeTab && $activeContent) {
                        // remove previous active class
                        $activeTab.removeClass('active');
                        $activeContent.removeClass('active');
                    }

                    // set active slider
                    $activeTab = $tabs.eq(index);
                    $activeContent = $tabsContent.eq(index);

                    // add active class
                    $activeTab.addClass('active');
                    $activeContent.addClass('active');
                }
            }

            /* Scope Methods
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            $scope.setActiveTab = setActiveTab;
        }
    };
}]);
