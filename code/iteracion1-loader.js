document.addEventListener("DOMContentLoaded", function(event) {
    var scene = document.querySelector('a-scene');
    for (let item of barPlotItems) {
        var entity = document.createElement('a-entity');
        entity.setAttribute('barplot', {
            'color': item['color'],
            'size': item['size'],
            'position': {x: item['x'] + item['size']/2, 
						 y: item['height']/2, z: item['z']}, 
            'height': item['height'],
            'type': 'cylinder'
        });
        scene.appendChild(entity);
    };
});