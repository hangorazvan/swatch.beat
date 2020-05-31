/*	Magic Mirror 2
*	Module: Swatch
*	by Razvan Cristea 
*	https://github.com/hangorazvan
*/

Module.register("swatch", {

	defaults: {},
	
	start: function() {
		Log.info("Starting module: " + this.name);
	},
	
	getStyles: function() {
		return 0;
	},

	getDom: function() {
		function swatch(){
			var d = new Date();
			var h = d.getUTCHours() + 1;
			var m = d.getUTCMinutes();
			var s = d.getUTCSeconds();
			var time = "@" + ("000" + Math.floor((h * 3600 + m * 60 + s) / 86.4) / 1000).slice(-3);
			document.getElementsByClassName("beat")[0].innerHTML = time;
		} setInterval(swatch, 864);
		var wrapper = document.createElement("div");
		wrapper.innerHTML = this.config.beat;
		wrapper.className = "swatch";
		return wrapper;
	}
});