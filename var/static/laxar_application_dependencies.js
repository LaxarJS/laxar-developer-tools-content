define( [
   'laxar-input-control/ax-input-control',
   'laxar-affix-control/ax-affix-control',
   'laxar-application/includes/widgets/developer-tools/ax-host-connector-widget/ax-host-connector-widget',
   'laxar-application/includes/widgets/developer-tools/ax-developer-toolbar-widget/ax-developer-toolbar-widget',
   'laxar-application/includes/widgets/developer-tools/ax-events-display-widget/ax-events-display-widget',
   'laxar-application/includes/widgets/developer-tools/ax-log-display-widget/ax-log-display-widget'
], function() {
   'use strict';

   var modules = [].slice.call( arguments );
   return {
      'angular': modules.slice( 0, 6 )
   };
} );
