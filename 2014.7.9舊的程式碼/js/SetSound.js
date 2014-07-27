/**
 * This is a JS file to set device to sound.
 */


function SetSound(SDvalue){
	var lock = navigator.mozSettings.createLock();
	var result = lock.set({
	  'audio.volume.dtmf': SDvalue,
	  'audio.volume.content': SDvalue,
	  'audio.volume.notification':SDvalue,
	  'audio.volume.tts': SDvalue
	});
	 
	result.onsuccess = function () {
	  console.log("the settings has been changed");
	};
	 
	result.onerror = function () {
	  console.log("An error occure, the settings remain unchanged");
	};
}