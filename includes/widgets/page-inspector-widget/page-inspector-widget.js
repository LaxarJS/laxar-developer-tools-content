define(['exports', 'module', 'react', 'laxar-patterns', 'wireflow', './graph-helpers'], function (exports, module, _react, _laxarPatterns, _wireflow, _graphHelpers) {'use strict';function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}var _React = _interopRequireDefault(_react);var _patterns = _interopRequireDefault(_laxarPatterns);var _wireflow2 = _interopRequireDefault(_wireflow);var 







   SelectionStore = _wireflow2['default'].selection.SelectionStore;var 
   HistoryStore = _wireflow2['default'].history.HistoryStore;var 
   LayoutStore = _wireflow2['default'].layout.LayoutStore;var 
   GraphStore = _wireflow2['default'].graph.GraphStore;var _wireflow$settings = _wireflow2['default'].
   settings;var _wireflow$settings$actions = _wireflow$settings.
   actions;var ChangeMode = _wireflow$settings$actions.ChangeMode;var MinimapResized = _wireflow$settings$actions.MinimapResized;var _wireflow$settings$model = _wireflow$settings.
   model;var Settings = _wireflow$settings$model.Settings;var READ_ONLY = _wireflow$settings$model.READ_ONLY;var READ_WRITE = _wireflow$settings$model.READ_WRITE;var 
   SettingsStore = _wireflow$settings.SettingsStore;var 

   Dispatcher = _wireflow2['default'].Dispatcher;var 
   Graph = _wireflow2['default'].components.Graph;



   function create(context, eventBus, reactRender) {

      var visible = false;
      var domAvailable = false;
      var viewModel = null;
      var viewModelCalculation = null;

      var withIrrelevantWidgets = false;
      var withContainers = true;

      var publishedSelection = null;

      _patterns['default'].resources.handlerFor(context).
      registerResourceFromFeature('pageInfo', { 
         onUpdateReplace: function onUpdateReplace() {return initializeViewModel(true);} });



      var publishFilter = _patterns['default'].resources.replacePublisherForFeature(context, 'filter', { 
         isOptional: true });


      eventBus.subscribe('didChangeAreaVisibility.' + context.widget.area, function (event, meta) {
         if (!visible && event.visible) {
            visible = true;
            render();}});



      //////////////////////////////////////////////////////////////////////////////////////////////////////////

      function replaceFilter(selection, graphModel) {
         var resource = context.features.filter.resource;
         if (!resource || selection === publishedSelection) {
            return;}

         publishedSelection = selection;
         publishFilter((0, _graphHelpers.filterFromSelection)(selection, graphModel));}


      //////////////////////////////////////////////////////////////////////////////////////////////////////////

      function toggleIrrelevantWidgets() {
         withIrrelevantWidgets = !withIrrelevantWidgets;
         initializeViewModel(true);}


      //////////////////////////////////////////////////////////////////////////////////////////////////////////

      function toggleContainers() {
         withContainers = !withContainers;
         initializeViewModel(true);}


      //////////////////////////////////////////////////////////////////////////////////////////////////////////

      function initializeViewModel(doReset) {
         if (doReset) {
            viewModel = null;
            clearTimeout(viewModelCalculation);
            viewModelCalculation = null;
            if (visible) {
               render();}}



         if (visible) {
            viewModelCalculation = viewModelCalculation || setTimeout(function () {
               var pageTypes = (0, _graphHelpers.types)();
               var pageInfo = context.resources.pageInfo;
               var pageGraph = (0, _graphHelpers.graph)(pageInfo, { withIrrelevantWidgets: withIrrelevantWidgets, withContainers: withContainers });
               var dispatcher = new Dispatcher(render);
               new HistoryStore(dispatcher);
               var graphStore = new GraphStore(dispatcher, pageGraph, pageTypes);
               var layoutStore = new LayoutStore(dispatcher, graphStore);
               var settingsStore = new SettingsStore(dispatcher, Settings({ mode: READ_ONLY }));
               var selectionStore = new SelectionStore(dispatcher, layoutStore, graphStore);

               viewModel = { graphStore: graphStore, layoutStore: layoutStore, settingsStore: settingsStore, selectionStore: selectionStore, dispatcher: dispatcher };
               render();}, 
            20);}}



      //////////////////////////////////////////////////////////////////////////////////////////////////////////

      function render() {
         if (!visible || !domAvailable) {
            return;}


         if (!viewModel) {
            reactRender(
            _React['default'].createElement('div', { className: 'page-inspector-placeholder' }, 
            _React['default'].createElement('i', { className: 'fa fa-cog fa-spin' }), 'layout'));


            initializeViewModel();
            return;}var _viewModel = 








         viewModel;var graphStore = _viewModel.graphStore;var layoutStore = _viewModel.layoutStore;var settingsStore = _viewModel.settingsStore;var selectionStore = _viewModel.selectionStore;var dispatcher = _viewModel.dispatcher;

         replaceFilter(selectionStore.selection, graphStore.graph);

         reactRender(
         _React['default'].createElement('div', { className: 'page-inspector-row form-inline' }, 
         _React['default'].createElement('div', { className: 'text-right' }, 
         _React['default'].createElement('button', { type: 'button', className: 'btn btn-link', 
            onClick: toggleIrrelevantWidgets }, 
         _React['default'].createElement('i', { className: 'fa fa-toggle-' + (withIrrelevantWidgets ? 'on' : 'off') }), ' "Silent" Widgets'), 

         _React['default'].createElement('button', { type: 'button', className: 'btn btn-link', 
            onClick: toggleContainers }, 
         _React['default'].createElement('i', { className: 'fa fa-toggle-' + (withContainers ? 'on' : 'off') }), ' Containers')), 


         _React['default'].createElement(Graph, { className: 'nbe-theme-fusebox-app', 
            types: graphStore.types, 
            model: graphStore.graph, 
            layout: layoutStore.layout, 
            measurements: layoutStore.measurements, 
            settings: settingsStore.settings, 
            selection: selectionStore.selection, 
            eventHandler: dispatcher.dispatch })));}




      //////////////////////////////////////////////////////////////////////////////////////////////////////////

      return { onDomAvailable: function onDomAvailable() {
            domAvailable = true;
            render();} };}module.exports = 



   { 
      name: 'page-inspector-widget', 
      injections: ['axContext', 'axEventBus', 'axReactRender'], 
      create: create };});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UtaW5zcGVjdG9yLXdpZGdldC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFRZSxpQkFBYyx5QkFBM0IsU0FBUyxDQUFJLGNBQWM7QUFDaEIsZUFBWSx5QkFBdkIsT0FBTyxDQUFJLFlBQVk7QUFDYixjQUFXLHlCQUFyQixNQUFNLENBQUksV0FBVztBQUNaLGFBQVUseUJBQW5CLEtBQUssQ0FBSSxVQUFVO0FBQ25CLFdBQVE7QUFDTixVQUFPLEtBQUksVUFBVSw4QkFBVixVQUFVLEtBQUUsY0FBYyw4QkFBZCxjQUFjO0FBQ3JDLFFBQUssS0FBSSxRQUFRLDRCQUFSLFFBQVEsS0FBRSxTQUFTLDRCQUFULFNBQVMsS0FBRSxVQUFVLDRCQUFWLFVBQVU7QUFDeEMsZ0JBQWEsc0JBQWIsYUFBYTs7QUFFZixhQUFVLHlCQUFWLFVBQVU7QUFDSSxRQUFLLHlCQUFuQixVQUFVLENBQUksS0FBSzs7OztBQUlyQixZQUFTLE1BQU0sQ0FBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRzs7QUFFL0MsVUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDO0FBQ3BCLFVBQUksWUFBWSxHQUFHLEtBQUssQ0FBQztBQUN6QixVQUFJLFNBQVMsR0FBRyxJQUFJLENBQUM7QUFDckIsVUFBSSxvQkFBb0IsR0FBRyxJQUFJLENBQUM7O0FBRWhDLFVBQUkscUJBQXFCLEdBQUcsS0FBSyxDQUFDO0FBQ2xDLFVBQUksY0FBYyxHQUFHLElBQUksQ0FBQzs7QUFFMUIsVUFBSSxrQkFBa0IsR0FBRyxJQUFJLENBQUM7O0FBRTlCLDJCQUFTLFNBQVMsQ0FBQyxVQUFVLENBQUUsT0FBTyxDQUFFO0FBQ3BDLGlDQUEyQixDQUFFLFVBQVUsRUFBRTtBQUN2Qyx3QkFBZSxFQUFFLG1DQUFNLG1CQUFtQixDQUFFLElBQUksQ0FBRSxFQUFBLEVBQ3BELENBQUUsQ0FBQzs7OztBQUdQLFVBQU0sYUFBYSxHQUFHLHFCQUFTLFNBQVMsQ0FBQywwQkFBMEIsQ0FBRSxPQUFP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LEFBQUM7QUFDeEIsa0JBQU0sRUFBRSxXQUFXLENBQUMsTUFBTSxBQUFDO0FBQzNCLHdCQUFZLEVBQUUsV0FBVyxDQUFDLFlBQVksQUFBQztBQUN2QyxvQkFBUSxFQUFFLGFBQWEsQ0FBQyxRQUFRLEFBQUM7QUFDakMscUJBQVMsRUFBRSxjQUFjLENBQUMsU0FBUyxBQUFDO0FBQ3BDLHdCQUFZLEVBQUUsVUFBVSxDQUFDLFFBQVEsQUFBQyxHQUFHLENBQ3pDLENBQ1IsQ0FBQyxDQUNKOzs7Ozs7O0FBSUQsYUFBTyxFQUFFLGNBQWMsRUFBRSwwQkFBTTtBQUM1Qix3QkFBWSxHQUFHLElBQUksQ0FBQztBQUNwQixrQkFBTSxFQUFFLENBQUMsQ0FDWCxFQUFFLENBQUMsQ0FDTjs7OztBQUVjO0FBQ1osVUFBSSxFQUFFLHVCQUF1QjtBQUM3QixnQkFBVSxFQUFFLENBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxlQUFlLENBQUU7QUFDMUQsWUFBTSxFQUFOLE1BQU0sRUFDUiIsImZpbGUiOiJwYWdlLWluc3BlY3Rvci13aWRnZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHBhdHRlcm5zIGZyb20gJ2xheGFyLXBhdHRlcm5zJztcblxuaW1wb3J0IHdpcmVmbG93IGZyb20gJ3dpcmVmbG93JztcblxuaW1wb3J0IHsgdHlwZXMsIGdyYXBoLCBsYXlvdXQsIGZpbHRlckZyb21TZWxlY3Rpb24gfSBmcm9tICcuL2dyYXBoLWhlbHBlcnMnO1xuXG5jb25zdCB7XG4gIHNlbGVjdGlvbjogeyBTZWxlY3Rpb25TdG9yZSB9LFxuICBoaXN0b3J5OiB7IEhpc3RvcnlTdG9yZSB9LFxuICBsYXlvdXQ6IHsgTGF5b3V0U3RvcmUgfSxcbiAgZ3JhcGg6IHsgR3JhcGhTdG9yZSB9LFxuICBzZXR0aW5nczoge1xuICAgIGFjdGlvbnM6IHsgQ2hhbmdlTW9kZSwgTWluaW1hcFJlc2l6ZWQgfSxcbiAgICBtb2RlbDogeyBTZXR0aW5ncywgUkVBRF9PTkxZLCBSRUFEX1dSSVRFIH0sXG4gICAgU2V0dGluZ3NTdG9yZVxuICB9LFxuICBEaXNwYXRjaGVyLFxuICBjb21wb25lbnRzOiB7IEdyYXBoIH1cbn0gPSB3aXJlZmxvdztcblxuXG5mdW5jdGlvbiBjcmVhdGUoIGNvbnRleHQsIGV2ZW50QnVzLCByZWFjdFJlbmRlciApIHtcblxuICAgbGV0IHZpc2libGUgPSBmYWxzZTtcbiAgIGxldCBkb21BdmFpbGFibGUgPSBmYWxzZTtcbiAgIGxldCB2aWV3TW9kZWwgPSBudWxsO1xuICAgbGV0IHZpZXdNb2RlbENhbGN1bGF0aW9uID0gbnVsbDtcblxuICAgbGV0IHdpdGhJcnJlbGV2YW50V2lkZ2V0cyA9IGZhbHNlO1xuICAgbGV0IHdpdGhDb250YWluZXJzID0gdHJ1ZTtcblxuICAgbGV0IHB1Ymxpc2hlZFNlbGVjdGlvbiA9IG51bGw7XG5cbiAgIHBhdHRlcm5zLnJlc291cmNlcy5oYW5kbGVyRm9yKCBjb250ZXh0IClcbiAgICAgIC5yZWdpc3RlclJlc291cmNlRnJvbUZlYXR1cmUoICdwYWdlSW5mbycsIHtcbiAgICAgICAgIG9uVXBkYXRlUmVwbGFjZTogKCkgPT4gaW5pdGlhbGl6ZVZpZXdNb2RlbCggdHJ1ZSApXG4gICAgICB9ICk7XG5cblxuICAgY29uc3QgcHVibGlzaEZpbHRlciA9IHBhdHRlcm5zLnJlc291cmNlcy5yZXBsYWNlUHVibGlzaGVyRm9yRmVhdHVyZSggY29udGV4dCwgJ2ZpbHRlcicsIHtcbiAgICAgIGlzT3B0aW9uYWw6IHRydWVcbiAgIH0gKTtcblxuICAgZXZlbnRCdXMuc3Vic2NyaWJlKCBgZGlkQ2hhbmdlQXJlYVZpc2liaWxpdHkuJHtjb250ZXh0LndpZGdldC5hcmVhfWAsIChldmVudCwgbWV0YSkgPT4ge1xuICAgICAgaWYoICF2aXNpYmxlICYmIGV2ZW50LnZpc2libGUgKSB7XG4gICAgICAgICB2aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgIHJlbmRlcigpO1xuICAgICAgfVxuICAgfSApO1xuXG4gICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgIGZ1bmN0aW9uIHJlcGxhY2VGaWx0ZXIoIHNlbGVjdGlvbiwgZ3JhcGhNb2RlbCApIHtcbiAgICAgIGNvbnN0IHJlc291cmNlID0gY29udGV4dC5mZWF0dXJlcy5maWx0ZXIucmVzb3VyY2U7XG4gICAgICBpZiggIXJlc291cmNlIHx8IHNlbGVjdGlvbiA9PT0gcHVibGlzaGVkU2VsZWN0aW9uICkge1xuICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcHVibGlzaGVkU2VsZWN0aW9uID0gc2VsZWN0aW9uO1xuICAgICAgcHVibGlzaEZpbHRlciggZmlsdGVyRnJvbVNlbGVjdGlvbiggc2VsZWN0aW9uLCBncmFwaE1vZGVsICkgKTtcbiAgIH1cblxuICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICBmdW5jdGlvbiB0b2dnbGVJcnJlbGV2YW50V2lkZ2V0cygpIHtcbiAgICAgIHdpdGhJcnJlbGV2YW50V2lkZ2V0cyA9ICF3aXRoSXJyZWxldmFudFdpZGdldHM7XG4gICAgICBpbml0aWFsaXplVmlld01vZGVsKCB0cnVlICk7XG4gICB9XG5cbiAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgZnVuY3Rpb24gdG9nZ2xlQ29udGFpbmVycygpIHtcbiAgICAgIHdpdGhDb250YWluZXJzID0gIXdpdGhDb250YWluZXJzO1xuICAgICAgaW5pdGlhbGl6ZVZpZXdNb2RlbCggdHJ1ZSApO1xuICAgfVxuXG4gICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgIGZ1bmN0aW9uIGluaXRpYWxpemVWaWV3TW9kZWwoIGRvUmVzZXQgKSB7XG4gICAgICBpZiggZG9SZXNldCApIHtcbiAgICAgICAgIHZpZXdNb2RlbCA9IG51bGw7XG4gICAgICAgICBjbGVhclRpbWVvdXQoIHZpZXdNb2RlbENhbGN1bGF0aW9uICk7XG4gICAgICAgICB2aWV3TW9kZWxDYWxjdWxhdGlvbiA9IG51bGw7XG4gICAgICAgICBpZiggdmlzaWJsZSApIHtcbiAgICAgICAgICAgIHJlbmRlcigpO1xuICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiggdmlzaWJsZSApIHtcbiAgICAgICAgIHZpZXdNb2RlbENhbGN1bGF0aW9uID0gdmlld01vZGVsQ2FsY3VsYXRpb24gfHwgc2V0VGltZW91dCggKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFnZVR5cGVzID0gdHlwZXMoKTtcbiAgICAgICAgICAgIGNvbnN0IHBhZ2VJbmZvID0gY29udGV4dC5yZXNvdXJjZXMucGFnZUluZm87XG4gICAgICAgICAgICBjb25zdCBwYWdlR3JhcGggPSBncmFwaCggcGFnZUluZm8sIHsgd2l0aElycmVsZXZhbnRXaWRnZXRzLCB3aXRoQ29udGFpbmVycyB9ICk7XG4gICAgICAgICAgICBjb25zdCBkaXNwYXRjaGVyID0gbmV3IERpc3BhdGNoZXIoIHJlbmRlciApO1xuICAgICAgICAgICAgbmV3IEhpc3RvcnlTdG9yZSggZGlzcGF0Y2hlciApO1xuICAgICAgICAgICAgY29uc3QgZ3JhcGhTdG9yZSA9IG5ldyBHcmFwaFN0b3JlKCBkaXNwYXRjaGVyLCBwYWdlR3JhcGgsIHBhZ2VUeXBlcyApO1xuICAgICAgICAgICAgY29uc3QgbGF5b3V0U3RvcmUgPSBuZXcgTGF5b3V0U3RvcmUoIGRpc3BhdGNoZXIsIGdyYXBoU3RvcmUgKTtcbiAgICAgICAgICAgIGNvbnN0IHNldHRpbmdzU3RvcmUgPSBuZXcgU2V0dGluZ3NTdG9yZSggZGlzcGF0Y2hlciwgU2V0dGluZ3MoeyBtb2RlOiBSRUFEX09OTFkgfSkgKTtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvblN0b3JlID0gbmV3IFNlbGVjdGlvblN0b3JlKCBkaXNwYXRjaGVyLCBsYXlvdXRTdG9yZSwgZ3JhcGhTdG9yZSApO1xuXG4gICAgICAgICAgICB2aWV3TW9kZWwgPSB7IGdyYXBoU3RvcmUsIGxheW91dFN0b3JlLCBzZXR0aW5nc1N0b3JlLCBzZWxlY3Rpb25TdG9yZSwgZGlzcGF0Y2hlciB9O1xuICAgICAgICAgICAgcmVuZGVyKCk7XG4gICAgICAgICB9LCAyMCApO1xuICAgICAgfVxuICAgfVxuXG4gICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIGlmKCAhdmlzaWJsZSB8fCAhZG9tQXZhaWxhYmxlICkge1xuICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiggIXZpZXdNb2RlbCApIHtcbiAgICAgICAgIHJlYWN0UmVuZGVyKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BhZ2UtaW5zcGVjdG9yLXBsYWNlaG9sZGVyJz5cbiAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtY29nIGZhLXNwaW4nPjwvaT5sYXlvdXRcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgKTtcbiAgICAgICAgIGluaXRpYWxpemVWaWV3TW9kZWwoKTtcbiAgICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3Qge1xuICAgICAgICAgZ3JhcGhTdG9yZSxcbiAgICAgICAgIGxheW91dFN0b3JlLFxuICAgICAgICAgc2V0dGluZ3NTdG9yZSxcbiAgICAgICAgIHNlbGVjdGlvblN0b3JlLFxuICAgICAgICAgZGlzcGF0Y2hlclxuICAgICAgfSA9IHZpZXdNb2RlbDtcblxuICAgICAgcmVwbGFjZUZpbHRlciggc2VsZWN0aW9uU3RvcmUuc2VsZWN0aW9uLCBncmFwaFN0b3JlLmdyYXBoICk7XG5cbiAgICAgIHJlYWN0UmVuZGVyKFxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BhZ2UtaW5zcGVjdG9yLXJvdyBmb3JtLWlubGluZSc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1yaWdodCc+XG4gICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3NOYW1lPSdidG4gYnRuLWxpbmsnXG4gICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUlycmVsZXZhbnRXaWRnZXRzfVxuICAgICAgICAgICAgICAgICAgPjxpIGNsYXNzTmFtZT17J2ZhIGZhLXRvZ2dsZS0nICsgKCB3aXRoSXJyZWxldmFudFdpZGdldHMgPyAnb24nIDogJ29mZicgKSB9XG4gICAgICAgICAgICAgICAgICA+PC9pPiAmcXVvdDtTaWxlbnQmcXVvdDsgV2lkZ2V0czwvYnV0dG9uPlxuICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzTmFtZT0nYnRuIGJ0bi1saW5rJ1xuICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVDb250YWluZXJzfVxuICAgICAgICAgICAgICAgICAgPjxpIGNsYXNzTmFtZT17J2ZhIGZhLXRvZ2dsZS0nICsgKCB3aXRoQ29udGFpbmVycyA/ICdvbicgOiAnb2ZmJyApIH1cbiAgICAgICAgICAgICAgICAgID48L2k+IENvbnRhaW5lcnM8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEdyYXBoIGNsYXNzTmFtZT0nbmJlLXRoZW1lLWZ1c2Vib3gtYXBwJ1xuICAgICAgICAgICAgICAgICAgIHR5cGVzPXtncmFwaFN0b3JlLnR5cGVzfVxuICAgICAgICAgICAgICAgICAgIG1vZGVsPXtncmFwaFN0b3JlLmdyYXBofVxuICAgICAgICAgICAgICAgICAgIGxheW91dD17bGF5b3V0U3RvcmUubGF5b3V0fVxuICAgICAgICAgICAgICAgICAgIG1lYXN1cmVtZW50cz17bGF5b3V0U3RvcmUubWVhc3VyZW1lbnRzfVxuICAgICAgICAgICAgICAgICAgIHNldHRpbmdzPXtzZXR0aW5nc1N0b3JlLnNldHRpbmdzfVxuICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbj17c2VsZWN0aW9uU3RvcmUuc2VsZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgIGV2ZW50SGFuZGxlcj17ZGlzcGF0Y2hlci5kaXNwYXRjaH0gLz5cbiAgICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgIH1cblxuICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICByZXR1cm4geyBvbkRvbUF2YWlsYWJsZTogKCkgPT4ge1xuICAgICAgZG9tQXZhaWxhYmxlID0gdHJ1ZTtcbiAgICAgIHJlbmRlcigpO1xuICAgfSB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICBuYW1lOiAncGFnZS1pbnNwZWN0b3Itd2lkZ2V0JyxcbiAgIGluamVjdGlvbnM6IFsgJ2F4Q29udGV4dCcsICdheEV2ZW50QnVzJywgJ2F4UmVhY3RSZW5kZXInIF0sXG4gICBjcmVhdGVcbn07XG4iXX0=
