function generateBubble(point) {
    let entity = document.createElement('a-sphere');
    entity.setAttribute('position', {x: point['x'], y: point['y'], z: point['z']});
    entity.setAttribute('color', point['color']);
    entity.setAttribute('radius', point['size']);
    return entity;
}