function generatePopUp(point, properties) {
    ...
    let entity = document.createElement('a-plane');
    entity.setAttribute('position', {x: point['x'], y: point['y'], z: point['z']});
    entity.setAttribute('height', '2');
    entity.setAttribute('width', width);
    entity.setAttribute('color', 'white');
    entity.setAttribute('text', {
        'value': 'DataPoint:\n\n' + text,
        'align': 'center',
        'width': 6,
        'color': 'black'
    });
    ...
}