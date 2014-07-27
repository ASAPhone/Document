/**
 * This is a Fake data setting below.
 * Follow the rules to make your set JS become Fake data.
 */

/*
//Fake Navigator
function MyNavigator() {
    this.mozSettings = {
        'createLock': function() {
            return this;
        },
        'set': function(objects) {
            var keys = Object.keys(objects);
            var keys_value;
            for (var i = 0; i < keys.length; i++) {
                keys_value = objects[keys[i]];
            }
            if (keys_value) {
                window.alert("Setting changed");
            } else {
                window.alert("Setting not changed");
            }
            return this;
        }
    };
    this.mozTime = {
        'set': function(objects) {
            var keys = Object.keys(objects);
            var keys_value;
            for (var i = 0; i < keys.length; i++) {
                keys_value = objects[keys[i]];
            }
            if (keys_value) {
                alert("Setting changed");
            } else {
                alert("Setting not changed");
            }
            return this;
        }
    };
    this.onsuccess = null;
    this.onerror = null;

    return this;
}

Navigator = new MyNavigator(); //Navigator is now a whole range object.
*/

/*
    開啓或關閉wifi功能
    */
function setWifi(check) {
    var lock = Navigator.mozSettings.createLock();
    var result = lock.set({
        'wifi.enabled': check
    });

    result.onsuccess = function() {
        console.log("the settings has been changed");
        alert("success wifi");
    };

    result.onerror = function() {
        console.log("An error occure, the settings remain unchanged");
        alert("error wifi");
    };

}

/*
開啓或關閉GPS裝置
*/
function setGps(check) {
    var lock = Navigator.mozSettings.createLock();
    var result = lock.set({
        'geolocation.enabled': check
    });

    result.onsuccess = function() {
        console.log("the settings has been changed");
        alert("success gps");
    };

    result.onerror = function() {
        console.log("An error occure, the settings remain unchanged");
        alert("error gps");
    };
}

/*
開啓或關閉行動上網功能
*/
function setWap(check) {
    var lock = Navigator.mozSettings.createLock();
    var result = lock.set({
        'ril.data.enabled': check
    });

    result.onsuccess = function() {
        console.log("the settings has been changed");
        alert("success wap");
    };

    result.onerror = function() {
        console.log("An error occure, the settings remain unchanged");
        alert("error wap");
    };
}

/*
改變手機目前時間，此部分就是時間改為目前偵測到的時區的時間
*/
function setDeviceTime(time) {
    Navigator.mozTime.set(time);
}

/*
設定螢幕的亮度
*/
function setScreenBrightness(BrightValue) {
    var lock = Navigator.mozSettings.createLock();
    var result = lock.set({
        'screen.brightness': BrightValue
    });

    result.onsuccess = function() {
        console.log("the settings has been changed");
        alert("success screen brightness");
    };

    result.onerror = function() {
        console.log("An error occure, the settings remain unchanged");
        alert("error screen brightness");
    };
}

/*
開啓或關閉藍牙功能
*/
function setBluetooth(check) {
    var lock = Navigator.mozSettings.createLock();
    var result = lock.set({
        'bluetooth.enabled': check
    });

    result.onsuccess = function() {
        console.log("the settings has been changed");
        alert("success bluetooth");
    };

    result.onerror = function() {
        console.log("An error occure, the settings remain unchanged");
        alert("error bluetooth");
    };
}

/*
這function可能會更改，因為不知道Firefox os的手機是否有區分三種聲音：鈴聲、鈴聲、遊戲影片等聲音（除了前兩個）
*/
function setSound(SDvalue) {
    var lock = Navigator.mozSettings.createLock();
    var result = lock.set({
        'audio.volume.dtmf': SDvalue,
        'audio.volume.content': SDvalue,
        'audio.volume.notification': SDvalue,
        'audio.volume.tts': SDvalue
    });

    result.onsuccess = function() {
        console.log("the settings has been changed");
        alert("success sound");
    };

    result.onerror = function() {
        console.log("An error occure, the settings remain unchanged");
        alert("error sound");
    };
}

/*
開啓或關閉震動
*/
function setVibration(check) {
    var lock = Navigator.mozSettings.createLock();
    var result = lock.set({
        'vibration.enabled': check
    });

    result.onsuccess = function() {
        console.log("the settings has been changed");
        alert("success vibration");
    };

    result.onerror = function() {
        console.log("An error occure, the settings remain unchanged");
        alert("error vibration");
    };
}

/*
開啟省電模式
*/
function setPowerSaving(check) {
    var lock = Navigator.mozSettings.createLock();
    var result = lock.set({
        'powersave.enabled': check
    });

    result.onsuccess = function() {
        console.log("the settings has been changed");
        alert("success powersave");
    };

    result.onerror = function() {
        console.log("An error occure, the settings remain unchanged");
        alert("error powersave");
    };
}

function SetScreenAutoBrightness(check) {
    var lock = Navigator.mozSettings.createLock();
    var result = lock.set({
        'screen.automatic-brightness': check
    });

    result.onsuccess = function() {
        console.log("the settings has been changed");
        alert("success auto brightness");
    };

    result.onerror = function() {
        console.log("An error occure, the settings remain unchanged");
        alert("error auto brightness");
    };
}

function SetPhoneCallLimited(check) {
    var lock = Navigator.mozSettings.createLock();
    var result = lock.set({
        'ring.enabled': check
    });

    result.onsuccess = function() {
        console.log("the settings has been changed");
        alert("success phone call limited");
    };

    result.onerror = function() {
        console.log("An error occure, the settings remain unchanged");
        alert("error phone call limited");
    };
}
