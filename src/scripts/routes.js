var App = angular.module('app');

// Routes
App.config(function($routeProvider) {
    'use strict';

    $routeProvider.

        // home view (logged out)
        when('/', {templateUrl: '/static/partials/views/index.html', controller: 'HomeController'}).

        // home view (logged in)
        when('/page', {templateUrl: '/static/partials/views/page.html', controller: 'PageController'});
});
