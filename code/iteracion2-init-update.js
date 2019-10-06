	init: function () {
        var self = this;
        this.loader = new THREE.FileLoader();
    },

    update: function (oldData) {
        var self = this;
        const data = this.data;
        if (AFRAME.utils.deepEqual(oldData, data))
            return;
        if (data.datapoints && data.datapoints !== oldData.datapoints)
            this.loader.load(data.datapoints, this.onDataLoaded.bind(this));
    },