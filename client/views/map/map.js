
Template.map.rendered = function(){
	L.Icon.Default.imagePath = 'packages/leaflet/images';

	var map = L.map('map', {
		doubleClickZoom: false,
		contextmenu: true,
		contextmenuWidth: 140,
		contextmenuItems: [{
			text: 'Show coordinates',
			callback: function(event){
				console.log(event);
			}
		}]
	}).setView([45.56502536350451, -73.68392944335938], 11);

	map.on('dblclick', function(event){
		console.log(event);
	});
	map.contextmenu.addItem('-');
	map.contextmenu.addItem({
		text: 'Disconnect',
		callback: function(event){
			console.log(event);
		}
	});

	console.log(L);

	L.tileLayer.provider('OpenStreetMap.BlackAndWhite').addTo(map);
}
