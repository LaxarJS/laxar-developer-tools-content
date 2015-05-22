/**
 * Copyright 2015 aixigo AG
 * Released under the MIT license.
 * http://www.laxarjs.org
 */
/*global module,__dirname,__filename */
module.exports = function( grunt ) {
   'use strict';

   var path = require( 'path' );

   var serverPort = 8001;
   var liveReloadPort = 30000 + serverPort;

   grunt.initConfig( {
      pkg: grunt.file.readJSON( 'package.json' ),
      connect: {
         options: {
            port: serverPort
         },
         default: {}
      },
      jshint: {
         options: {
            jshintrc: __dirname + '/.jshintrc'
         }
      },
      laxar_application_dependencies: {
         default: {
            options: {},
            dest: 'var/static/laxar_application_dependencies.js',
            src: [ 'application/flow/*.json' ]
         }
      },
      css_merger: {
         default: {
            src: [ 'application/flow/*.json' ]
         }
      },
      directory_tree: {
         application: {
            dest: 'var/listing/application_resources.json',
            src: [
               'application/flow/**/*.json',
               'application/layouts/**/*.css',
               'application/layouts/**/*.html',
               'application/pages/**/*.json'
            ],
            options: {
               embedContents: [
                  'application/flow/**/*.json',
                  'application/layouts/**/*.html',
                  'application/pages/**/*.json'
               ]
            }
         },
         bower_components: {
            dest: 'var/listing/bower_components_resources.json',
            src: [
               'bower_components/laxar-uikit/themes/**/*.css',
               'bower_components/laxar-uikit/controls/**/*.+(css|html)'
            ],
            embedContents: [ 'bower_components/laxar-uikit/controls/**/*.html' ]
         },
         includes: {
            dest: 'var/listing/includes_resources.json',
            src: [
               'includes/themes/**/*.+(css|html)',
               'includes/widgets/*/*/*.+(css|html|json)',
               '!includes/widgets/*/*/+(package|bower).json',
               'includes/widgets/*/*/!(bower_components|node_modules|spec)/**/*.+(css|html|json)'
            ],
            options: {
               embedContents: [
                  'includes/themes/**/controls/**/*.html',
                  'includes/widgets/*/*/widget.json',
                  'includes/widgets/*/*/*.theme/*.html',
                  'includes/widgets/*/*/*.theme/css/*.css'
               ]
            }
         }
      },
      concat: {
         build: {
            src: [
               'require_config.js',
               'bower_components/requirejs/require.js'
            ],
            dest: 'var/build/require_configured.js'
         }
      },
      requirejs: {
         default: {
            options: {
               mainConfigFile: 'require_config.js',
               deps: [ '../var/build/require_configured' ],
               name: '../init',
               out: 'var/build/bundle.js',
               optimize: 'uglify2'
            }
         }
      },
      watch: {
         options: {
            livereload: liveReloadPort,
            reload: true
         },
         Gruntfile: {
            files: __filename
         },
         application: {
            files: [
               'application/**/!(scss)/*.*'
            ]
         },
         libraries: {
            files: [
               'includes/lib/*/!(bower_components|node_modules)/**',
               'includes/themes/*.theme/!(bower_components|node_modules)/**'
            ]
         },
         dependencies: {
            files: [
               '<%= directory_tree.application.src %>',
               '<%= directory_tree.includes.src %>'
            ],
            tasks: [
               'directory_tree:application',
               'directory_tree:includes',
               'laxar_application_dependencies'
            ],
            options: {
               event: [ 'added', 'deleted' ]
            }
         }
      }
   } );

   // Find all widget.json files,
   // take their directory names,
   // create or update the configuration
   grunt.file.expand( 'includes/widgets/*/*/widget.json' )
      .map( path.dirname )
      .forEach( function( widget ) {
         var config = grunt.config( 'widget.' + widget );
         grunt.config( 'widget.' + widget, grunt.util._.defaults( {}, config ) );
         grunt.config( 'watch.' + widget, {
            files: [
               widget + '/!(bower_components|node_modules)',
               widget + '/!(bower_components|node_modules)/**'
            ]
         } );
      } );

   grunt.loadNpmTasks( 'grunt-laxar' );
   grunt.loadNpmTasks( 'grunt-contrib-compass' );
   grunt.loadNpmTasks( 'grunt-contrib-concat' );
   grunt.loadNpmTasks( 'grunt-contrib-watch' );

   grunt.registerTask( 'server', [ 'connect' ] );
   grunt.registerTask( 'build', [ 'directory_tree', 'laxar_application_dependencies' ] );
   grunt.registerTask( 'optimize', [ 'build', 'css_merger', 'concat', 'requirejs' ] );
   grunt.registerTask( 'test', [ 'server', 'widgets' ] );
   grunt.registerTask( 'default', [ 'build', 'test' ] );
   grunt.registerTask( 'dist', [ 'optimize' ] );
   grunt.registerTask( 'start', [ 'build', 'server', 'watch' ] );

};
