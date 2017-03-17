/**
 * Copyright 2016 aixigo AG
 * Released under the MIT license.
 * http://laxarjs.org/license
 */

import ReactTestUtils from 'react-addons-test-utils';
import * as specData from './spec-data.js';
import * as axMocks from 'laxar-mocks';

describe( 'An events-display-widget', () => {

   const bufferSize = 9;
   let widgetDom;

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function createSetup( widgetConfiguration, metaEvents ) {

      beforeEach( axMocks.setupForWidget() );

      beforeEach( () => {
         axMocks.widget.configure( widgetConfiguration );
      } );

      beforeEach( axMocks.widget.load );

      beforeEach( () => {
         widgetDom = axMocks.widget.render();
      } );

      beforeEach( () => {
         axMocks.eventBus.publish( 'didProduce.myEventStream', { data: specData[ metaEvents ] } );
         axMocks.eventBus.flush();
      } );
   }

   afterEach( axMocks.tearDown );

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   describe( 'to display event items (events)', () => {

      createSetup(
         {
            events: {
               stream: 'myEventStream',
               bufferSize
            }
         },
         'metaEvents'
      );

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      it( 'subscribes to the configured meta-event, to obtain event items (R1.1)', () => {
         expect( axMocks.widget.axContext.eventBus.subscribe ).toHaveBeenCalledWith(
            'didProduce.myEventStream',
            jasmine.any( Function )
         );
      } );

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      it( 'represents each event item if not filtered out (R1.2)', () => {
         expect( widgetDom.querySelectorAll( '.ax-event-summary' ).length ).toEqual( 5 );
      } );

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      describe( 'with a longer event list resource', () => {

         beforeEach( () => {
            axMocks.eventBus.publish( 'didProduce.myEventStream', { data: specData.otherMetaEvents } );
            axMocks.eventBus.flush();
         } );

         /////////////////////////////////////////////////////////////////////////////////////////////////////

         it( 'maintains a buffer of limited size (R1.3)', () => {
            const filtered = 2;
            const numberOfVisibleEvents = widgetDom.querySelectorAll( '.ax-event-summary' ).length;
            expect( numberOfVisibleEvents ).toEqual( bufferSize - filtered );
         } );

         /////////////////////////////////////////////////////////////////////////////////////////////////////

         it( 'offers the user to clear the buffer manually, removing all event rows from view (R1.4)', () => {
            expect( widgetDom.querySelectorAll( '.ax-event-summary' ).length ).not.toEqual( 0 );
            widgetDom.querySelector( '.ax-discard-events' ).click();
            expect( widgetDom.querySelectorAll( '.ax-event-summary' ).length ).toEqual( 0 );
         } );

         /////////////////////////////////////////////////////////////////////////////////////////////////////

         it( 'allows for the user to select events rows, resulting in a highlighted representation (R1.5)',
            () => {
               const firstEventItem = widgetDom.querySelector( '.ax-event-body' );
               expect( firstEventItem.classList.contains( 'ax-event-selected' ) ).toBe( false );
               widgetDom.querySelector( '.ax-event-body' ).click();
               expect( firstEventItem.classList.contains( 'ax-event-selected' ) ).toBe( true );
            }
         );

      } );

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      describe( 'when a row with interaction type _publish_ or _subscribe_ is highlighted', () => {

         beforeEach( () => {
            widgetDom.querySelector( '.ax-event-body' ).click();
         } );

         /////////////////////////////////////////////////////////////////////////////////////////////////////

         it( 'highlights _related_ rows as well (R1.6)', () => {
            const selected = [];
            const nodeList = widgetDom.querySelectorAll( '.ax-event-body' );
            for( let i = 0; i < nodeList.length; ++i ) {
               selected.push( nodeList[ i ].classList.contains( 'ax-event-selected' ) );
            }

            expect( selected ).toEqual( [ true, true, false, true, false ] );
         } );

         /////////////////////////////////////////////////////////////////////////////////////////////////////

         it( 'allows for the user to impose a _limit_ on the number of most recent events to display (R1.7)',
            () => {
               widgetDom.querySelector( '#ax-test-widget-limit' ).value = 2;
               ReactTestUtils.Simulate.change( widgetDom.querySelector( '#ax-test-widget-limit' ) );
               expect( widgetDom.querySelectorAll( '.ax-event-body' ).length ).toEqual( 2 );
            }
         );

      } );

   } );

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   describe( 'to filter event items (filters)', () => {

      createSetup(
         {
            events: {
               stream: 'myEventStream',
               bufferSize
            }
         },
         'metaEvents'
      );

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      it( 'offers to filter events _by name_, using regular expressions (R2.1)', () => {
         expect( widgetDom.querySelectorAll( '.ax-event-body' ).length ).toEqual( 5 );
         widgetDom.querySelector( '.ax-events-display-subscribe' ).click();
         widgetDom.querySelector( '#ax-test-widget-search' ).value = 'did[^.]+$';
         ReactTestUtils.Simulate.change( widgetDom.querySelector( '#ax-test-widget-search' ) );

         expect( widgetDom.querySelectorAll( '.ax-event-body' ).length ).toEqual( 1 );
      } );

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      it( 'offers to filter events _by pattern_, using a group of toggle controls (R2.2)', () => {
         expect( widgetDom.querySelectorAll( '.ax-event-body' ).length ).toEqual( 5 );

         widgetDom.querySelector( '.ax-events-display-actions' ).click();
         expect( widgetDom.querySelectorAll( '.ax-event-body' ).length ).toEqual( 2 );

         widgetDom.querySelector( '.ax-events-display-navigation' ).click();
         expect( widgetDom.querySelectorAll( '.ax-event-body' ).length ).toEqual( 0 );

      } );

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      it( 'offers to filter events _by interaction type_, using a group of toggle controls (R2.3)', () => {
         expect( widgetDom.querySelectorAll( '.ax-event-body' ).length ).toEqual( 5 );

         widgetDom.querySelector( '.ax-events-display-unsubscribe' ).click();
         expect( widgetDom.querySelectorAll( '.ax-event-body' ).length ).toEqual( 7 );

         widgetDom.querySelector( '.ax-events-display-subscribe' ).click();
         expect( widgetDom.querySelectorAll( '.ax-event-body' ).length ).toEqual( 9 );

         widgetDom.querySelector( '.ax-events-display-publish' ).click();
         expect( widgetDom.querySelectorAll( '.ax-event-body' ).length ).toEqual( 7 );

         widgetDom.querySelector( '.ax-events-display-deliver' ).click();
         expect( widgetDom.querySelectorAll( '.ax-event-body' ).length ).toEqual( 4 );
      } );

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      it( 'offers to filter events _by source type_, using a group of toggle controls (R2.4)', () => {
         expect( widgetDom.querySelectorAll( '.ax-event-body' ).length ).toEqual( 5 );

         widgetDom.querySelector( '.ax-events-display-widgets' ).click();
         expect( widgetDom.querySelectorAll( '.ax-event-body' ).length ).toEqual( 2 );

         widgetDom.querySelector( '.ax-events-display-runtime' ).click();
         expect( widgetDom.querySelectorAll( '.ax-event-body' ).length ).toEqual( 0 );
      } );

   } );

} );
