import 'polyfills';
import { create } from 'laxar';

import * as reactAdapter from 'laxar-react-adapter';

import artifacts from 'laxar-loader/artifacts?flow=main&theme=default';

const config = {
   name: 'LaxarJS Developer Tools',
   router: {
      query: {
         enabled: true
      },
      navigo: {
         useHash: true
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

create( [ reactAdapter ], artifacts, config )
   .flow( config.flow.name, document.querySelector( '[data-ax-page]' ) )
   .bootstrap();
