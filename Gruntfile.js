/**
 * Copyright 2015 aixigo AG
 */
/*global module,__dirname,__filename */
module.exports = function( grunt ) {
   'use strict';

   var serverPort = 15001;
   var testPort = 1000 + serverPort;
   var liveReloadPort = 30000 + serverPort;

      grunt.initConfig( {
         pkg: grunt.file.readJSON( 'package.json' ),

         'laxar-configure': {
            options: {
               flows: [
                  { target: 'main', src: 'application/flow/flow.json' }
               ],
               ports: {
                  develop: serverPort,
                  test: testPort,
                  livereload: liveReloadPort
               },
               userTasks: {
                  'build-flow': [ 'laxar-compass-flow' ]
               }
            }
         },
         babel: {
            options: {
               sourceMap: 'inline',
               modules: 'amd',
               retainLines: true
            },
            widgets: {
               files: [ {
                  expand: true,
                  cwd: 'includes/widgets/',
                  src: [ '*/*.jsx' ],
                  dest: 'includes/widgets/',
                  ext: '.js'
               } ]
            }
         },
         watch: {
            jsx: {
               files: [ 'includes/widgets/*/*.jsx' ],
               tasks: [ 'babel:widgets' ]
            }
         }

   } );

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   grunt.loadNpmTasks( 'grunt-laxar' );
   grunt.loadNpmTasks( 'grunt-laxar-compass' );
   grunt.loadNpmTasks( 'grunt-babel' );

   // basic aliases
   grunt.registerTask( 'test', [ 'babel', 'laxar-test' ] );
   grunt.registerTask( 'build', [ 'babel', 'laxar-build' ] );
   grunt.registerTask( 'dist', [ 'babel', 'laxar-dist' ] );
   grunt.registerTask( 'develop', [ 'babel', 'laxar-develop' ] );
   grunt.registerTask( 'info', [ 'laxar-info' ] );

   // additional (possibly) more intuitive aliases
   grunt.registerTask( 'optimize', [ 'babel', 'laxar-dist' ] );
   grunt.registerTask( 'start', [ 'develop' ] );

   grunt.registerTask( 'default', [ 'build', 'test' ] );

};
