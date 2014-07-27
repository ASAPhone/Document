window.onload = displayZoneTime;

function getJsonData(position)
{
	var lat = position.coords.latitude;
	var lng = position.coords.longitude;

	var timestamp = new Date().getTime() / 1000;
	
	var google_api_key = "AIzaSyBp37T05asGoDR1Yxfs4NQ3GrvQqSBD0Os";
	var google_api = "https://maps.googleapis.com/maps/api/timezone/json";

	var urlText = google_api + "?location=" + lat + "," + lng + "&timestamp=" + timestamp + "&key=" + google_api_key;
	
	$.getJSON(urlText, getZoneTime);
}

/* 	var divTz = document.getElementById("tzDiv");
	divTz.innerHTML = "dstOffset: " + data.dstOffset + "<br>" +
					  "rawOffset: " + data.rawOffset + "<br>" +
					  "status: " + data.status + "<br>" +
					  "timeZoneId: " + data.timeZoneId + "<br>" +
					  "timeZoneName: " + data.timeZoneName; */

function getZoneTime(data)
{
	var divTz = document.getElementById("tzDiv");
	
	var currentTimeStamp = new Date().getTime() / 1000;
	var newTimeStamp = currentTimeStamp + data.dstOffset + data.rawOffset;
	
	var unixTimestamp = new Date(newTimeStamp * 1000);
	var commonTime = unixTimestamp.toUTCString();
	
	divTz.innerHTML = commonTime;
}

function displayZoneTime() {
	getLocation(getJsonData);
}

/*
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

function displayZoneTime() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(getJsonData, displayError);
	}
	else {
		alert("No support geolocation.");
	}
}
*/
