/**
 * Copyright 2015-2017 aixigo AG
 * Released under the MIT license
 */
/* global require */

import 'polyfills';

import { create } from 'laxar';
import * as reactAdapter from 'laxar-react-adapter';
import artifacts from 'laxar-loader/artifacts?flow=main&theme=default';

const configuration = {
   name: 'LaxarJS Developer Tools',
   logging: { threshold: 'TRACE' },
   theme: 'default',
   router: {
      query: { enabled: true },
      navigo: { useHash: true }
   },
   tooling: {
      enabled: true
   }
};

create( [ reactAdapter ], artifacts, configuration )
   .tooling( require( 'laxar-loader/debug-info?flow=main&theme=default' ) )
   .flow( 'main', document.querySelector( '[data-ax-page]' ) )
   .bootstrap();
