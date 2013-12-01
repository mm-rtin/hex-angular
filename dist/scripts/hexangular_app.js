(function (window, $, angular) {
  'use strict';
  $(document).ready(function () {
  });
  var App = angular.module('overmind', [
      'ngCookies',
      'ngRoute',
      'ngSanitize',
      'ngTouch',
      'ngAnimate'
    ]);
  App.config([
    '$locationProvider',
    '$interpolateProvider',
    function ($location, $interpolateProvider) {
      $location.html5Mode(true);
      $interpolateProvider.startSymbol('[[');
      $interpolateProvider.endSymbol(']]');
    }
  ]);
}(this, jQuery, angular));
;
var App = angular.module('overmind');
App.controller('OvermindController', [
  '$rootScope',
  '$scope',
  '$http',
  '$routeParams',
  '$location',
  'User',
  function ($rootScope, $scope, $http, $routeParams, $location, User) {
    'use strict';
    $scope.state = {
      'showImagePanel': false,
      'homePage': false
    };
    $scope.overmindData = {};
    initialize();
    function initialize() {
      if (!User.isUserLoggedIn()) {
        $location.url('/');
      }
      createEventHandlers();
    }
    function createEventHandlers() {
      $scope.$on('image-editor:enabled', function (e, data) {
        $scope.state.showImagePanel = true;
      });
      $scope.$on('image-editor:disabled', function (e, data) {
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
  }
]);
;
var App = angular.module('overmind');
App.config([
  '$routeProvider',
  function ($routeProvider) {
    'use strict';
    $routeProvider.when('/', {
      templateUrl: '/static/partials/views/home_view.html',
      controller: 'HomeController'
    }).when('/add', {
      templateUrl: '/static/partials/views/item_detail_view.html',
      controller: 'AddItemController'
    }).when('/item/:itemID', {
      templateUrl: '/static/partials/views/item_detail_view.html',
      controller: 'ItemDetailController'
    }).when('/:username', {
      templateUrl: '/static/partials/views/user_home_view.html',
      controller: 'UserHomeController'
    });
  }
]);