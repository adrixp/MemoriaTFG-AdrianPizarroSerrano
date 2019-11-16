function generateTotemSlice(properties, entity_id_list, dataPoints_path) {
    let entity = document.createElement('a-plane');
    ...
    entity.addEventListener('click', function () {
        let entity_list = entity_id_list.split(',');
        for(let id of entity_list){
            let myChart = document.getElementById(id);
            let data = myChart.getAttribute("charts");
            data.dataPoints = dataPoints_path;
            myChart.setAttribute('charts', data);
        }
    });
    return entity;
}

function generateTotem(properties, element) {
    ...
    for(let myDataPoints in dataPoints_list){
        ...
        generateTotemSlice(dataProperties, properties.entity_id_list, 
				dataPoints_list[myDataPoints]);
    }

}