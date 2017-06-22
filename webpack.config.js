/**
 * Copyright 2017 aixigo AG
 * Released under the MIT license.
 * http://laxarjs.org/license
 */

/* eslint-env node */

const path = require( 'path' );
const WebpackJasmineHtmlRunnerPlugin = require( 'webpack-jasmine-html-runner-plugin' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const publicPath = '/var/dist/';

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

module.exports = ( env = {} ) =>
   env.browserSpec ?
      Object.assign( config( env ), {
         entry: WebpackJasmineHtmlRunnerPlugin.entry( './application/widgets/*/spec/*.spec.js' ),
         output: {
            path: resolve( 'spec-output' ),
            publicPath: '/spec-output/',
            filename: '[name].bundle.js'
         }
      } ) :
      config( env );

function config( env ) {

   return {
      devtool: '#source-map',

      entry: { 'init': './init.js' },

      output: {
         path: path.resolve( __dirname, `./${publicPath}` ),
         publicPath: publicPath.substr( 1 ),

         filename: env.production ? '[name].bundle.min.js' : '[name].bundle.js',
         chunkFilename: env.production ? '[name].bundle.min.js' : '[name].bundle.js'
      },

      plugins: env.production ? [ new ExtractTextPlugin( { filename: '[name].bundle.css' } ) ] :
         [ new WebpackJasmineHtmlRunnerPlugin() ],

      resolve: {
         descriptionFiles: [ 'package.json' ],
         modules: [
            path.resolve( './lib' ),
            path.resolve( './node_modules' )
         ],
         extensions: [ '.js', '.jsx' ],
         alias: {
            'polyfills': path.resolve( './node_modules/laxar/dist/polyfills.js' ),
            'laxar-uikit': path.resolve( './node_modules/laxar-uikit' ),
            'default.theme': path.resolve( './node_modules/laxar-uikit/themes/default.theme' ),
            'grid': path.resolve( './lib/laxar-developer-tools/grid.js' ),
            'widget-outline': path.resolve( './lib/laxar-developer-tools/widget-outline.js' )
         }
      },

      module: {
         rules: [
            {
               test: /\.(js)$/,
               exclude: resolve( 'node_modules' ),
               use: 'babel-loader'
            },
            {
               test: /.spec.(jsx?)$/,
               exclude: resolve( 'node_modules' ),
               loader: 'laxar-mocks/spec-loader'
            },
            {  // load styles, images and fonts with the file-loader
               // (out-of-bundle in var/build/assets/)
               test: /\.(gif|jpe?g|png|ttf|woff2?|svg|eot|otf)(\?.*)?$/,
               loader: 'file-loader',
               options: {
                  name: 'assets/[name].[ext]'
               }
            },
            {  // ... after optimizing graphics with the image-loader ...
               test: /\.(gif|jpe?g|png|svg)$/,
               loader: 'img-loader?progressive=true'
            },
            {  // ... and resolving CSS url()s with the css loader
               // (extract-loader extracts the CSS string from the JS module returned by the css-loader)
               test: /\.(css|s[ac]ss)$/,
               loader: 'style-loader!css-loader'
            },
            {  // load scss files by precompiling with the sass-loader
               test: /\/default.theme\/.*\.s[ac]ss$/,
               loader: 'sass-loader',
               options: {
                  includePaths: [
                     'laxar-uikit/themes/default.theme/scss',
                     'laxar-uikit/scss',
                     resolve( 'node_modules/bootstrap-sass/assets/stylesheets' ),
                     resolve( 'node_modules' ),
                     resolve( 'node_modules/laxar-uikit/scss' ),
                     resolve( 'node_modules/laxar-uikit/themes/default.theme/scss' )
                  ].map( p => path.resolve( __dirname, p ) )
               }
            },
            {  // load function as grid module
               // grid.js must be a valid content script for extension
               test: require.resolve( './lib/laxar-developer-tools/grid.js' ),
               use: [ {
                  loader: 'exports-loader',
                  options: 'axDeveloperToolsToggleGrid'
               } ]
            },
            {  // load function as widget-outline module
               // widget-outline.js must be a valid content script for extension
               test: require.resolve( './lib/laxar-developer-tools/widget-outline.js' ),
               use: [ {
                  loader: 'exports-loader',
                  options: 'axDeveloperToolsToggleWidgetOutline'
               } ]
            },
            {
               test: /.jsx$/,
               exclude: resolve( 'node_modules' ),
               loader: 'babel-loader'
            }
         ]
      }
   };
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function resolve( p ) { return path.resolve( __dirname, p ); }

