var App = angular.module('hexAngular');

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
