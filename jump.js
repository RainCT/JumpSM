jsPlumb.bind('ready', function() {
  console.log('Hi');
  MainApplication();
});

function MainApplication() {
  jsPlumb.Defaults.Endpoints = [ [ 'Dot', { radius: 4 } ] ];
  jsPlumb.Defaults.ConnectionOverlays = [
    [ 'Arrow', { location: 1, id: 'arrow', length: 14, foldback: 0.8 } ],
    [ 'Label', { label: 'FOO', id: 'label', cssClass: 'sLabel' } ],
  ];

  jsPlumb.connect({
    source: 'state1',
    target: 'state1',
    connector: [ 'StateMachine' ],
    anchor: 'Continuous',
  });
  jsPlumb.connect({
    source: 'state1', //jsPlumb.addEndpoint('state1'),
    target: 'state2', //jsPlumb.addEndpoint('state2')
    connector: [ 'StateMachine' ],
    anchor: 'Continuous',
  });
  jsPlumb.draggable($('.state'), {
    containment: 'parent'
  });
}

// Note: use jsPlumb.doWhileSuspended for bulk operations.
