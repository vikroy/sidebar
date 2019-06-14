/* sidebar-jquery.js */
$(function(){
if($("nav").hasClass("_sidebar")){
	var navHeight = $("nav").outerHeight();
	var navHeightI = $("nav").innerHeight();
	/*
	|---------------------------------------
	| Menu & Overlay js
	|---------------------------------------
	*/
	var overlayElem = document.createElement('div');overlayElem.classList = "_overlay";
	
	if($("nav").hasClass("fixed-top") && $("nav").hasClass("_menu-under-nav")){
	//menu under navigation
	function menuUnderNav(){
		$(".navbar-collapse").css("top", (navHeight - .17));
		}
		menuUnderNav(); 
		$("window").on("resize", function (){
			menuUnderNav();
		});
		$("nav").on("click", function(){
			menuUnderNav();
		});
		$(".navbar-toggler").on("click", function(){
			menuUnderNav();
		});
		
		$("body").append(overlayElem);
	}else{
		//menu over navigation
		$("nav").append(overlayElem);
	}
	
	/*
	|---------------------------------------
	| Mobile Menu Side js
	|---------------------------------------
	*/
	if($("nav").hasClass("_menu-side-right")){
		$(".navbar-collapse").addClass("_menu-on-right");
		$(".navbar-toggler").addClass("hamburger--arrowalt-r");
	} else {
		$(".navbar-toggler").addClass("hamburger--arrowalt");
	}
	/*
	|---------------------------------------
	| Hamburger Color
	|---------------------------------------
	*/
	var root = document.documentElement;
	if($("nav").hasClass("navbar-light")){
		root.style.setProperty('--hamburger-color', 'black');
	} else if($("nav").hasClass("navbar-dark")){
		root.style.setProperty('--hamburger-color', "white");
	}
	
	/*
	|---------------------------------------
	| Navbar Background & Color
	|---------------------------------------
	*/
	var nav_bg = $("nav").attr("data-nav_bg");
	if(nav_bg!=""){
		$("nav, .navbar-collapse").css("background", nav_bg);
		//$("navbar-collapse").css("background", nav_bg);
	}else{
		if($("nav").hasClass("navbar-light")){
			$("nav, navbar-collapse").addClass("bg-light");
	//		$("navbar-collapse").addClass("bg-light");
		} else if(nav.hasClass("navbar-dark")){
			$("nav, navbar-collapse").addClass("bg-light");
			//$("navbar-collapse").addClass("bg-dark");
		}
	}
	
	
	/*
	|---------------------------------------
	| Brand Side js
	|---------------------------------------
	*/
	if($("nav").hasClass("_brand-side-right")){
		//brand side right
		$(".navbar-brand").addClass("ml-auto order-1")
	}else{
		//brand side left
		$(".navbar-brand").addClass("mr-auto order-0")
	}
	
	
	/*
	|---------------------------------------
	| Open & Close Mobile Menu
	|---------------------------------------
	*/
	$(".navbar-toggler, ._overlay").on("click", function(){
		$(".navbar-collapse, ._overlay").toggleClass("_open");
		$(".navbar-toggler").toggleClass("is-active");
	});
	
	/*
	|---------------------------------------
	| Finger swipe detector js
	| this part is mix js
	|---------------------------------------
	*/
	document.addEventListener('touchstart', handleTouchStart, false);        
	document.addEventListener('touchmove', handleTouchMove, false);
	
	var xDown = null;                                                        
	var yDown = null;
	
	function getTouches(evt) {
		return evt.touches ||
		evt.originalEvent.touches;
	}                                                     
	
	function handleTouchStart(evt) {
		const firstTouch = getTouches(evt)[0];                                      
		xDown = firstTouch.clientX;                                      
		yDown = firstTouch.clientY;                                      
	};                                                
	
	function handleTouchMove(evt) {
		var nvhtO = $("nav").outerHeight();
		var nvhtI = $("nav").innerHeight();
		
		
		if ( ! xDown || ! yDown ) {
			return;
		}
	
		var xUp = evt.touches[0].clientX;                                    
		var yUp = evt.touches[0].clientY;
		
		var xDiff = xDown - xUp;
		var yDiff = yDown - yUp;
		
		
		
		var body_width = document.body.clientWidth;
		var diff = body_width - xDown;
		if($("nav").hasClass("_menu-side-right")){
		if(diff < 10){
			/* swipe from right border */
			$(".navbar-collapse, ._overlay").addClass("_open");
			$(".navbar-toggler").addClass("is-active");
		}else{
			$(".navbar-collapse, ._overlay").removeClass("_open");
			$(".navbar-toggler").removeClass("is-active");
		}
		}else{
			if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
				if ( xDiff > 0 ) {
					/* left swipe */ 
					$(".navbar-collapse, ._overlay").removeClass("_open");
					$(".navbar-toggler").removeClass("is-active");
				} else if(xDown < 10 && xDiff < 0){
					/* right swipe */
					$(".navbar-collapse, ._overlay").addClass("_open");
					$(".navbar-toggler").addClass("is-active");
				}                       
			}
		}
		/* reset values */
		xDown = null;
		yDown = null;                                             
	};
	
	/*
	|---------------------------------------
	| Content Under Nav js
	|---------------------------------------
	*/
	function contentUnderNav(){
		if($("nav").hasClass("fixed-top") && $("nav").hasClass("_content-under-nav")){
			$("body").css("padding-top", (navHeight - 0.17));
		}
	}
	contentUnderNav();
	
}
});