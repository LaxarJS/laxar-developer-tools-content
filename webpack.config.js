/**
 * Copyright 2017 aixigo AG
 * Released under the MIT license.
 * http://laxarjs.org/license
 */

/* eslint-env node */

const path = require( 'path' );
const webpack = require( 'webpack' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const nodeEnv = process.env.NODE_ENV;
const isProduction = nodeEnv === 'production';
const isBrowserSpec = nodeEnv === 'browser-spec';
const processPlugins = {
   'production': productionPlugins, 'browser-spec': browserSpecPlugins }[ nodeEnv ] || ( _ => _ );

const publicPath = isProduction ? '/var/dist/' : '/var/build/';

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const config = {
   entry: {
      'app': './init.js',
      'vendor': [ 'polyfills', 'react', 'laxar' ]
   },

   output: {
      path: path.resolve( `./${publicPath}` ),
      publicPath: publicPath.substr(1),
      filename: isProduction ? '[name].bundle.min.js' : '[name].bundle.js'
   },

   plugins: processPlugins( basePlugins().concat( reactPlugins() ) ),

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
            test: /\.(js|jsx)$/,
            exclude: /(node_modules)/,
            use: 'babel-loader'
         },
         {
            test: /.spec.(jsx?)$/,
            exclude: /(node_modules)/,
            loader: 'laxar-mocks/spec-loader'
         },

         {  // load styles, images and fonts with the file-loader
            // (out-of-bundle in var/build/assets/)
            test: /\.(gif|jpe?g|png|ttf|woff2?|svg|eot|otf)(\?.*)?$/,
            loader: 'file-loader',
            options: {
               name: isProduction ? 'assets/[name]-[sha1:hash:8].[ext]' : 'assets/[name].[ext]'
            }
         },
         {  // ... after optimizing graphics with the image-loader ...
            test: /\.(gif|jpe?g|png|svg)$/,
            loader: 'img-loader?progressive=true'
         },
         {  // ... and resolving CSS url()s with the css loader
            // (extract-loader extracts the CSS string from the JS module returned by the css-loader)
            test: /\.(css|s[ac]ss)$/,
            loader: isProduction ?
               ExtractTextPlugin.extract( { fallbackLoader: 'style-loader', loader: 'css-loader' } ) :
               'style-loader!css-loader'
         },
         {  // load scss files by precompiling with the sass-loader
            test: /\/default.theme\/.*\.s[ac]ss$/,
            loader: 'sass-loader',
            options: {
               includePaths: [
                  'laxar-uikit/themes/default.theme/scss',
                  'laxar-uikit/scss',
                  './node_modules/bootstrap-sass/assets/stylesheets',
                  './node_modules',
                  './node_modules/laxar-uikit/scss',
                  './node_modules/laxar-uikit/themes/default.theme/scss'
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
         }
      ]
   }
};

if( isBrowserSpec ) {
   const WebpackJasmineHtmlRunnerPlugin = require( 'webpack-jasmine-html-runner-plugin' );
   config.entry = WebpackJasmineHtmlRunnerPlugin.entry( './application/widgets/*/spec/*.spec.js' );
   config.output = {
      path: path.resolve( path.join( process.cwd(), 'spec-output' ) ),
      publicPath: '/spec-output/',
      filename: '[name].bundle.js'
   };
}

module.exports = config;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function productionPlugins( plugins ) {
   return plugins.concat( [
      new webpack.SourceMapDevToolPlugin( { filename: '[name].bundle.min.js.map' } ),
      new webpack.optimize.UglifyJsPlugin( {
         compress: { warnings: false },
         sourceMap: true
      } ),
      new ExtractTextPlugin( { filename: '[name].bundle.css' } )
   ] );
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function basePlugins() {
   return [
      new webpack.optimize.CommonsChunkPlugin( { name: 'vendor' } ),
      new webpack.SourceMapDevToolPlugin( { filename: '[name].bundle.js.map' } )
   ];
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function browserSpecPlugins() {
   const WebpackJasmineHtmlRunnerPlugin = require( 'webpack-jasmine-html-runner-plugin' );
   return [
      new webpack.SourceMapDevToolPlugin( { filename: '[name].bundle.js.map' } ),
      new WebpackJasmineHtmlRunnerPlugin()
   ].concat( reactPlugins() );
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function reactPlugins() {
   return [
      new webpack.DefinePlugin( { 'process.env': { 'NODE_ENV': JSON.stringify( nodeEnv ) } } )
   ];
}
