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
document.getElementById("selectChart")
		.addEventListener("change", changeChart);