/**
 * Copyright 2016 aixigo AG
 * Released under the MIT license.
 * http://www.laxarjs.org
 */
define( [
   'laxar',
   'angular',
   'jquery',
   'laxar-patterns',
   '../../lib/laxar-developer-tools/grid',
   '../../lib/laxar-developer-tools/widget-outline'
], function( ax, ng, $, axPatterns) {
   'use strict';
   /* global chrome */
   // This controller performs heavy DOM-manipulation, which you would normally put into a directive.
   // However, only the DOM of the host application is manipulated, so this is acceptable.

   Controller.$inject = [ 'axEventBus', '$scope', '$window' ];

   function Controller( eventBus, $scope, $window ) {
      var TABS = [
         { name: 'events', label: 'Events' },
         { name: 'page', label: 'Page' },
         { name: 'log', label: 'Log' }
      ];
      var isBrowserWebExtension = ( window.chrome && chrome.runtime && chrome.runtime.id );
      var firefoxExtensionMessagePort;

      if( !window.opener ) {
         window.addEventListener( 'message', function( event ) {
            if( event.ports ) {
               firefoxExtensionMessagePort = event.ports[ 0 ];
               firefoxExtensionMessagePort.start();
            }
         } );
      }

      $scope.resources = {};

      $scope.model = {
         laxar: true,
         tabs: TABS,
         activeTab: null,
         gridOverlay: false,
         widgetOverlay: false,
         toggleGridTitle: 'Configure grid settings in application to enable this feature!',
         noLaxar: 'Reload page to enable LaxarJS developer tools!'
      };

      if( !window.opener && !isBrowserWebExtension && !firefoxExtensionMessagePort ) {
         $scope.model.noLaxar = 'laxar-developer-tools-widget: window must be opened from a LaxarJS page!';
      }
      if( window.opener ) {
         $scope.model.noLaxar = 'Cannot access LaxarJS host window (or tab). Reopen laxar-developer-tools from LaxarJS host window.';
      }

      axPatterns.resources.handlerFor( $scope ).registerResourceFromFeature(
         'grid',
         {
            onReplace: function( event ) {
               $scope.model.toggleGridTitle = '';
            }
         }
      );

      axPatterns.flags.handlerFor( $scope ).registerFlag( $scope.features.detailsOn, {
         initialState: $scope.model.laxar,
         onChange: function( newState ) {
            $scope.model.laxar = newState;
         }
      } );

      if( isBrowserWebExtension ) {
         chrome.devtools.network.onNavigated.addListener( function() {
            $scope.model.gridOverlay = false;
            $scope.model.widgetOverlay = false;
            $scope.$apply();
         } );
      }

      axPatterns.visibility.handlerFor( $scope, { onAnyAreaRequest: function( event ) {
         var prefix = $scope.widget.id + '.';
         var activeTab = $scope.model.activeTab;
         return event.visible && activeTab !== null && event.area === prefix + activeTab.name;
      } } );

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      eventBus.subscribe( 'didNavigate', function( event ) {
         var newName = event.data[ $scope.features.tabs.parameter ];
         var newTab = TABS.filter( function( _ ) { return _.name === newName; } )[ 0 ];
         if( !newTab ) {
            return;
         }

         if( $scope.model.activeTab !== newTab ) {
            publishVisibility( $scope.model.activeTab, false );
            publishVisibility( newTab, true );
         }
         $scope.model.activeTab = newTab;

         function publishVisibility( tab, visible ) {
            if( tab ) {
               var area = $scope.widget.id + '.' + tab.name;
               axPatterns.visibility.requestPublisherForArea( $scope, area )( visible );
            }
         }
      } );

      eventBus.subscribe( 'takeActionRequest.navigation', function( event ) {
         eventBus.publish( 'willTakeAction.navigation', {
            action: 'navigation'
         } );
         if( $scope.model.gridOverlay ) {
            toggleGrid();
         }
         if( $scope.model.widgetOverlay ) {
            toggleWidgetOutline();
         }
         eventBus.publish( 'didTakeAction.navigation', {
            action: 'navigation'
         } );
      } );

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      $scope.activateTab = function( tab ) {
         var data = {};
         data[ $scope.features.tabs.parameter ] = tab.name;
         eventBus.publish( 'navigateRequest._self', {
            target: '_self',
            data: data
         } );
      };

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      $scope.toggleGrid = function() {
         if( !$scope.resources.grid ){ return; }
         toggleGrid();
         $scope.model.gridOverlay = !$scope.model.gridOverlay;
      };

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      $scope.toggleWidgetOutline = function() {
         toggleWidgetOutline();
         $scope.model.widgetOverlay = !$scope.model.widgetOverlay;
      };

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      function toggleGrid() {
         if( window.opener ) {
            /* global axDeveloperToolsToggleGrid */
            axDeveloperToolsToggleGrid( $scope.resources.grid, $scope.id( 'axGrid' ) );
            return;
         }
         if( isBrowserWebExtension ) {
            var event;
            event = new CustomEvent( 'toogleGrid', {
               detail: JSON.stringify( $scope.resources.grid )
            } );
            window.dispatchEvent( event );
         }
         else if( firefoxExtensionMessagePort ) {
            var message = { text: 'toogleGrid', data: $scope.resources.grid };
            firefoxExtensionMessagePort.postMessage( JSON.stringify( message ) );
         }
      }

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      function toggleWidgetOutline() {
         if( window.opener ) {
            /* global axDeveloperToolsToggleWidgetOutline */
            axDeveloperToolsToggleWidgetOutline( $scope.id( 'axInfo' ) );
            return;
         }
         if( isBrowserWebExtension ) {
            var event;
            event = new CustomEvent( 'widgetOutline', { } );
            window.dispatchEvent( event );
         }
         else if( firefoxExtensionMessagePort ) {
            var message = { text: 'widgetOutline', data: {} };
            firefoxExtensionMessagePort.postMessage( JSON.stringify( message ) );
         }
      }
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   return ng.module( 'developerToolbarWidget', [] )
      .controller( 'DeveloperToolbarWidgetController', Controller );

} );
