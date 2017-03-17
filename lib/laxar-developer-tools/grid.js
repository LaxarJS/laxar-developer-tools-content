/**
 * Copyright 2017 aixigo AG
 * Released under the MIT license.
 * http://www.laxarjs.org
 */

/* global chrome */

function axDeveloperToolsToggleGrid( settings ) {
   let gridSettings = settings;
   let hostDocument;
   const id = 'laxar-developer-tools-grid';
   if( window.chrome && chrome.runtime && chrome.runtime.id ) {
      hostDocument = window.document;
   }
   else {
      hostDocument = applicationWindow().document;
   }

   const grid = hostDocument.getElementById( id );
   if( grid === null ) {
      createGrid( id );
   }
   else if( window.getComputedStyle( grid ).getPropertyValue( 'display' ) === 'none' ) {
      grid.style.display = 'block';
   }
   else if( grid !== null && window.getComputedStyle( grid ).getPropertyValue( 'display' ) === 'block' ) {
      grid.style.display = 'none';
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function applicationWindow() {
      return window.opener || window.parent || window;
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function createGrid( id ){
      const grid = hostDocument.createElement( 'div' );
      grid.setAttribute( 'id', id );
      createSettings();
      Object.keys( gridSettings.css ).forEach( key => {
         grid.style[ key ] = gridSettings.css[ key ];
      } );
      const anchorElement = hostDocument.querySelector( gridSettings.anchor );
      anchorElement.insertBefore(
         grid,
         anchorElement.childNodes[ 0 ]
      );
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function createSettings() {
      gridSettings = {
         anchor: gridSettings.anchor || '[data-ax-page], [ax-page]',
         columns: {
            count: setValue( gridSettings.columns.count, 12 ),
            width: setValue( gridSettings.columns.width, 78 ),
            gutter: setValue( gridSettings.columns.gutter, 26 ),
            padding: setValue( gridSettings.columns.padding, 13 )
         },
         css: gridSettings.css || {}
      };
      const width = ( gridSettings.columns.count * gridSettings.columns.width ) +
                    ( ( gridSettings.columns.count - 1 ) * gridSettings.columns.gutter );

      const defaultCss = {
         'background-position': `${gridSettings.columns.padding}px 0`,
         'margin': '0 auto',
         'padding': `0 ${gridSettings.columns.padding}px`,
         'box-sizing': 'content-box',
         'position': 'fixed',
         'top': 0,
         'right': 0,
         'bottom': 0,
         'left': 0,
         'z-index': 100,
         'width': `${width}px`,
         'background-image': `url("${columnBackgroundUri( gridSettings.columns )}")`
      };
      gridSettings.css = mergeObjects( gridSettings.css, defaultCss );

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      function setValue( value, defaultValue ) {
         return typeof value === 'undefined' ? defaultValue : value;
      }

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      function mergeObjects( target, source ) {
         Object.keys( source ).forEach( key => {
            if( !target.hasOwnProperty( key ) ) {
               target[ key ] = source[ key ];
            }
         } );
         return target;
      }
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function columnBackgroundUri( settings ) {
      const bgCanvas = document.createElement( 'canvas' );
      const height = 64;
      const width = parseInt( settings.width, 10 );
      const padding = parseInt( settings.padding, 10 );
      bgCanvas.width = width + parseInt( settings.gutter, 10 );
      bgCanvas.height = height;
      const context = bgCanvas.getContext( '2d' );
      // padding
      context.fillStyle = 'rgba(229, 111, 114, 0.25)';
      context.fillRect( 0, 0, padding, height );
      context.fillRect( width - padding, 0, padding, height );
      // column
      context.fillStyle = 'rgba(229, 111, 114, 0.4)';
      context.fillRect( padding, 0, width - ( 2 * padding ) , height );
      return bgCanvas.toDataURL();
   }
}
