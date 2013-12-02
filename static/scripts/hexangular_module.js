(function (window, $, angular) {
    'use strict';

    /* Hex-Angular App
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    var App = angular.module('hexAngular',
        [
            'ngCookies',
            'ngRoute',
            'ngSanitize',
            'ngTouch',
            'ngAnimate'
        ]);

    App.config(['$locationProvider', '$interpolateProvider', function($location, $interpolateProvider) {
        $location.html5Mode(true);

        $interpolateProvider.startSymbol('[[');
        $interpolateProvider.endSymbol(']]');
    }]);


})(this, jQuery, angular);
;var App = angular.module('hexAngular');

/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* Auto Complete Directive -
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
App.directive('autoComplete', function($rootScope) {
    'use strict';

    return {
        restrict: 'A',
        templateUrl: '/static/partials/hex_angular/auto_complete/auto_complete.html',
        replace: true,
        scope: {
            terms: '=',
            filteredTerms: '=',
            selectedTerms: '=',
            placeholder: '@',
            maxTerms: '@',
            render: '@'
        },

        link: function($scope, $element, $attrs) {

            // jquery elements
            var $input = $element.find('input');

            // properties
            var active = false,
                suppressKeyPressRepeat = false;

            // scope data
            $scope.autocomplete = {
                'search': ''
            };

            $scope.state = {
                'activeTermIndex': 0,
                'active': false
            };

            // wait for tags data before intialization
            $scope.$watch('terms', function(terms, oldValue) {

                if (terms && terms.length > 0) {
                    initialize();
                }
            });

            /* initialize -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function initialize() {

                // set render to true by default
                $scope.render = ($attrs['render'] && $attrs['render'] == 'false') ? false : true;

                createEventHandlers();
            }

            /* createEventHandlers -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function createEventHandlers() {

                $scope.$on('auto-complete:clear-search', function() {

                    clearFilteredTerms();
                });

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
                    $scope.state.active = active;
                });
            }

            /* search - return array of filtered results based on search string
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function search(searchString) {

                var filteredResults = [];
                var termCount = 0;

                if (searchString.trim() !== '') {

                    searchString = searchString.toLowerCase();

                    // search terms and return filtered
                    filteredResults = $scope.terms.filter(function(term) {

                        // found
                        if (term.toLowerCase().indexOf(searchString) >= 0 && !Object.has($scope.selectedTerms, term) && termCount < $scope.maxTerms) {
                            termCount++;
                            return true;
                        }

                        return false;
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
                        // hide();
                        break;

                    default:
                        filterTerms($scope.autocomplete.search);
                }
                e.preventDefault();
            }

            /* move - cycle active selection through filtered terms
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function move(e) {

                if (!active || !$scope.render) {
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
            function selectNext() {

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
            function selectPrevious() {

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

                $scope.$emit('auto-complete:select', activeTerm);

                clearFilteredTerms();
            }

            /* clearFilteredTerms - clear filtered terms
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function clearFilteredTerms() {

                active = false;

                $rootScope.safeApply(function() {
                    $scope.autocomplete.search = '';
                    $scope.filteredTerms = [];
                    $scope.state.active = false;
                });
            }

            /* Scope Methods
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            $scope.setActive = setActive;
            $scope.selectTerm = selectTerm;
        }
    };

});
;var App = angular.module('hexAngular');

/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* Content Gallery Directive -
* Requires Modernizr detect: cssanimations
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
App.directive('contentGallery', function($rootScope, $timeout, $q, $animate) {
    'use strict';

    return {
        restrict: 'A',
        templateUrl: '/static/partials/hex_angular/content_gallery/content_gallery.html',
        replace: false,
        scope: {
            smallImageList: '=',
            mediumImageList: '=',
            largeImageList: '=',
            thumbnailImageList: '=',

            thumbnailWidth: '@',
            thumbnailHeight: '@',

            smallWidth: '@',
            mediumWidth: '@',
            largeWidth: '@'
        },

        link: function($scope, $element, $attrs) {

            // contants
            var DEBOUNCE_TIME = 350,                // time to delay keydown fire event
                SCROLL_MARGIN = 15,                 // margin below height overflow images
                SWIPE_VELOCITY = 0.4,               // swipe left/right activation velocity
                DRAG_DISTANCE_THRESHOLD = 20;       // distance before dragging overrides tap

            // properties
            var frameID = null,
                animationFrame = new AnimationFrame(60),
                ctrlModifier = false,
                slideInTransition = false,
                cssanimations = false,
                lastDelta = 0,
                disableSlideNavigation = false,
                currentGallerySize = null,

                windowHeight = 0,
                activeHeight = 0,
                currentSlide = null;

            // promises
            var smallImagesDeferred = $q.defer(),
                mediumImagesDeferred = $q.defer(),
                largeImagesDeferred = $q.defer(),
                thumbnailImagesDeferred = $q.defer();

            // functions
            var throttledKeydownHandler = keydownHandler.throttle(DEBOUNCE_TIME);

            // jquery elements
            var $htmlRoot = $('html'),
                $contentGallery = $element,
                $galleryContainer = $element.find('.gallery-container'),
                $slideContainer = $element.find('.slide-container'),
                $activeSlide = null;

            // scope data
            $scope.imageList = [];
            $scope.embeddedList = [];
            $scope.fullscreenList = [];

            $scope.state = {
                'fullscreen': false,
                'transitions': true,
                'slideActive': false,
                'slideCount': 0,
                'currentSlideIndex': -1,
                'slideContainerWidth': 0,
                'slideWidth': 0
            };

            $scope.slideContainerStyle = {};
            $scope.galleryContainerStyle = {};
            $scope.galleryInterfaceStyle = {};
            $scope.slideStyle = {};

            initialize();

            /* initialize -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function initialize() {

                console.log('init content gallery');

                // watch: smallImageList
                $scope.$watch('smallImageList', function(smallImageList, oldValue) {

                    // if smallImageList is string
                    if (typeof smallImageList === 'string') {
                        $scope.smallImageList = parseImageListString(smallImageList);
                    }
                    smallImagesDeferred.resolve();
                });

                // watch: mediumImageList
                $scope.$watch('mediumImageList', function(mediumImageList, oldValue) {

                    // if mediumImageList is string
                    if (typeof mediumImageList === 'string') {
                        $scope.mediumImageList = parseImageListString(mediumImageList);
                    }
                    mediumImagesDeferred.resolve();
                });

                // watch: largeImageList
                $scope.$watch('largeImageList', function(largeImageList, oldValue) {

                    // if largeImageList is string
                    if (typeof largeImageList === 'string') {
                        $scope.largeImageList = parseImageListString(largeImageList);
                    }
                    largeImagesDeferred.resolve();
                });

                // watch: thumbnailImageList
                $scope.$watch('thumbnailImageList', function(thumbnailImageList, oldValue) {

                    // if thumnailList is string
                    if (typeof thumbnailImageList === 'string') {
                        $scope.thumbnailImageList = parseImageListString(thumbnailImageList);
                    }
                    thumbnailImagesDeferred.resolve();
                });

                // wait for all promises to resolve
                $q.all([smallImagesDeferred.promise, mediumImagesDeferred.promise, largeImagesDeferred.promise, thumbnailImagesDeferred.promise]).then(function(arrayOfResults) {

                    renderContentGallery();
                });
            }

             /* createEventHandlers -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function createEventHandlers() {

                // window: resized
                $(window).on('resize', function(e) {
                    resizeUpdate();
                });

                // window: keyup
                $(window).on('keydown', function(e) {
                    throttledKeydownHandler(e.which);
                });

                // window: keyup
                $(window).on('keyup', function(e) {

                    disableSlideNavigation = false;

                    // reset throttle
                    throttledKeydownHandler = keydownHandler.throttle(DEBOUNCE_TIME);

                    // ctrl
                    if (e.which === 17) {
                        ctrlModifier = false;

                    // escape
                    } else if (e.which === 27) {

                        $rootScope.safeApply(function() {
                            disableFullscreen();
                        });
                    }
                });

                // content gallery: mousedown
                $contentGallery.on('mousedown', function(e) {
                    disableSlideNavigation = false;
                });

                // content gallery: drag
                $contentGallery.hammer().on('drag', function(e) {

                    if ($scope.state.fullscreen) {

                        var delta = e.gesture.deltaY;

                        frameID = animationFrame.request(function(time) {
                            scrollCurrentSlideBy(delta);
                        });

                        e.gesture.preventDefault();
                    }
                });

                // content gallery: drag end
                $contentGallery.hammer().on('dragend', function(e) {

                    if ($scope.state.fullscreen) {

                        // disable slide navigation if drag distance greater than threshold
                        if (e.gesture.distance > DRAG_DISTANCE_THRESHOLD) {
                            disableSlideNavigation = true;
                        }
                        lastDelta = 0;

                        e.gesture.preventDefault();
                    }
                });

                // content gallery: tap
                $contentGallery.hammer().on('tap', function(e) {
                    disableSlideNavigation = false;
                });

                // content gallery: tap
                $contentGallery.hammer().on('release', function(e) {
                    disableSlideNavigation = false;
                });

                // content gallery: swipeleft
                $contentGallery.hammer({'swipe_velocity': SWIPE_VELOCITY}).on('swipeleft', function(e) {
                    $rootScope.safeApply(function() {
                        nextSlide();
                    });
                });

                // content gallery: swiperight
                $contentGallery.hammer({'swipe_velocity': SWIPE_VELOCITY}).on('swiperight', function(e) {
                    $rootScope.safeApply(function() {
                        previousSlide();
                    });
                });

                // slideContainer: transitionend
                $slideContainer.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd msTransitionEnd', function() {
                    slideInTransition = false;
                });

                // thumbnail-gallery:set-active
                $scope.$on('thumbnail-gallery:set-active', function(e, index) {
                    setActiveSlide(index, false);
                });

                // content-tabs:tab-active - when content-tab directive active state changes update gallery
                $scope.$on('content-tabs:tab-active', function(e, index) {
                    resizeUpdate();
                });

                // imageViewer: mousewheel
                $contentGallery.bind('mousewheel', handleMouseWheelEvent);
            }

            /* parseImageListString -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function parseImageListString(imageListString) {

                var imageURLs = imageListString.split(',');
                var imageObjectList = [];

                imageURLs.each(function(url) {

                    if (url) {
                        imageObjectList.push({'url': url});
                    }
                });

                return imageObjectList;
            }

            /* renderContentGallery -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function renderContentGallery() {

                createEventHandlers();

                // set window height
                windowHeight = $(window).height();

                // convert to integer
                $scope.thumbnailHeight = parseInt($scope.thumbnailHeight, 10);
                $scope.thumbnailWidth = parseInt($scope.thumbnailWidth, 10);

                // modernizr detect cssanimations
                if ($htmlRoot.hasClass('cssanimations')) {
                    cssanimations = true;
                }

                // calculate container and slide width
                $scope.state.slideCount = $scope.largeImageList.length;
                $scope.state.slideContainerWidth = $scope.state.slideCount * 100;
                $scope.state.slideWidth = 100 / $scope.state.slideCount;

                // apply basic gallery styles
                $scope.slideContainerStyle = {
                    'width': $scope.state.slideContainerWidth + '%'
                };
                $scope.galleryInterfaceStyle = {
                    'bottom': $scope.thumbnailHeight + 'px'
                };
                $scope.slideStyle = {
                    'width': $scope.state.slideWidth + '%'
                };

                // load gallery
                loadGallery(0);
            }

            /* loadGallery -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function loadGallery(activeIndex) {

                var currentGallerySize = getGallerySize($scope.state.fullscreen);

                $scope.imageList = getImageList(currentGallerySize, $scope.state.fullscreen);

                // load images
                $scope.imageList.each(function(image, index) {
                    loadImage(image, index, activeIndex);
                });
            }

            /* loadImage
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function loadImage(image, index, activeIndex) {

                var loadedImage = new Image();
                loadedImage.src = image.url;

                // on image load
                loadedImage.onload = function() {

                    // set image properties
                    image.width = loadedImage.width;
                    image.height = loadedImage.height;
                    image.loaded = true;
                    image.yPos = 0;
                    image.atTop = true;
                    image.atBottom = false;

                    // get original url
                    image.original = getOriginalURL(image.url);

                    // set active image once first image has loaded
                    if (index === activeIndex) {

                        // wait for image to render on page
                        $timeout(function() {

                            // set slide to active state
                            $scope.state.slideActive = true;
                            setActiveSlide(activeIndex, true);

                        }, 500);
                    }
                };
            }

            /* getOriginalURL -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function getOriginalURL(imageURL) {

                var originalURL = '';

                var urlParts = imageURL.split('/');
                var extensionParts = imageURL.split('.');

                originalURL = [urlParts[0], urlParts[1], urlParts[2], urlParts[4], urlParts[5]].join('/');

                // add extension
                originalURL += '.' + extensionParts[extensionParts.length - 1];

                return originalURL;
            }

            /* getImageList -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function getImageList(gallerySize, fullscreen) {

                var imageList = null;

                switch(gallerySize) {

                    case 'small':
                        imageList = $scope.smallImageList;
                        break;

                    case 'medium':
                        imageList = $scope.mediumImageList;
                        break;

                    case 'large':
                        imageList = $scope.largeImageList;
                        break;
                }

                return imageList;
            }

            /* getGallerySize -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function getGallerySize(fullscreen) {

                // get usable width
                var usableWidth = $contentGallery.width();
                if (fullscreen) {
                    usableWidth = $(window).width();
                }

                var smallWidth = parseInt($scope.smallWidth, 10),
                    mediumWidth = parseInt($scope.mediumWidth, 10),
                    largeWidth = parseInt($scope.largeWidth, 10);

                var imageSize = null;

                // no width (must be hidden)
                if (usableWidth === 0) {

                    // if current gallery size defined, use it
                    if (currentGallerySize) {
                        imageSize = currentGallerySize;

                    // otherwise use large
                    } else {
                        imageSize = 'large';
                    }

                // small
                } else if (usableWidth <= smallWidth) {
                    imageSize = 'small';

                // medium
                } else if (usableWidth <= mediumWidth) {
                    imageSize = 'medium';

                // large
                } else {
                    imageSize = 'large';
                }

                return imageSize;
            }

            /* resizeUpdate
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function resizeUpdate() {

                // update window height
                windowHeight = $(window).height();

                var gallerySize = getGallerySize($scope.state.fullscreen);

                // load new gallery
                if (gallerySize !== currentGallerySize) {

                    currentGallerySize = gallerySize;

                    loadGallery($scope.state.currentSlideIndex);
                }

                $timeout(function() {
                    setGalleryHeight();
                }, 500);
            }

            /* keydownHandler
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function keydownHandler(key) {

                if (key === 17) {
                    // reset throttle
                    throttledKeydownHandler = keydownHandler.throttle(DEBOUNCE_TIME);
                    ctrlModifier = true;
                }

                // previous slide
                if (key === 37) {
                    $rootScope.safeApply(function() {
                        if (ctrlModifier) {
                            setActiveSlide(0);
                        } else {
                            previousSlide();
                        }
                    });

                // next slide
                } else if (key === 39) {
                    $rootScope.safeApply(function() {
                        if (ctrlModifier) {
                            setActiveSlide($scope.state.slideCount - 1);
                        } else {
                            nextSlide();
                        }
                    });
                }
            }

            /* setActiveSlide -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function setActiveSlide(index, emitEvent) {

                if (disableSlideNavigation) return;

                lastDelta = 0;

                // emit event by default
                emitEvent = (typeof emitEvent === 'undefined' || emitEvent) ? true : false;

                // set active if index greater than -1, less than imageList length, and image at index is loaded
                if (index > -1 && index < $scope.imageList.length && $scope.imageList[index].loaded) {

                    if (cssanimations) {
                        slideInTransition = true;
                    }

                    // save current index
                    $scope.state.currentSlideIndex = index;

                    // set active slide
                    $activeSlide = $slideContainer.find('.slide-' + index);

                    // set current slide
                    currentSlide = $scope.imageList[index];

                    // set slide container horizontal position
                    scrollToActiveSlide(index);

                    // broadcast active selection
                    if (emitEvent) {
                        $scope.$broadcast('content-gallery:set-active', index);
                    }
                }
            }

            /* scrollToActiveSlide -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function scrollToActiveSlide() {

                // calculate translation amount
                var xPosition = $scope.state.currentSlideIndex * $scope.state.slideWidth,
                    translateType = '%';

                // use different xPosition method for mobile
                if (typeof window.orientation !== 'undefined') {
                    xPosition = $activeSlide.position().left;
                    translateType = 'px';
                }

                // apply transform/width styles
                $scope.slideContainerStyle = {
                    'width': ($scope.state.slideCount * 100) + '%',
                    '-webkit-transform': 'translate3d(' + -xPosition + translateType + ', 0px, 0px)',
                    '-moz-transform': 'translate3d(' + -xPosition + translateType + ', 0px, 0px)',
                    '-ms-transform': 'translate(' + -xPosition + translateType + ', 0px)',
                    '-o-transform': 'translate3d(' + -xPosition + translateType + ', 0px, 0px)',
                    'transform': 'translate3d(' + -xPosition + translateType + ', 0px, 0px)'
                };

                setGalleryHeight();

                resetScroll();
            }

            /* setGalleryHeight - set gallery height based on active slide height
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function setGalleryHeight() {

                if (!$activeSlide) return;

                // get active slide element
                windowHeight = $(window).height();
                activeHeight = $activeSlide.height();

                if (activeHeight <= 0) return;

                var galleryStyles = {};

                // fullscreen
                if ($scope.state.fullscreen) {

                    var fullScreenWindowHeight = windowHeight - $scope.thumbnailHeight;

                    var topPadding = 0;

                    if (!isImageTallerThanWindow()) {
                        topPadding = (fullScreenWindowHeight - activeHeight) / 2;
                    }

                    // gallery styles
                    galleryStyles = {
                        'height': fullScreenWindowHeight + 'px',
                        '-webkit-transform': 'translate3d(0px, ' + topPadding + 'px, 0px)',
                        '-moz-transform': 'translate3d(0px, ' + topPadding + 'px, 0px)',
                        '-ms-transform': 'translate(0px, ' + topPadding + 'px)',
                        '-o-transform': 'translate3d(0px, ' + topPadding + 'px, 0px)',
                        'transform': 'translate3d(0px, ' + topPadding + 'px, 0px)'
                    };

                // embedded
                } else {

                    // gallery styles
                    galleryStyles.height = activeHeight + 'px';
                }

                // set styles
                $scope.galleryContainerStyle = galleryStyles;
            }

            /* extractDelta - get mouse wheel delta
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function extractDelta(e) {

                if (e.wheelDelta) {
                    return e.wheelDelta;
                }

                if (e.originalEvent.detail) {
                    return e.originalEvent.detail * -40;
                }

                if (e.originalEvent && e.originalEvent.wheelDelta) {
                    return e.originalEvent.wheelDelta;
                }
            }

            /* handleMouseWheelEvent - handle mouse scroll event
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function handleMouseWheelEvent(e) {

                // only for fullscreen mode
                if ($scope.state.fullscreen) {
                    var delta = extractDelta(e);
                    lastDelta = 0;

                    // reduce delta
                    delta = delta / 3;

                    // set new scroll position
                    scrollCurrentSlideBy(delta);
                }
            }

            /* scrollCurrentSlideBy - add delta to current vertical position
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function scrollCurrentSlideBy(delta) {

                var yPosition = currentSlide.yPos;

                yPosition += delta - lastDelta;

                lastDelta = delta;

                // scroll slide to new yPosition
                scrollCurrentSlideTo(yPosition);
            }

            /* scrollCurrentSlideByTo - set new vertical position
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function scrollCurrentSlideTo(yPosition) {

                var negativeScrollLimit = windowHeight - activeHeight - SCROLL_MARGIN - $scope.thumbnailHeight;

                $rootScope.safeApply(function() {

                    currentSlide.atBottom = false;
                    currentSlide.atTop = false;

                    // restrict scroll down amount
                    if (yPosition <= negativeScrollLimit) {
                        yPosition = negativeScrollLimit;
                        currentSlide.atBottom = true;
                        currentSlide.atTop = false;
                    }

                    // restrict scroll up amount
                    if (yPosition >= 0) {
                        yPosition = 0;
                        currentSlide.atBottom = false;
                        currentSlide.atTop = true;
                    }
                });

                currentSlide.yPos = yPosition;

                // apply styles
                $activeSlide.css({
                    '-webkit-transform': 'translate3d(0px, ' + yPosition + 'px, 0px)',
                    '-moz-transform': 'translate3d(0px, ' + yPosition + 'px, 0px)',
                    '-ms-transform': 'translate(0px, ' + yPosition + 'px)',
                    '-o-transform': 'translate3d(0px, ' + yPosition + 'px, 0px)',
                    'transform': 'translate3d(0px, ' + yPosition + 'px, 0px)'
                });
            }

            /* isImageTallerThanWindow - return true if image height larger than current window height
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function isImageTallerThanWindow() {

                if ($activeSlide) {

                    var $image = $activeSlide.find('img');

                    var imageHeight = $image.height();

                    return (imageHeight > windowHeight - $scope.thumbnailHeight);
                }
            }

            /* resetScroll - reset scroll position to 0
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function resetScroll() {

                lastDelta = 0;
                scrollCurrentSlideTo(0);
            }

            /* nextSlide -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function nextSlide() {
                setActiveSlide($scope.state.currentSlideIndex + 1);
            }

            /* previousSlide -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function previousSlide() {
                setActiveSlide($scope.state.currentSlideIndex - 1);
            }

            /* scrollUp - scroll up in fixed increment
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function scrollUp() {
                scrollCurrentSlideBy(100);
                lastDelta = 0;
            }

            /* scrollDown - scroll down in fixed increment
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function scrollDown() {
                scrollCurrentSlideBy(-100);
                lastDelta = 0;
            }

            /* enableFullscreen -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function enableFullscreen() {

                if ($scope.state.fullscreen) return;

                $htmlRoot.addClass('overflow-hidden');
                $scope.state.fullscreen = true;

                // load gallery
                loadGallery($scope.state.currentSlideIndex);
            }

            /* disableFullscreen -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function disableFullscreen() {

                if (!$scope.state.fullscreen) return;

                $htmlRoot.removeClass('overflow-hidden');
                $scope.state.fullscreen = false;

                // load gallery
                loadGallery($scope.state.currentSlideIndex);
            }

            /* disableTransitions -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function disableTransitions(time) {

                // disable transitions
                $scope.state.transitions = false;

                // renabled after delay
                $timeout(function() {
                    $scope.state.transitions = true;
                }, time);
            }

            /* Scope Methods
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            $scope.setActiveSlide = setActiveSlide;
            $scope.nextSlide = nextSlide;
            $scope.previousSlide = previousSlide;
            $scope.scrollUp = scrollUp;
            $scope.scrollDown = scrollDown;
            $scope.isImageTallerThanWindow = isImageTallerThanWindow;
            $scope.enableFullscreen = enableFullscreen;
            $scope.disableFullscreen = disableFullscreen;
        }
    };
});
;var App = angular.module('hexAngular');

/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* Image Editor Directive -
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
App.directive('imageEditor', function($rootScope, $http, $timeout, Utilities) {
    'use strict';

    return {
        restrict: 'A',
        templateUrl: '/static/partials/hex_angular/image_editor/image_editor.html',
        replace: true,
        scope: {
            imageSource: '=',
            mode: '@',
            hideControls: '@',
            saveMode: '@',
            aspectX: '=',
            aspectY: '=',
            minWidth: '=',
            minHeight: '='
        },

        link: function($scope, $element, $attrs) {

            // constants
            var X_OFFSET   = 0,
                Y_OFFSET   = 0,
                MIN_HEIGHT = 10,
                MIN_WIDTH  = 10,
                RESIZE_GUIDES_MIN_SIZE = 20,
                RESIZE_HANDLE_SIZE = 15,
                SCROLL_PADDING = 50,

                MOVE = 'move',
                CREATE = 'create',

                N_RESIZE = 'n-resize',
                E_RESIZE = 'e-resize',
                S_RESIZE = 's-resize',
                W_RESIZE = 'w-resize',

                NE_RESIZE = 'ne-resize',
                SE_RESIZE = 'se-resize',
                SW_RESIZE = 'sw-resize',
                NW_RESIZE = 'nw-resize';

            // properties
            var frameID = null,
                animationFrame = new AnimationFrame(60),
                cropActiveTimeout = null,
                mouseMoveAction = null;

            // jquery elements
            var $image = $element.find('.image');

            // data
            var image = null;

            // scope data
            $scope.state = {
                cropActive: false,
                guidesActive: false,
                // if true - bring in handle to prevent overscroll bug
                cropAtBottomEdge: false,
                cropAtRightEdge: false,
                movingSelection: false,
                hideControls: ($attrs.hideControls && $attrs.hideControls === 'true') ? true : false
            };

            $scope.crop = {

                // the real origin point, used so drawing a selection 'behind' the origin works correctly
                x: 0,
                y: 0,

                // the origin point used to control crop selection style
                cropX: 0,
                cropY: 0,

                // the real dimensions, used for resizing 'behind'
                width: 0,
                height: 0,

                // the dimensions used to control crop selection style
                cropWidth: 0,
                cropHeight: 0,

                moveOriginX: 0,
                moveOriginY: 0
            };

            $scope.imageEditor = {
                progress: false,
                aspectRatio: 0,
                aspectX: 0,
                aspectY: 0,
                minWidth: 0,
                minHeight: 0
            };

            $scope.image = {
                width: 0,
                height: 0,
                uploading: false
            };

            // styles
            $scope.editorContainerStyle = {};

            $scope.imageStyle = {};
            $scope.cropStyle = {};

            // jquery elements
            var $imageEditor = $element.find('.image-editor'),
                $crop        = $element.find('.crop-selection'),
                $cropOverlay = $element.find('.crop-overlay');


            initialize();
            createEventHandlers();


            /* createEventHandlers - handles angular events
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function createEventHandlers() {

                // watch: imageSource
                $scope.$watch('imageSource', function(imageSource, oldValue) {

                    if (imageSource) {
                        renderImage(imageSource);
                    }
                });

                // watch: aspectX
                $scope.$watch('aspectX', function(aspectX, oldValue) {
                    setParameters();
                });

                // watch: aspectY
                $scope.$watch('aspectY', function(aspectX, oldValue) {
                    setParameters();
                });

                // watch: state.cropActive
                $scope.$watch('state.cropActive', function(cropActive, oldValue) {
                    $rootScope.$broadcast('image-editor:crop-active-changed', cropActive);
                });

                // event: show-image-editor
                $scope.$on('image-editor:show-image-editor', function(e) {
                    showImageEditor();
                });

                // render cropped image
                $scope.$on('image-editor:save-edited-image', function(e) {
                    saveImage();
                });

                // close image editor
                $scope.$on('image-editor:hide-image-editor', function(e) {
                    hideImageEditor();
                });

                // load pasted image
                $scope.$on('image-editor:image-pasted', function(e, pasteProperties) {
                    renderImage(pasteProperties.source);
                });

                // edit uploaded iamge
                $scope.$on('image-editor:edit-image', function(e, imageSource) {
                    renderImage(imageSource);
                });

                // event: image-saved
                $scope.$on('image-editor:image-saved', function(e, data) {
                    disableEditor();
                });

                // event: image-editor:config-updated
                $scope.$on('image-editor:config-updated', function(e, config) {

                    console.log('config updated');
                });

                // event: image-editor:increase-dimensions
                $scope.$on('image-editor:increase-dimensions', function(e, dimensions) {

                    var crop = {
                        'x': $scope.crop.cropX,
                        'y': $scope.crop.cropY,
                        'width': $scope.crop.cropWidth + dimensions.width,
                        'height': $scope.crop.cropHeight + dimensions.height
                    };

                    updateCropSelection(crop);
                });

                // imageEditor: mousewheel - scroll image position
                $imageEditor.mousewheel(function(event, delta, deltaX, deltaY) {

                });

                // imageEditor: mouseup - stop selection
                $(document).on('mouseup', function(e) {

                    $('body').removeClass('disable-selection');

                    mouseMoveAction = null;

                    // update new original origin and dimensions after crop resize complete
                    $rootScope.safeApply(function() {

                        $scope.crop.x = $scope.crop.cropX;
                        $scope.crop.y = $scope.crop.cropY;

                        $scope.crop.width = $scope.crop.cropWidth;
                        $scope.crop.height = $scope.crop.cropHeight;
                    });

                    $crop.removeClass('drag');

                    if ($scope.crop.width === 0 || $scope.crop.height === 0) {
                        $cropOverlay.removeClass('active');
                        $crop.removeClass('active');
                    }
                });

                // event: mousemove
                $(document).on('mousemove', function(e) {

                    var offset = $element.offset(),
                        mouseX = e.pageX - offset.left + $imageEditor.scrollLeft(),
                        mouseY = e.pageY - offset.top + $imageEditor.scrollTop();

                    $timeout.cancel(cropActiveTimeout);

                    // process mouse move
                    processMouseMove(mouseX, mouseY);
                });

                // $image: resize
                $image.resize(function(e) {

                    // get image width
                    $scope.$emit('image-editor:image-width-updated', $image.width());
                });
            }

            /**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            /* initialize -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function initialize() {
                setParameters();
            }

            /* setParameters -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function setParameters() {

                // extend defaults
                Utilities.extendSettings($scope.imageEditor, $scope);

                // update aspect ratio
                calculateAspectRatio();
            }

            /* calculateAspectRatio -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function calculateAspectRatio() {
                $scope.imageEditor.aspectRatio = parseInt($scope.imageEditor.aspectX, 10) / parseInt($scope.imageEditor.aspectY, 10);
            }

            /* showImageEditor -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function showImageEditor() {
                enableEditor();
            }

            /* hideImageEditor -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function hideImageEditor() {
                disableEditor();
            }

            /* renderImage - set image background url from source url
            * source - source url created from data blob
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function renderImage(source) {

                enableEditor();
                $scope.imageEditor.progress = true;

                image = new Image();
                image.src = source;

                // on image load
                image.onload = function() {

                    $rootScope.safeApply(function() {

                        $scope.imageEditor.progress = false;
                        $scope.image.width = image.width;
                        $scope.image.height = image.height;

                        // set style
                        $scope.editorContainerStyle['max-height'] = image.height + SCROLL_PADDING + 'px';

                        $scope.imageStyle['background-image'] = 'url(' + source + ')';
                        $scope.imageStyle['width'] = image.width;
                        $scope.imageStyle['height'] = image.height;
                    });
                };
            }

            /* enableEditor - activate image editor
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function enableEditor() {
                $element.removeClass('inactive');

                $rootScope.$broadcast('image-editor:enabled', {});
            }

            /* disableEditor - deactivate image editor
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function disableEditor() {

                $scope.imageEditor.progress = false;
                $element.addClass('inactive');

                $scope.imageStyle['background-image'] = '';
                $scope.imageStyle['width'] = '0px';
                $scope.imageStyle['height'] = '0px';

                $scope.cropStyle = {};

                $scope.editorContainerStyle = {};

                $scope.state.cropActive = false;
                $scope.state.guidesActive = false;

                $rootScope.$broadcast('image-editor:disabled', {});
            }

            /* startCropSelection - draw out initial crop selection
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function startCropSelection(e) {

                $('body').addClass('disable-selection');

                mouseMoveAction = CREATE;
                $scope.state.movingSelection = false;

                clearSelectionDimensions();

                var offset = $element.offset(),
                    mouseX = e.pageX - offset.left + $imageEditor.scrollLeft(),
                    mouseY = e.pageY - offset.top + $imageEditor.scrollTop();

                setSelectionOrigin(mouseX, mouseY);
            }

            /* moveCropSelection - reposition crop origin x,y
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function moveCropSelection(e) {

                $('body').addClass('disable-selection');

                mouseMoveAction = MOVE;
                $scope.state.movingSelection = true;

                $crop.addClass('drag');

                var offset = $crop.offset(),
                    mouseX = e.pageX - offset.left,
                    mouseY = e.pageY - offset.top;

                $scope.crop.moveOriginX = mouseX;
                $scope.crop.moveOriginY = mouseY;

                e.stopPropagation();
            }

            /* processMouseMove - handle mouse move event with current mouse x,y position
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function processMouseMove(mouseX, mouseY) {

                // truncate mouseX, mouseY to 0,0
                if (mouseX < 0) {
                    mouseX = 0;
                }
                if (mouseY < 0) {
                    mouseY = 0;
                }

                var cropHeight = $scope.crop.height,
                    cropWidth = $scope.crop.width;

                // if aspect ratio enabled use image width/height for the selection crop width/height
                if ($scope.imageEditor.aspectX !== 0 && $scope.imageEditor.aspectY !== 0) {
                    cropHeight = $scope.image.height;
                    cropWidth = $scope.image.width;
                }

                switch(mouseMoveAction) {

                    case MOVE:
                        var cropMouseX = mouseX - $scope.crop.moveOriginX,
                            cropMouseY = mouseY - $scope.crop.moveOriginY;

                        setSelectionOrigin(cropMouseX, cropMouseY);

                        break;

                    case CREATE:
                        createCropSelection($scope.crop.x,
                                            $scope.crop.y,
                                            mouseX - $scope.crop.x,
                                            mouseY - $scope.crop.y);

                        break;

                    case N_RESIZE:
                        var reduceHeight = $scope.crop.y - mouseY;
                        createCropSelection($scope.crop.x,
                                            mouseY,
                                            cropWidth,
                                            $scope.crop.height + reduceHeight);

                        break;

                    case W_RESIZE:
                        var reduceWidth = $scope.crop.x - mouseX;
                        createCropSelection(mouseX,
                                            $scope.crop.y,
                                            $scope.crop.width + reduceWidth,
                                            cropHeight);
                        break;

                    case S_RESIZE:
                        createCropSelection($scope.crop.x,
                                            $scope.crop.y,
                                            cropWidth,
                                            mouseY - $scope.crop.y);
                        break;

                    case E_RESIZE:
                        createCropSelection($scope.crop.x,
                                            $scope.crop.y,
                                            mouseX - $scope.crop.x,
                                            cropHeight);
                        break;

                }
            }

            /* createCropSelection - set origin point, width/height of crop selection
            * x, y - crop origin point
            * width, height - selection width, height
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function createCropSelection(x, y, width, height) {

                var crop = {
                    x: x,
                    y: y,
                    width: width,
                    height: height
                };

                // update dimensions
                var dimensions = constrainCropDimensions(crop.x, crop.y, crop.width, crop.height);
                crop.width = dimensions.width;
                crop.height = dimensions.height;

                // create selection and handle negative width/height
                crop = calculateCropDimensions(crop.x, crop.y, crop.width, crop.height);

                // contrain crop origin
                var origin = constrainCropOrigin(crop.x, crop.y, crop.width, crop.height);
                crop.x = origin.x;
                crop.y = origin.y;

                // draw crop selection
                updateCropSelection(crop);
            }

            /* constrainCropDimensions - constrain crop width/height to aspect and image boundary
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function constrainCropDimensions(x, y, width, height) {

                // min width
                if ($scope.imageEditor.minWidth !== 0) {
                    if (width < $scope.imageEditor.minWidth) {
                        width = $scope.imageEditor.minWidth;
                    }
                }
                // min height
                if ($scope.imageEditor.minHeight !== 0) {
                    if (height < $scope.imageEditor.minHeight) {
                        height = $scope.imageEditor.minHeight;
                    }
                }

                var maxDimensions = getMaxDimensionsForOrigin(x, y, width, height);

                var dimensions = {
                    'width': maxDimensions.width,
                    'height': maxDimensions.height
                };

                return dimensions;
            }

            /* getMaxDimensionsForOrigin - bounding box is either image dimensions or current mouse x,y boundary whichever is lesser
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function getMaxDimensionsForOrigin(cropOriginX, cropOriginY, mouseX, mouseY) {

                var imageBoundary = {
                    'width': $scope.image.width - cropOriginX,
                    'height': $scope.image.height - cropOriginY
                };

                // absolute dimension limits, use either image boundary or mouse boundary individually
                var maxDimensions = {
                    'width': (imageBoundary.width > mouseX) ? mouseX : imageBoundary.width,
                    'height': (imageBoundary.height > mouseY) ? mouseY : imageBoundary.height
                };

                var dimensions = {
                    'width': maxDimensions.width,
                    'height': maxDimensions.height
                };

                // has aspect ratio enforcement
                if ($scope.imageEditor.aspectX !== 0 && $scope.imageEditor.aspectY !== 0) {

                    // get quadrant
                    /*
                        |----|
                        |4  1|
                        |3  2|
                        |----|
                    */
                    var quadrant = getQuadrant(maxDimensions.width, maxDimensions.height);

                    // get absolute value hypothetical dimensions
                    var hypotheticalDimensions = getHypotheticalDimensions(maxDimensions.width, maxDimensions.height);

                    // modify the hypothetical dimensions based on which quadrant we are in
                    switch(quadrant) {
                        case 1:
                            hypotheticalDimensions.height *= -1;
                            break;
                        case 2:
                            break;
                        case 3:
                            hypotheticalDimensions.width *= -1;
                            break;
                        case 4:
                            hypotheticalDimensions.width *= -1;
                            hypotheticalDimensions.height *= -1;
                            break;
                    }

                    // if width exceeds max possible width - set width to max width and set height to match aspect
                    if (Math.abs(hypotheticalDimensions.width) > Math.abs(maxDimensions.width)) {
                        dimensions.width = maxDimensions.width;
                        dimensions.height = hypotheticalDimensions.height;
                    }

                    // if height exceeds max possible height - set height to max height and set width to match aspect
                    if (Math.abs(hypotheticalDimensions.height) > Math.abs(maxDimensions.height)) {
                        dimensions.width = hypotheticalDimensions.width;
                        dimensions.height = maxDimensions.height;
                    }

                    // if mouseX or mouseY is 0 - set dimensions to 0
                    if (mouseX === 0 || mouseY === 0) {
                        dimensions.width = 0;
                        dimensions.height = 0;
                    }
                }

                dimensions.width = Math.floor(dimensions.width);
                dimensions.height = Math.floor(dimensions.height);

                return dimensions;
            }

            /* getQuadrant -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function getQuadrant(mouseX, mouseY) {
                /*
                |----|
                |4  1|
                |3  2|
                |----|
                */
                var quadrant = 1;

                // bottom-right
                if (mouseX > 0 && mouseY > 0) {
                    quadrant = 2;

                // bottom-left
                } else if (mouseX < 0 && mouseY > 0) {
                    quadrant = 3;

                // top-left
                } else if (mouseX < 0 && mouseY < 0) {
                    quadrant = 4;
                }

                return quadrant;
            }

            /* getHypotheticalDimensions -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function getHypotheticalDimensions(maxWidth, maxHeight) {

                var dimensions = {};

                var hypotheticalDimensions = {
                    // given the maxDimensions height find the width it would have to be to match aspect ratio
                    'width': Math.abs(maxHeight * $scope.imageEditor.aspectRatio),
                    // given the maxDimensions width find the height it would have to be to match aspect ratio
                    'height': Math.abs(maxWidth / $scope.imageEditor.aspectRatio)
                };

                return hypotheticalDimensions;
            }

            /* constrainCropOrigin - constrain to top/left image boundary
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function constrainCropOrigin(x, y, width, height) {

                // limit - minimum origin x, y
                if (x <= 0) {
                    x = 0;
                }
                if (y <= 0) {
                    y = 0;
                }

                var origin = {
                    'x': x,
                    'y': y
                };

                return origin;
            }

            /* calculateCropDimensions - create crop selection and handle negative width/height
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function calculateCropDimensions(x, y, width, height) {

                // invert if mouse position above or left of origin point
                // switch x with width or y with height
                if (width < 0) {
                    width *= -1;
                    x -= width;
                }
                if (height < 0) {
                    height *= -1;
                    y -= height;
                }

                var dimensions = {
                    'x': x,
                    'y': y,
                    'width': width,
                    'height': height
                };

                return dimensions;
            }

            /* updateCropSelection - draw crop selection and update state
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function updateCropSelection(crop) {

                // update origin/dimensions
                $scope.crop.cropX = crop.x;
                $scope.crop.cropY = crop.y;

                $scope.crop.cropWidth = crop.width;
                $scope.crop.cropHeight = crop.height;

                // update crop state
                $rootScope.safeApply(function() {

                    setHandleStatus();

                    // set style
                    $scope.cropStyle['left'] = crop.x;
                    $scope.cropStyle['top'] = crop.y;
                    $scope.cropStyle['width'] = crop.width;
                    $scope.cropStyle['height'] = crop.height;
                    $scope.cropStyle['background-position'] = -crop.x + 'px ' + -crop.y + 'px';

                    // cancel inactive timeout and set crop active
                    if (crop.width > MIN_WIDTH && crop.height > MIN_HEIGHT) {
                        $scope.state.cropActive = true;

                    // set to inactive after delay
                    } else {
                        cropActiveTimeout = $timeout(function() {
                            $scope.state.cropActive = false;
                        }, 250);
                    }

                    if (crop.width > RESIZE_GUIDES_MIN_SIZE && crop.height > RESIZE_GUIDES_MIN_SIZE) {
                        $scope.state.guidesActive = true;
                    } else {
                        $scope.state.guidesActive = false;
                    }
                });
            }


            /* setSelectionOrigin - set starting position of crop selection
            * x, y - mouse offset
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function setSelectionOrigin(x, y) {

                // limit
                if (x < 0) {
                    x = 0;
                }
                if ((x + $scope.crop.width) > $scope.image.width) {
                    x = $scope.image.width - $scope.crop.width;
                }
                if (y < 0) {
                    y = 0;
                }
                if ((y + $scope.crop.height) > $scope.image.height) {
                    y = $scope.image.height - $scope.crop.height;
                }

                $scope.crop.x = x;
                $scope.crop.y = y;

                $scope.crop.cropX = x;
                $scope.crop.cropY = y;

                $rootScope.safeApply(function() {

                    setHandleStatus();

                    $scope.cropStyle['left'] = x;
                    $scope.cropStyle['top'] = y;
                    $scope.cropStyle['background-position'] = -x + 'px ' + -y + 'px';
                });
            }

            /* setHandleStatus - set atBottom or atRight for south and east handles to prevent overflow bug
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function setHandleStatus() {

                var atBottomEdge = false,
                    atRightEdge = false;

                // set bottom/right edge status
                if (($scope.crop.cropX + $scope.crop.cropWidth) + RESIZE_HANDLE_SIZE >= $scope.image.width) {
                    atRightEdge = true;
                }
                if (($scope.crop.cropY + $scope.crop.cropHeight) + RESIZE_HANDLE_SIZE >= $scope.image.height) {
                    atBottomEdge = true;
                }

                $scope.state.cropAtRightEdge = atRightEdge;
                $scope.state.cropAtBottomEdge = atBottomEdge;
            }


            /* clearSelectionDimensions - remove crop selection width and height
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function clearSelectionDimensions() {

                $scope.crop.width = 0;
                $scope.crop.height = 0;

                $scope.state.cropActive = false;
                $scope.state.guidesActive = false;

                $rootScope.safeApply(function() {
                    $scope.cropStyle['width'] = '0px';
                    $scope.cropStyle['height'] = '0px';
                });
            }

            /* northResize -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function northResize(e) {
                $('body').addClass('disable-selection');
                mouseMoveAction = N_RESIZE;
                e.stopPropagation();
            }
            /* eastResize -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function eastResize(e) {
                $('body').addClass('disable-selection');
                mouseMoveAction = E_RESIZE;
                e.stopPropagation();
            }
            /* southResize -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function southResize(e) {
                $('body').addClass('disable-selection');
                mouseMoveAction = S_RESIZE;
                e.stopPropagation();
            }
            /* westResize -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function westResize(e) {
                $('body').addClass('disable-selection');
                mouseMoveAction = W_RESIZE;
                e.stopPropagation();
            }


            /* northEastResize -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function northEastResize(e) {
                mouseMoveAction = NE_RESIZE;
                e.stopPropagation();
            }
            /* southEastResize -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function southEastResize(e) {
                mouseMoveAction = SE_RESIZE;
                e.stopPropagation();
            }
            /* southWestResize -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function southWestResize(e) {
                mouseMoveAction = SW_RESIZE;
                e.stopPropagation();
            }
            /* northWestResize -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function northWestResize(e) {
                mouseMoveAction = NW_RESIZE;
                e.stopPropagation();
            }

            /* saveImage - crop and save image
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function saveImage() {

                $scope.imageEditor.progress = true;

                var canvas = null,
                    context = null;

                canvas = document.createElement('canvas');

                // get cropped image
                canvas.width = $scope.crop.width;
                canvas.height = $scope.crop.height;
                context = canvas.getContext('2d');
                context.drawImage(image, -$scope.crop.cropX, -$scope.crop.cropY);

                convertImage(canvas, $scope.saveMode);
            }

            /* convertImage - convert image from canvas to base64 or blob
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function convertImage(canvas, saveMode) {

                // base64
                if (saveMode === 'base64' && canvas.toDataURL) {

                    // compress image
                    var dataURL = canvas.toDataURL('image/jpeg', 0.90),
                        // strip header - uneeded for proper decode to image from base64
                        file = dataURL.replace('data:image/jpeg;base64,', '');

                    // emit save-event
                    $scope.$emit('image-editor:save-image', file);

                // blob
                } else if (canvas.toBlob) {

                    // convert canvas to blob
                    var blob = canvas.toBlob(function(file) {

                        // get file type
                        var fileComponents = $scope.imageSource.split('/'),
                            fileName = fileComponents[fileComponents.length - 1],
                            fileNameComponents = fileName.split('.'),
                            extension = fileComponents[fileNameComponents.length - 1];

                        var fileData = {
                            'file': file,
                            'fileName': fileName,
                            'extension': extension
                        };

                        // emit save-event
                        $scope.$emit('image-editor:save-image', fileData);
                    });

                } else {

                    // emit save-event
                    $scope.$emit('image-editor:save-image', false);
                }
            }


            /* Scope Methods
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            $scope.saveImage = saveImage;
            $scope.hideImageEditor = hideImageEditor;

            $scope.startCropSelection = startCropSelection;
            $scope.moveCropSelection = moveCropSelection;

            // resize methods
            $scope.northResize = northResize;
            $scope.eastResize = eastResize;
            $scope.southResize = southResize;
            $scope.westResize = westResize;
            $scope.northEastResize = northEastResize;
            $scope.southEastResize = southEastResize;
            $scope.southWestResize = southWestResize;
            $scope.northWestResize = northWestResize;
        }
    };
});
;var App = angular.module('hexAngular');

/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* Image Viewer Directive -
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
App.directive('imageViewer', function($rootScope) {
    'use strict';

    // constants
    var SCROLL_MARGIN = 15;

    return {
        restrict: 'A',
        templateUrl: '/static/partials/hex_angular/image_viewer/image_viewer.html',
        replace: true,
        scope: {
        },

        link: function($scope, $element, $attrs) {

            // jquery elements
            var $imageViewer = $element,
                $imageSlides = $element.find('.image-slides'),
                $currentSlide = $element.find('.current');

            // properties
            var mousedown = false,
                currentSlide = {
                    'x': 0,
                    'y': 0
                };

            // scope data
            $scope.imageViewer = {
                image: {
                    'url': null,
                    'width': 0,
                    'height': 0
                },
                open: false
            };

            createEventListeners();
            initialize();

            /**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            * initialize -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function initialize() {


                setImageViewerSize();
            }

            /* createEventListeners -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function createEventListeners() {

                // event-name listener
                $scope.$on('image-viewer:view-image', function(e, image) {
                    openImage(image);
                });

                // Slide image: click
                $imageSlides.on('click', '.image', function(e) {
                    e.stopPropagation();
                });

                // document: keyup
                $(document).on('keyup', function(e) {

                    // esc key
                    if (e.which === 27) {
                        closeImage();
                    }
                });

                // window: resize
                $(window).resize(setImageViewerSize);

                // imageViewer: mousewheel
                $element.bind('mousewheel', scrollSlideImage);
            }

            /* setImageViewerSize - handle window resize event
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function setImageViewerSize(e) {

                var imageViewerCSS = {
                    width : $(window).width(),
                    height : window.innerHeight ? window.innerHeight : $(window).height() // fix IOS bug
                };

                $imageViewer.css(imageViewerCSS);

                resetScroll();
            }

            /* scrollSlideImage - handle mouse scroll event
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function scrollSlideImage(e) {

                var $image = $currentSlide.find('img');

                // get window and image height
                var windowHeight = $(window).height();
                var imageHeight = $image.height();

                // skip if image not beyond window height
                if (isImageTallerThanWindow()) {

                    var delta = e.originalEvent.wheelDelta;

                    var negativeScrollLimit = windowHeight - imageHeight - SCROLL_MARGIN;

                    // add scroll direction to current y position
                    currentSlide.y += delta;

                    // restrict scroll down amount
                    if (currentSlide.y < negativeScrollLimit) {
                        currentSlide.y = negativeScrollLimit;
                    }

                    // restrict scroll up amount
                    if (currentSlide.y > SCROLL_MARGIN) {
                        currentSlide.y = SCROLL_MARGIN;
                    }

                    // set new scroll position
                    scrollCurrentSlide(currentSlide.y);

                // reset scroll position to default
                } else {
                    resetScroll();
                }
            }

            /* scrollCurrentSlide - move current slide vertical position
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function scrollCurrentSlide(yPosition) {

                $currentSlide.css({'top': yPosition + 'px'});
            }

            /* isImageTallerThanWindow - return true if image height larger than current window height
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function isImageTallerThanWindow() {

                var $image = $currentSlide.find('img');

                var windowHeight = $(window).height();
                var imageHeight = $image.height();

                return (imageHeight > windowHeight);
            }


            /* resetScroll - reset scroll position to either 0 or SCROLL_MARGIN
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function resetScroll() {

                var scrollPosition = SCROLL_MARGIN;

                if (isImageTallerThanWindow()) {
                    scrollPosition = SCROLL_MARGIN;
                } else {
                    scrollPosition = 0;
                }

                scrollCurrentSlide(scrollPosition);
            }

            /* closeImage -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function closeImage() {

                $('body').removeClass('overflow-hidden');

                $scope.imageViewer.open = false;
                $scope.imageViewer.image.url = null;
            }

            /* openImage -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function openImage(image) {

                $('body').addClass('overflow-hidden');

                loadImage(image.url);
            }

            /* loadImage -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function loadImage(url) {

                var image = new Image();
                image.src = url;

                // on image load
                image.onload = function() {

                    $rootScope.safeApply(function() {

                        $scope.imageViewer.image.width = image.width;
                        $scope.imageViewer.image.height = image.height;

                        $scope.imageViewer.open = true;
                        $scope.imageViewer.image.url = url;

                        // set current slide
                        $currentSlide = $element.find('.current');

                        resetScroll();
                    });
                };
            }

            /**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            * Scope Methods
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            $scope.closeImage = closeImage;
        }
    };
});
;var App = angular.module('hexAngular');

/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* Masonry Grid Directive -
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
App.directive('masonryGrid', function($rootScope, $q, $timeout, Utilities) {
    'use strict';

    // constants
    var LOAD_SPEED = 500;   // ms in between queue shifts

    return {
        restrict: 'A',
        replace: true,
        scope: true,

        link: function($scope, $element, $attrs) {

            // properties
            var intialized = false,
                queuePaused = false;

            // objects
            var gridItemsQueue = [];

            // functions
            var windowResizedDebounced = windowResized.debounce(250);

            // scope data
            $scope.gridItems = {};

            // jquery elements
            var $masonryGrid = $element.find('.masonry-grid-container');

            // default settings
            $scope.settings = {
                loadSpeed: LOAD_SPEED,
                order: '',
                sortAscending: true,
                gridWidth: 200,
                gutter: 10,
                mode: 'navigate'
            };

            // styles
            $scope.gridItemStyle = {
                'width': $scope.settings.gridWidth - $scope.settings.gutter
            };

            // state
            $scope.state = {
                'loading': false
            };

            initialize();
            createEventListeners();

            /* initialize -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function initialize() {

                // disable transitions for ie
                var isIE = Utilities.isIE();
                if (isIE) {
                    $masonryGrid.addClass('no-transition');
                }

                overrideDefaults();
                initializeIsotope();
            }

            /* overrideDefaults -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function overrideDefaults() {

                // override defaults
                Utilities.extendSettings($scope.settings, $attrs);

                // set grid width
                $scope.gridItemStyle['width'] = $scope.settings.gridWidth - $scope.settings.gutter;

                console.log($scope.settings);
            }

            /* createEventListeners -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function createEventListeners() {

                // add-items
                $(window).resize(function() {
                    windowResizedDebounced();
                });

                // add-items
                $scope.$on('masonry-grid:add-items', function(e, items) {

                    if (items.name === $attrs.gridName) {
                        addItems(items.list);
                    }
                });

                // replace-items
                $scope.$on('masonry-grid:replace-items', function(e, items) {

                    if (items.name === $attrs.gridName) {

                        // reset isotope
                        resetIsotope().then(function() {
                            initializeIsotope();
                            addItems(items.list);
                        });
                    }
                });

                // set-item-active-state
                $scope.$on('masonry-grid:set-item-active-state', function(e, itemProperties) {

                    // set active state
                    if ($scope.gridItems && Object.size($scope.gridItems) > 0 && Object.has($scope.gridItems, itemProperties.id)) {
                        $scope.gridItems[itemProperties.id].active = itemProperties.active;
                    }
                });

                // content-tabs:tab-active - when content-tab directive active state changes check if active and pause if not
                $scope.$on('content-tabs:tab-active', function(e, tabID) {

                    // // pause queue if element is not visible
                    if (Utilities.isElementVisible($element)) {
                        queuePaused = false;

                        $scope.state.loading = true;
                        loadQueuedGridItem();

                        // trigger sort refreshes viewport after being hidden
                        $masonryGrid.isotope({sortBy : 'refresh'});

                    } else {
                        queuePaused = true;
                    }

                });
            }

            /* initializeIsotope - create isotope on element
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function initializeIsotope() {

                $masonryGrid.isotope({
                    itemSelector: '.grid-item',
                    masonry: {
                        columnWidth: $scope.settings.gridWidth
                    },
                    getSortData: {
                        sort: function ($elem) {

                            var sortValue = $elem.attr('data-' + $scope.settings.order);

                            // is number
                            if (!isNaN(parseFloat(sortValue)) && isFinite(sortValue)) {
                                sortValue = parseInt(sortValue, 10);

                            // is date
                            } else {
                                sortValue = parseInt(moment(sortValue).unix(), 10);
                            }

                            return sortValue;
                        }
                    },
                    sortAscending : ($scope.settings.sortAscending ? true : false)
                });
            }

            /* addItems -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function addItems(gridItems) {

                if (gridItems && Object.size(gridItems) > 0) {

                    intialized = true;

                    // add items to end of queue
                    gridItemsQueue.add(gridItems);

                    // start loading from queued grid items
                    if (!$scope.state.loading) {

                        $scope.state.loading = true;
                        loadQueuedGridItem();
                    }
                }
            }

            /* loadQueuedGridItem - load item in sequence
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function loadQueuedGridItem() {

                if (gridItemsQueue.length === 0 || queuePaused) {

                    $rootScope.safeApply(function() {
                        $scope.state.loading = false;
                    });

                    return;
                }

                // remove first item from queue
                var gridItem = gridItemsQueue.shift();

                // grid item with image
                if (gridItem.url) {

                    // iterate image urls
                    var image = new Image();
                    image.src = gridItem.url;

                    // image loaded
                    image.onload = function() {
                        insertQueuedGridItem(gridItem);
                    };
                    // image error
                    image.onerror = function() {
                        insertQueuedGridItem(gridItem);
                    };

                // grid item without image
                } else {
                    insertQueuedGridItem(gridItem);
                }
            }

            /* insertQueuedGridItem -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function insertQueuedGridItem(gridItem) {

                $timeout(function() {

                    // insert grid item
                    insertGridItem(gridItem);

                    // load next grid item
                    loadQueuedGridItem();

                }, $scope.settings.loadSpeed);
            }

            /* insertGridItem - insert item into isotope grid
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function insertGridItem(gridItem) {

                var newGridItem = {};
                newGridItem[gridItem.id] = gridItem;

                // merge local item with grid items
                $rootScope.safeApply(function() {
                    angular.extend($scope.gridItems, newGridItem);
                });

                // insert item into isotope
                addIsotopeItem(gridItem);
            }

            /* addIsotopeItem - append grid items
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function addIsotopeItem(gridItem) {

                var $newGridItem = $element.find('.' + gridItem.id);

                // item appended
                $masonryGrid.isotope('appended', $newGridItem, function() {
                    $masonryGrid.isotope({sortBy : 'refresh'});
                });
            }

            /* addIsotopeItems -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function addIsotopeItems(gridItems) {

                var itemList = [];
                Object.extended(gridItems).each(function(key, item) {
                    itemList.push('.' + item.id);
                });

                var queryString = itemList.join(',');
                var $newGridItems = $element.find(queryString);

                // items appended
                $masonryGrid.isotope('appended', $newGridItems, function() {
                    $masonryGrid.isotope({sortBy : 'refresh'});
                });
            }

            /* windowResized - window size changed
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function windowResized() {

                $timeout(function() {
                    $masonryGrid.isotope({sortBy : 'refresh'});
                }, 200);
            }

            /* resetIsotope - async remove isotope items - clear $scope.gridItem
            @return - promise
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function resetIsotope() {

                var deferred = $q.defer();

                // destroy existing isotope
                $masonryGrid.isotope('remove', $element.find('.grid-item'), function() {

                    deferred.resolve();

                    $rootScope.safeApply(function() {
                        $scope.gridItems = {};
                    });
                });

                if (!intialized) {
                    deferred.resolve();
                }

                return deferred.promise;
            }

            /* selectItem -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function selectItem(itemID, e) {

                if ($scope.settings.mode === 'toggle') {
                    toggleItem(itemID);

                } else {
                    viewItem(itemID);
                }
            }

            /* toggleItem - toggle item
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function toggleItem(itemID) {

                var item = $scope.gridItems[itemID];

                // toggle active state
                item.active = !item.active;

                $scope.$emit('masonry-grid:item-toggled', item);
            }

            /* viewItem - view full image
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function viewItem(itemID) {

                var item = $scope.gridItems[itemID];

                $scope.$emit('masonry-grid:item-clicked', item);
            }

            /* viewImage - view full image
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function viewImage(itemID, e) {

                var item = $scope.gridItems[itemID];

                $rootScope.$broadcast('image-viewer:view-image', item);

                e.preventDefault();
                e.stopPropagation();
            }

            /* Scope Methods
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            $scope.selectItem = selectItem;
            $scope.viewImage = viewImage;
        }
    };
});
;var App = angular.module('hexAngular');

/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* ngTap Directive -
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
App.directive('ngTap', function($rootScope) {
    'use strict';

    return {
        link: function($scope, $element, $attrs) {

            $element.fastClick(function (e) {
                $scope.$apply($attrs.ngTap);
            });
        }
    };
});
;var App = angular.module('hexAngular');

/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* Paste Capture Directive -
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
App.directive('pasteCapture', function($rootScope) {
    'use strict';

    return {
        restrict: 'A',
        template: '<div class="paste-capture"></div>',
        replace: false,
        scope: {
            'active': '='
        },

        // The linking function will add behavior to the template
        link: function($scope, $element, $attrs) {

            // jquery elements

            initialize();
            createEventListeners();

            /**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            * initialize -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function initialize() {

                // We start by checking if the browser supports the
                // Clipboard object. If not, we need to create a
                // contenteditable element that catches all pasted data
                if (!window.Clipboard) {

                    // Firefox allows images to be pasted into contenteditable elements
                    $element.attr('contenteditable', '');

                    $element.css({'opacity': 0});

                    // as long as we make sure it is always in focus
                    $element.focus();
                    document.addEventListener('click', function() {

                        if ($scope.active) {
                            $element.focus();
                        }
                    });
                }

                // Add the paste event listener
                window.addEventListener('paste', pasteHandler);
            }


            /* Handle paste events */
            function pasteHandler(e) {

                // We need to check if event.clipboardData is supported (Chrome)
                if (e.clipboardData) {

                    // Get the items from the clipboard
                    var items = e.clipboardData.items;

                    if (items) {

                        // Loop through all items, looking for any kind of image
                        for (var i = 0; i < items.length; i++) {

                        if (items[i].type.indexOf('image') !== -1) {

                            // We need to represent the image as a file,
                            var blob = items[i].getAsFile();

                            // and use a URL or webkitURL (whichever is available to the browser)
                            // to create a temporary URL to the object
                            var URLObj = window.URL || window.webkitURL;
                            var source = URLObj.createObjectURL(blob);

                            // The URL can then be used as the source of an image
                            createImage(source);
                        }
                    }
                }

                // If we can't handle clipboard data directly (Firefox),
                // we need to read what was pasted from the contenteditable element
                } else {
                    // This is a cheap trick to make sure we read the data
                    // AFTER it has been inserted.
                    setTimeout(checkInput, 1);
                }
            }

            /* Parse the input in the paste catcher element */
            function checkInput() {

                // Store the pasted content in a variable
                var child = $element[0].childNodes[0];

                // Clear the inner html to make sure we're always
                // getting the latest inserted content
                $element[0].innerHTML = '';

                if (child) {
                    // If the user pastes an image, the src attribute
                    // will represent the image as a base64 encoded string.
                    if (child.tagName === 'IMG') {
                        createImage(child.src);
                    }
                }
            }

            /* Creates a new image from a given source */
            function createImage(source) {

                var pasteProperties = {
                    'source': source
                };

                $rootScope.$broadcast('image-editor:image-pasted', pasteProperties);
            }


            /**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            * createEventListeners - handles angular events
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function createEventListeners() {

            }
        }
    };
});
;var App = angular.module('hexAngular');

/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* Progress Bar Directive -
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
App.directive('progressBar', function($rootScope, $timeout) {
    'use strict';

    return {
        restrict: 'A',
        templateUrl: '/static/partials/hex_angular/progress_bar/progress_bar.html',
        replace: true,
        scope: {
            'active': '=',
            'mode': '@',
        },

        link: function($scope, $element, $attrs) {

            // scope
            $scope.state = {
                show: true
            };

            createEventListeners();

            /* initialize -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function initialize() {

            }

            /* createEventListeners -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function createEventListeners() {

                $scope.$watch('active', function(active, oldValue) {

                    if (!active) {
                        $timeout(function() {
                            $scope.state.show = false;
                        }, 500);

                        $timeout(function() {
                            $scope.state.show = true;
                        }, 1000);
                    }
                });

            }

            /* Scope Methods
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
        }
    };

});
;var App = angular.module('hexAngular');

/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* Tag Select Directive -
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
App.directive('tagSelect', function($rootScope) {
    'use strict';

    return {
        restrict: 'A',
        templateUrl: '/static/partials/hex_angular/tag_select/tag_select.html',
        replace: true,
        scope: {
            'tags': '=',
            'selectedTag': '=',
            'placeholder': '@',
            'autocomplete': '@',
            'showList': '@'
        },

        link: function($scope, $element, $attrs) {

            // jquery elements
            var $tagSelect = $element,
                $tagList = $element.find('.tag-list'),
                $filterInput = $element.find('.autocomplete-input');

            // scope data
            $scope.tagSelect = {
                'selectedTags': [],
                'filteredTerms': []
            };

            // scope data
            $scope.state = {
                'active': false,
                'activeTermIndex': 0
            };

            createEventListeners();

            // wait for tags data before intialization
            $scope.$watch('tags', function(tags, oldValue) {

                if (tags && tags.length > 0) {
                    initialize();
                }
            });

            /* initialize -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function initialize() {

                $scope.selectedTag = $scope.placeholder;
                $tagList.perfectScrollbar({wheelSpeed:25, wheelPropagation: true});
            }

            /* createEventListeners -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function createEventListeners() {

                // watch for changes in filteredTerms
                $scope.$watch('tagSelect.filteredTerms', function(filteredTerms, oldValue) {

                    // reset active term index
                    $scope.state.activeTermIndex = 0;
                });

                // element > input: keyup
                $element.on('keyup', 'input', function(e) {

                });

                // input: keydown
                $(document).on('keydown', move);

                // document: click
                $(document).on('click', function(e) {

                    var self = $(e.target);

                    if (self.closest($tagSelect).length === 0) {
                        hideDropdown();
                    }
                });

                // auto-complete:select
                $scope.$on('auto-complete:select', function(e, tagName) {
                    selectTag(tagName);
                });
            }

            /* move - cycle active selection through tags
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function move(e) {


                if (!$scope.state.active) return;

                console.log('move');

                switch(e.keyCode) {
                    case 9:  // tab
                    case 13: // enter
                        selectActiveTag();
                        e.preventDefault();
                        break;

                    case 27: // escape
                        hideDropdown();
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
            function selectNext() {

                var listLength = getActiveList().length;

                $rootScope.safeApply(function() {

                    if ($scope.state.activeTermIndex < listLength - 1) {
                        $scope.state.activeTermIndex++;
                    } else {
                        $scope.state.activeTermIndex = 0;
                    }
                });
            }

            /* selectPrevious - select previous filtered term - loop to array length
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function selectPrevious() {

                var listLength = getActiveList().length;

                $rootScope.safeApply(function() {

                    if ($scope.state.activeTermIndex > 0) {
                        $scope.state.activeTermIndex--;
                    } else {
                        $scope.state.activeTermIndex = listLength - 1;
                    }
                });
            }

            /* getActiveList -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function getActiveList() {

                var activeList = $scope.tags;

                // filtered
                if ($scope.tagSelect.filteredTerms.length > 0) {
                    activeList = $scope.tagSelect.filteredTerms;
                }

                return activeList;
            }

            /* selectTag -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function selectTag(tagName) {

                tagName = tagName.trim();

                $rootScope.safeApply(function() {
                    $scope.selectedTag = tagName;
                    $scope.selectedTags = $scope.placeholder;
                });

                hideDropdown();
            }

            /* selectActiveTag -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function selectActiveTag() {

                var activeTag = '';

                // filtered
                if ($scope.tagSelect.filteredTerms.length > 0) {
                    activeTag = $scope.tagSelect.filteredTerms[$scope.state.activeTermIndex].replace(/<\/*strong>/gi, '');

                    $scope.$broadcast('auto-complete:clear-search', {});

                // all tags
                } else {
                    activeTag = $scope.tags[$scope.state.activeTermIndex];
                }

                selectTag(activeTag);
            }

            /* removeTag -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function removeTag() {
                $scope.selectedTags = $scope.placeholder;
            }

            /* isActive -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function isActive(tagName) {

                if ($scope.selectedTag === tagName) {
                    return true;
                }

                return false;
            }


            /* toggleDropdown -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function toggleDropdown() {

                if ($scope.state.active) {
                    hideDropdown();
                } else {
                    showDropdown();
                }
            }

            /* showDropdown -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function showDropdown() {

                $rootScope.safeApply(function() {
                    $scope.state.active = true;
                    $scope.state.activeTermIndex = -1;
                });

                $filterInput.val('fewfewfew');
                $filterInput[0].focus();
            }

            /* hideDropdown -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function hideDropdown() {

                $rootScope.safeApply(function() {
                    $scope.state.active = false;
                });
            }

            /* Scope Methods
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            $scope.selectTag = selectTag;
            $scope.selectActiveTag = selectActiveTag;
            $scope.removeTag = removeTag;
            $scope.isActive = isActive;

            $scope.toggleDropdown = toggleDropdown;
            $scope.showDropdown = showDropdown;
            $scope.hideDropdown = hideDropdown;
        }
    };

});
;var App = angular.module('hexAngular');

/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* Text Editor Directive -
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
App.directive('textEditor', function($rootScope) {
    'use strict';

    return {
        restrict: 'A',
        template: '<textarea id="[[ editorName ]]" class="editor" name="[[ editorName ]]"></textarea>',
        scope: {
            editorName: '@textEditor',      // editor name
            read: '=',                      // read editor content
            write: '=',                     // set editor content
            fullEdit: '@',
            buttons: '@',
            placeholder: '@'
        },

        // The linking function will add behavior to the template
        link: function($scope, $element, $attrs) {

            // jquery elements
            var $editor = $element.find('.editor');

            // properties
            var editorInitialized = false;         // editor initialized

            createEventListeners();

            /* createEventListeners - handles angular events
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function createEventListeners() {

                // watch: write - set editor content
                $scope.$watch('write', function(content, oldValue) {

                    if (!editorInitialized) {
                        initializeEditor();
                    }

                    // update editor if content not empty
                    if (!content.isBlank()) {
                        $editor.redactor('insertHtml', content);
                    }
                });

                // insert image into editor
                $scope.$on('editor-add-image', function(e, url) {

                    if (editorInitialized) {
                        var html = '<p><img src="' + url + '" /></p>';
                        $editor.redactor('insertHtml', html);
                    }
                });

                // focus editor textarea
                $scope.$on('editor-focus', function(e) {

                    if (editorInitialized) {
                       $editor.redactor('focusEnd');
                    }
                });
            }

            /* initializeEditor - initializeEditor
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function initializeEditor() {

                if (!editorInitialized) {

                    // basic editor controls
                    var buttons = ['formatting', 'bold', 'italic', 'deleted', '|', 'unorderedlist', 'orderedlist', '|', 'link', '|', 'upload', '|', 'html'];

                    // advanced editor controls
                    if ($attrs.fullEdit === 'true') {
                        buttons = ['formatting', 'bold', 'underline', 'italic', 'deleted', '|', 'unorderedlist', 'orderedlist', '|', 'alignment', 'indent', 'outdent', 'horizontalrule', '|', 'link', 'file', 'image', 'video', '|', 'html'];
                    }

                    // custom buttons - convert string to array
                    if ($scope.buttons) {
                        buttons = $scope.buttons.split(',');
                    }

                    // create redactor
                    $editor.redactor({
                        convertDivs: true,
                        mobile: true,
                        focus: false,
                        paragraphy: true,
                        wym: false,
                        observeImages: true,
                        linebreaks: false,
                        buttons: buttons,
                        placeholder: $attrs.placeholder,
                        buttonsCustom: {
                            upload: {
                                title: 'Upload Image',
                                callback: showUpload
                            }
                        },
                        syncAfterCallback: syncAfterCallback
                    });

                    editorInitialized = true;
                }
            }

            /* syncAfterCallback - editor changed event
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function syncAfterCallback(html) {

                if (editorInitialized && $scope.read !== undefined) {

                    $rootScope.safeApply(function() {
                        $scope.read = $editor.redactor('get');
                    });
                }
            }

            /* showUpload -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function showUpload() {
                $scope.$emit('editor-show-upload', $scope.editorName);
            }
        }
    };
});
;var App = angular.module('hexAngular');

/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* Thumbnail Gallery Directive -
* Requires Modernizr detect: cssanimations
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
App.directive('thumbnailGallery', function($rootScope, $timeout) {
    'use strict';

    return {
        restrict: 'A',
        templateUrl: '/static/partials/hex_angular/thumbnail_gallery/thumbnail_gallery.html',
        replace: false,
        scope: {
            thumbnailList: '=',
            width: '=',
            fullscreen: '=',
            spacing: '@'
        },

        link: function($scope, $element, $attrs) {

            // constants
            var CALCULATION_ERROR_PADDING = 2;

            // properties
            var thumbnailInTransition = false,
                allThumbnailsLoaded = false,
                cssanimations = false,

                // viewport properties
                vpProperties = {
                    'width': 0,
                    'height': 0,
                    'fullyVisibleImages': 0,
                    'maxTranslateAmount': 0,
                    'innerWidth': 0
                },

                // thumbnail container properties
                tcProperties = {
                    'currentTranslation': 0,
                    'thumbnailCount': 0,
                    'width': 0
                },

                thumbnailDimensions = {
                    'width': 0,
                    'height': 0
                };

            var throttledResizeUpdate = resizeUpdate.debounce(500);

            // jquery elements
            var $thumbnailGallery = $element,
                $viewportContainer = $element.find('.thumbnail-viewport-container'),
                $thumbnailContainer = $element.find('.thumbnail-container'),
                $activeThumbnail = null;

            // scope data
            $scope.state = {
                'currentThumbnailIndex': -1,
                'currentPageIndex': 0
            };

            $scope.thumbnailContainerStyle = {};
            $scope.thumbnailStyle = {};
            $scope.thumbnailImageStyle = {};

            // wait for thumbnailList data before intialization
            $scope.$watch('thumbnailList', function(thumbnailList, oldValue) {
                initialize();
            });

            /* initialize -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function initialize() {

                createEventHandlers();

                // modernizr detect cssanimations
                if ($('html').hasClass('cssanimations')) {
                    cssanimations = true;
                }

                // calculate container and thumbnail width
                tcProperties.thumbnailCount = $scope.thumbnailList.length;

                // apply styles
                $scope.thumbnailStyle = {
                };
                $scope.thumbnailImageStyle = {
                    'padding-right': $scope.spacing + 'px',
                    'width': $scope.width + 'px'
                };
            }

            /* createEventHandlers -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function createEventHandlers() {

                // watch: fullscreen
                $scope.$watch('fullscreen', function(fullscreen, oldValue) {

                    if (typeof fullscreen !== 'undefined') {
                        (function() {
                            resizeUpdate();
                        }).delay(500);
                    }
                });

                // window: resized
                $(window).on('resize', function(e) {

                    if (allThumbnailsLoaded) {
                        throttledResizeUpdate();
                    }
                });

                // thumbnailContainer: transitionend
                $thumbnailContainer.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd msTransitionEnd', function() {

                    thumbnailInTransition = false;
                });

                // viewportContainer: all images loaded
                $viewportContainer.imagesLoaded(function() {

                    // wait for image to render on page
                    $timeout(function() {

                        allThumbnailsLoaded = true;

                        calculateDimensions();

                        $scope.thumbnailContainerStyle = {
                            'width': tcProperties.width
                        };

                    }, 0);
                });

                // content-gallery:set-active
                $scope.$on('content-gallery:set-active', function(e, index) {
                    setActiveThumbnail(index, false);
                });

                $scope.$on('content-tabs:tab-active', function(e, index) {
                    resizeUpdate();
                });
            }

            /* resizeUpdate -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function resizeUpdate() {

                calculateDimensions();
                setFirstViewableImage($scope.state.currentThumbnailIndex);
            }

            /* calculateDimensions -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function calculateDimensions() {

                // if thumbnail container width is 0 - reset it
                if (tcProperties.width === 0) {
                    tcProperties.width = null;
                }

                var $thumbnail = $thumbnailContainer.find('.thumbnail-0');

                var thumbnailWidth = $thumbnail.width(),
                    thumbnailHeight = $thumbnail.height();

                // thumbnail width 0 (must be hidden) - do not update dimensions if updated at least once
                if (thumbnailWidth === 0 && tcProperties.width !== 0) {
                    return;
                }

                // thumbnail dimensions
                thumbnailDimensions.width = thumbnailWidth + 1;
                thumbnailDimensions.height = thumbnailHeight;

                // viewport properties
                vpProperties.width = $viewportContainer.width();
                vpProperties.height = $viewportContainer.height();
                vpProperties.fullyVisibleImages = Math.floor(vpProperties.width / thumbnailDimensions.width);

                // thumbnail container properties
                tcProperties.width = tcProperties.thumbnailCount * thumbnailDimensions.width;

                // calculate max translate (add in drift + spacing)
                vpProperties.maxTranslateAmount = -(vpProperties.width - tcProperties.width + (tcProperties.thumbnailCount) + parseInt($scope.spacing, 10));

                if (vpProperties.maxTranslateAmount < 0) {
                    vpProperties.maxTranslateAmount = 0;
                }
            }

            /* setActiveThumbnail -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function setActiveThumbnail(index, emitEvent) {

                // emit event by default
                emitEvent = (typeof emitEvent === 'undefined') ? true : false;

                // set active if index less than thumbnailList lenght, thumbnail not in transitions and image at index is loaded
                if (index < $scope.thumbnailList.length && !thumbnailInTransition && allThumbnailsLoaded) {

                    // previous image not in full view - go back
                    if (!isImageFullyViewable(index - 1) && index !== tcProperties.thumbnailCount - 1) {
                        setFirstViewableImage(index - 1);

                    // next image not in full view - go forward
                    } else if (!isImageFullyViewable(index + 1)) {
                        setLastViewableImage(index + 1);
                    }

                    // save current index
                    $scope.state.currentThumbnailIndex = index;
                    $scope.state.currentPageIndex = index;

                    // set active thumbnail
                    $activeThumbnail = $thumbnailContainer.find('.thumbnail-' + index);

                    // emit active selection
                    if (emitEvent) {
                        $scope.$emit('thumbnail-gallery:set-active', index);
                    }
                }
            }

            /* isImageFullyViewable -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function isImageFullyViewable(index) {

                if (index < 0) {
                    index = 0;
                } else if (index > tcProperties.thumbnailCount - 1) {
                    index = tcProperties.thumbnailCount - 1;
                }

                var imageStart = getImagePosition(index);
                var imageEnd = imageStart + thumbnailDimensions.width;

                var tcViewStart = tcProperties.currentTranslation;
                var tcViewEnd = tcProperties.currentTranslation + vpProperties.width + parseInt($scope.spacing, 10) + CALCULATION_ERROR_PADDING;

                if (imageStart >= tcViewStart && imageEnd <= tcViewEnd) {
                    return true;
                }
                return false;
            }

            /* setFirstViewableImage -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function setFirstViewableImage(index) {

                if (index < 0) {
                    index = 0;
                }

                var translateAmount = getImagePosition(index);
                translateThumbnailContainer(translateAmount);
            }

            /* setLastViewableImage -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function setLastViewableImage(index) {

                if (index > tcProperties.thumbnailCount - 1) {
                    index = tcProperties.thumbnailCount - 1;
                }

                var translateAmount = getImagePosition(index) - vpProperties.width + thumbnailDimensions.width - parseInt($scope.spacing, 10) - CALCULATION_ERROR_PADDING;

                translateThumbnailContainer(translateAmount);
            }

            /* getImagePosition -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function getImagePosition(index) {
                return (thumbnailDimensions.width * index) - (index * 1);
            }

            /* translateThumbnailContainer -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function translateThumbnailContainer(translateAmount) {

                if (translateAmount > vpProperties.maxTranslateAmount) {
                    translateAmount = vpProperties.maxTranslateAmount;

                } else if (translateAmount < 0) {
                    translateAmount = 0;
                }

                // set style
                setThumbnailContainerStyle(translateAmount);
            }

            /* setThumbnailContainerStyle -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function setThumbnailContainerStyle(translateAmount) {

                tcProperties.currentTranslation = translateAmount;

                $rootScope.safeApply(function() {

                    // apply transform/width styles
                    $scope.thumbnailContainerStyle = {
                        'width': tcProperties.width,
                        '-webkit-transform': 'translate3d(' + -translateAmount + 'px, 0px, 0px)',
                        '-moz-transform': 'translate3d(' + -translateAmount + 'px, 0px, 0px)',
                        '-ms-transform': 'translate(' + -translateAmount + 'px, 0px)',
                        '-o-transform': 'translate3d(' + -translateAmount + 'px, 0px, 0px)',
                        'transform': 'translate3d(' + -translateAmount + 'px, 0px, 0px)'
                    };
                });
            }

            /* nextPage - find first non-fully visible image moving forward and set as first viewable
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function nextPage() {

                var thumbInFullView = true,
                    currentIndex = $scope.state.currentPageIndex;

                if (cssanimations) {
                    thumbnailInTransition = true;
                }

                while (thumbInFullView) {
                    thumbInFullView = isImageFullyViewable(currentIndex);
                    currentIndex++;
                }

                $scope.state.currentPageIndex = --currentIndex;
                setFirstViewableImage($scope.state.currentPageIndex);
            }

            /* previousPage - find first non-fully visible image moving backward and set as last viewable
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function previousPage() {

                var thumbInFullView = true,
                    currentIndex = $scope.state.currentPageIndex;

                if (cssanimations) {
                    thumbnailInTransition = true;
                }

                while (thumbInFullView) {
                    thumbInFullView = isImageFullyViewable(currentIndex);
                    currentIndex--;
                }

                $scope.state.currentPageIndex = ++currentIndex;
                setLastViewableImage($scope.state.currentPageIndex);
            }

            /* Scope Methods
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            $scope.setActiveThumbnail = setActiveThumbnail;
            $scope.isImageFullyViewable = isImageFullyViewable;
            $scope.previousPage = previousPage;
            $scope.nextPage = nextPage;
        }
    };
});
;var App = angular.module('hexAngular');

/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* Vertical Tags Directive -
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
App.directive('verticalTags', function($rootScope) {
    'use strict';

    return {
        restrict: 'A',
        templateUrl: '/static/partials/hex_angular/vertical_tags/vertical_tags.html',
        replace: true,
        scope: {
            'tags': '=',
            'selectedTags': '=',
            'placeholder': '@',
            'autocomplete': '@',
            'showList': '@'
        },

        link: function($scope, $element, $attrs) {

            // jquery elements
            var $selectedTags = $element.find('.selected-tags'),
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
            $scope.$watch('tags', function(tags, oldValue) {

                if (tags && tags.length > 0) {
                    initialize();
                }
            });

            /* initialize -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function initialize() {

                // if touch device do not use perfect scrollbar
                if (!Modernizr.touch) {
                    // init custom scrollbar
                    $selectedTags.perfectScrollbar({wheelSpeed:25, wheelPropagation: true});
                    $allTags.perfectScrollbar({wheelSpeed:25, wheelPropagation: true});
                }
            }

            /* createEventListeners -
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            function createEventListeners() {

                // element > input: keyup
                $element.on('keyup', 'input', function(e) {

                    var $tagInput = $(e.target);

                    // enter key pressed
                    if (e.which === 13) {

                        // add tag and clear input
                        addTag($tagInput.val());
                        $tagInput.val('');
                    }
                });

                // add-tag
                $scope.$on('auto-complete:select', function(e, tagName) {
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

});
;var App = angular.module('hexAngular');

/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* Utility Service -
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
App.factory('Utilities', function($rootScope) {
    'use strict';

    console.log('load safeaply');

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

    /*ignore jslint start*/

    /* isElementInViewport - check if element is visible in viewport
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();

        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document. documentElement.clientHeight) && /*or $(window).height() */
            rect.right <= (window.innerWidth || document. documentElement.clientWidth) /*or $(window).width() */
            );
    }

    /* isIE - check if browser is internet explorer
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    function isIE() {

        var tmp = document.documentMode, e, isIE;

        // Try to force this property to be a string.
        try{document.documentMode = '';}
        catch(e){ };

        // If document.documentMode is a number, then it is a read-only property, and so
        // we have IE 8+.
        // Otherwise, if conditional compilation works, then we have IE < 11.
        // Otherwise, we have a non-IE browser.
        isIE = typeof document.documentMode == 'number' ? !0 : eval('/*@cc_on!@*/!1');

        // Switch back the value to be unobtrusive for non-IE browsers.
        try{document.documentMode = tmp;}
        catch(e){ };

        return isIE;
    }

    /* isElementVisible - check if element is visible
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    function isElementVisible(el) {

        var $element = (el instanceof jQuery) ? el : $(el);
        return !!($element.width() || $element.height()) && $element.css('display') !== 'none';
    }

    /* extendSettings - for each key in defaults check overrides and replace if found
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    function extendSettings(defaults, overrides) {

        Object.extended(defaults).each(function(key, argument) {

            if (Object.has(overrides, key)) {

                // convert array data type
                if (Object.prototype.toString.call(defaults[key]) === '[object Array]') {

                    // split string to array and trim
                    var overridesArray = overrides[key].split(',');

                    overridesArray.each(function(override, index) {
                        overridesArray[index] = overrideDataType(defaults[key][index], override.trim());
                    });

                    defaults[key] = overridesArray;

                // convert simple data type
                } else {
                    defaults[key] = overrideDataType(defaults[key], overrides[key]);
                }
            }
        });
    }

    /* overrideDataType - detect default datatype and convert override to match
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    function overrideDataType(defaultValue, override) {

        var convertedOverride = null;

        // boolean - override is string
        if (typeof defaultValue === 'boolean' && typeof override === 'string') {
            convertedOverride = (override === 'true');

        // boolean - override is not string
        } else if (typeof defaultValue === 'boolean' && typeof override === 'boolean') {
            convertedOverride = !!override;

        // number
        } else if (typeof defaultValue === 'number') {
            convertedOverride = parseInt(override, 10);

        // string
        } else {
            convertedOverride = override;
        }

        return convertedOverride;
    }


    /* constructResourceURL -
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    function constructResourceURL(resource, resourceArguments) {

        var offset = null;

        // non-random
        if (Object.has(resourceArguments, 'order_by') && resourceArguments.order_by !== 'random') {

            // has limit and page, set offset and remove page
            if (Object.has(resourceArguments, 'limit') && Object.has(resourceArguments, 'page')) {
                resourceArguments.offset = resourceArguments.limit * resourceArguments.page;
                // remove page argument
                delete resourceArguments.page;
            }
        }

        // build url
        var url = resource;
        var paramDivider = '?';

        // iterate arguments
        Object.extended(resourceArguments).each(function(key, argument) {

            // if argument is defined
            if (argument) {
                url += paramDivider + key + '=' + argument;
                paramDivider = '&';
            }
        });

        return url;
    }

    /* PUBLIC METHODS
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    var publicMethods = {
        'isIE': isIE,
        'isElementVisible': isElementVisible,
        'isElementInViewport': isElementInViewport,
        'extendSettings': extendSettings,
        'constructResourceURL': constructResourceURL
    };

    return publicMethods;

    /*ignore jslint end*/
});
