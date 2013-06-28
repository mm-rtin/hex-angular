var App = angular.module('Hexangular');

/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* Auto Complete Directive -
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
App.directive('autoComplete', ['$rootScope', function($rootScope) {

    return {
        restrict: 'A',
        template: '@@include("../../partials/auto_complete.html")',
        replace: true,
        scope: {
            terms: '=',
            filteredTerms: '=',
            mode: '@',
            eventName: '@'
        },

        link: function($scope, $element, $attrs) {

            // jquery elements
            var $input = $element.find('input');

            // properties
            var active = false,
                suppressKeyPressRepeat = false;

            // scope data
            $scope.state = {
                'activeTermIndex': 0
            };

            // wait for tags data before intialization
            $scope.$watch('terms', function(property, oldValue) {
                initialize();
            });

            /* initialize -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function initialize() {

                createEventHandlers();
            }


            /* createEventHandlers -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function createEventHandlers() {

                // input: keydown
                $input.on('keydown', keyDown);

                // input: keyup
                $input.on('keyup', keyUp);
            }

            /* filterTerms - return filtered terms with term highlighted
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function filterTerms(searchString) {

                active = false;

                // get filtered results
                var filteredResults = search(searchString),
                    filteredTerms = [];

                if (filteredResults.length > 0) {

                    active = true;

                    // highlight search term within filtered results
                    filteredResults.each(function(term, i) {

                        filteredResults[i] = highlighter(term, searchString);
                    });
                }

                $rootScope.safeApply(function() {
                    $scope.filteredTerms = filteredResults;
                    $scope.state.activeTermIndex = 0;
                });
            }

            /* search - return array of filtered results based on search string
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function search(searchString) {

                var filteredResults = [];

                if (searchString.trim() !== '') {

                    searchString = searchString.toLowerCase();

                    // use jquery grep to return filtered array results
                    filteredResults = $.grep($scope.terms, function(term, i) {
                        return ~term.toLowerCase().indexOf(searchString);
                    });
                }

                return filteredResults;
            }

            /* highlighter - add strong tags around search string within terms
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function highlighter(term, searchString) {

                searchString = searchString.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
                return term.replace(new RegExp('(' + searchString + ')', 'ig'), function ($1, match) {
                    return '<strong>' + match + '</strong>';
                });
            }

            /* keyDown - cycle active selections
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function keyDown(e) {

                // [40,38,9,13,27]
                move(e);
            }

            /* keyUp - filter terms if keycode meet requirements
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function keyUp(e) {

                switch(e.keyCode) {
                    case 40: // down arrow
                    case 38: // up arrow
                    case 16: // shift
                    case 17: // ctrl
                    case 18: // alt
                        break;

                    case 9:  // tab
                    case 13: // enter
                        break;

                    case 27: // escape
                        if (!active) {
                            return;
                        }
                        hide();
                        break;

                    default:
                        filterTerms($input.val());
                }
                e.stopPropagation();
                e.preventDefault();
            }

            /* move - cycle active selection through filtered terms
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function move(e) {

                if (!active) {
                    return;
                }

                switch(e.keyCode) {
                    case 9:  // tab
                    case 13: // enter
                        if (!active) {
                            return;
                        }
                        selectTerm();
                        e.preventDefault();
                        break;

                    case 27: // escape
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
            function selectNext(e) {

                $rootScope.safeApply(function() {

                    if ($scope.state.activeTermIndex < $scope.filteredTerms.length - 1) {
                        $scope.state.activeTermIndex++;
                    } else {
                        $scope.state.activeTermIndex = 0;
                    }
                });
            }

            /* selectPrevious - select previous filtered term - loop to array length
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function selectPrevious(e) {

                $rootScope.safeApply(function() {

                    if ($scope.state.activeTermIndex > 0) {
                        $scope.state.activeTermIndex--;
                    } else {
                        $scope.state.activeTermIndex = $scope.filteredTerms.length - 1;
                    }
                });
            }

            /* setActive -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function setActive(key) {

                $scope.state.activeTermIndex = key;
            }

            /* selectTerm - select a filtered term
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function selectTerm() {

                // get filtered term and remove strong tags
                var activeTerm = $scope.filteredTerms[$scope.state.activeTermIndex].replace(/<\/*strong>/gi, '');

                // broadcast event
                if ($scope.mode === 'event') {
                    $input.val('');
                    $rootScope.$broadcast($scope.eventName, activeTerm);

                // update input value
                } else {
                    $input.val(activeTerm);
                }

                hide();
            }

            /* hide - clear filtered terms
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function hide(e) {

                active = false;

                $rootScope.safeApply(function() {
                    $scope.filteredTerms = [];
                });
            }

            /* Scope Methods
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            $scope.setActive = setActive;
            $scope.selectTerm = selectTerm;
        }
    };

}]);
