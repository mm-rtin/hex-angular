var App = angular.module('app');

// Routes
App.config(function($routeProvider) {
    'use strict';

    $routeProvider.

        // home view
        when('/', {templateUrl: '/static/partials/views/home_view.html', controller: 'HomeController'}).

        // content gallery
        when('/content_gallery', {templateUrl: '/static/partials/views/content_gallery_view.html', controller: 'ContentGalleryController'});
});
