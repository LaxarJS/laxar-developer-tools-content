/**
 * Copyright 2014 aixigo AG
 * Released under the MIT license.
 * http://laxarjs.org/license
 */
define( [
   'json!../widget.json',
   'laxar/laxar_testing',
   '../events-display-widget'
], function( descriptor, ax ) {
   'use strict';

   describe( 'An events-display-widget', function() {

      var testBed;
      var metaEvents;
      var bufferSize = 9;

      beforeEach( function() {
         metaEvents = [
            {
               action: 'subscribe',
               event: 'takeActionRequest.doStuff',
               source: 'widget.myPopupWidget',
               cycleId: 1,
               time: '2015-01-01T00:00:02.001Z'
            },
            {
               action: 'subscribe',
               event: 'takeActionRequest.doStuff',
               source: 'widget.myOtherWidget',
               cycleId: 1,
               time: '2015-01-01T00:00:02.001Z'
            },
            {
               action: 'subscribe',
               event: 'didNavigate',
               source: 'widget.someWidget',
               cycleId: 2,
               time: '2015-01-01T00:00:02.001Z'
            },
            {
               action: 'publish',
               event: 'didNavigate.here',
               source: 'axFlowController',
               cycleId: 3,
               time: '2015-01-01T00:00:03.001Z',
               eventObject: { target: 'here', data: {} }
            },
            {
               action: 'publish',
               event: 'takeActionRequest.doStuff',
               source: 'widget.myButtonWidget',
               cycleId: 4,
               time: '2015-01-01T00:00:04.001Z',
               eventObject: { action: 'here' }
            },
            {
               action: 'deliver',
               event: 'didNavigate.here',
               source: 'axFlowController',
               target: 'widget.someWidget',
               cycleId: 3,
               time: '2015-01-01T00:00:03.002Z'
            },
            {
               action: 'deliver',
               event: 'takeActionRequest.doStuff',
               source: 'widget.myButtonWidget',
               target: 'widget.myPopupWidget',
               cycleId: 4,
               time: '2015-01-01T00:00:04.002Z'
            },
            {
               action: 'deliver',
               event: 'takeActionRequest.doStuff',
               source: 'widget.myButtonWidget',
               target: 'widget.myOtherWidget',
               cycleId: 4,
               time: '2015-01-01T00:00:04.003Z'
            },
            {
               action: 'unsubscribe',
               event: 'takeActionRequest.doStuff',
               source: 'widget.myPopupWidget',
               cycleId: 5,
               time: '2015-01-01T00:00:05.001Z'
            },
            {
               action: 'unsubscribe',
               event: 'takeActionRequest.doStuff',
               source: 'widget.myOtherWidget',
               cycleId: 5,
               time: '2015-01-01T00:00:05.001Z'
            }
         ];

         testBed = ax.testing.portalMocksAngular.createControllerTestBed( descriptor );
         testBed.featuresMock = {
            events: {
               stream: 'myEventStream',
               bufferSize: bufferSize
            }
         };

         testBed.useWidgetJson();
         testBed.setup();

         testBed.eventBusMock.publish( 'didProduce.myEventStream', { data: metaEvents } );
         jasmine.Clock.tick( 0 );
      } );

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      describe( 'to display event items (events)', function() {

         it( 'subscribes to the configured meta-event, to obtain event items (R1.1)', function() {
            expect( testBed.scope.eventBus.subscribe ).toHaveBeenCalledWith(
               'didProduce.myEventStream',
               jasmine.any( Function )
            );
         } );

         /////////////////////////////////////////////////////////////////////////////////////////////////////

         it( 'represents each event item if not filtered out (R1.2)', function() {
            var expectedVisibleItems = testBed.scope.model.eventInfos.filter( function( info ) {
               return info.interaction in { 'publish': 1, 'deliver': 1 } &&
                      -1 === info.source.indexOf( 'AxFlowController' );
            } );
            expect( testBed.scope.model.visibleEventInfos ).toEqual( expectedVisibleItems );
         } );

         /////////////////////////////////////////////////////////////////////////////////////////////////////

         it( 'maintains a buffer of limited size (R1.3)', function() {
            expect( testBed.scope.model.eventInfos.length ).toEqual( bufferSize );
         } );

         /////////////////////////////////////////////////////////////////////////////////////////////////////

         it( 'offers the user to clear the buffer manually, removing all event rows from view (R1.4)', function() {
            testBed.scope.commands.discard();
            expect( testBed.scope.model.eventInfos.length ).toEqual( 0 );
            expect( testBed.scope.model.visibleEventInfos.length ).toEqual( 0 );
         } );

         /////////////////////////////////////////////////////////////////////////////////////////////////////

         it( 'allows for the user to select events rows, resulting in a highlighted representation (R1.5)', function() {
            expect( testBed.scope.model.visibleEventInfos[ 0 ].selected ).toBe( false );
            testBed.scope.commands.select( testBed.scope.model.visibleEventInfos[ 0 ] );
            expect( testBed.scope.model.visibleEventInfos[ 0 ].selected ).toBe( true );
         } );

         /////////////////////////////////////////////////////////////////////////////////////////////////////

         describe( 'When a row with interaction type _publish_ or _subscribe_ is highlighted', function() {

            beforeEach( function() {
               testBed.scope.model.settings.sources.runtime = true;
               testBed.scope.$digest();
               // select publish for takeActionRequest.doStuff
               testBed.scope.commands.select( testBed.scope.model.visibleEventInfos[ 1 ] );
            } );

            //////////////////////////////////////////////////////////////////////////////////////////////////

            it( 'highlights _related_ rows as well (R1.6)', function() {
               var selected = testBed.scope.model.visibleEventInfos.map( function( _ ) { return _.selected; } );
               // expect publish/deliver for takeActionRequest.doStuff
               expect( selected ).toEqual( [ true, true, false, true, false ] );
            } );

         } );

         /////////////////////////////////////////////////////////////////////////////////////////////////////

         it( 'allows for the user to impose a _limit_ on the number of most recent events to display (R1.7)', function() {
            testBed.scope.model.settings.visibleEventsLimit = 2;
            testBed.scope.$digest();

            expect( testBed.scope.model.visibleEventInfos.length ).toEqual( 2 );
         } );

      } );

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      describe( 'to filter event items (filters)', function() {

         it( 'offers to filter events _by name_, using regular expressions (R2.1)', function() {
            testBed.scope.model.settings.interactions.subscribe = true;

            // select didNavigate, but not didNavigate.here
            testBed.scope.model.settings.namePattern = 'did[^.]+$';
            testBed.scope.$digest();

            expect( testBed.scope.model.visibleEventInfos.length ).toEqual( 1 );
         } );

         /////////////////////////////////////////////////////////////////////////////////////////////////////

         it( 'offers to filter events _by pattern_, using a group of toggle controls (R2.2)', function() {
            testBed.scope.model.settings.sources.runtime = true;
            testBed.scope.model.settings.interactions.subscribe = true;
            testBed.scope.model.settings.interactions.unsubscribe = true;

            testBed.scope.model.settings.patterns.actions = false;
            testBed.scope.$digest();

            expect( testBed.scope.model.visibleEventInfos.length ).toEqual( 3 );
         } );

         /////////////////////////////////////////////////////////////////////////////////////////////////////

         it( 'offers to filter events _by interaction type_, using a group of toggle controls (R2.3)', function() {
            testBed.scope.model.settings.sources.runtime = true;

            testBed.scope.model.settings.interactions.subscribe = true;
            testBed.scope.model.settings.interactions.unsubscribe = true;
            testBed.scope.model.settings.interactions.publish = false;
            testBed.scope.model.settings.interactions.deliver = false;
            testBed.scope.$digest();

            expect( testBed.scope.model.visibleEventInfos.length ).toEqual( 4 );
         } );

         /////////////////////////////////////////////////////////////////////////////////////////////////////

         it( 'offers to filter events _by source type_, using a group of toggle controls (R2.4)', function() {
            testBed.scope.model.settings.interactions.subscribe = true;
            testBed.scope.model.settings.interactions.unsubscribe = true;

            testBed.scope.model.settings.sources.widgets = false;
            testBed.scope.model.settings.sources.runtime = true;
            testBed.scope.$digest();

            expect( testBed.scope.model.visibleEventInfos.length ).toEqual( 2 );
         } );

      } );

   } );

} );
