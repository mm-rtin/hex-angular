var App = angular.module('app');

/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* HomeController -
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
App.controller('HomeController', function($rootScope, $scope, $http, $routeParams, $location) {
    'use strict';

    // scope
    $scope.state = {
    };

    initialize();

    /* getItems -
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    function initialize() {

        console.log('initialize home controller');
        createEventHandlers();
    }

    /* createEventHandlers -
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    function createEventHandlers() {

    }
});