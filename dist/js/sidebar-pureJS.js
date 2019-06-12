/* sidebar-pureJS.js */
var nav = document.querySelector("nav");
var mobileMenu = document.querySelector(".navbar-collapse");
var brand = document.querySelector(".navbar-brand");
var $toggler = document.querySelector(".navbar-toggler");

if(nav.classList.contains("_sidebar")){
	/*
	|---------------------------------------
	| Menu & Overlay js
	|---------------------------------------
	*/
	var overlayElem = document.createElement('div');overlayElem.classList = "_overlay";
	
	if(nav.classList.contains("fixed-top") && nav.classList.contains("_menu-under-nav")){
	//menu under navigation
	function setMenuTop(){
		var navOuterHeight = nav.offsetHeight;
		mobileMenu.style.top = (navOuterHeight - .17) + "px";
		}
		setMenuTop(); 
		window.addEventListener("resize", function (){
			setMenuTop();
		});
		nav.addEventListener("click", function(){
			setMenuTop();
		});
		$toggler.addEventListener("click", function(){
			setMenuTop();
		});
		
		//document.getElementsByTagName("BODY")[0].appendChild(overlay);
		document.body.appendChild(overlayElem);
	}else{
		//menu under navigation
		nav.appendChild(overlayElem);
	}
	
	
	
	
	/*
	|---------------------------------------
	| Mobile Menu Side Setting js
	|---------------------------------------
	*/
	if(nav.classList.contains("_menu-side-right")){
		mobileMenu.classList.add("onRight");
		$toggler.classList.add("hamburger--arrowalt-r");
	} else {
		$toggler.classList.add("hamburger--arrowalt");
	}
	/*
	|---------------------------------------
	| Hamburger Color
	|---------------------------------------
	*/
	var hc1 = document.querySelector('.hamburger');
	var hc2 = document.querySelector('.hamburger');
	if(nav.classList.contains("navbar-light")){
		alert("navbar-light");
		nav.classList.add("bg-light");
		mobileMenu.classList.add("bg-light");
	} else if(nav.classList.contains("navbar-dark")){
		alert("navbar-dark");
		nav.classList.add("bg-dark")
		mobileMenu.classList.add("bg-dark")
	}
	
	
	/*
	|---------------------------------------
	| Brand Side js
	|---------------------------------------
	*/
	if(nav.classList.contains("_brand-side-right")){
		//brand side right
		brand.classList.add("ml-auto")
		brand.classList.add("order-1")
	}else{
		//brand side left
		brand.classList.add("mr-auto")
		brand.classList.add("order-0")
	}
	
	
	/*
	|---------------------------------------
	| Open & Close Mobile Menu
	|---------------------------------------
	*/
	/*$(".navbar-toggler, .overlay").on("click", function(){
		$(".mobileMenu, .overlay").toggleClass("open");
		$(".navbar-toggler").toggleClass("is-active");
	});*/
	var overlay = document.querySelector("._overlay");
	
	
	$toggler.addEventListener("click", function(){
		overlay.classList.toggle("_open");
		mobileMenu.classList.toggle("_open");
		$toggler.classList.toggle("is-active");
	}, false);
	overlay.addEventListener("click", function(){
		overlay.classList.toggle("_open");
		mobileMenu.classList.toggle("_open");
		$toggler.classList.toggle("is-active");
	}, false);
	
	
	/*
	|---------------------------------------
	| Finger swipe detector js
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
		if ( ! xDown || ! yDown ) {
			return;
		}
	
		var xUp = evt.touches[0].clientX;                                    
		var yUp = evt.touches[0].clientY;
		
		var xDiff = xDown - xUp;
		var yDiff = yDown - yUp;
		
		if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
			if ( xDiff > 0 ) {
				/* left swipe */ 
				mobileMenu.classList.remove("_open");
				overlay.classList.remove("_open");
				$toggler.classList.remove("is-active");
			} else if(xDown < 10 && xDiff < 0){
				/* right swipe */
				mobileMenu.classList.add("_open");
				overlay.classList.add("_open");
				$toggler.classList.add("is-active");
			}                       
		}
		
		
		//use it when need to detection of finger swipe event
		/*
		if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*
			if ( xDiff > 0 ) {
				/* left swipe *
			} else if(xDown < 10 && xDiff < 0){
				/* right swipe *
			}                       
		} else {
			if ( yDiff > 0 ) {
				/* up swipe *
			} else { 
				/* down swipe *
			}                                                                 
		}
		*/
		
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
		if(nav.classList.contains("fixed-top") && nav.classList.contains("_content-under-nav")){
			document.body.style.paddingTop = (nav.clientHeight-.17)+"px";
		}
	}
	contentUnderNav();
}
