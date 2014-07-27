function BatteryAutoSet(){
	if(battery.charging == true){
		setGps(true);
		setPowerSaving(false);
		setScreenBrightness(0.95);
		setVibration(true);
	}
	else{
		if(battery.level < 0.15){
			sSetScreenBrightness(0.3);
			setVibration(false);
			setPowerSaving(true);
		}
		else{
			//do nothing
		}
	}

/**
 *This is a JS code to change screen light by detecting ambient light.
 */
function Auto_ScreenLight(ambient_event) {
    //ambientLightEventListener();
    /*
    var ambientValue = localStorage.getItem("ABL_value");
    if (ambientValue < 15) {
        SetScreenAutoBrightness(true);
    }*/
    if (ambient_event.value < 15) {
        SetScreenAutoBrightness(true);
    } else {
        SetScreenAutoBrightness(false);
    }
}

/**
*   This is a JS code to change device mode by detecting location.

    https://developers.google.com/places/documentation/?hl=zh-tw

    Google Map API:
    https://developers.google.com/maps/documentation/javascript/?hl=zh-tw

    Need including URL:https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places

    You can find types on: https://developers.google.com/places/documentation/supported_types?hl=zh-tw

    Limitation: Radius < 50000 meters.
*/
<<<<<<< HEAD


function getGooglePlaace(type, radius, keywords){
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
            initialize(position, type, radius, keywords);
=======
function getGooglePlaace(type, radius) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            initialize(position, type, radius);
>>>>>>> origin/master
        }, showError);
    } else {
        alert("No support geolocation.");
    }
}

<<<<<<< HEAD
function initialize(position,type,radius,keywords) {
    var pyrmont = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
=======
function initialize(position, type, radius) {
    var pyrmont = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
>>>>>>> origin/master

    var request = {
        keyword: keywords,
        location: pyrmont,
        radius: radius,
        types: [type]
    };
    var service = new google.maps.places.PlacesService(document.getElementById("resultReveal"));
    nearbySearch(request, callback);
}

function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        setVibration(true);
        setSound(0);
    }
}

function showError(error) {
    switch (error.code) {
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

/*
 * This is a JS code to limit phone call when speed exceed 20 km/h.
 */
function Auto_SpeedLimited() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(SpeedShow, showError);
    } else {
        alert("Something is Error on geolocation.");
    }

    function SpeedShow(position) {
        var speed = position.coords.speed;
        if (speed > 5.55555556) {
            SetPhoneCallLimited(true);
        } else {
            SetPhoneCallLimited(false);
        }
    }

    function showError(error) {
        switch (error.code) {
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
}

/**
 * This is a JS file to change system time by detecting time zone.
 */
function Auto_Ch_SYSTime() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getTimestamps, showError);
    } else {
        alert("Something is Error on geolocation.");
    }

<<<<<<< HEAD
function Auto_Ch_SYSTime(){
	if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getTimestamps,showError);
	}
	else{
		alert("Something is Error on geolocation.");
	}
	
	function getTimestamps(position){
		var new_time = new Date(position.timestamp);
        alert(new Date(new_time));
		setDeviceTime(new_time);
	}
	
	
	function showError(error) {
        switch(error.code) {
=======
    function getTimestamps(position) {
        var new_time = new Date(position.timestamp);
        setDeviceTime(new_time);
    }

    function showError(error) {
        switch (error.code) {
>>>>>>> origin/master
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
}
