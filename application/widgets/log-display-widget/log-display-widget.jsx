/**
 * Copyright 2017 aixigo AG
 * Released under the MIT license.
 * http://laxarjs.org/license
 */

import React from 'react';
import { string } from 'laxar';
import moment from 'moment';
import AutoAffix from 'react-overlays/lib/AutoAffix';

const injections = [ 'axContext', 'axEventBus', 'axReactRender' ];
function create( context, eventBus, reactRender ) {
   'use strict';

   const model = {
      messages: []
   };

   if( context.features.log.stream ) {
      eventBus.subscribe( `didProduce.${context.features.log.stream}`, event => {
         if( Array.isArray( event.data ) ) {
            event.data.forEach( displayLogMessage );
         }
         else {
            displayLogMessage( event.data );
         }
         render();
      } );
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function displayLogMessage( message ) {
      model.messages.unshift( {
         text: string.format( message.text, message.replacements ),
         level: message.level,
         time: message.time,
         location: `${message.sourceInfo.file}:${message.sourceInfo.line}`
      } );

      while( model.messages.length > context.features.log.bufferSize ) {
         model.messages.pop();
      }
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function discard() {
      model.messages.length = 0;
      render();
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function render() {
      function formatTime( date ) {
         return moment( date ).format( 'YYYY-MM-DD HH:mm:ss.SSS' );
      }
      const messages = model.messages.map( message =>
         <tr key={ message.time }>
            <td>{ message.level }</td>
            <td>{ message.text }</td>
            <td>{ message.location }</td>
            <td>{ formatTime( message.time ) }</td>
         </tr>
      );

      reactRender(
         <div>
            <AutoAffix>
               <div className="ax-affix-area">
                  <div className="ax-button-wrapper">
                     <button
                        type="button"
                        className={
                           `${!model.messages.length ? 'ax-disabled ' : ''}btn btn-primary btn-sm` }
                        onClick={ discard }
                        >Clear</button>
                  </div>
               </div>
            </AutoAffix>

            { !model.messages.length &&
               <div className="text-large">
                  <h4 className="text-primary">No Log Messages</h4>
                  <p><i className="fa fa-clock-o"/> Waiting for messages from host application...</p>
               </div>
            }

            { !!model.messages.length &&
               <table className="table table-striped table-hover">
                  <thead>
                     <tr>
                        <th>Level</th>
                        <th>Message</th>
                        <th>Location</th>
                        <th>Time</th>
                     </tr>
                  </thead>
                  <tbody>
                     { messages }
                  </tbody>
               </table>
            }
         </div>
      );

   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   return {
      onDomAvailable: render
   };
}

export default {
   name: 'log-display-widget',
   injections,
   create
};
