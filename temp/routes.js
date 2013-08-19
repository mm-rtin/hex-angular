var App = angular.module('Hexangular');

// Routes
App.config(['$routeProvider', function($routeProvider) {

    $routeProvider

        .when(
            '/',
            {template: '<ul class="large-block-grid-1"><li><a class="button" href="vertical_tags">Vertical Tags</a></li><li><a class="button" href="auto_complete">Auto Complete</a></li><li><a class="button" href="content_gallery">Content Gallery</a></li><li><a class="button" href="image_editor">Image Editor</a></li><li><a class="button" href="modal">Modal</a></li></ul>'}
        )
        .when(
            '/vertical_tags/',
            {controller: 'VerticalTagsController', template: '<h2>Vertical Tags</h2>'}
        )
        .when(
            '/auto_complete/',
            {controller: 'ContentGalleryController', template: '<h2>Auto Complete</h2>'}
        )
        .when(
            '/content_gallery/',
            {controller: 'ContentGalleryController', template: '<h2>Content Gallery</h2><!-- content gallery --><div class="row"><div class="columns large-12"><!-- directive: content gallery --><div content-gallery small-image-list="smallImages" medium-image-list="mediumImages" large-image-list="largeImages" thumbnail-image-list="thumbnailImages" thumbnail-width="110" thumbnail-height="67" small-width="500" medium-width="900" large-width="1200"></div></div></div>'}
        )
        .when(
            '/image_editor/',
            {controller: 'ContentGalleryController', template: '<h2>Image Editor</h2>'}
        )
        .when(
            '/modal/',
            {controller: 'ModalController', template: '<h2>Modal</h2>'}
        );
}]);
