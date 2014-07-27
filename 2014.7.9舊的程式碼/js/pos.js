var map = null;

window.onload = posHtmlLocation;


function displayLocation(position) {
	var lat = position.coords.latitude;
	var lng = position.coords.longitude;

	var div = document.getElementById("location");
	div.innerHTML = "latitude = " + lat + "<br>longitude = " + lng + "<br>";

	div.innerHTML += "Accuracy = " + position.coords.accuracy + " meters accuracy<br>";
	showMap(position.coords);
}

function showMap(coords) {
	var googleLatAndLong = new google.maps.LatLng(coords.latitude, coords.longitude);
	var mapOptions = {
		zoom: 10,
		center: googleLatAndLong,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var mapDiv = document.getElementById("map");
	map = new google.maps.Map(mapDiv, mapOptions);
	
	var title = "Location";
	var content = "Latitude: " + coords.latitude + "<br>Longitude: " + coords.longitude;
	addMarker(map, googleLatAndLong, title, content);
}

function addMarker(map, latlong, title, content) {
	var markerOptions = {
		position: latlong,
		map: map,
		title: title,
		clickable: true
	};
	var marker = new google.maps.Marker(markerOptions);

	var infoWindowOptions = {
		content: content,
		position: latlong
	};

	var infoWindow = new google.maps.InfoWindow(infoWindowOptions);

	google.maps.event.addListener(marker, 'click', function() {
		infoWindow.open(map);
	});
}

function displayError(error) {
	var errorTypes = {
		0: "Unknown error",
		1: "Permission denied",
		2: "Position is not available",
		3: "Request timeout"
	};
	var errorMessage = errorTypes[error.code];
	if (error.code == 0 || error.code == 2) {
		errorMessage = errorMessage + " " + error.message;
	}
	var div = document.getElementById("location");
	div.innerHTML = errorMessage;
}

function getLocation(success) {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(success, displayError);
	}
	else {
		alert("No support geolocation.");
	}
}

function posHtmlLocation() {
	getLocation(displayLocation);
}
/*
function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(displayLocation, displayError);
	}
	else {
		alert("No support geolocation.");
	}
}
*/
