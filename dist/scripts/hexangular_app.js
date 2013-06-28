(function (window, $, angular) {
    'use strict';

    /**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    * Document Ready -
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    $(document).ready(function() {

    });

    /**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    * Angular App
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    var App = angular.module('Hexangular', ['ui.keypress', 'ui.event']);

    App.config(['$locationProvider', '$interpolateProvider', function($location, $interpolateProvider) {
        $location.html5Mode(true);

        $interpolateProvider.startSymbol('[[');
        $interpolateProvider.endSymbol(']]');
    }]);


})(this, jQuery, angular);
;/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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
;var App = angular.module('Hexangular');

/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* Auto Complete Directive -
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
App.directive('autoComplete', ['$rootScope', function($rootScope) {

    return {
        restrict: 'A',
        template: '<div class="auto-complete">[[ activeTerm ]]<input type="text"/><!-- filtered terms --><div class="filtered-terms"><ul><li class="tag" ng-repeat="(key, value) in filteredTerms" ng-class="{selected: key==state.activeTermIndex}" ng-mouseenter="setActive(key)" ng-click="selectTerm()"><span ng-bind-html-unsafe="value"></li></ul></div></div>',
        replace: true,
        scope: {
            terms: '=',
            filteredTerms: '=',
            mode: '@',
            eventName: '@'
        },

        link: function($scope, $element, $attrs) {

            // jquery elements
            var $input = $element.find('input');

            // properties
            var active = false,
                suppressKeyPressRepeat = false;

            // scope data
            $scope.state = {
                'activeTermIndex': 0
            };

            // wait for tags data before intialization
            $scope.$watch('terms', function(property, oldValue) {
                initialize();
            });

            /* initialize -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function initialize() {

                createEventHandlers();
            }


            /* createEventHandlers -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function createEventHandlers() {

                // input: keydown
                $input.on('keydown', keyDown);

                // input: keyup
                $input.on('keyup', keyUp);
            }

            /* filterTerms - return filtered terms with term highlighted
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function filterTerms(searchString) {

                active = false;

                // get filtered results
                var filteredResults = search(searchString),
                    filteredTerms = [];

                if (filteredResults.length > 0) {

                    active = true;

                    // highlight search term within filtered results
                    filteredResults.each(function(term, i) {

                        filteredResults[i] = highlighter(term, searchString);
                    });
                }

                $rootScope.safeApply(function() {
                    $scope.filteredTerms = filteredResults;
                    $scope.state.activeTermIndex = 0;
                });
            }

            /* search - return array of filtered results based on search string
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function search(searchString) {

                var filteredResults = [];

                if (searchString.trim() !== '') {

                    searchString = searchString.toLowerCase();

                    // use jquery grep to return filtered array results
                    filteredResults = $.grep($scope.terms, function(term, i) {
                        return ~term.toLowerCase().indexOf(searchString);
                    });
                }

                return filteredResults;
            }

            /* highlighter - add strong tags around search string within terms
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function highlighter(term, searchString) {

                searchString = searchString.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
                return term.replace(new RegExp('(' + searchString + ')', 'ig'), function ($1, match) {
                    return '<strong>' + match + '</strong>';
                });
            }

            /* keyDown - cycle active selections
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function keyDown(e) {

                // [40,38,9,13,27]
                move(e);
            }

            /* keyUp - filter terms if keycode meet requirements
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function keyUp(e) {

                switch(e.keyCode) {
                    case 40: // down arrow
                    case 38: // up arrow
                    case 16: // shift
                    case 17: // ctrl
                    case 18: // alt
                        break;

                    case 9:  // tab
                    case 13: // enter
                        break;

                    case 27: // escape
                        if (!active) {
                            return;
                        }
                        hide();
                        break;

                    default:
                        filterTerms($input.val());
                }
                e.stopPropagation();
                e.preventDefault();
            }

            /* move - cycle active selection through filtered terms
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function move(e) {

                if (!active) {
                    return;
                }

                switch(e.keyCode) {
                    case 9:  // tab
                    case 13: // enter
                        if (!active) {
                            return;
                        }
                        selectTerm();
                        e.preventDefault();
                        break;

                    case 27: // escape
                        e.preventDefault();
                        break;

                    case 38: // up arrow
                        e.preventDefault();
                        selectPrevious();
                        break;

                    case 40: // down arrow
                        e.preventDefault();
                        selectNext();
                        break;
                }

                e.stopPropagation();
            }

            /* selectNext - select next filtered term - loop back to 0
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function selectNext(e) {

                $rootScope.safeApply(function() {

                    if ($scope.state.activeTermIndex < $scope.filteredTerms.length - 1) {
                        $scope.state.activeTermIndex++;
                    } else {
                        $scope.state.activeTermIndex = 0;
                    }
                });
            }

            /* selectPrevious - select previous filtered term - loop to array length
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function selectPrevious(e) {

                $rootScope.safeApply(function() {

                    if ($scope.state.activeTermIndex > 0) {
                        $scope.state.activeTermIndex--;
                    } else {
                        $scope.state.activeTermIndex = $scope.filteredTerms.length - 1;
                    }
                });
            }

            /* setActive -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function setActive(key) {

                $scope.state.activeTermIndex = key;
            }

            /* selectTerm - select a filtered term
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function selectTerm() {

                // get filtered term and remove strong tags
                var activeTerm = $scope.filteredTerms[$scope.state.activeTermIndex].replace(/<\/*strong>/gi, '');

                // broadcast event
                if ($scope.mode === 'event') {
                    $input.val('');
                    $rootScope.$broadcast($scope.eventName, activeTerm);

                // update input value
                } else {
                    $input.val(activeTerm);
                }

                hide();
            }

            /* hide - clear filtered terms
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function hide(e) {

                active = false;

                $rootScope.safeApply(function() {
                    $scope.filteredTerms = [];
                });
            }

            /* Scope Methods
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            $scope.setActive = setActive;
            $scope.selectTerm = selectTerm;
        }
    };

}]);
;var App = angular.module('Hexangular');

/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* Content Gallery Directive -
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
App.directive('contentGallery', ['$rootScope', function($rootScope) {

    return {
        restrict: 'A',
        template: '<div class="content-gallery"><div class="gallery-container"><div class="slider-container"><div class="slider slider-[[ key ]]" ng-class="{active: key == state.currentImageIndex}" ng-repeat="(key, image) in images" ng-click="setActiveImage(key + 1)"><img class="image-content" ng-src="[[ image.url ]]"></div></div></div></div>',
        replace: false,
        scope: {
            images: '='
        },

        link: function($scope, $element, $attrs) {

            // jquery elements
            var $contentGallery = $element,
                $galleryContainer = $element.find('.gallery-container'),
                $sliderContainer = $element.find('.slider-container');

            // scope data
            $scope.state = {
                'firstImageLoaded': false,
                'currentImageIndex': -1,
                'smallestHeight': 99999
            };

            // wait for images data before intialization
            $scope.$watch('images', function(images, oldValue) {
                initialize();
            });

            /* initialize -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function initialize() {

                createEventHandlers();

                Object.extended($scope.images).each(function(key, image) {
                    loadImage(image);
                });

                console.log($scope.images);
            }


            /* createEventHandlers -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function createEventHandlers() {

            }

            /* loadImage
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function loadImage(image) {

                var loadedImage = new Image();
                loadedImage.src = image.url;

                // on image load
                loadedImage.onload = function() {

                    $rootScope.safeApply(function() {

                        image.width = loadedImage.width;
                        image.height = loadedImage.height;

                        // set smallest height
                        if (image.height < $scope.smallestHeight) {
                            $scope.state.smallestHeight = image.height;
                        }

                        if (!$scope.state.firstImageLoaded) {
                            $scope.state.firstImageLoaded = true;
                            setActiveImage(0);
                        }
                    });
                };
            }

            /* setActiveImage -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function setActiveImage(index) {

                if (index < $scope.images.length) {

                    // var get image object
                    var image = $scope.images[index];

                    $scope.state.currentImageIndex = index;

                    $sliderContainer.css({
                        '-webkit-transform': 'translate3d(' + -$scope.state.currentImageIndex + '%, 0px, 0px)',
                        '-moz-transform': 'translate3d(' + -$scope.state.currentImageIndex + '%, 0px, 0px)',
                        '-ms-transform': 'translate(' + -$scope.state.currentImageIndex + '%, 0px)',
                        '-o-transform': 'translate3d(' + -$scope.state.currentImageIndex + '%, 0px, 0px)',
                        'transform': 'translate3d(' + -$scope.state.currentImageIndex + '%, 0px, 0px)'
                    });

                    // get active slider element
                    var $activeSlider = $sliderContainer.find('.slider-' + index);
                    var activeHeight = $activeSlider.height();

                    // set slider height
                    $galleryContainer.css({
                        'max-height': activeHeight + 'px'
                    });
                }
            }

            /* Scope Methods
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            $scope.setActiveImage = setActiveImage;
        }
    };

}]);
;/**
 * General-purpose Event binding. Bind any event not natively supported by Angular
 * Pass an object with keynames for events to ui-event
 * Allows $event object and $params object to be passed
 *
 * @example <input ui-event="{ focus : 'counter++', blur : 'someCallback()' }">
 * @example <input ui-event="{ myCustomEvent : 'myEventHandler($event, $params)'}">
 *
 * @param ui-event {string|object literal} The event to bind to as a string or a hash of events with their callbacks
 */
angular.module('ui.event',[]).directive('uiEvent', ['$parse',
  function ($parse) {
    return function ($scope, elm, attrs) {
      var events = $scope.$eval(attrs.uiEvent);
      angular.forEach(events, function (uiEvent, eventName) {
        var fn = $parse(uiEvent);
        elm.bind(eventName, function (evt) {
          var params = Array.prototype.slice.call(arguments);
          //Take out first paramater (event object);
          params = params.splice(1);
          fn($scope, {$event: evt, $params: params});
          if (!$scope.$$phase) {
            $scope.$apply();
          }
        });
      });
    };
  }]);
;angular.module('ui.keypress',[]).
factory('keypressHelper', ['$parse', function keypress($parse){
  var keysByCode = {
    8: 'backspace',
    9: 'tab',
    13: 'enter',
    27: 'esc',
    32: 'space',
    33: 'pageup',
    34: 'pagedown',
    35: 'end',
    36: 'home',
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    45: 'insert',
    46: 'delete'
  };

  var capitaliseFirstLetter = function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return function(mode, scope, elm, attrs) {
    var params, combinations = [];
    params = scope.$eval(attrs['ui'+capitaliseFirstLetter(mode)]);

    // Prepare combinations for simple checking
    angular.forEach(params, function (v, k) {
      var combination, expression;
      expression = $parse(v);

      angular.forEach(k.split(' '), function(variation) {
        combination = {
          expression: expression,
          keys: {}
        };
        angular.forEach(variation.split('-'), function (value) {
          combination.keys[value] = true;
        });
        combinations.push(combination);
      });
    });

    // Check only matching of pressed keys one of the conditions
    elm.bind(mode, function (event) {
      // No need to do that inside the cycle
      var metaPressed = !!(event.metaKey && !event.ctrlKey);
      var altPressed = !!event.altKey;
      var ctrlPressed = !!event.ctrlKey;
      var shiftPressed = !!event.shiftKey;
      var keyCode = event.keyCode;

      // normalize keycodes
      if (mode === 'keypress' && !shiftPressed && keyCode >= 97 && keyCode <= 122) {
        keyCode = keyCode - 32;
      }

      // Iterate over prepared combinations
      angular.forEach(combinations, function (combination) {

        var mainKeyPressed = combination.keys[keysByCode[event.keyCode]] || combination.keys[event.keyCode.toString()];

        var metaRequired = !!combination.keys.meta;
        var altRequired = !!combination.keys.alt;
        var ctrlRequired = !!combination.keys.ctrl;
        var shiftRequired = !!combination.keys.shift;

        if (
          mainKeyPressed &&
          ( metaRequired === metaPressed ) &&
          ( altRequired === altPressed ) &&
          ( ctrlRequired === ctrlPressed ) &&
          ( shiftRequired === shiftPressed )
        ) {
          // Run the function
          scope.$apply(function () {
            combination.expression(scope, { '$event': event });
          });
        }
      });
    });
  };
}]);

/**
 * Bind one or more handlers to particular keys or their combination
 * @param hash {mixed} keyBindings Can be an object or string where keybinding expression of keys or keys combinations and AngularJS Exspressions are set. Object syntax: "{ keys1: expression1 [, keys2: expression2 [ , ... ]]}". String syntax: ""expression1 on keys1 [ and expression2 on keys2 [ and ... ]]"". Expression is an AngularJS Expression, and key(s) are dash-separated combinations of keys and modifiers (one or many, if any. Order does not matter). Supported modifiers are 'ctrl', 'shift', 'alt' and key can be used either via its keyCode (13 for Return) or name. Named keys are 'backspace', 'tab', 'enter', 'esc', 'space', 'pageup', 'pagedown', 'end', 'home', 'left', 'up', 'right', 'down', 'insert', 'delete'.
 * @example <input ui-keypress="{enter:'x = 1', 'ctrl-shift-space':'foo()', 'shift-13':'bar()'}" /> <input ui-keypress="foo = 2 on ctrl-13 and bar('hello') on shift-esc" />
 **/
angular.module('ui.keypress').directive('uiKeydown', ['keypressHelper', function(keypressHelper){
  return {
    link: function (scope, elm, attrs) {
      keypressHelper('keydown', scope, elm, attrs);
    }
  };
}]);

angular.module('ui.keypress').directive('uiKeypress', ['keypressHelper', function(keypressHelper){
  return {
    link: function (scope, elm, attrs) {
      keypressHelper('keypress', scope, elm, attrs);
    }
  };
}]);

angular.module('ui.keypress').directive('uiKeyup', ['keypressHelper', function(keypressHelper){
  return {
    link: function (scope, elm, attrs) {
      keypressHelper('keyup', scope, elm, attrs);
    }
  };
}]);
;var App = angular.module('Hexangular');

/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* Modal Directive -
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
App.directive('modal', ['$rootScope', function($rootScope) {

    // constants

    return {
        restrict: 'A',
        template: '<div class="modal reveal-modal"><div class="content" ng-transclude></div></div>',
        replace: true,
        transclude: true,
        scope: {
            'modalState': '='
        },

        link: function($scope, $element, $attrs) {

            /* initialize -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function initialize() {

            }

            /* createEventListeners -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function createEventListeners() {

            }

            /* Scope Methods
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
        }
    };

}]);
;var App = angular.module('Hexangular');

/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* Vertical Tags Directive -
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
App.directive('verticalTags', ['$rootScope', function($rootScope) {

    return {
        restrict: 'A',
        template: '<div class="vertical-tags" ng-class="{pane2: state.showPane2}"><div class="pane-content"><!-- tag search and list pane --><div class="pane pane1"><!-- directive: autocomplete --><div auto-complete terms="tags" filtered-terms="filteredTerms" mode="event" event-name="add-tag"></div><div class="list-button icon-list" ng-click="state.showPane2 = true"></div><!-- selected tags --><div class="tag-list selected-tags"><ul><li class="tag" ng-repeat="(key, value) in selectedTags">[[ key ]]<span class="tag-delete icon-erase" ng-click="removeTag(key)"></span></li></ul></div></div><!-- all tags pane --><div class="pane pane2"><button class="back-button icon-arrow-left" ng-click="state.showPane2 = false"> Back</button><div class="tag-list all-tags"><ul><li class="tag" ng-repeat="(key, value) in tags" ng-click="toggleTag(value)" ng-class="{active: isActive(value)}">[[ value ]]</li></ul></div></div></div></div>',
        replace: true,
        scope: {
            'tags': '=',
            'selectedTags': '='
        },

        link: function($scope, $element, $attrs) {

            // jquery elements
            var $tagInput = $element.find('input'),
                $selectedTags = $element.find('.selected-tags');
                $allTags = $element.find('.all-tags');


            // scope data
            $scope.verticalTags = {
                'tagInput': ''
            };

            // state
            $scope.state = {
                'showPane2': false
            };

            createEventListeners();

            // wait for tags data before intialization
            $scope.$watch('tags', function(property, oldValue) {
                initialize();
            });

            /* initialize -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function initialize() {

                // init custom scrollbar
                $selectedTags.perfectScrollbar({wheelSpeed:25});
                $allTags.perfectScrollbar({wheelSpeed:25});
            }

            /* createEventListeners -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function createEventListeners() {

                // tagInput: keyup
                $tagInput.on('keyup', function(e) {

                    console.log('keyup');

                    // enter key pressed
                    if (e.which === 13) {

                        // add tag and clear input
                        addTag($tagInput.val());
                        $tagInput.val('');
                    }
                });

                // add-tag
                $scope.$on('add-tag', function(e, tagName) {
                    addTag(tagName);
                });
            }


            /* toggleTag -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function toggleTag(tagName) {

                // remove tag
                if (isActive(tagName)) {
                    removeTag(tagName);

                // add tag
                } else {
                    addTag(tagName);
                }
            }

            /* addTag -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function addTag(tagName) {

                tagName = tagName.trim();

                // check if tagName is not empty and does not exist in selectedTags
                if (tagName !== '' && !Object.has($scope.selectedTags, tagName)) {

                    $rootScope.safeApply(function() {
                        // add to selectedTags
                        $scope.selectedTags[tagName] = tagName;
                    });
                }
            }

            /* removeTag -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function removeTag(tagName) {

                delete $scope.selectedTags[tagName];
            }

            /* isActive -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function isActive(tagName) {

                if (Object.has($scope.selectedTags, tagName)) {
                    return true;
                }

                return false;
            }

            /* Scope Methods
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            $scope.toggleTag = toggleTag;
            $scope.addTag = addTag;
            $scope.removeTag = removeTag;
            $scope.isActive = isActive;
        }
    };

}]);
;var App = angular.module('Hexangular');

// Routes
App.config(['$routeProvider', function($routeProvider) {

}]);
;angular.module('fundoo.services', []).factory('createDialog', ["$document", "$compile", "$rootScope", "$controller", "$timeout",
      function ($document, $compile, $rootScope, $controller, $timeout) {
        var defaults = {
          id: null,
          title: 'Default Title',
          backdrop: true,
          success: {label: 'OK', fn: null},
          controller: null, //just like route controller declaration
          backdropClass: "modal-backdrop",
          footerTemplate: null,
          modalClass: "modal"
        };
        var body = $document.find('body');

        return function Dialog(template, options, passedInLocals) {

          options = angular.extend({}, defaults, options); //options defined in constructor

          var idAttr = options.id ? ' id="' + options.id + '" ' : '';
          var defaultFooter = '<button class="btn" ng-click="$modalCancel()">Close</button>' +
            '<button class="btn btn-primary" ng-click="$modalSuccess()">{{$modalSuccessLabel}}</button>';
          var footerTemplate = '<div class="modal-footer">' +
            (options.footerTemplate || defaultFooter) +
            '</div>';
          //We don't have the scope we're gonna use yet, so just get a compile function for modal
          var modalEl = angular.element(
            '<div class="' + options.modalClass + ' fade"' + idAttr + '>' +
              '  <div class="modal-header">' +
              '    <a class="close-button" ng-click="$modalCancel()"></a>' +
              '    <h2>{{$title}}</h2>' +
              '  </div>' +
              '  <div class="modal-body" ng-include="\'' + template + '\'"></div>' +
              footerTemplate +
              '</div>');

          modalEl.css('top', $document.scrollTop() + 45);
          modalEl.css('left', '30%');
          modalEl.css('margin', '0 auto');

          var backdropEl = angular.element('<div ng-click="$modalCancel()">');
          backdropEl.addClass(options.backdropClass);
          backdropEl.addClass('fade in');

          var handleEscPressed = function(event) {
            if (event.keyCode === 27) {
              scope.$modalCancel();
            }
          };

          var closeFn = function() {
            body.unbind('keydown', handleEscPressed);
            modalEl.remove();
            if (options.backdrop) {
              backdropEl.remove();
            }
          };

          body.bind('keydown', handleEscPressed);

          var ctrl, locals,
            scope = options.scope || $rootScope.$new();

          scope.$title = options.title;
          scope.$modalCancel = closeFn;
          scope.$modalSuccess = function() {
            var callFn = options.success.fn || closeFn;
            callFn.call(this);
            scope.$modalCancel();
          };
          scope.$modalSuccessLabel = options.success.label;

          if (options.controller) {
            locals = angular.extend({$scope: scope}, passedInLocals);
            ctrl = $controller(options.controller, locals);
            // Yes, ngControllerController is not a typo
            modalEl.contents().data('$ngControllerController', ctrl);
          }

          $compile(modalEl)(scope);
          $compile(backdropEl)(scope);
          body.append(modalEl);
          if (options.backdrop) body.append(backdropEl);

          $timeout(function() {
            modalEl.addClass('in');
          }, 200);
        };
      }]);
