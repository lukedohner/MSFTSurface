var CRAFTWW = CRAFTWW || {};

(function() {
	CRAFTWW.startAd = function() {
		var adBox = document.getElementById("adBox");
		var border = document.getElementById("border");
		
		//var copy = document.getElementById("copy");
		var cta = document.getElementById("cta");
		var ctahold = document.getElementById("ctahold");
		var logo = document.getElementById("logo");
		var logo_dark = document.getElementById("logo_dark");

		var copy_f1 = document.getElementById("copy_f1");
		var copy_f2 = document.getElementById("copy_f2");
		var copy_f3 = document.getElementById("copy_f3");

		var copy_f5a = document.getElementById("copy_f5a");
		var copy_f5b = document.getElementById("copy_f5b");
		var copy_f5c = document.getElementById("copy_f5c");
		var copy_f5d = document.getElementById("copy_f5d");

		var product = document.getElementById("product");

		var blueCover = document.getElementById("blueCover");
		var blueStrip = document.getElementById("blueStrip");
		var whiteCover = document.getElementById("whiteCover");

        setPos(logo, "visible", 18, 215, 2);
		setPos(border, "visible", 0, 0, 1);
		
		setPos(logo_dark, "hidden", 18, 215, 1);
        //setPos(copy, "hidden", 40, 130, 2);
		setPos(cta, "hidden", 0, 0, 1000);

        setPos(ctahold, "visible", 18, 131, 1000);
		setPos(copy_f1, "hidden", 0, 0, 1);
		setPos(copy_f2, "hidden", -300, 0, 2);
		setPos(copy_f3, "hidden", -300, 0, 3);

		setPos(copy_f5a, "visible", -225, 0, 3);
		setPos(copy_f5b, "visible", -225, 0, 4);
		setPos(copy_f5c, "visible", -225, 0, 5);
		setPos(copy_f5d, "visible", -225, 0, 6);
		
		setPos(product, "hidden", -200, 79, 3);

		setPos(blueCover, "visible", 0, 0, 0);
		setPos(blueStrip, "visible", 0, 0, 1);
		setPos(whiteCover, "visible", 10, 0, 0);


		adBox.addEventListener("mouseover", ctamouseOver);
		function ctamouseOver() {
		    //console.log("ctamouseOver");
		    cta.style.transition = 'top .2s ease-in-out 0s';
			cta.style.webkitTransition = 'top .2s ease-in-out 0s';
			cta.style.top = "-28px";
		}
		adBox.addEventListener("mouseout", ctamouseOut);
		function ctamouseOut() {
		    //console.log("ctamouseOut");
		    cta.style.transition = 'top 0s ease-in-out 0s';
			cta.style.webkitTransition = 'top 0s ease-in-out 0s';
			cta.style.top = "0px";
		}

		// Set positioning or setPos() is used to position Div element, sets initially opacity, and z-index positioning

		function setPos(_elem, _visi, _xpos, _ypos, _zpos){
			_elem.style.position = "absolute";
			_elem.style.left = _xpos + "px";
			_elem.style.top = _ypos + "px";
			if(_visi === "hidden"){
				_elem.style.opacity = 0;
			}else{
				_elem.style.opacity = 1;
			}
			_elem.style.zIndex = _zpos;
		}
		adBox.style.visibility = "visible";

		var timer = setInterval(advance, 200);
		var phase = 0;

		function advance(){

			clearInterval(timer);
			
			if(phase === 0){

				copy_f1.style.transition = 'opacity .4s ease-in-out .1s';
				copy_f1.style.webkitTransition = 'opacity .4s ease-in-out .1s';
				copy_f1.style.opacity = 1;

				logo.style.transition = 'opacity .4s ease-in-out .5s';
				logo.style.webkitTransition = 'opacity .4s ease-in-out .5s';
				logo.style.opacity = 1;


				timer = setInterval(advance, 4000);
			
			}

			if(phase === 1){
				copy_f1.style.transition = 'opacity .2s ease-in-out .1s';
				copy_f1.style.webkitTransition = 'opacity .2s ease-in-out .1s';
				copy_f1.style.opacity = 0;

				product.style.transition = 'opacity .2s ease-in-out .2s';
				product.style.webkitTransition = 'opacity .2s ease-in-out .2s';
				product.style.opacity = 1;

				product.style.transition = 'left .4s ease-in-out 0s';
				product.style.webkitTransition = 'left .4s ease-in-out 0s';
				product.style.left = "93px";

				copy_f2.style.transition = 'opacity .2s ease-in-out .2s';
				copy_f2.style.webkitTransition = 'opacity .2s ease-in-out .2s';
				copy_f2.style.opacity = 1;

				copy_f2.style.transition = 'left .4s ease-in-out .2s';
				copy_f2.style.webkitTransition = 'left .4s ease-in-out .2s';
				copy_f2.style.left = "0px";

				timer = setInterval(advance, 3000);
			
			}
			if(phase === 2){
				copy_f2.style.transition = 'opacity .7s ease-in-out .1s';
				copy_f2.style.webkitTransition = 'opacity .7s ease-in-out .1s';
				copy_f2.style.opacity = 0;

				copy_f3.style.transition = 'opacity .7s ease-in-out .2s';
				copy_f3.style.webkitTransition = 'opacity .7s ease-in-out .2s';
				copy_f3.style.opacity = 1;

				copy_f3.style.transition = 'left .4s ease-in-out .2s';
				copy_f3.style.webkitTransition = 'left .4s ease-in-out .2s';
				copy_f3.style.left = "0px";

				timer = setInterval(advance, 4000);
			
			}
			if(phase === 3){
				copy_f3.style.transition = 'opacity .2s ease-in-out .1s';
				copy_f3.style.webkitTransition = 'opacity .2s ease-in-out .1s';
				copy_f3.style.opacity = 0;

				logo.style.transition = 'opacity .2s ease-in-out 0s';
				logo.style.webkitTransition = 'opacity .2s ease-in-out 0s';
				logo.style.opacity = 0;

				logo_dark.style.transition = 'opacity 0 ease-in-out 0s';
				logo_dark.style.webkitTransition = 'opacity 0 ease-in-out 0s';
				logo_dark.style.opacity = 1;

				blueCover.style.transition = 'left .4s ease-in-out 0s';
				blueCover.style.webkitTransition = 'left .4s ease-in-out 0s';
				blueCover.style.left = "300px";

				// whiteCover.style.transition = 'left .4s ease-in-out 0s';
				// whiteCover.style.webkitTransition = 'left .4s ease-in-out 0s';
				// whiteCover.style.left = "10px";

				// product.style.transition = 'left .4s ease-in-out 0s';
				// product.style.webkitTransition = 'left .4s ease-in-out 0s';
				// product.style.left = "94px";

				copy_f5a.style.transition = 'left .7s ease-in-out 0s';
				copy_f5a.style.webkitTransition = 'left .7s ease-in-out 0s';
				copy_f5a.style.left = 0;

				copy_f5b.style.transition = 'left .7s ease-in-out .1s';
				copy_f5b.style.webkitTransition = 'left .7s ease-in-out .1s';
				copy_f5b.style.left = 0;

				copy_f5c.style.transition = 'left .7s ease-in-out .2s';
				copy_f5c.style.webkitTransition = 'left .7s ease-in-out .2s';
				copy_f5c.style.left = 0;

				copy_f5d.style.transition = 'left .7s ease-in-out .3s';
				copy_f5d.style.webkitTransition = 'left .7s ease-in-out .3s';
				copy_f5d.style.left = 0;

				cta.style.transition = 'opacity .7s ease-in-out .4s';
				cta.style.webkitTransition = 'opacity .7s ease-in-out .4s';
				cta.style.opacity = 1;


				timer = setInterval(advance, 1000);
			
			}

			// add so on ...
			
			phase ++;
		}
	};
})();