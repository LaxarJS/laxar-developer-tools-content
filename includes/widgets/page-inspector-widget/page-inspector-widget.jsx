import React from 'react';
import patterns from 'laxar-patterns';

import wireflow from 'wireflow';

import { types, graph, layout, filterFromSelection } from './graph-helpers';

const {
  selection: { SelectionStore },
  history: { HistoryStore },
  layout: { LayoutStore },
  graph: { GraphStore },
  settings: {
    actions: { ChangeMode, MinimapResized },
    model: { Settings, READ_ONLY, READ_WRITE },
    SettingsStore
  },
  Dispatcher,
  components: { Graph }
} = wireflow;


function create( context, eventBus, reactRender ) {

   let visible = false;
   let domAvailable = false;
   let viewModel = null;
   let viewModelCalculation = null;

   let withIrrelevantWidgets = false;
   let withContainers = true;

   let publishedSelection = null;

   patterns.resources.handlerFor( context )
      .registerResourceFromFeature( 'pageInfo', {
         onUpdateReplace: () => initializeViewModel( true )
      } );


   const publishFilter = patterns.resources.replacePublisherForFeature( context, 'filter', {
      isOptional: true
   } );

   eventBus.subscribe( `didChangeAreaVisibility.${context.widget.area}`, (event, meta) => {
      if( !visible && event.visible ) {
         visible = true;
         render();
      }
   } );

   //////////////////////////////////////////////////////////////////////////////////////////////////////////

   function replaceFilter( selection, graphModel ) {
      const resource = context.features.filter.resource;
      if( !resource || selection === publishedSelection ) {
         return;
      }
      publishedSelection = selection;
      publishFilter( filterFromSelection( selection, graphModel ) );
   }

   //////////////////////////////////////////////////////////////////////////////////////////////////////////

   function toggleIrrelevantWidgets() {
      withIrrelevantWidgets = !withIrrelevantWidgets;
      initializeViewModel( true );
   }

   //////////////////////////////////////////////////////////////////////////////////////////////////////////

   function toggleContainers() {
      withContainers = !withContainers;
      initializeViewModel( true );
   }

   //////////////////////////////////////////////////////////////////////////////////////////////////////////

   function initializeViewModel( doReset ) {
      if( doReset ) {
         viewModel = null;
         clearTimeout( viewModelCalculation );
         viewModelCalculation = null;
         if( visible ) {
            render();
         }
      }

      if( visible ) {
         viewModelCalculation = viewModelCalculation || setTimeout( () => {
            const pageTypes = types();
            const pageInfo = context.resources.pageInfo;
            const pageGraph = graph( pageInfo, { withIrrelevantWidgets, withContainers } );
            const dispatcher = new Dispatcher( render );
            new HistoryStore( dispatcher );
            const graphStore = new GraphStore( dispatcher, pageGraph, pageTypes );
            const layoutStore = new LayoutStore( dispatcher, graphStore );
            const settingsStore = new SettingsStore( dispatcher, Settings({ mode: READ_ONLY }) );
            const selectionStore = new SelectionStore( dispatcher, layoutStore, graphStore );

            viewModel = { graphStore, layoutStore, settingsStore, selectionStore, dispatcher };
            render();
         }, 20 );
      }
   }

   //////////////////////////////////////////////////////////////////////////////////////////////////////////

   function render() {
      if( !visible || !domAvailable ) {
         return;
      }

      if( !viewModel ) {
         reactRender(
            <div className='page-inspector-placeholder'>
               <i className='fa fa-cog fa-spin'></i>layout
            </div>
         );
         initializeViewModel();
         return;
      }

      const {
         graphStore,
         layoutStore,
         settingsStore,
         selectionStore,
         dispatcher
      } = viewModel;

      replaceFilter( selectionStore.selection, graphStore.graph );

      reactRender(
         <div className='page-inspector-row form-inline'>
            <div className='text-right'>
               <button type='button' className='btn btn-link'
                       onClick={toggleIrrelevantWidgets}
                  ><i className={'fa fa-toggle-' + ( withIrrelevantWidgets ? 'on' : 'off' ) }
                  ></i> &quot;Silent&quot; Widgets</button>
               <button type='button' className='btn btn-link'
                       onClick={toggleContainers}
                  ><i className={'fa fa-toggle-' + ( withContainers ? 'on' : 'off' ) }
                  ></i> Containers</button>
            </div>
            <Graph className='nbe-theme-fusebox-app'
                   types={graphStore.types}
                   model={graphStore.graph}
                   layout={layoutStore.layout}
                   measurements={layoutStore.measurements}
                   settings={settingsStore.settings}
                   selection={selectionStore.selection}
                   eventHandler={dispatcher.dispatch} />
         </div>
      );
   }

   //////////////////////////////////////////////////////////////////////////////////////////////////////////

   return { onDomAvailable: () => {
      domAvailable = true;
      render();
   } };
}

export default {
   name: 'page-inspector-widget',
   injections: [ 'axContext', 'axEventBus', 'axReactRender' ],
   create
};
