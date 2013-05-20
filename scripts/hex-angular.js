(function (window, $, angular) {
    'use strict';

    /**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    * Document Ready -
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    $(document).ready(function() {

    });

    /**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    * Angular App
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    var App = angular.module('Hexangular', ['ui.keypress', 'ui.event']).
    /**
     * "if" filter
     * Simple filter useful for conditionally applying CSS classes and decouple
     * view from controller
     */
    filter('if', function() {
      return function(input, value) {
        if (typeof(input) === 'string') {
          input = [input, ''];
        }
        return value? input[0] : input[1];
      };
    });

    App.config(['$locationProvider', '$interpolateProvider', function($location, $interpolateProvider) {
        $location.html5Mode(true);
    }]);


})(this, jQuery, angular);
