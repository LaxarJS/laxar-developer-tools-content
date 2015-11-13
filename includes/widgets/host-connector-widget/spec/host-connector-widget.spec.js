/**
 * Copyright 2015 aixigo AG
 * Released under the MIT license.
 */
define( [
   'json!../widget.json',
   'laxar/laxar_testing',
   '../host-connector-widget'
], function( descriptor, ax ) {
   'use strict';

   describe( 'A host-connector-widget', function() {

      var testBed;
      var fakeChannel;

      beforeEach( function setup() {
         jasmine.Clock.useMock();

         // fake the AxDeveloperToolsWidget presence in the opener window:
         window.opener = {
            axDeveloperTools: {
               buffers: {
                  events: [],
                  log: []
               }
            }
         };

         fakeChannel = window.opener.axDeveloperTools;

         testBed = ax.testing.portalMocksAngular.createControllerTestBed( descriptor );
         testBed.featuresMock =  {
            events: {
               stream: 'eventBusItems'
            },
            log: {
               stream: 'logItems'
            },
            grid: {
               resource: 'gridSettings'
            },
            pageInfo: {
               resource: 'page'
            }
         };

         testBed.useWidgetJson();
         testBed.setup();
      } );

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      afterEach( function() {
         testBed.tearDown();
      } );

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      it( 'polls the host application for event bus interactions and publishes them through the configured stream topic (R1.1)', function() {
         testBed.eventBusMock.publish( 'beginLifecycleRequest' );
         jasmine.Clock.tick( 0 );
         expect( testBed.scope.eventBus.publish ).not.toHaveBeenCalled();

         fakeChannel.buffers.events.push( { index: 0, json: JSON.stringify( { fake: 'event item' } ) } );
         jasmine.Clock.tick( 99 );
         expect( testBed.scope.eventBus.publish ).not.toHaveBeenCalled();

         jasmine.Clock.tick( 1 );
         expect( testBed.scope.eventBus.publish ).toHaveBeenCalledWith( 'didProduce.eventBusItems', {
            stream: 'eventBusItems',
            data: [ { fake: 'event item' } ]
         } );
      } );

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      it( 'polls the host application for log messages and publishes them through the configured stream topic (R1.2)', function() {
         testBed.eventBusMock.publish( 'beginLifecycleRequest' );
         jasmine.Clock.tick( 0 );
         expect( testBed.scope.eventBus.publish ).not.toHaveBeenCalled();

         fakeChannel.buffers.log.push( { index: 0, json: JSON.stringify( { fake: 'log item' } ) } );
         jasmine.Clock.tick( 99 );
         expect( testBed.scope.eventBus.publish ).not.toHaveBeenCalled();

         jasmine.Clock.tick( 100 );
         expect( testBed.scope.eventBus.publish ).toHaveBeenCalledWith( 'didProduce.logItems', {
            stream: 'logItems',
            data: [ { fake: 'log item' } ]
         } );
      } );

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      it( 'polls the host application for CSS grid settings and publishes them through the configured resource (R1.3)', function() {
         fakeChannel.gridSettings = { fake: 'grid' };
         testBed.eventBusMock.publish( 'beginLifecycleRequest' );
         jasmine.Clock.tick( 0 );
         expect( testBed.scope.eventBus.publish ).toHaveBeenCalledWith( 'didReplace.gridSettings', {
            resource: 'gridSettings',
            data: { fake: 'grid' }
         } );
      } );

   } );

} );
