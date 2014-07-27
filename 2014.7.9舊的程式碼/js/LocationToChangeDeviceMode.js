/**
 * This is a JS file to set mode on a specification lat,lng.
 * Parameter "situation" is Cases. 
 * SetVibration.js and SetMuteMode.js needed.
 * every 5 second check again.
 */

function LTC_DeviceMode(tar_coord,situation){
	if(navigator.geolocation){
		setInterval(navigator.geolocation.getCurrentPosition(checkPosition(tar_coord,situation),showError),5000);
	}
	else{
		alert("Your device or browser is not surpport GPS.");
	}
}

function checkPosition(tar_coord,situation,position) {	
    if(computeDistance(position.coooeds,tar_coord) < 0.02){
    	switch(situation){
        case 0:
        SetSound(0);
        SetVibration(false);
    	break;
        case 1:
    	SetSound(0);
    	SetVibration(true);
    	break;
        case 2:
    	SetVibration(false);
    	SetSound(15);
    	break;
    }
    }
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
}

function computeDistance(startCoords, destCoords) {
	var startLatRads = degreesToRadians(startCoords.latitude);
	var startLongRads = degreesToRadians(startCoords.longitude);
	var destLatRads = degreesToRadians(destCoords.latitude);
	var destLongRads = degreesToRadians(destCoords.longitude);

	var Radius = 6371; // radius of the Earth in km
	var distance = Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) + 
					Math.cos(startLatRads) * Math.cos(destLatRads) *
					Math.cos(startLongRads - destLongRads)) * Radius;

	return distance;
}