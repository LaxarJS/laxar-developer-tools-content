/**
 * Copyright 2017 aixigo AG
 * Released under the MIT license.
 * http://laxarjs.org/license
 */

import * as axMocks from 'laxar-mocks';


// Minimalistic test setup. More information:
// https://github.com/LaxarJS/laxar-mocks/blob/master/docs/manuals/index.md

describe( 'The page-inspector-widget', () => {

   beforeEach( axMocks.setupForWidget() );

   beforeEach( () => {
      axMocks.widget.configure( {
         pageInfo: {
            resource: 'page'
         }
      } );
   } );

   beforeEach( axMocks.widget.load );

   afterEach( axMocks.tearDown );

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   it( 'can be instantiated successfully', () => {
      expect( true ).toBe( true );
   } );

} );

