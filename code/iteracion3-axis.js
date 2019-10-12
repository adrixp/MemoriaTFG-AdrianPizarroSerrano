function generateAxis(element) {
    for (let axis of ['x', 'y', 'z']) {
        ...
        let axis_line = document.createElement('a-entity');
        axis_line.setAttribute('line', {
            'start': {x: 0, y: 0, z: 0},
            'end':   line_end,
            'color': 'red'
        });

        for (let tick = 1; tick <= 10; tick++) {
            ...
            axis_line.setAttribute('line__' + tick, {
                'start': tick_start,
                'end':   tick_end,
                'color': 'red'
            });
        }
        element.appendChild(axis_line);
    }
}