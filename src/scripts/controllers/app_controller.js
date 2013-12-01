var App = angular.module('overmind');

/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* Overmind Controller - main site controller
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
App.controller('OvermindController', function($rootScope, $scope, $http, $routeParams, $location, User) {
    'use strict';

    // scope
    $scope.state = {
        'showImagePanel': false,
        'homePage': false
    };
    $scope.overmindData = {};

    initialize();

    /* getItems -
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    function initialize() {

        // check user logged in
        if (!User.isUserLoggedIn()) {

            // return to home page
            $location.url('/');
        }

        createEventHandlers();
    }

    /* createEventHandlers -
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    function createEventHandlers() {

        $scope.$on('image-editor:enabled', function(e, data) {
            $scope.state.showImagePanel = true;
        });

        $scope.$on('image-editor:disabled', function(e, data) {
            $scope.state.showImagePanel = false;
        });

        $scope.$on('$routeChangeSuccess', function (scope, next, current) {

            if ($location.path() == '/') {
                $scope.state.homePage = true;
            } else {
                $scope.state.homePage = false;
            }
        });
    }
});