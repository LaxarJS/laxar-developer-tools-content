/**
 * Copyright 2017 aixigo AG
 * Released under the MIT license.
 * http://www.laxarjs.org
 */

import React from 'react';
import { resources, flags } from 'laxar-patterns';
import { AxWidgetArea } from 'laxar-react-adapter';

import * as developerToolsToggleGrid from 'grid';
import * as developerToolsToggleWidgetOutline from 'widget-outline';

const toggleWidgetOutlineHelper = developerToolsToggleWidgetOutline.default;
const toggleGridHelper = developerToolsToggleGrid.default;


const injections = [
   'axContext', 'axEventBus', 'axReactRender', 'axFlowService', 'axAreaHelper', 'axVisibility'
];
function create( context, eventBus, reactRender, flowService, areaHelper, axVisibility) {
   'use strict';
   const HINT_NO_LAXAR_EXTENSION = 'Reload page to enable LaxarJS developer tools!';
   const HINT_DISABLE_TOGGLE_GRID = 'Configure grid settings in application to enable this feature!';
   const HINT_NO_LAXAR_ANYMORE_WIDGET = 'Cannot access LaxarJS host window (or tab).' +
                                       ' Reopen laxar-developer-tools from LaxarJS host window.';
   const HINT_CONFIGURE_GRID = 'Configure grid settings in application to enable this feature!';

   const TABS = [
      { name: 'events', label: 'Events' },
      { name: 'page', label: 'Page' },
      { name: 'log', label: 'Log' }
   ];

   const model = {
      laxar: true,
      tabs: TABS,
      activeTab: TABS[ 0 ],
      gridOverlay: false,
      widgetOverlay: false,
      toggleGridTitle: HINT_DISABLE_TOGGLE_GRID,
      noLaxar: HINT_NO_LAXAR_EXTENSION
   };

   const isBrowserWebExtension = ( window.chrome && chrome.runtime && chrome.runtime.id );
   let firefoxExtensionMessagePort;

   if( !window.opener ) {
      window.addEventListener( 'message', event => {
         if( !firefoxExtensionMessagePort && event.ports ) {
            model.noLaxar = HINT_NO_LAXAR_EXTENSION;
            firefoxExtensionMessagePort = event.ports[ 0 ];
            firefoxExtensionMessagePort.start();
            const message = { text: 'messagePortStarted' };
            firefoxExtensionMessagePort.postMessage( JSON.stringify( message ) );
         }
         else {
            const channel = JSON.parse( event.detail || event.data );
            if( channel.text === 'reloadedPage' ) {
               model.gridOverlay = false;
               model.widgetOverlay = false;
               render();
            }
         }
      } );
   }

   context.resources = {};

   if( window.opener ) {
      model.noLaxar = HINT_NO_LAXAR_ANYMORE_WIDGET;
   }

   resources.handlerFor( context ).registerResourceFromFeature(
      'grid',
      {
         onReplace( event ) {
            if( event.data === null ) {
               model.toggleGridTitle = HINT_CONFIGURE_GRID;
               model.gridOverlay = false;
            }
            else {
               model.toggleGridTitle = '';
               render();
            }
         }
      }
   );

   flags.handlerFor( context ).registerFlag( context.features.detailsOn, {
      initialState: model.laxar,
      onChange( newState ) {
         model.laxar = newState;
         render();
      }
   } );

   if( isBrowserWebExtension ) {
      /* global chrome */
      chrome.devtools.network.onNavigated.addListener( () => {
         model.gridOverlay = false;
         model.widgetOverlay = false;
         render();
      } );
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   eventBus.subscribe( 'didNavigate', event => {
      const newName = event.data && event.data[ context.features.tabs.parameter ];
      const newTab = TABS.filter( _ => { return _.name === newName; } )[ 0 ];
      if( !newTab ) { return; }
      model.activeTab = newTab;
      render();
   } );

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   eventBus.subscribe( 'takeActionRequest.navigation', () => {
      eventBus.publish( 'willTakeAction.navigation', {
         action: 'navigation'
      } );
      if( model.gridOverlay ) {
         toggleGrid();
      }
      if( model.widgetOverlay ) {
         toggleWidgetOutline();
      }
      eventBus.publish( 'didTakeAction.navigation', {
         action: 'navigation'
      } );
      render();
   } );

   ////////////////////////////////////////////////////////////////////////////////////////////////////////

   function onClickToggleGrid() {
      if( !context.resources.grid ){ return; }
      toggleGrid();
      model.gridOverlay = !model.gridOverlay;
      render();
   }

   ////////////////////////////////////////////////////////////////////////////////////////////////////////

   function onClickToggleWidgetOutline() {
      toggleWidgetOutline();
      model.widgetOverlay = !model.widgetOverlay;
      render();
   }

   ////////////////////////////////////////////////////////////////////////////////////////////////////////

   function toggleGrid() {
      if( window.opener ) {
         toggleGridHelper( context.resources.grid );
         return;
      }
      if( isBrowserWebExtension ) {
         const event = new CustomEvent( 'toogleGrid', {
            detail: JSON.stringify( context.resources.grid )
         } );
         window.dispatchEvent( event );
      }
      else if( firefoxExtensionMessagePort ) {
         const message = { text: 'toogleGrid', data: context.resources.grid };
         firefoxExtensionMessagePort.postMessage( JSON.stringify( message ) );
      }
   }

   ////////////////////////////////////////////////////////////////////////////////////////////////////////

   function toggleWidgetOutline() {
      if( window.opener ) {
         toggleWidgetOutlineHelper();
         return;
      }
      if( isBrowserWebExtension ) {
         const event = new CustomEvent( 'widgetOutline', { } );
         window.dispatchEvent( event );
      }
      else if( firefoxExtensionMessagePort ) {
         const message = { text: 'widgetOutline', data: {} };
         firefoxExtensionMessagePort.postMessage( JSON.stringify( message ) );
      }
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function render() {
      let gridButton = '';
      if( context.resources.grid ) {
         gridButton = (
            <button className="ax-developer-toolbar-grid btn btn-link"
                 title={model.toggleGridTitle}
                 type="button"
                 onClick={onClickToggleGrid}
            ><i className={ `fa fa-toggle-${model.gridOverlay ? 'on' : 'off'}` }
            />&nbsp;{model.gridOverlay ? 'Turn off grid overlay' : 'Turn on grid overlay'}</button>
         );
      }

      const widgetOutlineButton = (
         <button
            className="ax-developer-toolbar-outline btn btn-link"
            type="button"
            onClick={onClickToggleWidgetOutline}
            ><i className={ `fa fa-toggle-${model.widgetOverlay ? 'on' : 'off'}` }
            />&nbsp;{model.widgetOverlay ? 'Turn off widget outline' : 'Turn on widget outline'}</button>
      );

      let optionButtons = '';
      if( model.laxar ) {
         optionButtons = <div className="pull-right">
            { gridButton } { widgetOutlineButton }
         </div>;
      }

      const widgetAreas = TABS.map( tab => {
         return (
            <AxWidgetArea
               key={ tab.name }
               areaName={ tab.name }
               cssClassName="app-tab app-tab-page"
               axAreaHelper={ areaHelper }
               visible={ model.activeTab.name === tab.name }
               axVisibility={ axVisibility }
            />
         );
      } );

      const tabListItems = model.tabs.map( tab => {
         const url = flowService.constructAbsoluteUrl( 'tools', { 'tab': tab.name } );
         if( model.activeTab && model.activeTab.name === tab.name ) {
            return (
               <li key={tab.name} className='ax-active'
                  ><a href={url}
                  >{tab.label}</a></li>
            );
         }

         return (
               <li key={tab.name}
                  ><a href={url}
                  >{tab.label}</a></li>
         );

      } );

      const navTab = (
         <ul className="nav nav-tabs" role="tablist">
            <li><a className="developer-toolbar-icon"
                   title="LaxarJS Documentation"
                   href="http://www.laxarjs.org/docs"
                   target="_blank" />
            </li>
            { tabListItems }
            { model.laxar === false &&
               <li className="developer-toolbar-hint">{ model.noLaxar }</li>
            }
         </ul>
      );

      reactRender(
         <div>
            { optionButtons }
            { navTab }
            { model.laxar && widgetAreas }
         </div>
      );
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   return {
      onDomAvailable: render
   };
}

export default {
   name: 'developer-toolbar-widget',
   injections,
   create
};
