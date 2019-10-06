AFRAME.registerComponent('bubble_chart', {
    schema: {
        position: {type: 'vec3', default: {x:0, y:0, z:0}},
        color: {type: 'string', default: 'red'},
        size: {type: 'number', default: 1},
        datapoints: {type: 'asset'}
    },