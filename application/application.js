// See https://github.com/LaxarJS/laxar/blob/master/docs/manuals/configuration.md
window.laxar = ( function() {
   'use strict';

   var modeAttribute = 'data-ax-application-mode';
   var mode = document.querySelector( 'script[' + modeAttribute + ']' ).getAttribute( modeAttribute );

   return {
      name: 'contents',
      description: 'LaxarJS DeveloperTools',

      theme: 'default',
      useMergedCss: mode === 'RELEASE',
      useEmbeddedFileListings: mode === 'RELEASE'
   };

} )();
