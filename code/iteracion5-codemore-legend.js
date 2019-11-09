function generateLegendTitle(legendProperties) {
    let entity = document.createElement('a-plane');
    entity.setAttribute('position', legendProperties.position_tit);
    entity.setAttribute('rotation', legendProperties.rotation);
    entity.setAttribute('height', '0.5');
    entity.setAttribute('width', legendProperties.width);
    entity.setAttribute('color', 'white');
    entity.setAttribute('text__title', {
        'value': legendProperties.title,
        'align': 'center',
        'width': '8',
        'color': 'black'
    });
    return entity;
}