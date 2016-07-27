/**
 * Copyright 2016 aixigo AG
 * Released under the MIT license.
 * http://laxarjs.org/license
 */

/* global chrome */

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
      var pageInfoVersion = -1;
      var timeout;
      var lastIndexByStream = {};
      var isBrowserExtension = window.chrome && chrome.runtime && chrome.runtime.id;
      var isLaxarApplication;

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
         if( !window.opener && !isBrowserExtension ) {
           window.alert( 'laxar-developer-tools-widget: window must be opened from a LaxarJS page.' );
           return;
         }
         tryPublishData();
      } );

      if( isBrowserExtension ) {
         chrome.devtools.network.onRequestFinished.addListener( tryPublishData );
      }

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      function tryPublishData() {
         var channel;
         var successful = false;
         if( isBrowserExtension ) {
            chrome.devtools.inspectedWindow.eval(
               'axDeveloperToolsExtensionActivate()',
               { useContentScriptContext: true }
            );
            chrome.devtools.inspectedWindow.eval( 'axDeveloperToolsApi', publishDataOrHandleException );
         }
         else {
            try {
               channel = window.opener.axDeveloperTools;
               publishDataOrHandleException( channel, false );
            }
            catch( exception ) {
               publishDataOrHandleException( channel, true );
            }
         }
      }

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      function publishDataOrHandleException( channel, isException ) {
         if( isException ) {
            handleApplicationGone();
         }
         else {
            var channelGridSettings = channel && channel.gridSettings;
            if( $scope.features.grid.resource && channelGridSettings ) {
               eventBus.publish( 'didReplace.' + $scope.features.grid.resource, {
                  resource: $scope.features.grid.resource,
                  data: channelGridSettings
               } );
            }
            publishLaxarApplicationFlag( true );
            checkForData();
         }
      }

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      function checkForData() {
         var channel;
         if( isBrowserExtension ){
            chrome.devtools.inspectedWindow.eval( 'axDeveloperToolsApi', checkForDataOrHandleException );
         }
         else {
            try {
               channel = window.opener.axDeveloperTools;
               checkForDataOrHandleException( channel, false );
            } catch (e) {
               checkForDataOrHandleException( channel, true );
            }
         }
      }

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      function checkForDataOrHandleException( channel, isException ) {
         if( isException ) {
            handleApplicationGone();
         }
         else {
            var buffers = channel && channel.buffers;
            if( buffers ) {
               publishStream( 'events' );
               publishStream( 'log' );
            }
            if( channel && channel.pageInfoVersion > pageInfoVersion ) {
               pageInfoVersion = channel.pageInfoVersion;
               eventBus.publish( 'didReplace.' + $scope.features.pageInfo.resource, {
                  resource: $scope.features.pageInfo.resource,
                  data: channel.pageInfo
               } );
            }
            publishLaxarApplicationFlag( true );
            timeout = window.setTimeout( checkForData, REFRESH_DELAY_MS );
         }

         /////////////////////////////////////////////////////////////////////////////////////////////////////

         function publishStream( bufferFeature ) {
            var buffer = buffers[ bufferFeature ];
            var lastIndex = lastIndexByStream[ bufferFeature ] || -1;
            var events = buffer
               .filter( function( _ ) { return lastIndex < _.index; } )
               .map( function ( _ ) { return JSON.parse( _.json ); } );
            if( !events.length ) {
               return;
            }
            eventBus.publish( 'didProduce.' + $scope.features[ bufferFeature ].stream, {
               stream: $scope.features[ bufferFeature ].stream,
               data: events
            } );
            lastIndexByStream[ bufferFeature ] = buffer[ buffer.length - 1 ].index;
            navigation( events );
         }

         /////////////////////////////////////////////////////////////////////////////////////////////////////

         function navigation( events ) {
            events.forEach( function( event ) {
               if( event.action === 'publish' && event.event.substr( 0, 11 ) === 'didNavigate') {
                  eventBus.publish( 'takeActionRequest.navigation', {
                     action: 'navigation'
                  } );
               }
            } );
         }
      }

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      function handleApplicationGone() {
         publishLaxarApplicationFlag( false );
         if( !isBrowserExtension ){
            var message =
               'laxar-developer-tools-widget: Cannot access LaxarJS host window (or tab). Is it still open?';
            ax.log.error( message );
            eventBus.publish( 'didEncounterError', message );
         }
      }

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      function publishLaxarApplicationFlag( state ) {
         if( isLaxarApplication !== state ) {
            eventBus.publish( 'didChangeFlag.' + $scope.features.laxarApplication.flag + '.' + state, {
               flag: $scope.features.laxarApplication.flag,
               state: state
            } );
            isLaxarApplication = state;
            if( isBrowserExtension ) {
               chrome.runtime.sendMessage( {
                  active: state,
                  id: chrome.devtools.inspectedWindow.tabId
               } );
            }
         }
      }
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   return ng.module( 'hostConnectorWidget', [] )
      .controller( 'HostConnectorWidgetController', Controller );

} );
