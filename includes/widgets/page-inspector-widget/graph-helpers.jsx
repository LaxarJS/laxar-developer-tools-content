
import wireflow from 'wireflow';

const TYPE_CONTAINER = 'CONTAINER';

const {
  layout: {
     model: layoutModel
  },
  graph: {
    model: graphModel
  }
} = wireflow;

const edgeTypes = {
   RESOURCE: {
      hidden: false,
      label: 'Resources'
   },
   FLAG: {
      label: 'Flags',
      hidden: false
   },
   ACTION: {
      label: 'Actions',
      hidden: false
   },
   CONTAINER: {
      hidden: false,
      label: 'Container',
      owningPort: 'outbound'
   }
};

/**
 * Create a wireflow graph from a given page/widget information model.
 *
 * @param {Object} pageInfo
 * @param {Boolean=false} withIrrelevantWidgets
 *   If set to `true`, widgets without any relevance to actions/resources/flags are removed.
 *   Containers of widgets (that are relevant by this measure) are kept.
 */
export function graph( pageInfo, options ) {

   const {
      withIrrelevantWidgets = false,
      withContainers = true
   } = options;

   const PAGE_ID = '.';
   const { pageReference, pageDefinitions, widgetDescriptors } = pageInfo;
   const page = pageDefinitions[ pageReference ];

   const vertices = {};
   const edges = {};

   identifyVertices();
   if( withContainers ) {
      identifyContainers();
   }
   if( !withIrrelevantWidgets ) {
      pruneIrrelevantWidgets();
   }
   pruneEmptyEdges();

   return graphModel.convert.graph( {
      vertices,
      edges
   } );

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function isWidget( pageAreaItem ) {
      return !!pageAreaItem.widget;
   }

   function isLayout( pageAreaItem ) {
      return !!pageAreaItem.layout;
   }

   function either( f, g ) {
      return function() {
         return f.apply( this, arguments ) || g.apply( this, arguments );
      };
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function identifyVertices() {
      Object.keys( page.areas ).forEach( areaName => {
         page.areas[ areaName ].forEach( component => {
            if( component.widget ) {
               processWidgetInstance( component, areaName );
            }
            else if( component.layout ) {
               processLayoutInstance( component, areaName );
            }
         } );
      } );
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function processLayoutInstance( layout, areaName ) {
      vertices[ layout.id ] = {
         id: layout.id,
         kind: 'LAYOUT',
         label: layout.id,
         ports: { inbound: [], outbound: [] }
      };
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function processWidgetInstance( widget, areaName ) {
      const descriptor = widgetDescriptors[ widget.widget ];
      const ports = { inbound: [], outbound: [] };

      const kinds = {
         widget: 'WIDGET',
         activity: 'ACTIVITY'
      };

      identifyPorts( widget.features, descriptor.features, [] );
      vertices[ widget.id ] = {
         id: widget.id,
         kind: kinds[ descriptor.integration.type ],
         label: widget.id,
         ports: ports
      };

      function identifyPorts( value, schema, path ) {
         if( !value || !schema ) {
            return;
         }

         if( schema.type === 'string' && schema.axRole &&
             ( schema.format === 'topic' || schema.format === 'flag-topic' ) ) {
            const type = schema.axPattern ? schema.axPattern.toUpperCase() : inferEdgeType( path );
            if( !type ) { return; }
            const edgeId = type + ':' + value;
            const label = path.join( '.' );
            const id =  path.join( ':' );
            ports[ schema.axRole === 'outlet' ? 'outbound' : 'inbound' ].push( {
               label, id, type, edgeId
            } );
            if( edgeId && !edges[ edgeId ] ) {
               edges[ edgeId ] = { type, id: edgeId, label: value };
            }
         }

         if( schema.type === 'object' && schema.properties ) {
            Object.keys( schema.properties ).forEach( key => {
               const propertySchema = schema.properties[ key ] || schema.additionalProperties;
               identifyPorts( value[ key ], propertySchema, path.concat( [ key ] ) );
            } );
         }

         if( schema.type === 'array' ) {
            value.forEach( (item, i) => {
               identifyPorts( item, schema.items, path.concat( [ i ] ) );
            } );
         }
      }

      function inferEdgeType( path ) {
         if( !path.length ) {
            return null;
         }
         const lastSegment = path[ path.length - 1 ];
         if( [ 'action', 'flag', 'resource' ].indexOf( lastSegment ) !== -1 ) {
            return lastSegment.toUpperCase();
         }
         if( lastSegment === 'onActions' ) {
            return 'ACTION';
         }
         return inferEdgeType( path.slice( 0, path.length - 1 ) );
      }
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function pruneIrrelevantWidgets() {
      let toPrune = [];
      do {
         toPrune.forEach( id => { delete vertices[ id ]; } );
         pruneEmptyEdges();
         toPrune = mark();
      } while( toPrune.length );

      function mark() {
         const pruneList = [];
         Object.keys( vertices ).forEach( vId => {
            const ports = vertices[ vId ].ports;
            if( ports.inbound.length <= 1 ) {
               if( ports.outbound.every( _ => !_.edgeId ) ) {
                  pruneList.push( vId  );
               }
            }
         } );
         return pruneList;
      }
   }

   function pruneEmptyEdges() {
      const toPrune = [];
      Object.keys( edges ).forEach( edgeId => {
         const type = edgeTypes[ edges[ edgeId ].type ];
         const sources = Object.keys( vertices ).filter( isSourceOf( edgeId ) );
         const sinks = Object.keys( vertices ).filter( isSinkOf( edgeId ) );
         const hasSources = sources.length > 0;
         const hasSinks = sinks.length > 0;
         const isEmpty = type.owningPort ? (!hasSources || !hasSinks) : (!hasSources && !hasSinks);
         if( !isEmpty ) {
            return;
         }

         toPrune.push( edgeId );
         sources.concat( sinks ).forEach( vertexId => {
            const ports = vertices[ vertexId ].ports;
            ports.inbound.concat( ports.outbound ).forEach( port => {
               port.edgeId = port.edgeId === edgeId ? null : port.edgeId;
            } );
         } );
      } );
      toPrune.forEach( id => { delete edges[ id ]; } );

      function isSourceOf( edgeId ) {
         return function( vertexId ) {
            return vertices[ vertexId ].ports.inbound.some( port => port.edgeId === edgeId );
         };
      }

      function isSinkOf( edgeId ) {
         return function( vertexId ) {
            return vertices[ vertexId ].ports.outbound.some( port => port.edgeId === edgeId );
         };
      }
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function identifyContainers() {
      const type = TYPE_CONTAINER;

      vertices[ PAGE_ID ] =  {
         PAGE_ID,
         label: 'Page ' + pageReference,
         kind: 'PAGE',
         ports: { inbound: [], outbound: [] }
      };

      Object.keys( page.areas ).forEach( areaName => {
         insertEdge( areaName );
         const owner = findOwner( areaName );
         if( !owner ) {
            return;
         }

         let containsAnything = false;
         page.areas[ areaName ].filter( either( isWidget, isLayout ) ).forEach( item => {
            if( vertices[ item.id ] ) {
               insertUplink( vertices[ item.id ], areaName );
               containsAnything = true;
            }
         } );
         if( containsAnything ) {
            insertOwnerPort( owner, areaName );
         }
      } );

      function findOwner( areaName ) {
         if( areaName.indexOf( '.' ) === -1 ) {
            return vertices[ PAGE_ID ];
         }
         const prefix = areaName.slice( 0, areaName.lastIndexOf( '.' ) );
         return vertices[ prefix ];
      }

      function insertOwnerPort( vertex, areaName ) {
         vertex.ports.outbound.unshift( {
            id: 'CONTAINER:' + areaName,
            type: TYPE_CONTAINER,
            edgeId: areaEdgeId( areaName ),
            label: areaName
         } );
      }

      function insertUplink( vertex, areaName ) {
         vertex.ports.inbound.unshift( {
            id: 'CONTAINER:anchor',
            type: TYPE_CONTAINER,
            edgeId: areaEdgeId( areaName ),
            label: 'anchor'
         } );
      }

      function insertEdge( areaName ) {
         const id = areaEdgeId( areaName );
         edges[ id ] = { id, type, label: areaName };
      }

      function areaEdgeId( areaName ) {
         return TYPE_CONTAINER + ':' + areaName;
      }
   }

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function layout( graph ) {
   return layoutModel.convert.layout( {
      vertices: {},
      edges: {}
   } );
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function types() {
   return graphModel.convert.types( edgeTypes );
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function filterFromSelection( selection, graphModel ) {
   const topics = selection.edges.flatMap( edgeId => {
      const [ type, topic ] = edgeId.split( ':' );
      return ( type === 'CONTAINER' ) ? [] : [{ pattern: type, topic }];
   } ).toJS();

   const participants = selection.vertices.flatMap( vertexId => {
      const { id, kind } = graphModel.vertices.get( vertexId );
      return ( kind === 'PAGE' || kind === 'LAYOUT' ) ? [] : [{ kind, participant: vertexId }];
   } );

   return {
      topics,
      participants
   };
}
