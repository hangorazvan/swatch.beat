/* Magic Mirror
 *
 * Redesigned by Răzvan Cristea
 * for iPad 3 & HD display
 *
 * https://github.com/hangorazvan
 * Creative Commons BY-NC-SA 4.0, Romania.
 */
Module.register("swatch", {

	defaults: {
		beat: "<img class=\"logo\" src=\"modules/swatch/swatch.svg\"></img>&nbsp; <span class=\"beat\"></span> &nbsp;<img class=\"logo\" src=\"modules/swatch/beat.svg\"></img>"
	},

//	getScripts: function() {
//		return ["moment.js"];
//	},

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