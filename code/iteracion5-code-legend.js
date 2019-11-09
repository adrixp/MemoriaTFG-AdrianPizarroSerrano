if(show_legend_condition && dataPoints.length > 0){
	legend_properties = getLegendProperties(dataPoints, properties, element);
	legend_title = generateLegendTitle(legend_properties);
	legend_sel_text = generateLegendSelText(legend_properties, dataPoints[0], properties);
	legend_all_text = generateLegendAllText(legend_properties, getLegendText(dataPoints, dataPoints[0], properties));
	element.appendChild(legend_title);
	element.appendChild(legend_sel_text);
	element.appendChild(legend_all_text);
}