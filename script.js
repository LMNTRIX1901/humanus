

function showmap()
{
	return
	// The location of Uluru
	// 49.70500453712185, 20.41729757648117
	const uluru = { lat: 49.70500453712185, lng: 20.41729757648117 };
	// The map, centered at Uluru
	const map = new google.maps.Map(document.getElementById('google_maps'), {
		zoom: 4,
		center: uluru,
	});
	// The marker, positioned at Uluru
	const marker = new google.maps.Marker({
		position: uluru,
		map: map,
	});
}