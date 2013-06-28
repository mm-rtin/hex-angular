/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* Hexangular Controller -
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
var HexangularController = function($rootScope, $scope, $http, $routeParams) {

    // constants

    // scope data
    // app state
    $scope.state = {

    };

    $scope.verticalTags = {
        tags: ['Playstation', 'Xbox 360', 'Nintendo Wii', 'Playstation 3', 'Playstation 2', 'Playstation 4', 'Xbox', 'Nintendo DS', 'Nintendo 3DS'],
        selectedTags: {}
    };

    $scope.galleryImages = [
        {
            url: 'http://placekitten.com/300/1500'
        },
        {
            url: 'http://placekitten.com/500/1200'
        },
        {
            url: 'http://placekitten.com/1200/1500'
        },
        {
            url: 'http://placekitten.com/1700/1200'
        },
        {
            url: 'http://placekitten.com/1700/1700'
        },
        {
            url: 'http://placekitten.com/1700/1200'
        },
        {
            url: 'http://placekitten.com/1200/1700'
        },
        {
            url: 'http://placekitten.com/1900/1700'
        },
        {
            url: 'http://placekitten.com/1200/1700'
        },
        {
            url: 'http://placekitten.com/1500/1500'
        },
        {
            url: 'http://placekitten.com/500/1200'
        },
        {
            url: 'http://placekitten.com/1200/1500'
        },
        {
            url: 'http://placekitten.com/1700/1200'
        },
        {
            url: 'http://placekitten.com/1700/1700'
        },
        {
            url: 'http://placekitten.com/1700/1200'
        },
        {
            url: 'http://placekitten.com/1200/1700'
        },
        {
            url: 'http://placekitten.com/1900/1700'
        },
        {
            url: 'http://placekitten.com/1200/1700'
        },
        {
            url: 'http://placekitten.com/1500/1500'
        },
        {
            url: 'http://placekitten.com/500/1200'
        },
        {
            url: 'http://placekitten.com/1200/1500'
        },
        {
            url: 'http://placekitten.com/1700/1200'
        },
        {
            url: 'http://placekitten.com/1700/1700'
        },
        {
            url: 'http://placekitten.com/1700/1200'
        },
        {
            url: 'http://placekitten.com/1200/1700'
        },
        {
            url: 'http://placekitten.com/1900/1700'
        },
        {
            url: 'http://placekitten.com/1200/1700'
        },
        {
            url: 'http://placekitten.com/1500/1500'
        },
        {
            url: 'http://placekitten.com/500/1200'
        },
        {
            url: 'http://placekitten.com/1200/1500'
        },
        {
            url: 'http://placekitten.com/1700/1200'
        },
        {
            url: 'http://placekitten.com/1700/1700'
        },
        {
            url: 'http://placekitten.com/1700/1200'
        },
        {
            url: 'http://placekitten.com/1200/1700'
        },
        {
            url: 'http://placekitten.com/1900/1700'
        },
        {
            url: 'http://placekitten.com/1200/1700'
        },
        {
            url: 'http://placekitten.com/1500/1500'
        }
    ];


    initialize();

    /* getItems -
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    function initialize() {

        // add safeApply to rootScope
        $rootScope.safeApply = function(fn) {
            var phase = this.$root.$$phase;
            if(phase == '$apply' || phase == '$digest') {
                if(fn && (typeof(fn) === 'function')) {
                    fn();
                }
            } else {
                this.$apply(fn);
            }
        };

        createEventHandlers();
    }

    /* createEventHandlers -
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    function createEventHandlers() {

    }

};


var App = angular.module('Hexangular');
App.controller('HexangularController', HexangularController);

HexangularController.$inject = ['$rootScope', '$scope', '$http', '$routeParams'];
