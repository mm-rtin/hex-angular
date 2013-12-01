var App = angular.module('hexAngular');

/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* Masonry Grid Directive -
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
App.directive('masonryGrid', function($rootScope, $q, $timeout, Utilities) {
    'use strict';

    // constants
    var LOAD_SPEED = 500;   // ms in between queue shifts

    return {
        restrict: 'A',
        replace: true,
        scope: true,

        link: function($scope, $element, $attrs) {

            // properties
            var intialized = false,
                queuePaused = false;

            // objects
            var gridItemsQueue = [];

            // functions
            var windowResizedDebounced = windowResized.debounce(250);

            // scope data
            $scope.gridItems = {};

            // jquery elements
            var $masonryGrid = $element.find('.masonry-grid-container');

            // default settings
            $scope.settings = {
                loadSpeed: LOAD_SPEED,
                order: '',
                sortAscending: true,
                gridWidth: 200,
                gutter: 10,
                mode: 'navigate'
            };

            // styles
            $scope.gridItemStyle = {
                'width': $scope.settings.gridWidth - $scope.settings.gutter
            };

            // state
            $scope.state = {
                'loading': false
            };

            initialize();
            createEventListeners();

            /* initialize -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function initialize() {

                // disable transitions for ie
                var isIE = Utilities.isIE();
                if (isIE) {
                    $masonryGrid.addClass('no-transition');
                }

                overrideDefaults();
                initializeIsotope();
            }

            /* overrideDefaults -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function overrideDefaults() {

                // override defaults
                Utilities.extendSettings($scope.settings, $attrs);

                // set grid width
                $scope.gridItemStyle['width'] = $scope.settings.gridWidth - $scope.settings.gutter;

                console.log($scope.settings);
            }

            /* createEventListeners -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function createEventListeners() {

                // add-items
                $(window).resize(function() {
                    windowResizedDebounced();
                });

                // add-items
                $scope.$on('masonry-grid:add-items', function(e, items) {

                    if (items.name === $attrs.gridName) {
                        addItems(items.list);
                    }
                });

                // replace-items
                $scope.$on('masonry-grid:replace-items', function(e, items) {

                    if (items.name === $attrs.gridName) {

                        // reset isotope
                        resetIsotope().then(function() {
                            initializeIsotope();
                            addItems(items.list);
                        });
                    }
                });

                // set-item-active-state
                $scope.$on('masonry-grid:set-item-active-state', function(e, itemProperties) {

                    // set active state
                    if ($scope.gridItems && Object.size($scope.gridItems) > 0 && Object.has($scope.gridItems, itemProperties.id)) {
                        $scope.gridItems[itemProperties.id].active = itemProperties.active;
                    }
                });

                // content-tabs:tab-active - when content-tab directive active state changes check if active and pause if not
                $scope.$on('content-tabs:tab-active', function(e, tabID) {

                    // // pause queue if element is not visible
                    if (Utilities.isElementVisible($element)) {
                        queuePaused = false;

                        $scope.state.loading = true;
                        loadQueuedGridItem();

                        // trigger sort refreshes viewport after being hidden
                        $masonryGrid.isotope({sortBy : 'refresh'});

                    } else {
                        queuePaused = true;
                    }

                });
            }

            /* initializeIsotope - create isotope on element
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function initializeIsotope() {

                $masonryGrid.isotope({
                    itemSelector: '.grid-item',
                    masonry: {
                        columnWidth: $scope.settings.gridWidth
                    },
                    getSortData: {
                        sort: function ($elem) {

                            var sortValue = $elem.attr('data-' + $scope.settings.order);

                            // is number
                            if (!isNaN(parseFloat(sortValue)) && isFinite(sortValue)) {
                                sortValue = parseInt(sortValue, 10);

                            // is date
                            } else {
                                sortValue = parseInt(moment(sortValue).unix(), 10);
                            }

                            return sortValue;
                        }
                    },
                    sortAscending : ($scope.settings.sortAscending ? true : false)
                });
            }

            /* addItems -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function addItems(gridItems) {

                if (gridItems && Object.size(gridItems) > 0) {

                    intialized = true;

                    // add items to end of queue
                    gridItemsQueue.add(gridItems);

                    // start loading from queued grid items
                    if (!$scope.state.loading) {

                        $scope.state.loading = true;
                        loadQueuedGridItem();
                    }
                }
            }

            /* loadQueuedGridItem - load item in sequence
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function loadQueuedGridItem() {

                if (gridItemsQueue.length === 0 || queuePaused) {

                    $rootScope.safeApply(function() {
                        $scope.state.loading = false;
                    });

                    return;
                }

                // remove first item from queue
                var gridItem = gridItemsQueue.shift();

                // grid item with image
                if (gridItem.url) {

                    // iterate image urls
                    var image = new Image();
                    image.src = gridItem.url;

                    // image loaded
                    image.onload = function() {
                        insertQueuedGridItem(gridItem);
                    };
                    // image error
                    image.onerror = function() {
                        insertQueuedGridItem(gridItem);
                    };

                // grid item without image
                } else {
                    insertQueuedGridItem(gridItem);
                }
            }

            /* insertQueuedGridItem -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function insertQueuedGridItem(gridItem) {

                $timeout(function() {

                    // insert grid item
                    insertGridItem(gridItem);

                    // load next grid item
                    loadQueuedGridItem();

                }, $scope.settings.loadSpeed);
            }

            /* insertGridItem - insert item into isotope grid
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function insertGridItem(gridItem) {

                var newGridItem = {};
                newGridItem[gridItem.id] = gridItem;

                // merge local item with grid items
                $rootScope.safeApply(function() {
                    angular.extend($scope.gridItems, newGridItem);
                });

                // insert item into isotope
                addIsotopeItem(gridItem);
            }

            /* addIsotopeItem - append grid items
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function addIsotopeItem(gridItem) {

                var $newGridItem = $element.find('.' + gridItem.id);

                // item appended
                $masonryGrid.isotope('appended', $newGridItem, function() {
                    $masonryGrid.isotope({sortBy : 'refresh'});
                });
            }

            /* addIsotopeItems -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function addIsotopeItems(gridItems) {

                var itemList = [];
                Object.extended(gridItems).each(function(key, item) {
                    itemList.push('.' + item.id);
                });

                var queryString = itemList.join(',');
                var $newGridItems = $element.find(queryString);

                // items appended
                $masonryGrid.isotope('appended', $newGridItems, function() {
                    $masonryGrid.isotope({sortBy : 'refresh'});
                });
            }

            /* windowResized - window size changed
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function windowResized() {

                $timeout(function() {
                    $masonryGrid.isotope({sortBy : 'refresh'});
                }, 200);
            }

            /* resetIsotope - async remove isotope items - clear $scope.gridItem
            @return - promise
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function resetIsotope() {

                var deferred = $q.defer();

                // destroy existing isotope
                $masonryGrid.isotope('remove', $element.find('.grid-item'), function() {

                    deferred.resolve();

                    $rootScope.safeApply(function() {
                        $scope.gridItems = {};
                    });
                });

                if (!intialized) {
                    deferred.resolve();
                }

                return deferred.promise;
            }

            /* selectItem -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function selectItem(itemID, e) {

                if ($scope.settings.mode === 'toggle') {
                    toggleItem(itemID);

                } else {
                    viewItem(itemID);
                }
            }

            /* toggleItem - toggle item
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function toggleItem(itemID) {

                var item = $scope.gridItems[itemID];

                // toggle active state
                item.active = !item.active;

                $scope.$emit('masonry-grid:item-toggled', item);
            }

            /* viewItem - view full image
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function viewItem(itemID) {

                var item = $scope.gridItems[itemID];

                $scope.$emit('masonry-grid:item-clicked', item);
            }

            /* viewImage - view full image
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function viewImage(itemID, e) {

                var item = $scope.gridItems[itemID];

                $rootScope.$broadcast('image-viewer:view-image', item);

                e.preventDefault();
                e.stopPropagation();
            }

            /* Scope Methods
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            $scope.selectItem = selectItem;
            $scope.viewImage = viewImage;
        }
    };
});
