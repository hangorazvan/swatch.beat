/*	Magic Mirror 2
*	Module: Swatch
*	by Razvan Cristea 
*	https://github.com/hangorazvan
*/

Module.register("swatch", {

	defaults: {
		beat: "<img class=\"logo\" src=\"css/swatch.svg\"></img>&nbsp; <img class=\"logo\" src=\"css/beat.svg\"></img>&nbsp; <span class=\"beat\"></span>",
	},
	
	start: function() {
		Log.info("Starting module: " + this.name);
	},

	getScripts: function() {
		return ["moment.js"];
	},

	getStyles: function() {
		return [];
	},
	
	getDom: function() {
		function swatch(){
//		CET Switzerland, Biel Meantime UTC+1
			var t = moment().utcOffset(60);
			var h = t.hours();
			var m = t.minute();
			var time = "@" + Math.round((h * 3600 + m * 60) / 86.4);
			document.getElementsByClassName("beat")[0].innerHTML = time;
		} setInterval(swatch, 864);
		var wrapper = document.createElement("div");
		wrapper.innerHTML = this.config.beat;
		wrapper.className = "swatch";
		return wrapper;
	}
});