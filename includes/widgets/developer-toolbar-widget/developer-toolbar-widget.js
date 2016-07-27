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
      var isBrowserExtension = window.chrome && chrome.runtime && chrome.runtime.id;

      $scope.resources = {};

      $scope.model = {
         laxar: true,
         tabs: TABS,
         activeTab: null,
         gridOverlay: false,
         widgetOverlay: false,
         toggleGridTitle: 'Configure grid settings in application to enable this feature!'
      };

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

      if( isBrowserExtension ) {
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
         if( isBrowserExtension ) {
            chrome.devtools.inspectedWindow.eval(
               'axDeveloperToolsToggleGrid( '+ JSON.stringify( $scope.resources.grid ) + ', ' +
                                            JSON.stringify( chrome.runtime.id ) + ' )',
               { useContentScriptContext: true }
            );
         }
         else {
            /* global axDeveloperToolsToggleGrid */
            axDeveloperToolsToggleGrid( $scope.resources.grid, $scope.id( 'axGrid' ) );
         }
      }

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      function toggleWidgetOutline(){
         if( isBrowserExtension ) {
            chrome.devtools.inspectedWindow.eval(
               'axDeveloperToolsToggleWidgetOutline(' + JSON.stringify( chrome.runtime.id ) + ')' ,
               { useContentScriptContext: true }
            );
         }
         else {
            /* global axDeveloperToolsToggleWidgetOutline */
            axDeveloperToolsToggleWidgetOutline( $scope.id( 'axInfo' ) );
         }
      }
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   return ng.module( 'developerToolbarWidget', [] )
      .controller( 'DeveloperToolbarWidgetController', Controller );

} );
