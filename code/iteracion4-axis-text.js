...
if(axis_text){
	let axis_text = document.createElement('a-text');
	axis_text.setAttribute('position', tick_start);	
	axis_text.setAttribute('text__' + tick, {
		'value': Math.round(tick * 100) / 100,
		'width': axis_text_size,
		'color': axis_text_color,
		'xOffset': 4.5
	});
	element.appendChild(axis_text);
}
...