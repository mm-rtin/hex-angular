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
            {controller: 'VerticalTagsController', template: '<h2>Vertical Tags</h2><div vertical-tags tags="verticalTags.tags" selected-tags="verticalTags.selectedTags"></div>'}
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
            {controller: 'ModalController', template: '<div class="row"><div class="large-12 columns"><!-- directive: modal --><div modal modal-name="hexModal" class="modal fade"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button class="close icon-remove" ng-click="hideModal()"></button><h4 class="modal-title">Modal Heading</h4></div><div class="modal-body"><h4>Text in a modal</h4><p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p><h4>Overflowing text to show scroll behavior</h4><p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p><p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p><p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p><p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p><p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p><p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p><p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p><p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p><p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p></div><div class="modal-footer"><button class="secondary" ng-click="hideModal()">Close</button><button class="primary">Save changes</button></div></div></div></div><h2>Modal</h2><button class="alert" ng-click="showModal()">Show Model</button></div></div>'}
        );
}]);
