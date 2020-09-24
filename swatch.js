/*	Magic Mirror 2
 *	Module: Swatch
 *	by Razvan Cristea 
 *	https://github.com/hangorazvan
 */

Module.register("swatch", {

	defaults: {
		beat: "<img class=\"logo\" src=\"css/swatch.svg\"></img>&nbsp; <img class=\"logo\" src=\"css/beat.svg\"></img>&nbsp; <span class=\"beat\"></span>",
	},
	
	getScripts: function() {
		return ["moment.js"];
	},

	getStyles: function() {
		return [];
	},
	
	start: function() {
		Log.info("Starting module: " + this.name);
		var self = this;
		setInterval(function() {
			self.swatch();
		}, 864);
	},

	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.innerHTML = this.config.beat;
		wrapper.className = "swatch";
		return wrapper;
	},

	swatch: function() {
//	CET Switzerland, Biel Meantime UTC+1
		var t = moment().utcOffset(60);
		var h = t.hours();
		var m = t.minute();
		var s = t.seconds();
		var time = Math.round((h * 3600 + m * 60) / 86.4);
		var b = document.getElementsByClassName("beat")[0];
		if (time <= 9) { b.innerHTML = "@00" + time; }
		else if (time <= 99) { b.innerHTML = "@0" + time; }
		else b.innerHTML = "@" + time;
	}
});