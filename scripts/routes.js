var App = angular.module('Hexangular');

// Routes
App.config(['$routeProvider', function($routeProvider) {

    $routeProvider

        .when(
            '/',
            {template: '@@include("../partials/views/index_view.html")'}
        )
        .when(
            '/vertical_tags/',
            {controller: 'VerticalTagsController', template: '@@include("../partials/views/vertical_tags_view.html")'}
        )
        .when(
            '/auto_complete/',
            {controller: 'ContentGalleryController', template: '@@include("../partials/views/auto_complete_view.html")'}
        )
        .when(
            '/content_gallery/',
            {controller: 'ContentGalleryController', template: '@@include("../partials/views/content_gallery_view.html")'}
        )
        .when(
            '/image_editor/',
            {controller: 'ContentGalleryController', template: '@@include("../partials/views/image_editor_view.html")'}
        )
        .when(
            '/modal/',
            {controller: 'ModalController', template: '@@include("../partials/views/modal_view.html")'}
        );
}]);
