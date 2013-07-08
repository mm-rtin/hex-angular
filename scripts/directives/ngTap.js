var App = angular.module('Hexangular');

/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* ngTap Directive -
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
App.directive('ngTap', ['$rootScope', function($rootScope) {

    return {
        link: function($scope, $element, $attrs) {

            $element.fastClick(function (e) {
                $scope.$apply($attrs['ngTap']);
            });
        }
    };

}]);
