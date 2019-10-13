if(properties.axis_length === 0){
	let adaptive_props = getAdaptiveAxisProperties(dataPoints);
	properties.axis_length = adaptive_props.max;
	if(properties.axis_negative)
		properties.axis_negative = adaptive_props.has_negative;
}
function getAdaptiveAxisProperties(dataPoints) {
    let max = 0;
    let has_negative = false;
    for (let point of dataPoints) {
        if(point.x < 0 || point.y < 0 || point.z < 0)
            has_negative = true;
        let point_x = Math.abs(point.x);
        let point_y = Math.abs(point.y);
        let point_z = Math.abs(point.z);
        if( point_x > max)
            max = point_x;
        if( point_y > max)
            max = point_y;
        if( point_z > max)
            max = point_z;
    }
    return {max: max, has_negative: has_negative};
}