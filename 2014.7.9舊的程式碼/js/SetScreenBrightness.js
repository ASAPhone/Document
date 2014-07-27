/**
 * Just call this function to set your screen brightness(1~100).
 */

function SetScreenBrightness(BrightValue){
	var lock = navigator.mozSettings.createLock();
	var result = lock.set({
	  'screen.brightness': BrightValue
	});
	 
	result.onsuccess = function () {
	  console.log("the settings has been changed");
	};
	 
	result.onerror = function () {
	  console.log("An error occure, the settings remain unchanged");
	};
}