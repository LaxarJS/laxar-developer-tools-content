export const metaEvents = [
   {
      action: 'subscribe',
      event: 'takeActionRequest.doStuff',
      source: 'widget.myPopupWidget',
      cycleId: 1,
      time: '2015-01-01T00:00:02.001Z'
   },
   {
      action: 'subscribe',
      event: 'takeActionRequest.doStuff',
      source: 'widget.myOtherWidget',
      cycleId: 1,
      time: '2015-01-01T00:00:02.001Z'
   },
   {
      action: 'subscribe',
      event: 'didNavigate',
      source: 'widget.someWidget',
      cycleId: 2,
      time: '2015-01-01T00:00:02.001Z'
   },
   {
      action: 'publish',
      event: 'didNavigate.here',
      source: 'axFlowController',
      cycleId: 3,
      time: '2015-01-01T00:00:03.001Z',
      eventObject: { target: 'here', data: {} }
   },
   {
      action: 'publish',
      event: 'takeActionRequest.doStuff',
      source: 'widget.myButtonWidget',
      cycleId: 4,
      time: '2015-01-01T00:00:04.001Z',
      eventObject: { action: 'here' }
   },
   {
      action: 'deliver',
      event: 'didNavigate.here',
      source: 'axFlowController',
      target: 'widget.someWidget',
      cycleId: 3,
      time: '2015-01-01T00:00:03.002Z'
   },
   {
      action: 'deliver',
      event: 'takeActionRequest.doStuff',
      source: 'widget.myButtonWidget',
      target: 'widget.myPopupWidget',
      cycleId: 4,
      time: '2015-01-01T00:00:04.002Z'
   },
   {
      action: 'deliver',
      event: 'takeActionRequest.doStuff',
      source: 'widget.myButtonWidget',
      target: 'widget.myOtherWidget',
      cycleId: 4,
      time: '2015-01-01T00:00:04.003Z'
   },
   {
      action: 'unsubscribe',
      event: 'takeActionRequest.doStuff',
      source: 'widget.myPopupWidget',
      cycleId: 5,
      time: '2015-01-01T00:00:05.001Z'
   },
   {
      action: 'unsubscribe',
      event: 'takeActionRequest.doStuff',
      source: 'widget.myOtherWidget',
      cycleId: 5,
      time: '2015-01-01T00:00:05.001Z'
   }
];

export const otherMetaEvents = [
   {
      action: 'subscribe',
      event: 'takeActionRequest.doStuff',
      source: 'widget.myPopupWidget',
      cycleId: 1,
      time: '2015-01-01T00:00:02.001Z'
   },
   {
      action: 'subscribe',
      event: 'takeActionRequest.doStuff',
      source: 'widget.myOtherWidget',
      cycleId: 1,
      time: '2015-01-01T00:00:02.001Z'
   },
   {
      action: 'subscribe',
      event: 'didNavigate',
      source: 'widget.someWidget',
      cycleId: 2,
      time: '2015-01-01T00:00:02.001Z'
   },
   {
      action: 'publish',
      event: 'didNavigate.here',
      source: 'axFlowController',
      cycleId: 3,
      time: '2015-01-01T00:00:03.001Z',
      eventObject: { target: 'here', data: {} }
   },
   {
      action: 'publish',
      event: 'takeActionRequest.doStuff',
      source: 'widget.myButtonWidget',
      cycleId: 4,
      time: '2015-01-01T00:00:04.001Z',
      eventObject: { action: 'here' }
   },
   {
      action: 'deliver',
      event: 'didNavigate.here',
      source: 'axFlowController',
      target: 'widget.someWidget',
      cycleId: 3,
      time: '2015-01-01T00:00:03.002Z'
   },
   {
      action: 'deliver',
      event: 'takeActionRequest.doStuff',
      source: 'widget.myButtonWidget',
      target: 'widget.myPopupWidget',
      cycleId: 4,
      time: '2015-01-01T00:00:04.002Z'
   },
   {
      action: 'deliver',
      event: 'takeActionRequest.doStuff',
      source: 'widget.myButtonWidget',
      target: 'widget.myOtherWidget',
      cycleId: 4,
      time: '2015-01-01T00:00:04.003Z'
   },
   {
      action: 'publish',
      event: 'takeActionRequest.doStuff',
      source: 'widget.myButtonWidget',
      cycleId: 5,
      time: '2015-01-01T00:00:05.001Z',
      eventObject: { action: 'here' }
   },
   {
      action: 'deliver',
      event: 'takeActionRequest.doStuff',
      source: 'widget.myButtonWidget',
      target: 'widget.myPopupWidget',
      cycleId: 6,
      time: '2015-01-01T00:00:06.001Z'
   },
   {
      action: 'deliver',
      event: 'takeActionRequest.doStuff',
      source: 'widget.myButtonWidget',
      target: 'widget.myOtherWidget',
      cycleId: 6,
      time: '2015-01-01T00:00:06.002Z'
   },
   {
      action: 'unsubscribe',
      event: 'takeActionRequest.doStuff',
      source: 'widget.myPopupWidget',
      cycleId: 7,
      time: '2015-01-01T00:00:07.001Z'
   },
   {
      action: 'unsubscribe',
      event: 'takeActionRequest.doStuff',
      source: 'widget.myOtherWidget',
      cycleId: 7,
      time: '2015-01-01T00:00:07.002Z'
   }
];
