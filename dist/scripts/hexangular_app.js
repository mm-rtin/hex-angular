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
  'Utilities',
  function ($rootScope, $scope, $http, $routeParams, $location, Utilities) {
    'use strict';
    $scope.state = {};
    initialize();
    function initialize() {
      console.log('initialize app controller');
      createEventHandlers();
    }
    function createEventHandlers() {
    }
  }
]);
;
var App = angular.module('app');
App.controller('ContentGalleryController', [
  '$rootScope',
  '$scope',
  '$http',
  '$routeParams',
  '$location',
  function ($rootScope, $scope, $http, $routeParams, $location) {
    'use strict';
    $scope.state = {};
    $scope.smallImages = [
      { url: 'http://placekitten.com/500/800' },
      { url: 'http://placekitten.com/505/490' },
      { url: 'http://placekitten.com/510/820' },
      { url: 'http://placekitten.com/520/480' },
      { url: 'http://placekitten.com/530/490' },
      { url: 'http://placekitten.com/540/500' }
    ];
    $scope.mediumImages = [
      { url: 'http://placekitten.com/900/800' },
      { url: 'http://placekitten.com/1000/700' },
      { url: 'http://placekitten.com/1100/600' },
      { url: 'http://placekitten.com/1300/800' },
      { url: 'http://placekitten.com/600/1700' },
      { url: 'http://placekitten.com/900/900' }
    ];
    $scope.largeImages = [
      { url: 'http://placekitten.com/1300/900' },
      { url: 'http://placekitten.com/1250/800' },
      { url: 'http://placekitten.com/900/600' },
      { url: 'http://placekitten.com/1440/900' },
      { url: 'http://placekitten.com/800/1800' },
      { url: 'http://placekitten.com/1200/1200' }
    ];
    $scope.thumbnailImages = [
      { url: 'http://placekitten.com/250/150' },
      { url: 'http://placekitten.com/255/150' },
      { url: 'http://placekitten.com/260/150' },
      { url: 'http://placekitten.com/270/150' },
      { url: 'http://placekitten.com/280/150' },
      { url: 'http://placekitten.com/290/150' }
    ];
    initialize();
    function initialize() {
      console.log('initialize content gallery controller');
      createEventHandlers();
    }
    function createEventHandlers() {
    }
  }
]);
;
var App = angular.module('app');
App.controller('HomeController', [
  '$rootScope',
  '$scope',
  '$http',
  '$routeParams',
  '$location',
  function ($rootScope, $scope, $http, $routeParams, $location) {
    'use strict';
    $scope.state = {};
    initialize();
    function initialize() {
      console.log('initialize home controller');
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
      templateUrl: 'static/partials/views/home_view.html',
      controller: 'HomeController'
    }).when('/content_gallery', {
      templateUrl: 'static/partials/views/content_gallery_view.html',
      controller: 'ContentGalleryController'
    });
  }
]);