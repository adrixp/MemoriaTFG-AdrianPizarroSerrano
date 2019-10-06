var bubble_chart       = {'color': 'green', 'size': 1, 'position': {x: 0, y: 0, z: 0}, 'datapoints': 'data.json'};
var box_bar_chart      = {'color': 'red', 'size': 1, 'position': {x: 0, y: 0, z: 0}, 'datapoints': 'data.json', 'type':'box'};
var cylinder_bar_chart = {'color': 'orange', 'size': 1, 'position': {x: 0, y: 0, z: 0}, 'datapoints': 'data.json', 'type':'cylinder'};
var line_chart         = {'color': 'black', 'size': 1, 'position': {x: 0, y: 0, z: 0}, 'datapoints': 'data.json'};
function changeChart() {
	...
	var entity = document.createElement('a-entity');
	if(selectedChart === "bubble_chart")
		entity.setAttribute(selectedChart, bubble_chart);
	if(selectedChart === "box_bar_chart")
		entity.setAttribute("bar_chart", box_bar_chart);
	if(selectedChart === "cylinder_bar_chart")
		entity.setAttribute("bar_chart", cylinder_bar_chart);
	if(selectedChart === "line_chart")
		entity.setAttribute(selectedChart, line_chart);
	parent.appendChild(entity);
}
document.getElementById("selectChart").addEventListener("change", changeChart);