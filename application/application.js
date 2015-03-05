// See https://github.com/LaxarJS/laxar/blob/master/docs/manuals/configuration.md
window.laxar = ( function() {
   'use strict';

   var modeAttribute = 'data-ax-application-mode';
   var mode = document.querySelector( 'script[' + modeAttribute + ']' ).getAttribute( modeAttribute );

   return {
      name: 'contents',
      description: 'LaxarJS DeveloperTools',

      portal: {
         theme: 'default',
         useMergedCss: mode === 'RELEASE'
      },

      file_resource_provider: {
         fileListings: {
            'application': 'var/listing/application_resources.json',
            'bower_components': 'var/listing/bower_components_resources.json',
            'includes': 'var/listing/includes_resources.json'
         },
         useEmbedded: mode === 'RELEASE'
      },

      i18n: {
         locales: {
            'default': 'en'
         }
      }

   };

} )();
