...
if(properties.type === "pie"){
	for (let point of dataPoints)
		pie_total_value += point['size'];
}

pie_angle_end = 360 * point['size'] / pie_total_value;
if(properties.pie_doughnut){
	entity = generateDoughnutSlice(...);
}else{
	entity = generateSlice(...);
}
pie_angle_start += pie_angle_end;
...