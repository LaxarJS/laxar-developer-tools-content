/**
 * Copyright 2015 aixigo AG
 * Released under the MIT license.
 * http://www.laxarjs.org
 */
define( [
   '../ax-developer-toolbar-widget',
   'laxar/laxar_testing'
], function( widgetModule, ax ) {
   'use strict';

   describe( 'An AxDeveloperToolbarWidget', function() {

      var testBed;

      beforeEach( function setup() {
         testBed = ax.testing.portalMocksAngular.createControllerTestBed( 'developer-tools/ax-developer-toolbar-widget' );
         testBed.featuresMock = {
            grid: {
               resource: 'gridSettings'
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

      it( 'allows for the grid visualization layer to be configured through a resource (R2.2)', function() {
         expect( testBed.scope.eventBus.subscribe ).toHaveBeenCalledWith( 'didReplace.gridSettings', jasmine.any( Function ) );
      } );

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

   } );
} );
