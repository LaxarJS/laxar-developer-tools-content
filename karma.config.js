/* eslint-env node */

module.exports = function( config ) {
   config.set( karmaConfig() );
};

const karma = require( 'karma' );
const path = require( 'path' );

const resolve = p => path.resolve( __dirname, p );
const polyfillsPath = resolve( 'node_modules/laxar/dist/polyfills.js' );
const specsPattern = resolve( './application/widgets/**/spec/*.spec.js' );
const assetsPatterns = [
   resolve( './application/widgets/**/*.css' ),
   resolve( './application/widgets/**/*.scss' ),
   resolve( './node_modules/laxar-uikit/themes/default.theme/{css,fonts}/*.*' )
];

if( require.main === module ) {
   const configs = require( 'glob' ).sync( specsPattern ).map( karmaConfigForWidget );
   run( configs );
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function karmaConfig() {

   const browsers = [
      'PhantomJS',
      'Firefox',
      process.env.TRAVIS ? 'ChromeTravisCi' : 'Chrome'
   ];

   return {
      frameworks: [ 'jasmine' ],
      files: files( specsPattern, [ polyfillsPath ], assetsPatterns ),
      preprocessors: {
         [ specsPattern ]: [ 'webpack', 'sourcemap' ]
      },
      proxies: {
         '/widgets': '/base/widgets',
         '/lib': '/base/lib'
      },
      webpack: webpackConfig(),
      webpackMiddleware: {
         noInfo: true,
         quiet: true
      },

      reporters: [ 'progress' ],
      port: 9876,
      browsers,
      customLaunchers: {
         ChromeTravisCi: {
            base: 'Chrome',
            flags: [ '--no-sandbox' ]
         }
      },
      browserNoActivityTimeout: 100000,
      singleRun: true,
      autoWatch: false
   };
}

function karmaConfigForWidget( specPath ) {
   return Object.assign( karmaConfig(), {
      name: path.basename( specPath ),
      files: files( specPath, [ polyfillsPath ], assetsPatterns )
   } );
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function webpackConfig() {
   const config = Object.assign( {}, require('./webpack.config' ) );
   delete config.entry;
   config.plugins = config.basePlugins;
   config.devtool = 'inline-source-map';
   return config;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function run( configs, lastExitCode ) {
   if( !configs.length || lastExitCode ) {
      process.exit( lastExitCode );
   }
   const config = configs.shift();
   const specFile = config.files[ 1 ];
   process.stdout.write( `Karma: launching ${specFile}\n` );
   const server = new karma.Server( config, exitCode => {
      process.stdout.write( `Karma: exited with ${exitCode}\n` );
      run( configs, exitCode );
   } );
   server.start();
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function files( specPath, dependencyPatterns, assetsPatterns ) {
   return [
      ...dependencyPatterns,
      specPath,
      ...assetsPatterns.map( pattern => ( { pattern, included: false } ) )
   ];
}
