var App = angular.module('hexAngular');

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
