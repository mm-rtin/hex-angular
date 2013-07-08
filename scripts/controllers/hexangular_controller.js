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
            url: 'http://placekitten.com/800/600'
        },
        {
            url: 'http://placekitten.com/400/500'
        },
        {
            url: 'http://placekitten.com/800/800'
        },
        {
            url: 'http://placekitten.com/1200/600'
        },
        {
            url: 'http://placekitten.com/900/300'
        },
        {
            url: 'http://placekitten.com/300/900'
        },
        {
            url: 'http://placekitten.com/500/500'
        }
    ];

    $scope.thumbnailImages = [
        {
            url: 'http://placekitten.com/251/150'
        },
        {
            url: 'http://placekitten.com/252/150'
        },
        {
            url: 'http://placekitten.com/253/150'
        },
        {
            url: 'http://placekitten.com/254/150'
        },
        {
            url: 'http://placekitten.com/255/150'
        },
        {
            url: 'http://placekitten.com/256/150'
        },
        {
            url: 'http://placekitten.com/257/150'
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
