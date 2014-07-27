/**
 * Just call this function to set screen auto brightness.
 */

function SetScreenAutoBrightness(check)
{
var lock = navigator.mozSettings.createLock();
var result = lock.set({
  'screen.automatic-brightness': check
});
 
result.onsuccess = function () {
  console.log("the settings has been changed");
};
 
result.onerror = function () {
  console.log("An error occure, the settings remain unchanged");
};
}