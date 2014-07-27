var t = null;
t = setTimeout(time, 1000);

function time() {
	clearTimeout(t);
	dt = new Date();
	ut = dt.toUTCString();
	document.getElementById("showTime").innerHTML = "您的系統時間為: <br>" + dt;
	t = setTimeout(time, 1000);
}