(function (window, $, angular) {
  'use strict';
  $(document).ready(function () {
  });
  var App = angular.module('app', [
      'ngCookies',
      'ngRoute',
      'ngSanitize',
      'ngTouch',
      'ngAnimate',
      'hexAngular'
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
var App = angular.module('app');
App.controller('AppController', [
  '$rootScope',
  '$scope',
  '$http',
  '$routeParams',
  '$location',
  'User',
  function ($rootScope, $scope, $http, $routeParams, $location, User) {
    'use strict';
    $scope.state = {};
    initialize();
    function initialize() {
      createEventHandlers();
    }
    function createEventHandlers() {
    }
  }
]);
;
var App = angular.module('app');
App.config([
  '$routeProvider',
  function ($routeProvider) {
    'use strict';
    $routeProvider.when('/', {
      templateUrl: '/static/partials/views/index.html',
      controller: 'HomeController'
    }).when('/page', {
      templateUrl: '/static/partials/views/page.html',
      controller: 'PageController'
    });
  }
]);