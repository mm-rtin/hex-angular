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
            url: 'http://placekitten.com/2004/1000'
        },
        {
            url: 'http://placekitten.com/200/280'
        },
        {
            url: 'http://placekitten.com/1200/400'
        },
        {
            url: 'http://placekitten.com/1500/830'
        },
        {
            url: 'http://placekitten.com/1800/300'
        },
        {
            url: 'http://placekitten.com/1900/850'
        },
        {
            url: 'http://placekitten.com/500/660'
        },
        {
            url: 'http://placekitten.com/2004/144'
        },
        {
            url: 'http://placekitten.com/1002/800'
        },
        {
            url: 'http://placekitten.com/1200/820'
        },
        {
            url: 'http://placekitten.com/1500/830'
        },
        {
            url: 'http://placekitten.com/1800/840'
        },
        {
            url: 'http://placekitten.com/1900/850'
        },
        {
            url: 'http://placekitten.com/2004/160'
        },
        {
            url: 'http://placekitten.com/2004/440'
        },
        {
            url: 'http://placekitten.com/1002/800'
        },
        {
            url: 'http://placekitten.com/1200/820'
        },
        {
            url: 'http://placekitten.com/1500/830'
        },
        {
            url: 'http://placekitten.com/1800/840'
        },
        {
            url: 'http://placekitten.com/1900/850'
        },
        {
            url: 'http://placekitten.com/2004/160'
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
        },
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
        },
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
