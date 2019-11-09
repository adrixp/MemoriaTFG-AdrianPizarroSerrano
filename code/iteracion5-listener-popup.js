 entity.addEventListener('mouseenter', function () {
	this.setAttribute('scale', {x: 1.3, y: 1.3, z: 1.3});
	if(show_popup_condition){
		popUp = generatePopUp(point, properties);
		element.appendChild(popUp);
	}
	...
});

entity.addEventListener('mouseleave', function () {
	this.setAttribute('scale', {x: 1, y: 1, z: 1});
	if(show_popup_condition){
		element.removeChild(popUp);
	}
});