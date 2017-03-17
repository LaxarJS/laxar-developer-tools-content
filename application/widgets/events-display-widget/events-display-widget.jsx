/**
 * Copyright 2017 aixigo AG
 * Released under the MIT license.
 * http://laxarjs.org/license
 */

import React from 'react';
import { resources } from 'laxar-patterns';
import moment from 'moment';
import tracker from './tracker';
import AutoAffix from 'react-overlays/lib/AutoAffix';

const injections = [ 'axContext', 'axReactRender' ];
function create( context, reactRender ) {
   'use strict';
   const view = {
      showPatterns: false
   };

   const settingGroups = [ 'patterns', 'interactions', 'sources' ];

   const patternTopics = {
      RESOURCE: [ 'didReplace', 'didUpdate' ],
      ACTION: [ 'takeActionRequest', 'willTakeAction', 'didTakeAction' ],
      FLAG: [ 'didChangeFlag' ],
      CONTAINER: [ 'changeAreaVisibilityRequest', 'willChangeAreaVisibility', 'didChangeAreaVisibility' ]
   };

   context.resources = {};

   const patterns = [
      {
         name: 'lifecycle',
         eventTypes: [ 'endLifecycle', 'beginLifecycle' ]
      },
      {
         name: 'navigation',
         eventTypes: [ 'navigate' ]
      },
      {
         name: 'resources',
         eventTypes: [ 'replace', 'update', 'validate', 'save' ]
      },
      {
         name: 'actions',
         eventTypes: [ 'takeAction' ]
      },
      {
         name: 'flags',
         eventTypes: [ 'changeFlag' ]
      },
      {
         name: 'i18n',
         eventTypes: [ 'changeLocale' ]
      },
      {
         name: 'visibility',
         eventTypes: [ 'changeAreaVisibility', 'changeWidgetVisibility' ]
      },
      {
         name: 'other',
         eventTypes: []
      }
   ];

   const settings = setDefaults( {
      namePattern: '',
      visibleEventsLimit: 100,
      patterns: {},
      interactions: {
         subscribe: true,
         publish: true,
         deliver: true,
         unsubscribe: true
      },
      sources: {
         widgets: true,
         runtime: true
      }
   }, patterns );

   const model = {
      patterns,
      index: 0,
      eventInfos: [],
      visibleEventInfos: [],
      problemSummary: {
         count: 0,
         eventInfos: []
      },
      selectionEventInfo: null,
      settings
   };

   resources.handlerFor( context ).registerResourceFromFeature( 'filter', {
      onUpdateReplace: () => {
         runFilters();
         render();
      },
      isOptional: true
   } );

   if( context.features.events.stream ) {
      context.eventBus.subscribe( `didProduce.${context.features.events.stream}`, event => {
         if( Array.isArray( event.data ) && event.data.length ) {
            event.data.forEach( addEvent );
         }
         else {
            addEvent( event.data );
         }
         runFilters();
         render();
      } );
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function setDefaults( settings, patterns ) {
      settingGroups.forEach( groupName => {
         const group = settings[ groupName ];
         for( const name in group ) {
            if( group.hasOwnProperty( name ) ) {
               group[ name ] = true;
            }
         }
      } );
      patterns.forEach( patternInfo => {
         settings.patterns[ patternInfo.name ] = true;
      } );
      context.features.filter.hidePatterns.forEach( pattern => {
         settings.patterns[ pattern ] = false;
      } );
      context.features.filter.hideSources.forEach( pattern => {
         settings.sources[ pattern ] = false;
      } );
      context.features.filter.hideInteractions.forEach( pattern => {
         settings.interactions[ pattern ] = false;
      } );
      return settings;
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function addEvent( eventInfo ) {
      const completeEventInfo = {
         index: ++model.index,
         interaction: eventInfo.action,
         cycleId: eventInfo.cycleId > -1 ? eventInfo.cycleId : '-',
         eventObject: eventInfo.eventObject || {},
         formattedEvent: JSON.stringify( eventInfo.eventObject, null, 3 ),
         formattedTime: {
            upper: moment( eventInfo.time ).format( 'HH:mm' ),
            lower: moment( eventInfo.time ).format( 'ss.SSS' )
         },
         name: eventInfo.event || '?',
         pattern: pattern( (eventInfo.event || '?').toLowerCase() ),
         showDetails: false,
         source: ( eventInfo.source || '?' ).replace( /^widget\./, '' ),
         target: ( eventInfo.target || '?' ).replace( /^-$/, '' ),
         time: eventInfo.time,
         selected: false,
         sourceType: ( eventInfo.source || '?' ).indexOf( 'widget.' ) === 0 ? 'widgets' : 'runtime',
         problems: tracker.track( eventInfo )
      };

      model.eventInfos.unshift( completeEventInfo );
      if( completeEventInfo.problems.length ) {
         refreshProblemSummary();
      }

      if( model.eventInfos.length > context.features.events.bufferSize ) {
         const removedInfo = model.eventInfos.pop();
         if( removedInfo.problems.length ) {
            refreshProblemSummary();
         }
      }

      function pattern( eventName ) {
         const matchingPatthern = model.patterns.filter( pattern => {
            return pattern.eventTypes.some( eventType => {
               return eventName.indexOf( eventType.toLowerCase() ) !== -1;
            } );
         } );
         return matchingPatthern.length ? matchingPatthern[ 0 ].name : 'other';
      }
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function runFilters() {
      const settings = model.settings;
      let numVisible = 0;

      let searchRegExp = null;
      if( settings.namePattern ) {
         try {
            searchRegExp = new RegExp( settings.namePattern, 'gi' );
         }
         catch( e ) { /* ignore invalid search pattern */ }
      }

      model.visibleEventInfos = model.eventInfos.filter( eventInfo => {
         if( settings.visibleEventsLimit !== null && numVisible >= settings.visibleEventsLimit ) {
            return false;
         }
         if( !settings.interactions[ eventInfo.interaction ] ) {
            return false;
         }
         if( !settings.patterns[ eventInfo.pattern ] ) {
            return false;
         }
         if( !settings.sources[ eventInfo.sourceType ] ) {
            return false;
         }
         if( !matchesFilterResource( eventInfo ) ) {
            return false;
         }
         if( !matchesSearchExpression( eventInfo, searchRegExp ) ) {
            return false;
         }
         ++numVisible;
         return true;
      } );
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function filterBySearch( event ) {
      settings.namePattern = event.target.value;
      runFilters();
      render();
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function limitEvents( event ) {
      if( event.target.value === '' ) {
         settings.visibleEventsLimit = null;
      }
      const value = Number( event.target.value );
      if( typeof Number.isInteger === 'function' && !Number.isInteger( value ) ) { return; }
      if( value >= 0 && value <= 5000 ) {
         settings.visibleEventsLimit = event.target.value;
      }
      runFilters();
      render();
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function refreshProblemSummary() {
      const eventInfos = model.eventInfos.filter( info => {
         return info.problems.length > 0;
      } );

      model.problemSummary = {
         hasProblems: eventInfos.length > 0,
         eventInfos
      };
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function matchesSearchExpression( eventInfo, searchRegExp ) {
      return !searchRegExp || [ eventInfo.name, eventInfo.source, eventInfo.target ]
            .some( field => {
               const matches = searchRegExp.test( field );
               searchRegExp.lastIndex = 0;
               return !!matches;
            } );
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function matchesFilterResource( eventInfo ) {
      if( !context.resources.filter ) {
         return true;
      }

      const filterTopics = context.resources.filter.topics || [];
      const filterParticipants = context.resources.filter.participants || [];
      if( !filterTopics.length && !filterParticipants.length ) {
         return true;
      }

      const matchesTopicFilter = filterTopics
         .some( item => {
            const prefixes = patternTopics[ item.pattern ];
            return prefixes.some( prefix => {
               const topic = `${prefix}.${item.topic}`;
               return eventInfo.name === topic || eventInfo.name.indexOf( `${topic}.` ) === 0;
            } );
         } );

      const matchesParticipantsFilter = [ 'target', 'source' ].some( field => {
         const value = eventInfo[ field ];
         return filterParticipants
            .map( _ => { return _.participant; } )
            .some( isSuffixOf( value ) );
      } );

      return matchesTopicFilter || matchesParticipantsFilter;

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      function isSuffixOf( value ) {
         return function( _ ) {
            const tail = `#${_}`;
            return value.length >= tail.length && value.indexOf( tail ) === value.length - tail.length;
         };
      }
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function onSettingsChanged( type, group, name, state ) {
      let settings = model.settings;
      const patterns = model.patterns;
      if( type === 'ONE' ) {
         settings[ group ][ name ] = !state;
      }
      else if( type === 'ON' ) {
         changeAll( true );
      }
      else if( type === 'OFF' ) {
         changeAll( false );
      }
      else if( type === 'DEFAULTS' ) {
         settings = setDefaults( settings, patterns );
      }

      runFilters();

      render();

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      function changeAll( enable ) {
         [ 'patterns', 'interactions', 'sources' ].forEach( _group => {
            Object.keys( settings[ _group ] ).forEach( _name => {
               settings[ _group ][ _name ] = enable;
            } );
         } );
      }
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function clearFilters() {
      model.settings.namePattern = '';
      model.settings.visibleEventsLimit = null;
      onSettingsChanged( 'ON' );
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function discardEvents() {
      model.eventInfos = [];
      model.selectionEventInfo = null;
      runFilters();
      refreshProblemSummary();
      render();
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function handleSelection( selectedEvent ) {
      if( selectedEvent.selected ) {
         model.selectionEventInfo = null;
         model.visibleEventInfos.forEach( event => {
            event.selected = false;
         } );
         render();
         return;
      }

      model.visibleEventInfos.forEach( event => {
         if( event.index === selectedEvent.index ) {
            model.selectionEventInfo = event;
            event.selected = true;
            return;
         }
         event.selected = inSelection( event, selectedEvent );
      } );

      render();

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      function inSelection( eventInfo, selectionEventInfo ) {
         if( !selectionEventInfo ) {
            return false;
         }

         return eventInfo === selectionEventInfo || (
               eventInfo.cycleId === selectionEventInfo.cycleId &&
               eventInfo.source === selectionEventInfo.source &&
               eventInfo.name === selectionEventInfo.name
            );
      }
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   class PatternsHtmlIcon extends React.Component {

      constructor( props ) {
         super( props );
         this.props = props;

         switch( props.name ) {
            case 'lifecycle':
               this.iconClass = 'fa fa-recycle';
               break;
            case 'navigation':
               this.iconClass = 'fa fa-location-arrow';
               break;
            case 'resources':
               this.iconClass = 'fa fa-file-text-o';
               break;
            case 'actions':
               this.iconClass = 'fa fa-rocket';
               break;
            case 'flags':
               this.iconClass = 'fa fa-flag';
               break;
            case 'i18n':
               this.iconClass = 'fa fa-globe';
               break;
            case 'visibility':
               this.iconClass = 'fa fa-eye';
               break;
            default:
               this.iconClass = '';
         }
      }

      render() {
         return (
            <i className={this.iconClass}/>
         );

      }
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   class NumberOfEvents extends React.Component {
      constructor( props ) {
         super( props );
         this.props = props;
      }

      render() {
         if( this.props.numberOfEvents === 0 ) {
            return (
               <div className="text-large">
               <h4 className="text-primary">Empty Events List</h4>
               <p><i className="fa fa-clock-o" /> Waiting for events from host application...</p>
               </div>
            );
         }

         if( this.props.numberOfEvents > 0 && this.props.numberOfVisibleEvents === 0) {
            return (
               <div className="text-large">
                  <h4 className="text-primary">0/{ this.props.numberOfEvents } Event Items</h4>
                  <p>No events matching current filters.</p>
                  <p>
                     <button type="button"
                             className="btn btn-sm btn-primary"
                             onClick={this.props.clearFilters}>Show All
                     </button>
                  </p>
               </div>
            );
         }

         return (
            <div className="text-large">
               <h4 className="text-primary">
                  { this.props.numberOfVisibleEvents }/{ this.props.numberOfEvents } Events
               </h4>
            </div>
         );

      }
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   class FiltersAndLimitForm extends React.Component {
      constructor( props ) {
         super( props );
      }

      render() {
         const searchId = context.id( 'search' );
         const limitId = context.id( 'limit' );

         return (
            <div className="form-group form-group-sm">
               { this.props.searchRegExp }
               <label htmlFor={ searchId }>
                  <small>Filters:</small>
               </label>
               <input className="form-control input-sm"
                      placeholder="Search (RegExp)"
                      id={ searchId }
                      type="text"
                      value={ this.props.searchRegExp }
                      onChange={ this.props.filterBySearch } />
               <label htmlFor={ limitId }>
                  <small>Limit:</small>
               </label>
               <input
                  className="form-control input-sm"
                  type="text"
                  id={ limitId }
                  placeholder="0-5000"
                  maxLength={ 4 }
                  value={ this.props.limit }
                  onChange={ this.props.limitEvents }
               />
            </div>
         );
      }
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   class SettingsToggleButton extends React.Component {
      constructor( props ) {
         super( props );
         this.props = props;
         this.handleClick = this.handleClick.bind( this );
      }

      handleClick( e ) {
         this.props.onSettingsChanged( 'ONE', this.props.type, this.props.text, this.props.enabled );
         e.stopPropagation();
      }

      render() {
         const toggleClassName = `fa pull-right ax-event-setting-toggle${
               this.props.enabled ? ' fa-toggle-on' : ' fa-toggle-off'}`;
         const buttonClassName = `btn btn-link ax-event-setting-toggle ax-events-display-${this.props.text}`;
         return (
            <button
               type="button"
               className={ buttonClassName }
               onClick={ this.handleClick }>{ this.props.icon &&
               <span className="ax-event-pattern"><PatternsHtmlIcon name={ this.props.text }/></span>}
               { this.props.text } <i className={ toggleClassName } /></button>

         );
      }
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   class SelectFiltersButton extends React.Component {
      constructor( props ) {
         super( props );
         this.props = props;
         this.state = { showPatterns: false };
         this.allOnClick = this.allOnClick.bind( this );
         this.allOffClick = this.allOffClick.bind( this );
         this.defaultsClick = this.defaultsClick.bind( this );
      }

      allOnClick( e ) {
         this.props.onSettingsChanged( 'ON' );
         e.stopPropagation();
      }

      allOffClick( e ) {
         this.props.onSettingsChanged( 'OFF' );
         e.stopPropagation();
      }


      defaultsClick( e ) {
         this.props.onSettingsChanged( 'DEFAULTS' );
         e.stopPropagation();
      }

      render() {
         const handleMouseEnter = () => this.setState( { showPatterns: true } );
         const handleMouseLeave = () => this.setState( { showPatterns: false } );

         const patternsButtons = this.props.patterns.map( pattern => {
            return (
               <SettingsToggleButton key={ pattern.name }
                                     type="patterns"
                                     text={ pattern.name }
                                     icon={ true }
                                     enabled={ this.props.settings.patterns[ pattern.name ] }
                                     onSettingsChanged={this.props.onSettingsChanged}
            /> );
         } );

         const interactionsButtons = Object.keys( this.props.settings.interactions ).map( interaction => {
            return (
               <SettingsToggleButton key={ interaction }
                                     type="interactions"
                                     text={ interaction }
                                     enabled={ this.props.settings.interactions[ interaction ] }
                                     onSettingsChanged={this.props.onSettingsChanged}
               /> );
         } );

         const sourceButtons = Object.keys( this.props.settings.sources ).map( source => {
            return (
               <SettingsToggleButton key={ source }
                                     type="sources"
                                     text={ source }
                                     enabled={ this.props.settings.sources[ source ] }
                                     onSettingsChanged={this.props.onSettingsChanged}
               /> );
         } );

         const commandBar = (
            <div className="pull-right">
               <button type="button"
                       onClick={ this.allOnClick }
                       className="btn btn-xs btn-primary"
               >All On</button>
               <button type="button"
                       onClick={ this.allOffClick }
                       className="btn btn-xs btn-primary"
               >All Off</button>
               <button type="button"
                       onClick={ this.defaultsClick }
                       className="btn btn-xs"
               >Defaults</button>
            </div>
         );

         return (
            <div className={
               this.state.showPatterns ? 'btn-group btn-group-sm open' : 'btn-group btn-group-sm' }
                 onMouseEnter={ handleMouseEnter }
                 onMouseLeave={ handleMouseLeave }>
               <button type="button"
                       className="btn btn-default dropdown-toggle"
                       data-toggle="dropdown"
                       aria-expanded={ view.showPatterns }>
                  More <span className="caret" />
               </button>
               <div className="dropdown-menu container col-lg-6" role="menu">

                  <div className="row">
                     <div className="ax-event-settings-col first">
                        <h4>Patterns</h4>
                        <div>{ patternsButtons }</div>
                     </div>

                     <div className="ax-event-settings-col last">
                        <h4>Interactions</h4>
                        <div>{ interactionsButtons }</div>

                        <br />
                           <h4>Sources</h4>
                        <div>{ sourceButtons }</div>
                     </div>

                  </div>

                  <div className="row">
                     <div className="ax-event-settings-col first">&nbsp;</div>
                     <div className="ax-event-settings-col last">
                        {commandBar}
                     </div>
                  </div>

               </div>
            </div>
         );
      }
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   class DiscardEventsButton extends React.Component {
      constructor( props ) {
         super( props );
         this.props = props;
         this.handleClick = this.handleClick.bind( this );
      }

      handleClick( e ) {
         e.stopPropagation();
         this.props.onDiscard();
      }

      render() {
         let classNames = 'ax-discard-events btn btn-primary btn-sm';

         if( this.props.eventInfosLength === 0 ) {
            classNames = `${classNames} ax-disabled`;
         }
         return <button className={ classNames }
                        type="button"
                        onClick={this.handleClick}>Discard Events</button>;
      }
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   class ShowDetailsButton extends React.Component {
      constructor( props ) {
         super( props );
         this.props = props;
         this.handleClick = this.handleClick.bind( this );
      }

      handleClick( e ) {
         this.props.onNameChanged();
         e.stopPropagation();
      }

      render() {
         return <button type="button"
                        className="btn-link btn-info"
                        onClick={this.handleClick}>
            <i className={ this.props.showDetails ? 'fa fa-minus-square' : 'fa fa-plus-square' }>&nbsp;</i>
         </button>;
      }
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   class EventCell extends React.Component {
      constructor( props ) {
         super( props );
         this.props = props;
      }

      render() {
         const splitPoint = this.props.content.indexOf( this.props.separator );
         if( splitPoint === -1 ) {
            return <td><span>{ this.props.content }</span></td>;
         }
         return ( <td>
            <span>{ this.props.content.substring( 0, splitPoint ) }</span><br />
            <span>{ this.props.content.substring( splitPoint + 1, this.props.content.length ) }</span>
         </td> );

      }
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   class EventBody extends React.Component {
      constructor( props ) {
         super( props );
         this.props = props;
         this.state = {
            showDetails: false
         };
         this.handleName = this.handleName.bind( this );
         this.handleClick = this.handleClick.bind( this );
      }

      handleName() {
         this.setState( { showDetails: !this.state.showDetails } );
      }

      handleClick() {
         this.props.onSelection( this.props.event );
      }

      //////////////////////////////////////////////////////////////////////////////////////////////////

      render() {
         const cssClassName = `${'ax-event-body ' +
                              'ax-event-pattern-'}${this.props.event.pattern
                              } ax-event-interaction-${this.props.event.interaction
                               }${this.props.event.selected ? ' ax-event-selected' : ''
                               }${this.props.event.problems.length ? ' ax-event-has-problems' : ''}`;
         const eventSummaryRow = (
            <tr className="ax-event-summary">
               <td className="ax-col-pattern-icon"
                   title={this.props.event.pattern}><PatternsHtmlIcon name={this.props.event.pattern}/>
               </td>
               <td className="ax-col-interaction">{this.props.event.interaction}</td>
               <td className="ax-col-payload-icon">
                  { this.props.event.interaction === 'publish' &&
                    <ShowDetailsButton showDetails={this.state.showDetails}
                                       onNameChanged={this.handleName}/>
                  }
               </td>
               <EventCell content={this.props.event.name} separator="." />
               <EventCell content={this.props.event.source} separator="#" />
               <EventCell content={this.props.event.target} separator="#" />
               <td className="ax-col-cycle text-right">{this.props.event.cycleId}</td>
               <td className="text-right"><span>{this.props.event.formattedTime.upper}</span><br />
                  <span>{this.props.event.formattedTime.lower}</span>
               </td>
            </tr>
         );

         ///////////////////////////////////////////////////////////////////////////////////////////////

         function detailsRow( show, formattedEvent ) {
            if( !show ) {
               return <tr />;
            }
            return ( <tr className="ax-event-payload">
               <td colSpan="3" />
               <td colSpan="5">
                  <pre>{formattedEvent}</pre>
               </td>
            </tr> );
         }

         ///////////////////////////////////////////////////////////////////////////////////////////////

         function eventProblems( problems ) {
            if( problems.length === 0 ) {
               return <tr />;
            }
            const listOfProblems = problems.map( problem => {
               return (
                  <li key={problem.description} className="ax-event-problem">
                     <i className="fa fa-warning" /> {problem.description}
                  </li>
               );
            } );
            return (
               <tr className="ax-event-payload">
                  <td colSpan="3" />
                  <td colSpan="5">
                     <ul>
                        {listOfProblems}
                     </ul>
                  </td>
               </tr>
            );
         }

         ///////////////////////////////////////////////////////////////////////////////////////////////

         return (
            <tbody className={ cssClassName }
                   onClick={this.handleClick}>
            { eventSummaryRow }
            { eventProblems( this.props.event.problems ) }
            { detailsRow( this.state.showDetails, this.props.event.formattedEvent ) }
            </tbody>
         );
      }
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   class EventListTable extends React.Component {
      constructor( props ) {
         super( props );
         this.props = props;
      }

      render() {
         const events = this.props.events.map( event => {
            return (
               <EventBody event={event}
                          key={event.index}
                          viewPatternsByName={view.patternsByName}
                          selectionEventInfo={this.props.selectionEventInfo}
                          onSelection={this.props.onSelection}
               />
            );
         } );

         /////////////////////////////////////////////////////////////////////////////////////////////////////

         return (
            <table className="table">
               <colgroup>
                  <col className="ax-col-pattern-icon"/>
                  <col className="ax-col-interaction"/>
                  <col className="ax-col-payload-icon"/>
                  <col className="ax-col-name"/>
                  <col className="ax-col-source"/>
                  <col className="ax-col-target"/>
                  <col className="ax-col-cycle"/>
                  <col className="ax-col-timestamp"/>
               </colgroup>
               <thead>
               <tr>
                  <th>&nbsp;</th>
                  <th>Action</th>
                  <th>&nbsp;</th>
                  <th>Event Name</th>
                  <th>Source</th>
                  <th>Target</th>
                  <th className="text-right">Cycle</th>
                  <th className="text-right">Time<i className="fa fa-long-arrow-up"/></th>
               </tr>
               </thead>
               {events}
            </table>
         );
      }
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   class ProblemListTable extends React.Component {
      constructor( props ) {
         super( props );
         this.props = props;
      }

      render() {
         const eventList = this.props.problemSummary.eventInfos.map( event => {
            const problemList = event.problems.map( problem => {
               return (
                  <li key={ problem.description }
                      className="ax-event-problem">
                     <i className="fa fa-warning ax-error" />{problem.description}
                  </li>
               );
            } );
            return (
               <li key={event.index} >
                  <h5><strong>{ event.name }</strong> <em>(source: { event.source })</em></h5>
                  <ul>
                     {problemList}
                  </ul>
               </li>
            );
         } );

         return (
            <div className="text-large">
               <h4 className="text-primary ax-error"
                  >{ this.props.problemSummary.eventInfos.length
                  }/{ this.props.eventInfos.length } Events with Problems</h4>
               <ul>
                  {eventList}
               </ul>
               <p className="ax-event-problems-explanation">
                  Events with problems are marked <strong
                  className="ax-error">red</strong> in the events table.
                  Filter by event/source as needed.
               </p>
            </div>
         );
      }
   }


   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   class EventDisplayElement extends React.Component {
      constructor( props ) {
         super( props );
         this.props = props;
      }

      render() {
         if( this.props.visibleEventInfosLength === 0 ) {
            return <div></div>;
         }
         return (
            <EventListTable selectionEventInfo={ this.props.selectionEventInfo }
                            onSelection={ this.props.onSelection }
                            events={this.props.events}
            />
         );
      }
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function render() {

      reactRender(
         <div>
            <AutoAffix
               affixClassName="ax-affix-area"
               topClassName="ax-affix-on-top-area">
               <div>
                  <NumberOfEvents numberOfVisibleEvents={ model.visibleEventInfos.length }
                                  numberOfEvents={ model.eventInfos.length }
                                  clearFilters={clearFilters}
                  />
                  <div className="ax-button-wrapper form-inline">
                     <FiltersAndLimitForm name={ settings.namePattern }
                                          filterBySearch={ filterBySearch }
                                          limit={ settings.visibleEventsLimit }
                                          limitEvents={ limitEvents }
                     />
                     <SelectFiltersButton patterns={ model.patterns }
                                          settings={ model.settings }
                                          onSettingsChanged={ onSettingsChanged }
                     />
                     <DiscardEventsButton eventInfosLength={ model.eventInfos.length }
                                          onDiscard={ discardEvents }
                     />
                  </div>
               </div>
            </AutoAffix>
            { model.problemSummary.hasProblems &&
            <ProblemListTable problemSummary={ model.problemSummary }
                              eventInfos={ model.eventInfos }
            /> }
            <EventDisplayElement visibleEventInfosLength={model.visibleEventInfos.length}
                                 events={model.visibleEventInfos}
                                 onSelection={ handleSelection }
                                 selectionEventInfo={ model.selectionEventInfo }
            />
         </div>
      );
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   return {
      onDomAvailable: render
   };
}

export default {
   name: 'events-display-widget',
   injections,
   create
};
