/**
 * Copyright 2017 aixigo AG
 * Released under the MIT license.
 * http://laxarjs.org/license
 */

import * as axMocks from 'laxar-mocks';


describe( 'The log-display-widget', () => {

   let messageItems;
   let otherMessageItems;
   let widgetDom;
   const bufferSize = 3;
   const messageRowSelector = 'tbody > tr';
   const clearButtonSelector = 'button';

   beforeEach( axMocks.setupForWidget() );

   beforeEach( () => {
      messageItems = [
         {
            level: 'INFO',
            text: 'test info message',
            time: '2015-01-01T01:01:01.001Z',
            sourceInfo: {
               file: 'some/file.js',
               line: 101
            }
         },
         {
            level: 'WARN',
            text: 'test WARN message',
            time: '2015-01-01T01:01:02.001Z',
            sourceInfo: {
               file: 'some/other/file.js',
               line: 101
            }
         }
      ];

      otherMessageItems = [
         {
            level: 'INFO',
            text: 'test info message',
            time: '2015-01-01T01:01:03.001Z',
            sourceInfo: {
               file: 'some/file.js',
               line: 101
            }
         },
         {
            level: 'ERROR',
            text: 'test ERROR message',
            time: '2015-01-01T01:01:04.001Z',
            sourceInfo: {
               file: 'some/other/file.js',
               line: 101
            }
         }
      ];

      axMocks.widget.configure( {
         log: {
            stream: 'myLogStream',
            bufferSize
         }
      } );

   } );

   beforeEach( axMocks.widget.load );

   beforeEach( () => {
      widgetDom = axMocks.widget.render();
   } );

   beforeEach( () => {
      axMocks.eventBus.publish( 'didProduce.myLogStream', { data: messageItems } );
      axMocks.eventBus.flush();
   } );

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   afterEach( axMocks.tearDown );

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   describe( 'to display log messages (log)', () => {

      it( 'subscribes to the configured meta-event, to obtain event items (R1.1)', () => {
         expect( axMocks.widget.axEventBus.subscribe ).toHaveBeenCalledWith(
            'didProduce.myLogStream',
            jasmine.any( Function )
         );
      } );

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      it( 'represents each log item (R1.2)', () => {
         expect( widgetDom.querySelectorAll( messageRowSelector ).length ).toEqual( 2 );
      } );

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      it( 'maintains a buffer of limited size (R1.3)', () => {
         axMocks.eventBus.publish( 'didProduce.myLogStream', { data: otherMessageItems } );
         axMocks.eventBus.flush();
         expect( widgetDom.querySelectorAll( messageRowSelector ).length ).toEqual( bufferSize );
      } );

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      it( 'offers the user to clear the buffer manually, removing all event rows from view (R1.4)', () => {
         expect( widgetDom.querySelectorAll( messageRowSelector ).length ).toEqual( 2 );
         widgetDom.querySelector( clearButtonSelector ).click();
         expect( widgetDom.querySelectorAll( messageRowSelector ).length ).toEqual( 0 );
      } );

   } );

} );
