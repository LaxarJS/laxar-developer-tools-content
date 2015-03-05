/**
 * Copyright 2014 aixigo AG
 * Released under the MIT license.
 * http://laxarjs.org/license
 */
define( [
   'angular',
   'moment'
], function( ng, moment ) {
   'use strict';

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   var settingGroups = [ 'patterns', 'interactions', 'sources' ];

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   Controller.$inject = [ '$scope' ];

   function Controller( $scope ) {

      $scope.model = {
         patterns: [
            { name: 'lifecycle', htmlIcon: '<i class="fa fa-recycle"></i>', eventTypes: [
               'endLifecycle', 'beginLifecycle'
            ] },
            { name: 'navigation', htmlIcon: '<i class="fa fa-location-arrow"></i>', eventTypes: [
               'navigate'
            ] },
            { name: 'resources', htmlIcon: '<i class="fa fa-gift"></i>', eventTypes: [
               'replace', 'update', 'validate', 'save'
            ] },
            { name: 'actions', htmlIcon: '<i class="fa fa-rocket"></i>', eventTypes: [
               'takeAction'
            ] },
            { name: 'flags', htmlIcon: '<i class="fa fa-flag"></i>', eventTypes: [
               'changeFlag'
            ] },
            { name: 'i18n', htmlIcon: '<i class="fa fa-globe"></i>', eventTypes: [
               'changeLocale'
            ] },
            { name: 'visibility', htmlIcon: '<i class="fa fa-eye"></i>', eventTypes: [
               'changeAreaVisibility', 'changeWidgetVisibility'
            ] },
            { name: 'other', htmlIcon: '&nbsp;', eventTypes: [] }
         ],
         eventInfos: [],
         visibleEventInfos: [],
         selectionEventInfo: null,
         settings: {
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
         }
      };

      $scope.view = {
         showPatterns: false,
         patternsByName: ( function() {
            var result = {};
            $scope.model.patterns.forEach( function( pattern ) {
               result[ pattern.name ] = pattern;
            } );
            return result;
         } )()
      };

      $scope.commands = {
         setAll: function( toValue ) {
            settingGroups.forEach( function( groupName ) {
               var group = $scope.model.settings[ groupName ];
               ng.forEach( group, function( _, name ) {
                  group[ name ] = toValue;
               } );
            } );
         },
         setDefaults: function() {
            settingGroups.forEach( function( groupName ) {
               var group = $scope.model.settings[ groupName ];
               ng.forEach( group, function( _, name ) {
                  group[ name ] = true;
               } );
            } );
            $scope.model.patterns.forEach( function( patternInfo ) {
               $scope.model.settings.patterns[ patternInfo.name ] = true;
            } );
            $scope.features.filter.hidePatterns.forEach( function( pattern ) {
               $scope.model.settings.patterns[ pattern ] = false;
            } );
            $scope.features.filter.hideSources.forEach( function( pattern ) {
               $scope.model.settings.sources[ pattern ] = false;
            } );
            $scope.features.filter.hideInteractions.forEach( function( pattern ) {
               $scope.model.settings.interactions[ pattern ] = false;
            } );
         },
         clearFilters: function() {
            $scope.model.settings.namePattern = '';
            $scope.model.settings.visibleEventsLimit = null;
            $scope.commands.setAll( true );
         },
         select: function( eventInfo ) {
            $scope.model.selectionEventInfo = eventInfo.selected ? null : eventInfo;
            runFilters();
         },
         discard: function() {
            $scope.model.eventInfos = [];
            $scope.model.selectionEventInfo = null;
            runFilters();
         },
         runFilters: runFilters
      };

      $scope.commands.setDefaults();

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      if( $scope.features.events.stream ) {
         $scope.eventBus.subscribe( 'didProduce.' + $scope.features.events.stream, function( event ) {
            if( Array.isArray( event.data ) ) {
               event.data.forEach( addEvent );
            }
            else {
               addEvent( event.data );
            }
            runFilters();
         } );
      }

      if( $scope.features.showLocalEvents.enabled ) {
         var removeInspector = $scope.eventBus.addInspector( function( eventInfo ) {
            eventInfo.time = new Date();
            addEvent( eventInfo );
            runFilters();
            removeInspector = null;
         } );
         $scope.$on( '$destroy', removeInspector );
      }

      $scope.$watch( 'model.settings', runFilters, true );

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      function addEvent( eventInfo ) {
         $scope.model.eventInfos.unshift( {
            interaction: eventInfo.action,
            cycleId: eventInfo.cycleId > -1 ? eventInfo.cycleId : '-',
            eventObject: eventInfo.eventObject || {},
            formattedEvent: JSON.stringify( eventInfo.eventObject, null, 3 ),
            formattedTime: moment( eventInfo.time ).format( 'HH:mm:ss.SSS' ),
            name: eventInfo.event || '?',
            pattern: pattern( (eventInfo.event || '?').toLowerCase() ),
            showDetails: false,
            source: eventInfo.source || '?',
            target: eventInfo.target || '?',
            time: eventInfo.time,
            selected: false,
            sourceType: eventInfo.source.indexOf( 'widget.' ) === 0 ? 'widgets' : 'runtime'
         } );

         if( $scope.model.eventInfos.length > $scope.features.events.bufferSize ) {
            $scope.model.eventInfos.pop();
         }

         function pattern( eventName ) {
            var matchingPatthern = $scope.model.patterns.filter( function( pattern ) {
               return pattern.eventTypes.some( function( eventType ) {
                  return eventName.indexOf( eventType.toLowerCase() ) !== -1;
               } );
            } );
            return matchingPatthern.length ? matchingPatthern[ 0 ].name : 'other';
         }
      }

      ////////////////////////////////////////////////////////////////////////////////////////////////////////

      function runFilters() {
         var settings = $scope.model.settings;
         var numVisible = 0;

         var nameRegExp = null;
         if( settings.namePattern ) {
            try {
               nameRegExp = new RegExp( settings.namePattern, 'gi' );
            }
            catch( e ) { /* ignore invalid search pattern */ }
         }
         var selectionEventInfo = $scope.model.selectionEventInfo;

         $scope.model.visibleEventInfos = $scope.model.eventInfos.filter( function( eventInfo ) {
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
            if( nameRegExp ) {
               var matches = nameRegExp.test( eventInfo.name );
               nameRegExp.lastIndex = 0;
               if( !matches ) {
                  return false;
               }
            }
            ++numVisible;
            return true;
         } );

         // modify matches in place
         var invalidEventCharacters = /[^A-Za-z0-9._+-]/g;
         $scope.model.visibleEventInfos.forEach( function( eventInfo ) {
            eventInfo.htmlName = eventInfo.name.replace( invalidEventCharacters, '' );
            if( nameRegExp ) {
               var name = eventInfo.htmlName;
               var parts = [];
               var match;
               var lastIndex = 0;
               var limit = 1;
               while( limit-- && ( match = nameRegExp.exec( name ) ) !== null ) {
                  if( match.index > lastIndex ) {
                     parts.push( name.substring( lastIndex, match.index ) );
                  }
                  parts.push( '<b>' );
                  parts.push( match[ 0 ] );
                  parts.push( '</b>' );
                  lastIndex = nameRegExp.lastIndex;
               }
               nameRegExp.lastIndex = 0;
               parts.push( name.substring( lastIndex, name.length ) );
               eventInfo.htmlName = parts.join( '' );
            }
            eventInfo.selected = !!selectionEventInfo && inSelection( eventInfo, selectionEventInfo );
         } );
      }

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

   return ng.module( 'axEventsDisplayWidget', [] ).controller( 'AxEventsDisplayWidgetController', Controller );

} );
