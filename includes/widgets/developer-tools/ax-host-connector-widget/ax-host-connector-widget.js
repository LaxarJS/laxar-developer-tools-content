/**
 * Copyright 2015 aixigo AG
 * Released under the MIT license.
 */
define( [
   'laxar',
   'angular'
], function( ax, ng ) {
   'use strict';

   var REFRESH_DELAY_MS = 100;

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   Controller.$inject = [ '$scope' ];

   function Controller( $scope ) {
      var eventBus = $scope.eventBus;
      var timeout;

      // If the development server is used and we don't want the development window to be reloaded each
      // time something changes during development, we shutdown live reload here.
      if( window.LiveReload && !$scope.features.development.liveReload ) {
         window.LiveReload.shutDown();
      }

      $scope.$on( '$destroy', function() {
         if( timeout ) {
            window.clearTimeout( timeout );
         }
      } );

      eventBus.subscribe( 'beginLifecycleRequest', function() {
         if( !window.opener ) {
            window.alert( 'The AxDeveloperToolsWidget window must be opened from a LaxarJS page.' );
            return;
         }

         publishGridSettings();
         checkForData();
      } );

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      function publishGridSettings() {
         var channel = window.opener.axDeveloperTools;
         var channelGridSettings = channel && channel.gridSettings;
         if( $scope.features.grid.resource && channelGridSettings ) {
            eventBus.publish( 'didReplace.' + $scope.features.grid.resource, {
               resource: $scope.features.grid.resource,
               data: channelGridSettings
            } );
         }
      }

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      function checkForData() {
         var channel = window.opener.axDeveloperTools;
         var buffers = channel && channel.buffers;
         if( buffers ) {
            if( buffers.events.length ) {
               eventBus.publish( 'didProduce.' + $scope.features.events.stream, {
                  stream: $scope.features.events.stream,
                  // re-wrap the transfer array to avoid bug in MSIE11
                  // see http://stackoverflow.com/questions/7975655 for details
                  data: [].concat( buffers.events )
               } );
               buffers.events = [];
            }

            if( buffers.log.length ) {
               eventBus.publish( 'didProduce.' + $scope.features.log.stream, {
                  stream: $scope.features.log.stream,
                  // re-wrap the transfer array to avoid bug in MSIE11
                  // see http://stackoverflow.com/questions/7975655 for details
                  data: [].concat( buffers.log )
               } );
               buffers.log = [];
            }
         }

         timeout = window.setTimeout( checkForData, REFRESH_DELAY_MS );
      }

   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   return ng.module( 'axHostConnectorWidget', [] )
      .controller( 'AxHostConnectorWidgetController', Controller );

} );
