module.exports = function(grunt) {

    // hexangular project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        /**~~~~~~~~~~~~~~~~~~~~~~~~~~~
        * clean - removes compiled and temp directories
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
        clean: {
            dev: ['dist', 'temp']
        },

        /**~~~~~~~~~~~~~~~~~~~~~~~~~~~
        * sass -
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
        sass: {
            // production css
            prod: {
                options: {
                    style: 'compressed',

                    // import app styles
                    loadPath: [
                        'styles/',
                        'styles/vendor'
                    ]
                },
                files: {
                    'dist/styles/app.min.css': [
                        'styles/app.scss'
                    ]
                }
            },
            // dev css
            dev: {
                options: {
                    style: 'expanded',
                    debugInfo: true,
                    lineNumbers: true,

                    // import app styles
                    loadPath: [
                        'styles/',
                        'styles/vendor'
                    ]
                },
                files: {
                    'dist/styles/app.css': [
                        'styles/app.scss'
                    ]
                }
            }
        },

        /**~~~~~~~~~~~~~~~~~~~~~~~~~~~
        * includereplace - translude partial .html files as single line string in directives .js files
        * requires custom include replace addition: includeContents = includeContents.replace(/(\r\n|\n|\r|\s\s\s\s)/gm,"");
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
        includereplace: {
            dist: {
                options: {
                    // Global variables available in all files
                    globals: {
                        var1: 'one',
                        var2: 'two',
                        var3: 'three'
                    },
                    // Optional variable prefix & suffix, defaults as shown
                    prefix: '@@',
                    suffix: ''
                },
                // Files to perform replacements and includes with
                src: 'scripts/**/*.js',
                // Destinaion directory to copy files to
                dest: 'temp/'
            }
        },

        /**~~~~~~~~~~~~~~~~~~~~~~~~~~~
        * concat - jobs: hexangular_lib, hexangular_app
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
        concat: {
            options: {
                separator: ';'
            },

            // hexangular_lib
            hexangular_lib: {
                src: [
                    // utilities
                    'lib/sugar.min.js',                             // javascript utilities

                    // jquery plugins
                    'lib/google.fastbutton.js',                     // fast click
                    'lib/jquery.mousewheel.js',                     // mouse wheel support
                    'lib/jquery.hammer.js',                         // touch events

                    // scroller
                    'lib/scroller.js',                              // scroller
                    'lib/animate-scroller.js',                      // scroller animation
                    'lib/easy-scroller.js',                         // easy scroller

                    'lib/perfect-scrollbar.js',                     // custom scrollbar
                    'lib/imagesloaded.js'                           // images loaded
                ],

                dest: 'dist/scripts/hexangular_lib.js'
            },

            // hexangular_app
            hexangular_app: {
                src: [
                    'temp/hex-angular.js',
                    'temp/**/*.js'
                ],

                dest: 'dist/scripts/hexangular_app.js'
            }
        },

        /**~~~~~~~~~~~~~~~~~~~~~~~~~~~
        * uglify - jobs: hexangular_lib, hexangular_app
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
        uglify: {
            hexangular_lib: {
              files: {
                'dist/scripts/hexangular_lib.min.js': ['dist/scripts/hexangular_lib.js']
              }
            },
            hexangular_app: {
              files: {
                'dist/scripts/hexangular_app.min.js': ['dist/scripts/hexangular_app.js']
              }
            }
        },

        /**~~~~~~~~~~~~~~~~~~~~~~~~~~~
        * removeLogging - remove console.[info, log, ect..] statements
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
        removelogging: {
            dist: {
                src: "dist/scripts/hexangular_app.js",
                dest: "dist/scripts/hexangular_app.js",

                options: {
                    // see below for options. this is optional.
                }
            }
        },

        /**~~~~~~~~~~~~~~~~~~~~~~~~~~~
        * watch - jobs: hexangular_lib, hexangular_app, less
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
        watch: {

            partials: {
                files: ['partials/**'],
                tasks: ['includereplace', 'concat:hexangular_app'],
                options: {
                  nospawn: false,
                  interrupt: true,
                  debounceDelay: 2000
                }
            },

            hexangular_lib: {
                files: ['lib/**/*.js'],
                tasks: ['concat:hexangular_lib'],
                options: {
                  nospawn: false,
                  interrupt: true,
                  debounceDelay: 2000
                }
            },
            hexangular_app: {
                files: ['scripts/**/*.js'],
                tasks: ['includereplace', 'concat:hexangular_app'],
                options: {
                  nospawn: false,
                  interrupt: true,
                  debounceDelay: 2000
                }
            },
            sass: {
                files: ['styles/**/*.scss'],
                tasks: ['sass:dev'],
                options: {
                  nospawn: false,
                  interrupt: true,
                  debounceDelay: 2000
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-remove-logging');
    grunt.loadNpmTasks('grunt-include-replace');

    // Default Development task
    grunt.registerTask('default', ['clean', 'includereplace', 'concat', 'sass']);

    // Production Task - copy partials, concat js, remove logging statements, minify scripts, compile scss
    grunt.registerTask('production', ['clean', 'includereplace', 'concat', 'removelogging', 'uglify', 'sass']);

};
