/**
 * Copyright 2016 aixigo AG
 * Released under the MIT license.
 * http://laxarjs.org/license
 */

import * as axMocks from 'laxar-mocks';

describe( 'A host-connector-widget', () => {

   let fakeChannel;

   let widgetEventBus;
   let testEventBus;

   beforeEach( axMocks.setupForWidget() );

   beforeEach( () => {
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

      axMocks.widget.configure( {
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
         },
         laxarApplication: {
            flag: 'isLaxarApplication'
         }
      } );
   } );

   beforeEach( axMocks.widget.load );

   beforeEach( () => {
      widgetEventBus = axMocks.widget.axEventBus;
      testEventBus = axMocks.eventBus;
   } );

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   afterEach( axMocks.tearDown );

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   it( 'polls the host application for event bus interactions and' +
       ' publishes them through the configured stream topic (R1.1)', done => {
      testEventBus.publish( 'beginLifecycleRequest' );
      testEventBus.flush();
      expect( widgetEventBus.publish ).not.toHaveBeenCalledWith(
         'didProduce.logItems',
         jasmine.any(Object)
      );
      fakeChannel.buffers.events.push( { index: 0, json: JSON.stringify( { fake: 'event item' } ) } );
      window.setTimeout( () => {
         expect( widgetEventBus.publish ).not.toHaveBeenCalledWith(
            'didProduce.logItems',
            jasmine.any( Object )
         );
         window.setTimeout( () => {
            expect( widgetEventBus.publish ).toHaveBeenCalledWith(
               'didProduce.eventBusItems',
               {
                  stream: 'eventBusItems',
                  data: [ { fake: 'event item' } ]
               }
            );
            done();
         }, 21 );
      }, 80 );
   } );

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   it( 'polls the host application for log messages and ' +
       'publishes them through the configured stream topic (R1.2)', done => {
      testEventBus.publish( 'beginLifecycleRequest' );
      testEventBus.flush();
      expect( widgetEventBus.publish ).not.toHaveBeenCalledWith(
         'didProduce.logItems',
         jasmine.any(Object)
      );
      fakeChannel.buffers.log.push( { index: 0, json: JSON.stringify( { fake: 'log item' } ) } );
      window.setTimeout( () => {
         expect( widgetEventBus.publish ).not.toHaveBeenCalledWith(
            'didProduce.logItems',
            jasmine.any(Object)
         );
         window.setTimeout( () => {
            expect( widgetEventBus.publish ).toHaveBeenCalledWith(
               'didProduce.logItems',
               {
                  stream: 'logItems',
                  data: [ { fake: 'log item' } ]
               }
            );
            done();
         }, 21 );
      }, 80 );
   } );

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   it( 'polls the host application for CSS grid settings and ' +
       'publishes them through the configured resource (R1.3)', () => {
      fakeChannel.gridSettings = { fake: 'grid' };
      testEventBus.publish( 'beginLifecycleRequest' );
      testEventBus.flush();
      expect( widgetEventBus.publish ).toHaveBeenCalledWith( 'didReplace.gridSettings', {
         resource: 'gridSettings',
         data: { fake: 'grid' }
      } );
   } );

} );
