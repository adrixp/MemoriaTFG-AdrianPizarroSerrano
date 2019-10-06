AFRAME.registerComponent('axis', {
    schema: {
        position: {type: 'vec3', default: {x:0, y:0, z:0}},
        color: {type: 'string', default: 'red'}
    },
    update: function () {
        const data = this.data;
        for (let axis of ['x', 'y', 'z']) {
            var axis_line = document.createElement('a-entity');
            axis_line.setAttribute('axis-line',
                {
                    'axis': axis,
                    'color': data.color,
                    'position': data.position
                }
            );
            this.el.appendChild(axis_line);
        }
    }
});