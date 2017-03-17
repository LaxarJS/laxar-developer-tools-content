import 'polyfills';
import { bootstrap } from 'laxar';

import * as reactAdapter from 'laxar-react-adapter';

import artifacts from 'laxar-loader/artifacts?flow=main&theme=default';

const config = {
   name: 'LaxarJS Developer Tools',
   router: {
      query: {
         enabled: true
      },
      pagejs: {
         hashbang: true
      }
   },
   flow: {
      name: 'main'
   },
   logging: {
      threshold: 'TRACE'
   },
   theme: 'default',
   tooling: {
      enabled: true
   }
};

bootstrap( document.querySelector( '[data-ax-page]' ), {
   widgetAdapters: [ reactAdapter ],
   configuration: config,
   artifacts
} );
