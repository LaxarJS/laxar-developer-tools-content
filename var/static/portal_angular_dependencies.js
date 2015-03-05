define( [
   '../includes/widgets/developer-tools/ax-host-connector-widget/ax-host-connector-widget',
   '../includes/widgets/developer-tools/ax-developer-toolbar-widget/ax-developer-toolbar-widget',
   '../includes/widgets/developer-tools/ax-events-display-widget/ax-events-display-widget',
   '../includes/widgets/developer-tools/ax-log-display-widget/ax-log-display-widget',
   'laxar_uikit/controls/input',
   'laxar_uikit/controls/affix'
], function() {
   'use strict';

   return [].map.call( arguments, function( module ) { return module.name; } );
} );
