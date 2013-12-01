var App = angular.module('hex-angular');

/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* ngTap Directive -
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
App.directive('ngTap', function($rootScope) {
    'use strict';

    return {
        link: function($scope, $element, $attrs) {

            $element.fastClick(function (e) {
                $scope.$apply($attrs.ngTap);
            });
        }
    };
});
