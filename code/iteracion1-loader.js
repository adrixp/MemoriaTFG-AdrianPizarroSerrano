document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    var el = document.querySelector('#plot');
    el.emit('anEvent');

    var scene = document.querySelector('a-scene');

    for (let item of barPlotItems) {
        console.log(item);
        var entity = document.createElement('a-entity');
        entity.setAttribute('barplot', {
            'color': item['color'],
            'size': item['size'],
			//centering graphs
            'position': {
						x: item['x'] + item['size']/2, 
						y: item['height']/2, z: item['z']
						}, 
            'height': item['height'],
            'type': 'cylinder'
        });
        scene.appendChild(entity);
    };
});