/*
    這個js檔案主要是放置取得感測器、手機上...等等資料的function，
    每個function可能有回傳值，兩個以上的回傳值，會以物件或陣列的方式回傳

    Google API Key:
    AIzaSyBp37T05asGoDR1Yxfs4NQ3GrvQqSBD0Os


 */

/*
    取得經緯度的資料

    Google Map :
    https://developers.google.com/maps/documentation/javascript/?hl=zh-tw
    
    要取用現在位置擇使用
    localStorage.getItem("CURRENT_LATITUDE");
    localStorage.getItem("CURRENT_LONGITUDE");
 */
/*
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
                var lat = position.coords.latitude;
                var lng = position.coords.longitude;

                if (typeof(Storage) != "undefined") {
                    localStorage.setItem("CURRENT_LATITUDE", lat);
                    localStorage.setItem("CURRENT_LONGITUDE", lng);
                } else {
                    alert("Not support web storage.");
                }
            },
            function(error) {
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        x.innerHTML = "User denied the request for Geolocation."
                        break;
                    case error.POSITION_UNAVAILABLE:
                        x.innerHTML = "Location information is unavailable."
                        break;
                    case error.TIMEOUT:
                        x.innerHTML = "The request to get user location timed out."
                        break;
                    case error.UNKNOWN_ERROR:
                        x.innerHTML = "An unknown error occurred."
                        break;
                }
            },
            {enableHighAccuracy: true, timeout: Infinity, maximumAge: 0});
    }
}
*/

/*
    取得手機的方向，x, y, z軸的數值，就是三軸加速器的意思
 */
/*
function getDeviceOrientation() {

}
*/
/*
    取得兩個經緯度之間的距離
 */
/*
function getDistance() {

}
*/

/*
    取得手機上目前的時間
 */
function getDeviceTime() {
    var device_time = new Date();
    return device_time;
}

/*
    取得目前所在地的時區資料

    $.getJSON() : 
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    
    TIME ZONE API: 
    Example
    https://maps.googleapis.com/maps/api/timezone/json?location=22.989213673366027,120.22729197123137&timestamp=1405069682.986&key=AIzaSyBp37T05asGoDR1Yxfs4NQ3GrvQqSBD0Os

    API KEY
    AIzaSyBp37T05asGoDR1Yxfs4NQ3GrvQqSBD0Os

    RETURN DATA FORM
    {
       "dstOffset" : 0,
       "rawOffset" : 28800,
       "status" : "OK",
       "timeZoneId" : "Asia/Taipei",
       "timeZoneName" : "Taipei Standard Time"
    }

    LOCALSTORAGE DATA SET AND GET
    SET
    localStorage.setItem('CURRENT_TIME_ZONE', JSON.stringify(data));

    GET
    var localData = JSON.parse(localStorage.getItme(CURRENT_TIME_ZONE));

 */
function getTimeZone() {
    var lat = localStorage.CURRENT_LATITUDE;
    var lng = localStorage.CURRENT_LONGITUDE;
    var timestamp = new Date().getTime() / 1000;

    var google_time_zone_key = "AIzaSyBp37T05asGoDR1Yxfs4NQ3GrvQqSBD0Os";
    var google_time_zone_api = "https://maps.googleapis.com/maps/api/timezone/json";

    var timeZoneSrc = google_time_zone_api + "?location=" + lat + "," + lng + "&timestamp=" + timestamp + "&key=" + google_time_zone_key;

    $.getJSON(timeZoneSrc, function(data) {
        var dataToStore = JSON.stringify(data);
        localStorage.setItem('CURRENT_TIME_ZONE', dataToStore);
    });
}

/*
    取得手機行事曆上的資料
 */
/*
function getSchedule() {

}
*/
/*
    取得黑名單的資料（來源：自己設定的黑名單、或手機內部的）
 */
/*
function getBlackList() {

}
*/
/*
    取得Google Place API回傳的資料

    Google Place API:
    https://developers.google.com/places/documentation/?hl=zh-tw

    Google Map API:
    https://developers.google.com/maps/documentation/javascript/?hl=zh-tw

    Need including URL:https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places

    You can find types on: https://developers.google.com/places/documentation/supported_types?hl=zh-tw

    Limitation: Radius < 50000 meters.

    If match the target place, localstorage set true for user.
 */
function getGooglePlace(type, radius, Div_name) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            initialize(position, type, radius, Div_name);
        }, showError);
    } else {
        alert("No support geolocation.");
    }
}

function initialize(position, type, radius, Div_name) {
    var pyrmont = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    var request = {
        location: pyrmont,
        radius: radius,
        types: [type]
    };
    var service = new google.maps.places.PlacesService(getElementById(Div_name));
    service.nearbySearch(request, callback);
}

function callback(results, status) {
    var check;
    if (status != google.maps.places.PlacesServiceStatus.ZERO_RESULTS) {
        if (typeof(Storage) !== "undefined") {
            localStorage.setItem("check", "false");
        }
    } else {
        if (typeof(Storage) !== "undefined") {
            localStorage.setItem("check", "true");
        }
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
