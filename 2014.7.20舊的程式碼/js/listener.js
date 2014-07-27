/*
    listener.js
    放置需要及時知道的資訊的監看式，同時也是背景執行時的function
 */

/*
    監看電池資訊
 */
function batteryEventListener() {
    var battery = navigator.battery || navigator.webkitBattery || navigator.mozBattery;

    function BatteryEventListener() {
        battery.addEventListener("chargingchange", function(e) {
            console.warn("Battery charge change: ", battery.charging);
            BatteryAutoSet();
        }, false);
        battery.addEventListener("levelchange", function(e) {
            console.warn("Battery level change: ", battery.level);
            BatteryAutoSet();
        }, false);
    }
}

/*
    監看目前位置
 */
var watchId = null;

function locationEventListener() {
    if (navigator.geolocation) {
        watchId = navigator.geolocation.watchPosition(function(position) {
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
            }, {
                enableHighAccuracy: true,
                timeout: Infinity,
                maximumAge: 0
            });
    } else {
        alert("Not support geolocation");
    }
}

/*
    監看前一個點與現在的點的距離，主要是用來判斷是否在什麼地方。
    例如：電影院在(a, b)，那偵測的經緯度不可能精準到(a, b)，所以只要在一個誤差範圍內，就判定為在電影院
 */
function distanceEventListener() {

}

/*
    監看手機光源感測器的資訊
 */
function ambientLightEventListener() {
    if (!('ondevicelight' in window)) {
        alert("Your device is unsupported Light detect sensor.");
    } else {
        window.addEventListener('devicelight', function(event) {
            var ABL_value;

            if (typeof(Storage) != "undefined") {
                var temp = event.value;
                localStorage.setItem("ABL_value", "temp");
            } else {
                alert("localStorage is Error.");
            }
        });
    }
}

/*
    堅看目前手機的移動速度
*/
function deviceSpeedListener() {

}
