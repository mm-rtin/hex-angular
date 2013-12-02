(function (window, $, angular) {
    'use strict';

    /* Document Ready -
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    $(document).ready(function() {

    });

    /* Angular App
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    var App = angular.module('app',
        [
            // angular modules
            'ngCookies',
            'ngRoute',
            'ngSanitize',
            'ngTouch',
            'ngAnimate',

            // hexAngular libray
            'hexAngular'

            // 'ui.router.state',
            // 'loadingBar',
        ]);

    App.config(['$locationProvider', '$interpolateProvider', function($location, $interpolateProvider) {
        // $location.html5Mode(true);

        $interpolateProvider.startSymbol('[[');
        $interpolateProvider.endSymbol(']]');
    }]);


})(this, jQuery, angular);
