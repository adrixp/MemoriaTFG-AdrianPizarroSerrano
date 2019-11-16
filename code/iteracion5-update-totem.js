update: function (oldData) {
	if(data.dataPoints) {
	...
	}else if(data.type === "totem"){
		generateTotem(data, this.el);
	}
}