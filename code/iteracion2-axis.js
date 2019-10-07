AFRAME.registerComponent('axis', {
    schema: {
        position: {type: 'vec3', default: {x:0, y:0, z:0}},
        color: {type: 'string', default: 'red'}
    },
    update: function () {
        const data = this.data;
        for (let axis of ['x', 'y', 'z']) {
            var axis_line = document.createElement('a-entity');
            axis_line.setAttribute('axis-line',{
                    'axis': axis,
                    'color': data.color,
                    'position': data.position}
            );
            this.el.appendChild(axis_line);
        }
    }
});
AFRAME.registerComponent('axis-line', {
    ...
    update: function () {
        ...
        el.setAttribute('line',{
            'start': {x: pos.x, y: pos.y, z: pos.z},
            'end': line_end,
            'color': data.color}
        );
        for (var tick = 1; tick < 10; tick++) {
            ...
            el.setAttribute('line__' + tick,{
                'start': tick_start,
                'end': tick_end,
                'color': this.data.color}
            );
        }
    }
});