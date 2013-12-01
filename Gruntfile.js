module.exports = function(grunt) {

    // Overmind project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        /**~~~~~~~~~~~~~~~~~~~~~~~~~~~
        * clean - removes compiled and temp directories
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
        clean: {
            dev: {
                src: ['dist', 'temp']
            },

            // fixes bug with ngmin
            ng_min: {
                src: ['dist/dist']
            }
        },

        /**~~~~~~~~~~~~~~~~~~~~~~~~~~~
        * copy - copy partials to /dist
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
        copy: {
            partials: {
                files: [
                    {expand: true, cwd: 'src/', src: ['partials/**'], dest: 'dist/'},
                    {expand: true, cwd: 'src/', src: ['images/**'], dest: 'dist/'},
                    {expand: true, cwd: 'src/', src: ['fonts/**'], dest: 'dist/'},
                    {expand: true, cwd: 'src/', src: ['meta/**'], dest: 'dist/'},

                    // hexAngular partials
                    {expand: true, cwd: 'src/hex_angular/directives/', src: ['**/*.html'], dest: 'dist/partials/hex_angular/'}
                ]
            },

            // fixes bug with ngmin
            ng_min: {
                files: [
                    {src: ['dist/dist/scripts/hexangular_app.js'], dest: 'dist/scripts/hexangular_app.js'},
                ]
            }
        },

        /**~~~~~~~~~~~~~~~~~~~~~~~~~~~
        * sass - compile scss to css
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
        sass: {
            // production css
            prod: {
                options: {
                    style: 'compressed',
                    quiet: true,

                    // import app styles
                    loadPath: [
                        'src/styles/'
                    ]
                },
                files: {
                    // library
                    'dist/styles/library.min.css': [
                        'src/styles/library.scss'
                    ],

                    // components
                    'dist/styles/components.min.css': [
                        'src/styles/components.scss'
                    ],

                    // hex_angular
                    'dist/styles/hex_angular.min.css': [
                        'src/hex_angular/hex_angular.scss'
                    ],

                    // app specific
                    'dist/styles/app.min.css': [
                        'src/styles/app.scss'
                    ]
                }
            },

            // dev css
            dev: {
                options: {
                    style: 'expanded',
                    debugInfo: true,
                    lineNumbers: true,
                    quiet: true,

                    // import app styles
                    loadPath: [
                        'src/styles/'
                    ]
                },
                files: {

                    // library
                    'dist/styles/library.css': [
                        'src/styles/library.scss'
                    ],

                    // components
                    'dist/styles/components.css': [
                        'src/styles/components.scss'
                    ],

                    // hex_angular
                    'dist/styles/hex_angular.css': [
                        'src/hex_angular/hex_angular.scss'
                    ],

                    // app specific
                    'dist/styles/app.css': [
                        'src/styles/app.scss'
                    ]
                }
            }
        },

        /**~~~~~~~~~~~~~~~~~~~~~~~~~~~
        * jshint - lint js
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
        jshint: {
            all: {
                options: {

                    // environment
                    browser: true,

                    // enforce
                    latedef: 'nofunc',
                    quotmark: 'single',
                    eqnull: true,
                    forin: true,
                    bitwise: true,
                    noempty: true,
                    undef: true,
                    strict: true,
                    trailing: true,
                    maxparams: 10,
                    maxdepth: 4,
                    maxstatements: 75,
                    maxcomplexity: 15,

                    // global definitions
                    globals: {
                        jQuery: true,
                        angular: true,
                        $: true,

                        // libraries
                        qq: true,
                        moment: true,
                        Opentip: true,
                        AnimationFrame: true,
                        Modernizr: true,

                        // browser
                        log: true,
                        console: true,
                        confirm: true,
                        opera: true
                    },

                    // ignores
                    '-W069': true,

                    ignores: ['**/utility_service.js']
                },
                src: [
                    'src/scripts/**/*.js'
                ]
            }
        },

        /**~~~~~~~~~~~~~~~~~~~~~~~~~~~
        * concat - jobs: hexangular_lib, hexangular_app
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
        concat: {
            options: {
                separator: ';'
            },

            // modernizr
            modernizr: {
                src: [
                    'src/lib/custom.modernizr.js'
                ],
                dest: 'dist/scripts/custom.modernizr.js'
            },


            // angular_lib
            angular_lib: {
                src: [
                    'src/lib/angular/angular-route.js',
                    'src/lib/angular/angular-sanitize.js',
                    'src/lib/angular/angular-touch.js',
                    'src/lib/angular/angular-cookies.js',

                    'src/lib/angular/angular-resource.js',
                    'src/lib/angular/angular-animate.js'
                ],

                dest: 'dist/scripts/angular_lib.js'
            },

            // hexangular_lib
            hexangular_lib: {
                src: [
                    // utilities
                    'src/lib/sugar.min.js',                             // javascript utilities

                    // image
                    'src/lib/canvas-to-blob.js',                        // canvas.toBlob polyfill

                    // animation
                    'src/lib/animationframe.js',                        // request animation frame

                    // masonry
                    'src/lib/jquery.isotope.js',                        // isotope - dynamic layout

                    // events
                    'src/lib/jquery.mousewheel.js',                     // mousewheel support

                    // mobile / touch
                    'src/lib/google.fastbutton.js',

                    // inputs
                    'src/lib/redactor.js',                              // redactor - html editor (textarea replacement)

                    'src/lib/perfect-scrollbar.js',                     // custom scrollbar

                    // dates
                    'src/lib/jquery.timeago.js',                        // relative and live time stamps
                    'src/lib/moment.min.js',                            // date library

                    // opentip
                    'src/lib/opentip/opentip.js',                       // tooltips
                    'src/lib/opentip/adapter.jquery.js'
                ],

                dest: 'dist/scripts/hexangular_lib.js'
            },

            // hexangular_module
            hexangular_module: {
                src: [
                    'src/hex_angular/hex_angular.js',
                    'src/hex_angular/**/*.js'
                ],

                dest: 'dist/scripts/hexangular_module.js'
            },

            // hexangular_app
            hexangular_app: {
                src: [
                    'src/scripts/hexangular.js',
                    'src/scripts/**/*.js'
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
        * ngmin - pre-minify angular source - adds minifification safe dependancy injection
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
        ngmin: {
            directives: {
                expand: true,
                src: 'dist/scripts/hexangular_app.js',
                dest: 'dist/'
            }
        },

        /**~~~~~~~~~~~~~~~~~~~~~~~~~~~
        * watch - jobs: hexangular_lib, hexangular_app, less
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
        watch: {

            partials: {
                files: ['src/partials/**'],
                tasks: ['copy:partials'],
                options: {
                  nospawn: false,
                  interrupt: true,
                  debounceDelay: 2000
                }
            },
            hexangular_lib: {
                files: ['src/lib/**/*.js'],
                tasks: ['concat:hexangular_lib'],
                options: {
                  nospawn: false,
                  interrupt: true,
                  debounceDelay: 2000
                }
            },
            hexangular_app: {
                files: ['src/scripts/**/*.js'],
                tasks: ['concat:hexangular_app', 'jshint'],
                options: {
                  nospawn: false,
                  interrupt: true,
                  debounceDelay: 2000
                }
            },
            sass: {
                files: ['src/styles/**/*.scss'],
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
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-remove-logging');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-ngmin');

    // Development task
    grunt.registerTask('default',
        [
            'clean',
            'jshint',
            'copy:partials',
            'concat',
            'ngmin',
            'copy:ng_min',
            'clean:ng_min',
            'sass:dev'
        ]
    );

    // Production Task
    grunt.registerTask('production',
        [
            'clean',
            'jshint',
            'copy:partials',
            'concat',
            'ngmin',
            'copy:ng_min',
            'clean:ng_min',
            'removelogging',
            'uglify',
            'sass:prod'
        ]
    );
};
