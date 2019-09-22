AFRAME.registerComponent('axis', {
    schema: {
        color: {type: 'string', default: 'red'}
    },
    update: function () {
        var el = this.el
        el.setAttribute('line__x', {
			'start': {x: 0, y: 0, z: 0},
            'end': {x: 10, y: 0, z: 0},
            'color': this.data.color});
        for (var tick = 1; tick < 10; tick++) {
            el.setAttribute('line__x' + tick, {
				'start': {x: tick, y: -0.2, z: 0},
                'end': {x: tick, y: 0.2, z: 0},
                'color': this.data.color});
        };
        el.setAttribute('line__y', {
			'start': {x: 0, y: 0, z: 0},
            'end': {x: 0, y: 10, z: 0},
            'color': this.data.color});
        for (var tick = 1; tick < 10; tick++) {
            el.setAttribute('line__y' + tick, {
				'start': {y: tick, z: -0.2, x: 0},
                'end': {y: tick, z: 0.2, x: 0},
                'color': this.data.color});
        };
        el.setAttribute('line__z', {
			'start': {x: 0, y: 0, z: 0},
            'end': {x: 0, y: 0, z: 10},
            'color': this.data.color});
        for (var tick = 1; tick < 10; tick++) {
            el.setAttribute('line__z' + tick, {
				'start': {z: tick, x: -0.2, y: 0},
                'end': {z: tick, x: 0.2, y: 0},
                'color': this.data.color});
        };
    }
});