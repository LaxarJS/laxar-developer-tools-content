/* jshint ignore:start */
define(['exports', 'wireflow'], function (exports, _wireflow) {'use strict';Object.defineProperty(exports, '__esModule', { value: true });var _slicedToArray = (function () {function sliceIterator(arr, i) {var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i['return']) _i['return']();} finally {if (_d) throw _e;}}return _arr;}return function (arr, i) {if (Array.isArray(arr)) {return arr;} else if (Symbol.iterator in Object(arr)) {return sliceIterator(arr, i);} else {throw new TypeError('Invalid attempt to destructure non-iterable instance');}};})();exports.graph = graph;exports.layout = layout;exports.types = types;exports.filterFromSelection = filterFromSelection;function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}var _wireflow2 = _interopRequireDefault(_wireflow);


   var TYPE_CONTAINER = 'CONTAINER';var 



   layoutModel = _wireflow2['default'].layout.model;var 


   graphModel = _wireflow2['default'].graph.model;



   var edgeTypes = { 
      RESOURCE: { 
         hidden: false, 
         label: 'Resources' }, 

      FLAG: { 
         label: 'Flags', 
         hidden: false }, 

      ACTION: { 
         label: 'Actions', 
         hidden: false }, 

      CONTAINER: { 
         hidden: false, 
         label: 'Container', 
         owningPort: 'outbound' } };



   /**
    * Create a wireflow graph from a given page/widget information model.
    *
    * @param {Object} pageInfo
    * @param {Boolean=false} withIrrelevantWidgets
    *   If set to `true`, widgets without any relevance to actions/resources/flags are removed.
    *   Containers of widgets (that are relevant by this measure) are kept.
    */
   function graph(pageInfo, options) {var _options$withIrrelevantWidgets = 




      options.withIrrelevantWidgets;var withIrrelevantWidgets = _options$withIrrelevantWidgets === undefined ? false : _options$withIrrelevantWidgets;var _options$withContainers = options.withContainers;var withContainers = _options$withContainers === undefined ? true : _options$withContainers;

      var PAGE_ID = '.';var 
      pageReference = pageInfo.pageReference;var pageDefinitions = pageInfo.pageDefinitions;var widgetDescriptors = pageInfo.widgetDescriptors;
      var page = pageDefinitions[pageReference];

      var vertices = {};
      var edges = {};

      identifyVertices();
      if (withContainers) {
         identifyContainers();}

      if (!withIrrelevantWidgets) {
         pruneIrrelevantWidgets();}

      pruneEmptyEdges();

      return graphModel.convert.graph({ 
         vertices: vertices, 
         edges: edges });


      ///////////////////////////////////////////////////////////////////////////////////////////////////////////

      function isWidget(pageAreaItem) {
         return !!pageAreaItem.widget;}


      function isLayout(pageAreaItem) {
         return !!pageAreaItem.layout;}


      function either(f, g) {
         return function () {
            return f.apply(this, arguments) || g.apply(this, arguments);};}



      ///////////////////////////////////////////////////////////////////////////////////////////////////////////

      function identifyVertices() {
         Object.keys(page.areas).forEach(function (areaName) {
            page.areas[areaName].forEach(function (component) {
               if (component.widget) {
                  processWidgetInstance(component, areaName);} else 

               if (component.layout) {
                  processLayoutInstance(component, areaName);}});});}





      ///////////////////////////////////////////////////////////////////////////////////////////////////////////

      function processLayoutInstance(layout, areaName) {
         vertices[layout.id] = { 
            id: layout.id, 
            kind: 'LAYOUT', 
            label: layout.id, 
            ports: { inbound: [], outbound: [] } };}



      ///////////////////////////////////////////////////////////////////////////////////////////////////////////

      function processWidgetInstance(widget, areaName) {
         var descriptor = widgetDescriptors[widget.widget];
         var ports = { inbound: [], outbound: [] };

         var kinds = { 
            widget: 'WIDGET', 
            activity: 'ACTIVITY' };


         identifyPorts(widget.features, descriptor.features, []);
         vertices[widget.id] = { 
            id: widget.id, 
            kind: kinds[descriptor.integration.type], 
            label: widget.id, 
            ports: ports };


         function identifyPorts(value, schema, path) {
            if (!value || !schema) {
               return;}


            if (value.enabled === false) {
               // widget feature can be disabled, and was disabled
               return;}


            if (schema.type === 'string' && schema.axRole && (
            schema.format === 'topic' || schema.format === 'flag-topic')) {
               var type = schema.axPattern ? schema.axPattern.toUpperCase() : inferEdgeType(path);
               if (!type) {return;}
               var edgeId = type + ':' + value;
               var label = path.join('.');
               var id = path.join(':');
               ports[schema.axRole === 'outlet' ? 'outbound' : 'inbound'].push({ 
                  label: label, id: id, type: type, edgeId: edgeId });

               if (edgeId && !edges[edgeId]) {
                  edges[edgeId] = { type: type, id: edgeId, label: value };}}



            if (schema.type === 'object' && schema.properties) {
               Object.keys(schema.properties).forEach(function (key) {
                  var propertySchema = schema.properties[key] || schema.additionalProperties;
                  identifyPorts(value[key], propertySchema, path.concat([key]));});}



            if (schema.type === 'array') {
               value.forEach(function (item, i) {
                  identifyPorts(item, schema.items, path.concat([i]));});}}




         function inferEdgeType(_x) {var _again = true;_function: while (_again) {var path = _x;_again = false;
               if (!path.length) {
                  return null;}

               var lastSegment = path[path.length - 1];
               if (['action', 'flag', 'resource'].indexOf(lastSegment) !== -1) {
                  return lastSegment.toUpperCase();}

               if (lastSegment === 'onActions') {
                  return 'ACTION';}_x = 

               path.slice(0, path.length - 1);_again = true;lastSegment = undefined;continue _function;}}}



      ///////////////////////////////////////////////////////////////////////////////////////////////////////////

      function pruneIrrelevantWidgets() {
         var toPrune = [];
         do {
            toPrune.forEach(function (id) {delete vertices[id];});
            pruneEmptyEdges();
            toPrune = mark();} while (
         toPrune.length);

         function mark() {
            var pruneList = [];
            Object.keys(vertices).forEach(function (vId) {
               var ports = vertices[vId].ports;
               if (ports.inbound.length <= 1) {
                  if (ports.outbound.every(function (_) {return !_.edgeId;})) {
                     pruneList.push(vId);}}});



            return pruneList;}}



      function pruneEmptyEdges() {
         var toPrune = [];
         Object.keys(edges).forEach(function (edgeId) {
            var type = edgeTypes[edges[edgeId].type];
            var sources = Object.keys(vertices).filter(isSourceOf(edgeId));
            var sinks = Object.keys(vertices).filter(isSinkOf(edgeId));
            var hasSources = sources.length > 0;
            var hasSinks = sinks.length > 0;
            var isEmpty = type.owningPort ? !hasSources || !hasSinks : !hasSources && !hasSinks;
            if (!isEmpty) {
               return;}


            toPrune.push(edgeId);
            sources.concat(sinks).forEach(function (vertexId) {
               var ports = vertices[vertexId].ports;
               ports.inbound.concat(ports.outbound).forEach(function (port) {
                  port.edgeId = port.edgeId === edgeId ? null : port.edgeId;});});});



         toPrune.forEach(function (id) {delete edges[id];});

         function isSourceOf(edgeId) {
            return function (vertexId) {
               return vertices[vertexId].ports.inbound.some(function (port) {return port.edgeId === edgeId;});};}



         function isSinkOf(edgeId) {
            return function (vertexId) {
               return vertices[vertexId].ports.outbound.some(function (port) {return port.edgeId === edgeId;});};}}




      ///////////////////////////////////////////////////////////////////////////////////////////////////////////

      function identifyContainers() {
         var type = TYPE_CONTAINER;

         vertices[PAGE_ID] = { 
            PAGE_ID: PAGE_ID, 
            label: 'Page ' + pageReference, 
            kind: 'PAGE', 
            ports: { inbound: [], outbound: [] } };


         Object.keys(page.areas).forEach(function (areaName) {
            insertEdge(areaName);
            var owner = findOwner(areaName);
            if (!owner) {
               return;}


            var containsAnything = false;
            page.areas[areaName].filter(either(isWidget, isLayout)).forEach(function (item) {
               if (vertices[item.id]) {
                  insertUplink(vertices[item.id], areaName);
                  containsAnything = true;}});


            if (containsAnything) {
               insertOwnerPort(owner, areaName);}});



         function findOwner(areaName) {
            if (areaName.indexOf('.') === -1) {
               return vertices[PAGE_ID];}

            var prefix = areaName.slice(0, areaName.lastIndexOf('.'));
            return vertices[prefix];}


         function insertOwnerPort(vertex, areaName) {
            vertex.ports.outbound.unshift({ 
               id: 'CONTAINER:' + areaName, 
               type: TYPE_CONTAINER, 
               edgeId: areaEdgeId(areaName), 
               label: areaName });}



         function insertUplink(vertex, areaName) {
            vertex.ports.inbound.unshift({ 
               id: 'CONTAINER:anchor', 
               type: TYPE_CONTAINER, 
               edgeId: areaEdgeId(areaName), 
               label: 'anchor' });}



         function insertEdge(areaName) {
            var id = areaEdgeId(areaName);
            edges[id] = { id: id, type: type, label: areaName };}


         function areaEdgeId(areaName) {
            return TYPE_CONTAINER + ':' + areaName;}}}





   //////////////////////////////////////////////////////////////////////////////////////////////////////////////

   function layout(graph) {
      return layoutModel.convert.layout({ 
         vertices: {}, 
         edges: {} });}



   //////////////////////////////////////////////////////////////////////////////////////////////////////////////

   function types() {
      return graphModel.convert.types(edgeTypes);}


   //////////////////////////////////////////////////////////////////////////////////////////////////////////////

   function filterFromSelection(selection, graphModel) {
      var topics = selection.edges.flatMap(function (edgeId) {var _edgeId$split = 
         edgeId.split(':');var _edgeId$split2 = _slicedToArray(_edgeId$split, 2);var type = _edgeId$split2[0];var topic = _edgeId$split2[1];
         return type === 'CONTAINER' ? [] : [{ pattern: type, topic: topic }];}).
      toJS();

      var participants = selection.vertices.flatMap(function (vertexId) {var _graphModel$vertices$get = 
         graphModel.vertices.get(vertexId);var id = _graphModel$vertices$get.id;var kind = _graphModel$vertices$get.kind;
         return kind === 'PAGE' || kind === 'LAYOUT' ? [] : [{ kind: kind, participant: vertexId }];});


      return { 
         topics: topics, 
         participants: participants };}});
//# sourceMappingURL=data:application/json;base64,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QixnQkFBTyxBQUFFLElBQUksS0FBSyxXQUFXLEdBQUssRUFBRSxHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBTCxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQ3BFLENBQUU7QUFBQyxVQUFJLEVBQUUsQ0FBQzs7QUFFWCxVQUFNLFlBQVksR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBRSxVQUFBLFFBQVEsRUFBSTtBQUNyQyxtQkFBVSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUUsUUFBUSxDQUFFLEtBQWhELEVBQUUsNEJBQUYsRUFBRSxLQUFFLElBQUksNEJBQUosSUFBSTtBQUNoQixnQkFBTyxBQUFFLElBQUksS0FBSyxNQUFNLElBQUksSUFBSSxLQUFLLFFBQVEsR0FBSyxFQUFFLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBSixJQUFJLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FDM0YsQ0FBRSxDQUFDOzs7QUFFSixhQUFPO0FBQ0osZUFBTSxFQUFOLE1BQU07QUFDTixxQkFBWSxFQUFaLFlBQVksRUFDZCxDQUFDLENBQ0oiLCJmaWxlIjoiZ3JhcGgtaGVscGVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdpcmVmbG93IGZyb20gJ3dpcmVmbG93JztcblxuY29uc3QgVFlQRV9DT05UQUlORVIgPSAnQ09OVEFJTkVSJztcblxuY29uc3Qge1xuICBsYXlvdXQ6IHtcbiAgICAgbW9kZWw6IGxheW91dE1vZGVsXG4gIH0sXG4gIGdyYXBoOiB7XG4gICAgbW9kZWw6IGdyYXBoTW9kZWxcbiAgfVxufSA9IHdpcmVmbG93O1xuXG5jb25zdCBlZGdlVHlwZXMgPSB7XG4gICBSRVNPVVJDRToge1xuICAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgIGxhYmVsOiAnUmVzb3VyY2VzJ1xuICAgfSxcbiAgIEZMQUc6IHtcbiAgICAgIGxhYmVsOiAnRmxhZ3MnLFxuICAgICAgaGlkZGVuOiBmYWxzZVxuICAgfSxcbiAgIEFDVElPTjoge1xuICAgICAgbGFiZWw6ICdBY3Rpb25zJyxcbiAgICAgIGhpZGRlbjogZmFsc2VcbiAgIH0sXG4gICBDT05UQUlORVI6IHtcbiAgICAgIGhpZGRlbjogZmFsc2UsXG4gICAgICBsYWJlbDogJ0NvbnRhaW5lcicsXG4gICAgICBvd25pbmdQb3J0OiAnb3V0Ym91bmQnXG4gICB9XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhIHdpcmVmbG93IGdyYXBoIGZyb20gYSBnaXZlbiBwYWdlL3dpZGdldCBpbmZvcm1hdGlvbiBtb2RlbC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFnZUluZm9cbiAqIEBwYXJhbSB7Qm9vbGVhbj1mYWxzZX0gd2l0aElycmVsZXZhbnRXaWRnZXRzXG4gKiAgIElmIHNldCB0byBgdHJ1ZWAsIHdpZGdldHMgd2l0aG91dCBhbnkgcmVsZXZhbmNlIHRvIGFjdGlvbnMvcmVzb3VyY2VzL2ZsYWdzIGFyZSByZW1vdmVkLlxuICogICBDb250YWluZXJzIG9mIHdpZGdldHMgKHRoYXQgYXJlIHJlbGV2YW50IGJ5IHRoaXMgbWVhc3VyZSkgYXJlIGtlcHQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBncmFwaCggcGFnZUluZm8sIG9wdGlvbnMgKSB7XG5cbiAgIGNvbnN0IHtcbiAgICAgIHdpdGhJcnJlbGV2YW50V2lkZ2V0cyA9IGZhbHNlLFxuICAgICAgd2l0aENvbnRhaW5lcnMgPSB0cnVlXG4gICB9ID0gb3B0aW9ucztcblxuICAgY29uc3QgUEFHRV9JRCA9ICcuJztcbiAgIGNvbnN0IHsgcGFnZVJlZmVyZW5jZSwgcGFnZURlZmluaXRpb25zLCB3aWRnZXREZXNjcmlwdG9ycyB9ID0gcGFnZUluZm87XG4gICBjb25zdCBwYWdlID0gcGFnZURlZmluaXRpb25zWyBwYWdlUmVmZXJlbmNlIF07XG5cbiAgIGNvbnN0IHZlcnRpY2VzID0ge307XG4gICBjb25zdCBlZGdlcyA9IHt9O1xuXG4gICBpZGVudGlmeVZlcnRpY2VzKCk7XG4gICBpZiggd2l0aENvbnRhaW5lcnMgKSB7XG4gICAgICBpZGVudGlmeUNvbnRhaW5lcnMoKTtcbiAgIH1cbiAgIGlmKCAhd2l0aElycmVsZXZhbnRXaWRnZXRzICkge1xuICAgICAgcHJ1bmVJcnJlbGV2YW50V2lkZ2V0cygpO1xuICAgfVxuICAgcHJ1bmVFbXB0eUVkZ2VzKCk7XG5cbiAgIHJldHVybiBncmFwaE1vZGVsLmNvbnZlcnQuZ3JhcGgoIHtcbiAgICAgIHZlcnRpY2VzLFxuICAgICAgZWRnZXNcbiAgIH0gKTtcblxuICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgZnVuY3Rpb24gaXNXaWRnZXQoIHBhZ2VBcmVhSXRlbSApIHtcbiAgICAgIHJldHVybiAhIXBhZ2VBcmVhSXRlbS53aWRnZXQ7XG4gICB9XG5cbiAgIGZ1bmN0aW9uIGlzTGF5b3V0KCBwYWdlQXJlYUl0ZW0gKSB7XG4gICAgICByZXR1cm4gISFwYWdlQXJlYUl0ZW0ubGF5b3V0O1xuICAgfVxuXG4gICBmdW5jdGlvbiBlaXRoZXIoIGYsIGcgKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICByZXR1cm4gZi5hcHBseSggdGhpcywgYXJndW1lbnRzICkgfHwgZy5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG4gICAgICB9O1xuICAgfVxuXG4gICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICBmdW5jdGlvbiBpZGVudGlmeVZlcnRpY2VzKCkge1xuICAgICAgT2JqZWN0LmtleXMoIHBhZ2UuYXJlYXMgKS5mb3JFYWNoKCBhcmVhTmFtZSA9PiB7XG4gICAgICAgICBwYWdlLmFyZWFzWyBhcmVhTmFtZSBdLmZvckVhY2goIGNvbXBvbmVudCA9PiB7XG4gICAgICAgICAgICBpZiggY29tcG9uZW50LndpZGdldCApIHtcbiAgICAgICAgICAgICAgIHByb2Nlc3NXaWRnZXRJbnN0YW5jZSggY29tcG9uZW50LCBhcmVhTmFtZSApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiggY29tcG9uZW50LmxheW91dCApIHtcbiAgICAgICAgICAgICAgIHByb2Nlc3NMYXlvdXRJbnN0YW5jZSggY29tcG9uZW50LCBhcmVhTmFtZSApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgfSApO1xuICAgICAgfSApO1xuICAgfVxuXG4gICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICBmdW5jdGlvbiBwcm9jZXNzTGF5b3V0SW5zdGFuY2UoIGxheW91dCwgYXJlYU5hbWUgKSB7XG4gICAgICB2ZXJ0aWNlc1sgbGF5b3V0LmlkIF0gPSB7XG4gICAgICAgICBpZDogbGF5b3V0LmlkLFxuICAgICAgICAga2luZDogJ0xBWU9VVCcsXG4gICAgICAgICBsYWJlbDogbGF5b3V0LmlkLFxuICAgICAgICAgcG9ydHM6IHsgaW5ib3VuZDogW10sIG91dGJvdW5kOiBbXSB9XG4gICAgICB9O1xuICAgfVxuXG4gICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICBmdW5jdGlvbiBwcm9jZXNzV2lkZ2V0SW5zdGFuY2UoIHdpZGdldCwgYXJlYU5hbWUgKSB7XG4gICAgICBjb25zdCBkZXNjcmlwdG9yID0gd2lkZ2V0RGVzY3JpcHRvcnNbIHdpZGdldC53aWRnZXQgXTtcbiAgICAgIGNvbnN0IHBvcnRzID0geyBpbmJvdW5kOiBbXSwgb3V0Ym91bmQ6IFtdIH07XG5cbiAgICAgIGNvbnN0IGtpbmRzID0ge1xuICAgICAgICAgd2lkZ2V0OiAnV0lER0VUJyxcbiAgICAgICAgIGFjdGl2aXR5OiAnQUNUSVZJVFknXG4gICAgICB9O1xuXG4gICAgICBpZGVudGlmeVBvcnRzKCB3aWRnZXQuZmVhdHVyZXMsIGRlc2NyaXB0b3IuZmVhdHVyZXMsIFtdICk7XG4gICAgICB2ZXJ0aWNlc1sgd2lkZ2V0LmlkIF0gPSB7XG4gICAgICAgICBpZDogd2lkZ2V0LmlkLFxuICAgICAgICAga2luZDoga2luZHNbIGRlc2NyaXB0b3IuaW50ZWdyYXRpb24udHlwZSBdLFxuICAgICAgICAgbGFiZWw6IHdpZGdldC5pZCxcbiAgICAgICAgIHBvcnRzOiBwb3J0c1xuICAgICAgfTtcblxuICAgICAgZnVuY3Rpb24gaWRlbnRpZnlQb3J0cyggdmFsdWUsIHNjaGVtYSwgcGF0aCApIHtcbiAgICAgICAgIGlmKCAhdmFsdWUgfHwgIXNjaGVtYSApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgIH1cblxuICAgICAgICAgaWYoIHZhbHVlLmVuYWJsZWQgPT09IGZhbHNlICkge1xuICAgICAgICAgICAgLy8gd2lkZ2V0IGZlYXR1cmUgY2FuIGJlIGRpc2FibGVkLCBhbmQgd2FzIGRpc2FibGVkXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICB9XG5cbiAgICAgICAgIGlmKCBzY2hlbWEudHlwZSA9PT0gJ3N0cmluZycgJiYgc2NoZW1hLmF4Um9sZSAmJlxuICAgICAgICAgICAgICggc2NoZW1hLmZvcm1hdCA9PT0gJ3RvcGljJyB8fCBzY2hlbWEuZm9ybWF0ID09PSAnZmxhZy10b3BpYycgKSApIHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBzY2hlbWEuYXhQYXR0ZXJuID8gc2NoZW1hLmF4UGF0dGVybi50b1VwcGVyQ2FzZSgpIDogaW5mZXJFZGdlVHlwZSggcGF0aCApO1xuICAgICAgICAgICAgaWYoICF0eXBlICkgeyByZXR1cm47IH1cbiAgICAgICAgICAgIGNvbnN0IGVkZ2VJZCA9IHR5cGUgKyAnOicgKyB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gcGF0aC5qb2luKCAnLicgKTtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gIHBhdGguam9pbiggJzonICk7XG4gICAgICAgICAgICBwb3J0c1sgc2NoZW1hLmF4Um9sZSA9PT0gJ291dGxldCcgPyAnb3V0Ym91bmQnIDogJ2luYm91bmQnIF0ucHVzaCgge1xuICAgICAgICAgICAgICAgbGFiZWwsIGlkLCB0eXBlLCBlZGdlSWRcbiAgICAgICAgICAgIH0gKTtcbiAgICAgICAgICAgIGlmKCBlZGdlSWQgJiYgIWVkZ2VzWyBlZGdlSWQgXSApIHtcbiAgICAgICAgICAgICAgIGVkZ2VzWyBlZGdlSWQgXSA9IHsgdHlwZSwgaWQ6IGVkZ2VJZCwgbGFiZWw6IHZhbHVlIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG5cbiAgICAgICAgIGlmKCBzY2hlbWEudHlwZSA9PT0gJ29iamVjdCcgJiYgc2NoZW1hLnByb3BlcnRpZXMgKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyggc2NoZW1hLnByb3BlcnRpZXMgKS5mb3JFYWNoKCBrZXkgPT4ge1xuICAgICAgICAgICAgICAgY29uc3QgcHJvcGVydHlTY2hlbWEgPSBzY2hlbWEucHJvcGVydGllc1sga2V5IF0gfHwgc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzO1xuICAgICAgICAgICAgICAgaWRlbnRpZnlQb3J0cyggdmFsdWVbIGtleSBdLCBwcm9wZXJ0eVNjaGVtYSwgcGF0aC5jb25jYXQoIFsga2V5IF0gKSApO1xuICAgICAgICAgICAgfSApO1xuICAgICAgICAgfVxuXG4gICAgICAgICBpZiggc2NoZW1hLnR5cGUgPT09ICdhcnJheScgKSB7XG4gICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKCAoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgaWRlbnRpZnlQb3J0cyggaXRlbSwgc2NoZW1hLml0ZW1zLCBwYXRoLmNvbmNhdCggWyBpIF0gKSApO1xuICAgICAgICAgICAgfSApO1xuICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBpbmZlckVkZ2VUeXBlKCBwYXRoICkge1xuICAgICAgICAgaWYoICFwYXRoLmxlbmd0aCApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgfVxuICAgICAgICAgY29uc3QgbGFzdFNlZ21lbnQgPSBwYXRoWyBwYXRoLmxlbmd0aCAtIDEgXTtcbiAgICAgICAgIGlmKCBbICdhY3Rpb24nLCAnZmxhZycsICdyZXNvdXJjZScgXS5pbmRleE9mKCBsYXN0U2VnbWVudCApICE9PSAtMSApIHtcbiAgICAgICAgICAgIHJldHVybiBsYXN0U2VnbWVudC50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgfVxuICAgICAgICAgaWYoIGxhc3RTZWdtZW50ID09PSAnb25BY3Rpb25zJyApIHtcbiAgICAgICAgICAgIHJldHVybiAnQUNUSU9OJztcbiAgICAgICAgIH1cbiAgICAgICAgIHJldHVybiBpbmZlckVkZ2VUeXBlKCBwYXRoLnNsaWNlKCAwLCBwYXRoLmxlbmd0aCAtIDEgKSApO1xuICAgICAgfVxuICAgfVxuXG4gICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICBmdW5jdGlvbiBwcnVuZUlycmVsZXZhbnRXaWRnZXRzKCkge1xuICAgICAgbGV0IHRvUHJ1bmUgPSBbXTtcbiAgICAgIGRvIHtcbiAgICAgICAgIHRvUHJ1bmUuZm9yRWFjaCggaWQgPT4geyBkZWxldGUgdmVydGljZXNbIGlkIF07IH0gKTtcbiAgICAgICAgIHBydW5lRW1wdHlFZGdlcygpO1xuICAgICAgICAgdG9QcnVuZSA9IG1hcmsoKTtcbiAgICAgIH0gd2hpbGUoIHRvUHJ1bmUubGVuZ3RoICk7XG5cbiAgICAgIGZ1bmN0aW9uIG1hcmsoKSB7XG4gICAgICAgICBjb25zdCBwcnVuZUxpc3QgPSBbXTtcbiAgICAgICAgIE9iamVjdC5rZXlzKCB2ZXJ0aWNlcyApLmZvckVhY2goIHZJZCA9PiB7XG4gICAgICAgICAgICBjb25zdCBwb3J0cyA9IHZlcnRpY2VzWyB2SWQgXS5wb3J0cztcbiAgICAgICAgICAgIGlmKCBwb3J0cy5pbmJvdW5kLmxlbmd0aCA8PSAxICkge1xuICAgICAgICAgICAgICAgaWYoIHBvcnRzLm91dGJvdW5kLmV2ZXJ5KCBfID0+ICFfLmVkZ2VJZCApICkge1xuICAgICAgICAgICAgICAgICAgcHJ1bmVMaXN0LnB1c2goIHZJZCAgKTtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgIH0gKTtcbiAgICAgICAgIHJldHVybiBwcnVuZUxpc3Q7XG4gICAgICB9XG4gICB9XG5cbiAgIGZ1bmN0aW9uIHBydW5lRW1wdHlFZGdlcygpIHtcbiAgICAgIGNvbnN0IHRvUHJ1bmUgPSBbXTtcbiAgICAgIE9iamVjdC5rZXlzKCBlZGdlcyApLmZvckVhY2goIGVkZ2VJZCA9PiB7XG4gICAgICAgICBjb25zdCB0eXBlID0gZWRnZVR5cGVzWyBlZGdlc1sgZWRnZUlkIF0udHlwZSBdO1xuICAgICAgICAgY29uc3Qgc291cmNlcyA9IE9iamVjdC5rZXlzKCB2ZXJ0aWNlcyApLmZpbHRlciggaXNTb3VyY2VPZiggZWRnZUlkICkgKTtcbiAgICAgICAgIGNvbnN0IHNpbmtzID0gT2JqZWN0LmtleXMoIHZlcnRpY2VzICkuZmlsdGVyKCBpc1NpbmtPZiggZWRnZUlkICkgKTtcbiAgICAgICAgIGNvbnN0IGhhc1NvdXJjZXMgPSBzb3VyY2VzLmxlbmd0aCA+IDA7XG4gICAgICAgICBjb25zdCBoYXNTaW5rcyA9IHNpbmtzLmxlbmd0aCA+IDA7XG4gICAgICAgICBjb25zdCBpc0VtcHR5ID0gdHlwZS5vd25pbmdQb3J0ID8gKCFoYXNTb3VyY2VzIHx8ICFoYXNTaW5rcykgOiAoIWhhc1NvdXJjZXMgJiYgIWhhc1NpbmtzKTtcbiAgICAgICAgIGlmKCAhaXNFbXB0eSApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgIH1cblxuICAgICAgICAgdG9QcnVuZS5wdXNoKCBlZGdlSWQgKTtcbiAgICAgICAgIHNvdXJjZXMuY29uY2F0KCBzaW5rcyApLmZvckVhY2goIHZlcnRleElkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBvcnRzID0gdmVydGljZXNbIHZlcnRleElkIF0ucG9ydHM7XG4gICAgICAgICAgICBwb3J0cy5pbmJvdW5kLmNvbmNhdCggcG9ydHMub3V0Ym91bmQgKS5mb3JFYWNoKCBwb3J0ID0+IHtcbiAgICAgICAgICAgICAgIHBvcnQuZWRnZUlkID0gcG9ydC5lZGdlSWQgPT09IGVkZ2VJZCA/IG51bGwgOiBwb3J0LmVkZ2VJZDtcbiAgICAgICAgICAgIH0gKTtcbiAgICAgICAgIH0gKTtcbiAgICAgIH0gKTtcbiAgICAgIHRvUHJ1bmUuZm9yRWFjaCggaWQgPT4geyBkZWxldGUgZWRnZXNbIGlkIF07IH0gKTtcblxuICAgICAgZnVuY3Rpb24gaXNTb3VyY2VPZiggZWRnZUlkICkge1xuICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCB2ZXJ0ZXhJZCApIHtcbiAgICAgICAgICAgIHJldHVybiB2ZXJ0aWNlc1sgdmVydGV4SWQgXS5wb3J0cy5pbmJvdW5kLnNvbWUoIHBvcnQgPT4gcG9ydC5lZGdlSWQgPT09IGVkZ2VJZCApO1xuICAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gaXNTaW5rT2YoIGVkZ2VJZCApIHtcbiAgICAgICAgIHJldHVybiBmdW5jdGlvbiggdmVydGV4SWQgKSB7XG4gICAgICAgICAgICByZXR1cm4gdmVydGljZXNbIHZlcnRleElkIF0ucG9ydHMub3V0Ym91bmQuc29tZSggcG9ydCA9PiBwb3J0LmVkZ2VJZCA9PT0gZWRnZUlkICk7XG4gICAgICAgICB9O1xuICAgICAgfVxuICAgfVxuXG4gICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICBmdW5jdGlvbiBpZGVudGlmeUNvbnRhaW5lcnMoKSB7XG4gICAgICBjb25zdCB0eXBlID0gVFlQRV9DT05UQUlORVI7XG5cbiAgICAgIHZlcnRpY2VzWyBQQUdFX0lEIF0gPSAge1xuICAgICAgICAgUEFHRV9JRCxcbiAgICAgICAgIGxhYmVsOiAnUGFnZSAnICsgcGFnZVJlZmVyZW5jZSxcbiAgICAgICAgIGtpbmQ6ICdQQUdFJyxcbiAgICAgICAgIHBvcnRzOiB7IGluYm91bmQ6IFtdLCBvdXRib3VuZDogW10gfVxuICAgICAgfTtcblxuICAgICAgT2JqZWN0LmtleXMoIHBhZ2UuYXJlYXMgKS5mb3JFYWNoKCBhcmVhTmFtZSA9PiB7XG4gICAgICAgICBpbnNlcnRFZGdlKCBhcmVhTmFtZSApO1xuICAgICAgICAgY29uc3Qgb3duZXIgPSBmaW5kT3duZXIoIGFyZWFOYW1lICk7XG4gICAgICAgICBpZiggIW93bmVyICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgfVxuXG4gICAgICAgICBsZXQgY29udGFpbnNBbnl0aGluZyA9IGZhbHNlO1xuICAgICAgICAgcGFnZS5hcmVhc1sgYXJlYU5hbWUgXS5maWx0ZXIoIGVpdGhlciggaXNXaWRnZXQsIGlzTGF5b3V0ICkgKS5mb3JFYWNoKCBpdGVtID0+IHtcbiAgICAgICAgICAgIGlmKCB2ZXJ0aWNlc1sgaXRlbS5pZCBdICkge1xuICAgICAgICAgICAgICAgaW5zZXJ0VXBsaW5rKCB2ZXJ0aWNlc1sgaXRlbS5pZCBdLCBhcmVhTmFtZSApO1xuICAgICAgICAgICAgICAgY29udGFpbnNBbnl0aGluZyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICB9ICk7XG4gICAgICAgICBpZiggY29udGFpbnNBbnl0aGluZyApIHtcbiAgICAgICAgICAgIGluc2VydE93bmVyUG9ydCggb3duZXIsIGFyZWFOYW1lICk7XG4gICAgICAgICB9XG4gICAgICB9ICk7XG5cbiAgICAgIGZ1bmN0aW9uIGZpbmRPd25lciggYXJlYU5hbWUgKSB7XG4gICAgICAgICBpZiggYXJlYU5hbWUuaW5kZXhPZiggJy4nICkgPT09IC0xICkge1xuICAgICAgICAgICAgcmV0dXJuIHZlcnRpY2VzWyBQQUdFX0lEIF07XG4gICAgICAgICB9XG4gICAgICAgICBjb25zdCBwcmVmaXggPSBhcmVhTmFtZS5zbGljZSggMCwgYXJlYU5hbWUubGFzdEluZGV4T2YoICcuJyApICk7XG4gICAgICAgICByZXR1cm4gdmVydGljZXNbIHByZWZpeCBdO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBpbnNlcnRPd25lclBvcnQoIHZlcnRleCwgYXJlYU5hbWUgKSB7XG4gICAgICAgICB2ZXJ0ZXgucG9ydHMub3V0Ym91bmQudW5zaGlmdCgge1xuICAgICAgICAgICAgaWQ6ICdDT05UQUlORVI6JyArIGFyZWFOYW1lLFxuICAgICAgICAgICAgdHlwZTogVFlQRV9DT05UQUlORVIsXG4gICAgICAgICAgICBlZGdlSWQ6IGFyZWFFZGdlSWQoIGFyZWFOYW1lICksXG4gICAgICAgICAgICBsYWJlbDogYXJlYU5hbWVcbiAgICAgICAgIH0gKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gaW5zZXJ0VXBsaW5rKCB2ZXJ0ZXgsIGFyZWFOYW1lICkge1xuICAgICAgICAgdmVydGV4LnBvcnRzLmluYm91bmQudW5zaGlmdCgge1xuICAgICAgICAgICAgaWQ6ICdDT05UQUlORVI6YW5jaG9yJyxcbiAgICAgICAgICAgIHR5cGU6IFRZUEVfQ09OVEFJTkVSLFxuICAgICAgICAgICAgZWRnZUlkOiBhcmVhRWRnZUlkKCBhcmVhTmFtZSApLFxuICAgICAgICAgICAgbGFiZWw6ICdhbmNob3InXG4gICAgICAgICB9ICk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGluc2VydEVkZ2UoIGFyZWFOYW1lICkge1xuICAgICAgICAgY29uc3QgaWQgPSBhcmVhRWRnZUlkKCBhcmVhTmFtZSApO1xuICAgICAgICAgZWRnZXNbIGlkIF0gPSB7IGlkLCB0eXBlLCBsYWJlbDogYXJlYU5hbWUgfTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gYXJlYUVkZ2VJZCggYXJlYU5hbWUgKSB7XG4gICAgICAgICByZXR1cm4gVFlQRV9DT05UQUlORVIgKyAnOicgKyBhcmVhTmFtZTtcbiAgICAgIH1cbiAgIH1cblxufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5leHBvcnQgZnVuY3Rpb24gbGF5b3V0KCBncmFwaCApIHtcbiAgIHJldHVybiBsYXlvdXRNb2RlbC5jb252ZXJ0LmxheW91dCgge1xuICAgICAgdmVydGljZXM6IHt9LFxuICAgICAgZWRnZXM6IHt9XG4gICB9ICk7XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlcygpIHtcbiAgIHJldHVybiBncmFwaE1vZGVsLmNvbnZlcnQudHlwZXMoIGVkZ2VUeXBlcyApO1xufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyRnJvbVNlbGVjdGlvbiggc2VsZWN0aW9uLCBncmFwaE1vZGVsICkge1xuICAgY29uc3QgdG9waWNzID0gc2VsZWN0aW9uLmVkZ2VzLmZsYXRNYXAoIGVkZ2VJZCA9PiB7XG4gICAgICBjb25zdCBbIHR5cGUsIHRvcGljIF0gPSBlZGdlSWQuc3BsaXQoICc6JyApO1xuICAgICAgcmV0dXJuICggdHlwZSA9PT0gJ0NPTlRBSU5FUicgKSA/IFtdIDogW3sgcGF0dGVybjogdHlwZSwgdG9waWMgfV07XG4gICB9ICkudG9KUygpO1xuXG4gICBjb25zdCBwYXJ0aWNpcGFudHMgPSBzZWxlY3Rpb24udmVydGljZXMuZmxhdE1hcCggdmVydGV4SWQgPT4ge1xuICAgICAgY29uc3QgeyBpZCwga2luZCB9ID0gZ3JhcGhNb2RlbC52ZXJ0aWNlcy5nZXQoIHZlcnRleElkICk7XG4gICAgICByZXR1cm4gKCBraW5kID09PSAnUEFHRScgfHwga2luZCA9PT0gJ0xBWU9VVCcgKSA/IFtdIDogW3sga2luZCwgcGFydGljaXBhbnQ6IHZlcnRleElkIH1dO1xuICAgfSApO1xuXG4gICByZXR1cm4ge1xuICAgICAgdG9waWNzLFxuICAgICAgcGFydGljaXBhbnRzXG4gICB9O1xufVxuIl19
