AFRAME.registerComponent('axis-line', {
    ...
    update: function () {
        ...
        el.setAttribute('line',
            {
            'start': {x: pos.x, y: pos.y, z: pos.z},
            'end': line_end,
            'color': data.color
            }
        );
        for (var tick = 1; tick < 10; tick++) {
            tick_start[axis] = pos[axis]+tick;
            tick_end[axis] = pos[axis]+tick;
            el.setAttribute('line__' + tick,
                {
                'start': tick_start,
                'end': tick_end,
                'color': this.data.color
                }
            );
        }
    }
});