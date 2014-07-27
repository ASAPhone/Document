/**
 * This is a js file to detect outside light(lux) by light detect sensor and change the screen light.
 * The action is auto.
 * ScreenBrightAuto.js needed.
 */
window.onload = function(){
if(!('ondevicelight' in window)){
	alert("Your device is unsupported Light detect sensor.");
}
else{
	window.addEventListener('devicelight', function(event) {

        if (event.value < 50) {
        	SetScreenAutoBrightness(true);
        }
        else{
        	SetScreenAutoBrightness(false);
        }
     });
}
};