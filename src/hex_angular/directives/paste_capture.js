var App = angular.module('hexAngular');

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
