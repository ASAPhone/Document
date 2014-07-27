var map = NULL;

function demoLocation(lat, lng) {
    //show Map
    var googleLatLng = new google.maps.LatLng(lat, lng);
    var mapOptions = {
        zoom: 13,
        center: googleLatLng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("location"), mapOptions);

    //add Marker
    var markerOptions = {
        position: googleLatLng,
        map: map,
        title: "Location",
        clickable: true
    };
    var marker = new google.maps.Marker(markerOptions);
}

function demoTime() {
    var t = new Date();
    document.getElementById("timeDiv").innerHTML = "手機上的系統時間：<br>" + t;
}

function demoTimeZone(lat, lng, zone) {
    var google_api_time_stamp = new Date().getTime() / 1000;

    var google_api_key = "AIzaSyBp37T05asGoDR1Yxfs4NQ3GrvQqSBD0Os";
    var google_api = "https://maps.googleapis.com/maps/api/timezone/json";

    var time_zone_json_url = google_api + "?location=" + lat + "," + lng + "&timestamp=" + google_api_time_stamp + "&key=" + google_api_key;

    $.getJSON(time_zone_json_url, function(data) {
        var current_time_stamp = new Date().getTime() / 1000;
        var new_time_stamp = current_time_stamp + data.dstOffset + data.rawOffset;

        var unix_time_stamp = new Date(new_time_stamp * 1000);
        var common_time = unix_time_stamp.toUTCString();

        document.getElementById("timeZoneDiv").innerHTML = common_time;
    });
}

function displayAll(data) {
    var divInfo = document.getElementById("info");
    var currentNum = sessionStorage.clickcount - 1;

    divInfo.innerHTML = data.demoData[currentNum].dataId + "_" + data.demoData[currentNum].nationalName +
        "_" + data.demoData[currentNum].locationName +
        "<br>(" + data.demoData[currentNum].latitude +
        ", " + data.demoData[currentNum].longitude + ")";

    var lat = data.demoData[currentNum].latitude;
    var lng = data.demoData[currentNum].longitude;
    var zone = data.demoData[currentNum].locationName;

    demoTime();
    demoLocation(lat, lng);
    demoTimeZone(lat, lng, zone);
}

function demo() {
    if (sessionStorage.clickcount < 14) {
        sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
    } else {
        sessionStorage.clickcount = 1;
    }

    $.getJSON("/json/locationData.json", displayAll);
}

function reloadPage() {
    if (sessionStorage.clickcount) {
        sessionStorage.clickcount = 0;
    } else {
        sessionStorage.clickcount = 0;
    }
    window.location.reload();
}
