onDataLoaded: function (file) {
        const data = this.data;
        const pos = data.position;
		
        var entity_axis = document.createElement('a-entity');
        entity_axis.setAttribute('axis',
            {
                'color': data.color,
                'position': data.position
            }
        );
        this.el.appendChild(entity_axis);
        this.el.setAttribute('id','bubble_chart');

        var datapoints = JSON.parse(file);

        for (let point of datapoints) {
            var entity = document.createElement('a-sphere');
            entity.setAttribute('position', {x: pos.x + point['x'], 
											y: pos.y + point['y'], 
											z: pos.z + point['z']});
            entity.setAttribute('color', point['color']);
            entity.setAttribute('radius', point['size']);
            entity.addEventListener('mouseenter', function () {
                this.setAttribute('scale', {x: 1.3, y: 1.3, z: 1.3});
            });
            entity.addEventListener('mouseleave', function () {
                this.setAttribute('scale', {x: 1, y: 1, z: 1});
            });
            this.el.appendChild(entity);
        }
    }
});