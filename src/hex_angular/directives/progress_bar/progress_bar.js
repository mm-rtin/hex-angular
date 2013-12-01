var App = angular.module('hex-angular');

/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* Progress Bar Directive -
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
App.directive('progressBar', function($rootScope, $timeout) {
    'use strict';

    return {
        restrict: 'A',
        templateUrl: '/static/partials/hex_angular/progress_bar/progress_bar.html',
        replace: true,
        scope: {
            'active': '=',
            'mode': '@',
        },

        link: function($scope, $element, $attrs) {

            // scope
            $scope.state = {
                show: true
            };

            createEventListeners();

            /* initialize -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function initialize() {

            }

            /* createEventListeners -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function createEventListeners() {

                $scope.$watch('active', function(active, oldValue) {

                    if (!active) {
                        $timeout(function() {
                            $scope.state.show = false;
                        }, 500);

                        $timeout(function() {
                            $scope.state.show = true;
                        }, 1000);
                    }
                });

            }

            /* Scope Methods
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
        }
    };

});
