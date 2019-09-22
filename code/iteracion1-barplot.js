AFRAME.registerComponent('barplot', {
    schema: {
        position: {type: 'vec3', default: {x:0, y:0, z:0}},
        color: {type: 'string', default: 'red'},
        height: {type: 'number', default: 1},
        size: {type: 'number', default: 1},
        type: {type: 'string', default: 'box'} //two types: box and cilinder
    },

    update: function () {
        var self = this;
        if(self.data.type === 'cylinder'){
            self.cylinder = document.createElement('a-cylinder');
            self.cylinder.setAttribute('position', self.data.position);
            self.cylinder.setAttribute('color', self.data.color);
            self.cylinder.setAttribute('radius', self.data.size/2);
            self.cylinder.setAttribute('height', self.data.height);
            this.el.appendChild(self.cylinder);
        }

    }
});