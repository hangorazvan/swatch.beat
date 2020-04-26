/* Magic Mirror 2
*  Module: Swatch Internet Time
*  by Razvan Cristea 
*  https://github.com/hangorazvan
*/

Module.register("MMM-swatch", {

	defaults: {
		beat: '<img class="logo" src="MMM-swatch.svg"></img>&nbsp; <span class="beat"></span>&nbsp; <img class="logo" src="MMM-beat.svg"></img>',
	},
	
	start: function() {
        Log.info("Starting module: " + this.name);
	},
	
	getScripts: function() {return ["moment.js", "jquery.min.js"];},
	
	getStyles: function() {return ["MMM-swatch.css"];},

	getDom: function() {
		function swatch(){
            var d=new Date();
            var h=d.getUTCHours()+1;
            var m=d.getUTCMinutes();
            var s=d.getUTCSeconds();
            var time="@"+("000"+Math.floor((h*3600+m*60+s)/86.4)%1000).slice(3);
            $(".beat").html(time);
        } setInterval(swatch,864);
		var wrapper = document.createElement("div");
		wrapper.innerHTML = this.config.internetTime;
		wrapper.className = "swatch";
		return wrapper;
	}
});
