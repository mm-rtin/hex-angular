var App = angular.module('Hexangular');

/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* Vertical Tags Directive -
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
App.directive('verticalTags', ['$rootScope', function($rootScope) {

    return {
        restrict: 'A',
        template: '@@include("../../partials/vertical_tags.html")',
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
