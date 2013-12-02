var App = angular.module('hexAngular');

/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* Dropdown Directive -
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
App.directive('dropdown', function($rootScope, $timeout, $animate, Utilities) {
    'use strict';

    // constants
    var SHOW_DELAY = 150,
        HIDE_DELAY = 250;

    return {
        restrict: 'A',
        replace: false,
        scope: true,

        link: function($scope, $element, $attrs) {

            // properties
            var disable = false,
                showTimeout = null,
                hideTimeout = null,
                openTimeout = null,
                showDelay = SHOW_DELAY,
                hideDelay = HIDE_DELAY;

            // jquery elements
            var $menu = $element.find('.menu');

            // scope data
            $scope.state = {
                open: false
            };

            $scope.settings = {
                transition: 'fade',
                showDelay: SHOW_DELAY,
                hideDelay: HIDE_DELAY
            };

            initialize();


            /* initialize -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function initialize() {

                overrideDefaults();
                createEventHandlers();
            }

            /* overrideDefaults -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function overrideDefaults() {

                // override defaults
                Utilities.extendSettings($scope.settings, $attrs);

                console.log($scope.settings);

            }

            /* createEventHandlers -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function createEventHandlers() {

                // dropdown: mouseenter
                $element.on('click mouseenter', function(e) {
                    $timeout.cancel(hideTimeout);

                    showTimeout = $timeout(function() {
                        openMenu();
                    }, $scope.settings.showDelay);
                });

                // dropdown: mouseleave
                $element.on('click mouseleave', function(e) {
                    $timeout.cancel(showTimeout);

                    hideTimeout = $timeout(function() {
                        closeMenu();
                    }, $scope.settings.hideDelay);
                });

                // menu: click
                $menu.fastClick(function (e) {
                    closeMenu();
                });
            }

            /* openMenu -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function openMenu() {

                if (disable) return;

                $timeout.cancel(openTimeout);

                $scope.state.open = true;

                $animate.addClass($menu, $scope.settings.transition);
            }

            /* closeMenu -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function closeMenu() {

                if (disable) return;

                $scope.state.open = false;

                $animate.removeClass($menu, $scope.settings.transition);
            }

            /* Scope Methods
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            $scope.show = openMenu;
            $scope.hide = closeMenu;
        }
    };
});
