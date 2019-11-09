update: function (oldData) {
	...
	if(data.dataPoints)
		if (data.dataPoints.constructor === ([{}]).constructor) {
			this.onDataLoaded(this, data.dataPoints, true);
		}else if(data.dataPoints.constructor === "".constructor){
			try{
				this.onDataLoaded(this, JSON.parse(data.dataPoints), true);
			}catch(e) {
				this.loader.load(data.dataPoints, this.onDataLoaded.bind(this, false));
			}
		}
}