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

    $scope.smallImages = [
        {
            url: 'http://placekitten.com/500/800'
        },
        {
            url: 'http://placekitten.com/505/490'
        },
        {
            url: 'http://placekitten.com/510/820'
        },
        {
            url: 'http://placekitten.com/520/480'
        },
        {
            url: 'http://placekitten.com/530/490'
        },
        {
            url: 'http://placekitten.com/540/500'
        }
    ];

    $scope.mediumImages = [
        {
            url: 'http://placekitten.com/900/800'
        },
        {
            url: 'http://placekitten.com/1000/700'
        },
        {
            url: 'http://placekitten.com/1100/600'
        },
        {
            url: 'http://placekitten.com/1300/800'
        },
        {
            url: 'http://placekitten.com/600/1700'
        },
        {
            url: 'http://placekitten.com/900/900'
        }
    ];

    $scope.largeImages = [
        {
            url: 'http://placekitten.com/1300/900'
        },
        {
            url: 'http://placekitten.com/1250/800'
        },
        {
            url: 'http://placekitten.com/900/600'
        },
        {
            url: 'http://placekitten.com/1440/900'
        },
        {
            url: 'http://placekitten.com/800/1800'
        },
        {
            url: 'http://placekitten.com/1200/1200'
        }
    ];


    $scope.thumbnailImages = [
        {
            url: 'http://placekitten.com/250/150'
        },
        {
            url: 'http://placekitten.com/255/150'
        },
        {
            url: 'http://placekitten.com/260/150'
        },
        {
            url: 'http://placekitten.com/270/150'
        },
        {
            url: 'http://placekitten.com/280/150'
        },
        {
            url: 'http://placekitten.com/290/150'
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
