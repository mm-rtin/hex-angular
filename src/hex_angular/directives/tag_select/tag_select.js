var App = angular.module('hexAngular');

/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* Tag Select Directive -
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
App.directive('tagSelect', function($rootScope) {
    'use strict';

    return {
        restrict: 'A',
        templateUrl: '/static/partials/hex_angular/tag_select/tag_select.html',
        replace: true,
        scope: {
            'tags': '=',
            'selectedTag': '=',
            'placeholder': '@',
            'autocomplete': '@',
            'showList': '@'
        },

        link: function($scope, $element, $attrs) {

            // jquery elements
            var $tagSelect = $element,
                $tagList = $element.find('.tag-list'),
                $filterInput = $element.find('.autocomplete-input');

            // scope data
            $scope.tagSelect = {
                'selectedTags': [],
                'filteredTerms': []
            };

            // scope data
            $scope.state = {
                'active': false,
                'activeTermIndex': 0
            };

            createEventListeners();

            // wait for tags data before intialization
            $scope.$watch('tags', function(tags, oldValue) {

                if (tags && tags.length > 0) {
                    initialize();
                }
            });

            /* initialize -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function initialize() {

                $scope.selectedTag = $scope.placeholder;
                $tagList.perfectScrollbar({wheelSpeed:25, wheelPropagation: true});
            }

            /* createEventListeners -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function createEventListeners() {

                // watch for changes in filteredTerms
                $scope.$watch('tagSelect.filteredTerms', function(filteredTerms, oldValue) {

                    // reset active term index
                    $scope.state.activeTermIndex = 0;
                });

                // element > input: keyup
                $element.on('keyup', 'input', function(e) {

                });

                // input: keydown
                $(document).on('keydown', move);

                // document: click
                $(document).on('click', function(e) {

                    var self = $(e.target);

                    if (self.closest($tagSelect).length === 0) {
                        hideDropdown();
                    }
                });

                // auto-complete:select
                $scope.$on('auto-complete:select', function(e, tagName) {
                    selectTag(tagName);
                });
            }

            /* move - cycle active selection through tags
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function move(e) {


                if (!$scope.state.active) return;

                console.log('move');

                switch(e.keyCode) {
                    case 9:  // tab
                    case 13: // enter
                        selectActiveTag();
                        e.preventDefault();
                        break;

                    case 27: // escape
                        hideDropdown();
                        e.preventDefault();
                        break;

                    case 38: // up arrow
                        e.preventDefault();
                        selectPrevious();
                        break;

                    case 40: // down arrow
                        e.preventDefault();
                        selectNext();
                        break;
                }

                e.stopPropagation();
            }

            /* selectNext - select next filtered term - loop back to 0
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function selectNext() {

                var listLength = getActiveList().length;

                $rootScope.safeApply(function() {

                    if ($scope.state.activeTermIndex < listLength - 1) {
                        $scope.state.activeTermIndex++;
                    } else {
                        $scope.state.activeTermIndex = 0;
                    }
                });
            }

            /* selectPrevious - select previous filtered term - loop to array length
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function selectPrevious() {

                var listLength = getActiveList().length;

                $rootScope.safeApply(function() {

                    if ($scope.state.activeTermIndex > 0) {
                        $scope.state.activeTermIndex--;
                    } else {
                        $scope.state.activeTermIndex = listLength - 1;
                    }
                });
            }

            /* getActiveList -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function getActiveList() {

                var activeList = $scope.tags;

                // filtered
                if ($scope.tagSelect.filteredTerms.length > 0) {
                    activeList = $scope.tagSelect.filteredTerms;
                }

                return activeList;
            }

            /* selectTag -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function selectTag(tagName) {

                tagName = tagName.trim();

                $rootScope.safeApply(function() {
                    $scope.selectedTag = tagName;
                    $scope.selectedTags = $scope.placeholder;
                });

                hideDropdown();
            }

            /* selectActiveTag -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function selectActiveTag() {

                var activeTag = '';

                // filtered
                if ($scope.tagSelect.filteredTerms.length > 0) {
                    activeTag = $scope.tagSelect.filteredTerms[$scope.state.activeTermIndex].replace(/<\/*strong>/gi, '');

                    $scope.$broadcast('auto-complete:clear-search', {});

                // all tags
                } else {
                    activeTag = $scope.tags[$scope.state.activeTermIndex];
                }

                selectTag(activeTag);
            }

            /* removeTag -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function removeTag() {
                $scope.selectedTags = $scope.placeholder;
            }

            /* isActive -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function isActive(tagName) {

                if ($scope.selectedTag === tagName) {
                    return true;
                }

                return false;
            }


            /* toggleDropdown -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function toggleDropdown() {

                if ($scope.state.active) {
                    hideDropdown();
                } else {
                    showDropdown();
                }
            }

            /* showDropdown -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function showDropdown() {

                $rootScope.safeApply(function() {
                    $scope.state.active = true;
                    $scope.state.activeTermIndex = -1;
                });

                $filterInput.val('fewfewfew');
                $filterInput[0].focus();
            }

            /* hideDropdown -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function hideDropdown() {

                $rootScope.safeApply(function() {
                    $scope.state.active = false;
                });
            }

            /* Scope Methods
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            $scope.selectTag = selectTag;
            $scope.selectActiveTag = selectActiveTag;
            $scope.removeTag = removeTag;
            $scope.isActive = isActive;

            $scope.toggleDropdown = toggleDropdown;
            $scope.showDropdown = showDropdown;
            $scope.hideDropdown = hideDropdown;
        }
    };

});
