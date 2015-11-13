/**
 * Copyright 2014 aixigo AG
 * Released under the MIT license.
 * http://laxarjs.org/license
 */
define( [
   'json!../widget.json',
   'laxar/laxar_testing',
   '../log-display-widget'
], function( descriptor, ax ) {
   'use strict';

   describe( 'A log-display-widget', function() {

      var testBed;
      var messageItems;
      var bufferSize = 3;

      beforeEach( function() {
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

         testBed = ax.testing.portalMocksAngular.createControllerTestBed( descriptor );
         testBed.featuresMock = {
            log: {
               stream: 'myLogStream',
               bufferSize: bufferSize
            }
         };

         testBed.useWidgetJson();
         testBed.setup();

         testBed.eventBusMock.publish( 'didProduce.myLogStream', { data: messageItems } );
         jasmine.Clock.tick( 0 );
      } );

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      describe( 'to display log messages (log)', function() {

         it( 'subscribes to the configured meta-event, to obtain event items (R1.1)', function() {
            expect( testBed.scope.eventBus.subscribe ).toHaveBeenCalledWith(
               'didProduce.myLogStream',
               jasmine.any( Function )
            );
         } );

         /////////////////////////////////////////////////////////////////////////////////////////////////////

         it( 'represents each log item (R1.2)', function() {
            expect( testBed.scope.model.messages.length ).toEqual( 2 );
         } );

         /////////////////////////////////////////////////////////////////////////////////////////////////////

         it( 'maintains a buffer of limited size (R1.3)', function() {
            testBed.eventBusMock.publish( 'didProduce.myLogStream', { data: messageItems } );
            jasmine.Clock.tick( 0 );
            expect( testBed.scope.model.messages.length ).toEqual( bufferSize );
         } );

         /////////////////////////////////////////////////////////////////////////////////////////////////////

         it( 'offers the user to clear the buffer manually, removing all event rows from view (R1.4)', function() {
            testBed.scope.commands.discard();
            expect( testBed.scope.model.messages.length ).toEqual( 0 );
         } );

      } );

   } );

} );
