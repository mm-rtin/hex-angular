var App = angular.module('overmind');

// Routes
App.config(function($routeProvider) {
    'use strict';

    $routeProvider.

        // home view (logged out)
        when('/', {templateUrl: '/static/partials/views/home_view.html', controller: 'HomeController'}).

        // home view (logged in)
        when('/add', {templateUrl: '/static/partials/views/item_detail_view.html', controller: 'AddItemController'}).

        // item detail
        when('/item/:itemID', {templateUrl: '/static/partials/views/item_detail_view.html', controller: 'ItemDetailController'}).

        when('/:username', {templateUrl: '/static/partials/views/user_home_view.html', controller: 'UserHomeController'});
});
