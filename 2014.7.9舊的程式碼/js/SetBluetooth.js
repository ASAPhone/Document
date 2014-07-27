/**
 * Just call this function to set bluetooth
 */

function SetBluetooth(check){
	var lock = navigator.mozSettings.createLock();
	var result = lock.set({
	  'bluetooth.enabled': check
	});
	 
	result.onsuccess = function () {
	  console.log("the settings has been changed");
	};
	 
	result.onerror = function () {
	  console.log("An error occure, the settings remain unchanged");
	};
}