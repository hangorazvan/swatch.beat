/*	Magic Mirror 2
*	Module: Swatch
*	by Razvan Cristea 
*	https://github.com/hangorazvan
*/

Module.register("swatch", {

	defaults: {
		beat: "<img class=\"logo\" src=\"css/swatch.svg\"></img>&nbsp; <span class=\"beat\"></span>&nbsp; <img class=\"logo\" src=\"css/beat.svg\"></img>",
	},
	
	start: function() {
		Log.info("Starting module: " + this.name);
	},

	getScripts: function() {
		return ["moment.js"];
	},

	getStyles: function() {
		return ["swatch.css"];
	},
	
	getDom: function() {
		function swatch(){
			var d = new Date();
			var h = d.getUTCHours() + 1;
			var m = d.getUTCMinutes();
			var s = d.getUTCSeconds();
			var time = "@" + Math.floor((h * 3600 + m * 60 + s) / 86.4);
			document.getElementsByClassName("beat")[0].innerHTML = time;
		} setInterval(swatch, 864);
		var wrapper = document.createElement("div");
		wrapper.innerHTML = this.config.beat;
		wrapper.className = "swatch";
		return wrapper;
	}
});
