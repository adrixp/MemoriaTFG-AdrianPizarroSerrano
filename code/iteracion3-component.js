AFRAME.registerComponent('charts', {
    schema: {
        type: {type: 'string', default: 'bubble'},
        dataPoints: {type: 'asset'}
    },
    ....
    onDataLoaded: function (file) {
        let dataPoints = JSON.parse(file);
        const data = this.data;
        generateAxis(this.el);
        for (let point of dataPoints) {
            let entity;
            if(data.type === "bar"){
                entity = generateBar(point);
            }else if(data.type === "cylinder"){
                entity = generateCylinder(point);
            }else{
                entity = generateBubble(point);
            }
            ...
            this.el.appendChild(entity);
        }
    }
});