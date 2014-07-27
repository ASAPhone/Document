/**
 * Get the check for device that surppoting the navigator
 * battery.charging = true||false
 * battery.level = 0 to 1;
 * addEventListener for advise the event when it change
 */

// get the battery information
var battery = navigator.battery || navigator.webkitBattery || navigator.mozBattery;

console.warn("Battery charging: ", battery.charging); // true
console.warn("Battery level: ", battery.level); // 0.58

// Add a few event listeners
battery.addEventListener("chargingchange", function(e) {
	console.warn("Battery charge change: ", battery.charging);
}, false);
battery.addEventListener("levelchange", function(e) {
	console.warn("Battery level change: ", battery.level);
}, false);