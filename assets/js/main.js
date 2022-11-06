
$(document).ready(function(){
	
	$("[data-toggle='offcanvas']").on("click touchstart", function(e){	
		var offcanvas = $(this).data("target");
		$("body").toggleClass("overlay");
		$(offcanvas).toggleClass("offcanvas-open");
		return false;
	}); 
	
	$(document).on("click touchstart", function(e){
		if($(e.target).hasClass("navbar")){
			$("body").toggleClass("overlay");
			$($(e.target).find(".navbar-offcanvas")).toggleClass("offcanvas-open");
			return false;
		}
	});
	
	$(".dropdown-menu > li > a").on("click", function(e){
		if($(this).siblings(".sub-menu").length > 0){
			$(this).closest(".dropdown").addClass("open");
			$(this).parent("li").addClass("has-submenu").toggleClass("open");
			return false;
		}
		else{
			$(this).parent("li").siblings("li").removeClass("open");
		}
	});
	
	$(document).on("click", ".dropdown-megamenu .dropdown-menu", function(e) {
		e.stopPropagation()
	})

});


	  window.addEventListener('load', () => {
	    AOS.init({
	      duration: 1000,
	      easing: "ease-in-out",
	      once: true,
	      mirror: false
	    });
	  });
	  