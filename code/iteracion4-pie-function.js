function generateSlice(point, theta_start, theta_length, radius) {
    let entity = document.createElement('a-cylinder');
    entity.setAttribute('color', point['color']);
    entity.setAttribute('theta-start', theta_start);
    entity.setAttribute('theta-length', theta_length);
    entity.setAttribute('side', 'double');
    entity.setAttribute('radius', radius);
    return entity;
}