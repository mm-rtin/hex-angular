var App = angular.module('Hexangular');

/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* Modal Directive -
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
App.directive('modal', ['$rootScope', function($rootScope) {

    // constants

    return {
        restrict: 'A',
        template: '',
        templateUrl: '',
        replace: false,
        scope: {
            'modalName': '@'
        },

        link: function($scope, $element, $attrs) {

            // jquery elements
            var $htmlRoot = $('html'),
                $modal = $element,
                $backdrop = null;

            // scope data
            $scope.state = {
                'open': false
            };

            initialize();

            // wait for scope data before intialization
            $scope.$watch('property', function(property, oldValue) {
            });


            /**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            * initialize -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function initialize() {

                $backdrop = $('<div class="modal-backdrop fade"></div>').appendTo(document.body);

                createEventListeners();
            }

            /**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            * createEventListeners -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function createEventListeners() {

                // modal:show
                $scope.$on('modal:show', function(e, modalName) {
                    console.log($attrs.modalName, modalName);

                    if ($attrs.modalName === modalName) {
                        showModal();
                    }
                });

                // modal:hide
                $scope.$on('modal:hide', function(e, modalName) {
                    console.log($attrs.modalName, modalName);

                    if ($attrs.modalName === modalName) {
                        hideModal();
                    }
                });

                // element: click
                $element.on('click', function(e) {

                    var inModalContent = $(e.target).closest('.modal-content').length;

                    if (inModalContent === 0) {
                        hideModal();
                    }
                });
            }

            /**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            * showModal -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function showModal() {

                showBackdrop();

                $modal.css({'display': 'block'});

                setTimeout(function() {
                    $modal.addClass('in');
                    $htmlRoot.addClass('overflow-hidden');
                }, 100);
            }

            /**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            * hideModal -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function hideModal() {

                $modal.removeClass('in');

                setTimeout(function() {
                    $modal.css({'display': 'none'});
                }, 300);

                setTimeout(function() {
                    hideBackdrop();
                    $htmlRoot.removeClass('overflow-hidden');
                }, 300);
            }

            /**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            * showBackdrop -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function showBackdrop() {

                $backdrop.css({'display': 'block'});

                setTimeout(function() {
                    $backdrop.addClass('in');
                }, 10);
            }

            /**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            * hideBackdrop -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function hideBackdrop() {

                $backdrop.removeClass('in');

                setTimeout(function() {
                    $backdrop.css({'display': 'none'});
                }, 300);
            }

            /**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            * Scope Methods
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

        }
    };
}]);
