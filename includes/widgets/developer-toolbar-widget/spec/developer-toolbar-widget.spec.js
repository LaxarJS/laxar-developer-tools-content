/**
 * Copyright 2015 aixigo AG
 * Released under the MIT license.
 * http://www.laxarjs.org
 */
define( [
   'json!../widget.json',
   'laxar/laxar_testing',
   '../developer-toolbar-widget'
], function( descriptor, ax ) {
   'use strict';

   describe( 'A developer-toolbar-widget', function() {

      var testBed;

      beforeEach( function setup() {
         testBed = ax.testing.portalMocksAngular.createControllerTestBed( descriptor );
         testBed.featuresMock = {
            grid: {
               resource: 'gridSettings'
            }
         };

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
