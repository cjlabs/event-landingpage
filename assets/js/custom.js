$(function(){

	$(window).scroll(function () {
		if ($('.fixed-header').offset().top > 50) { 
			$('.fixed-header').addClass("hamburger-header");
		} else {
			$('.fixed-header').removeClass("hamburger-header");
		}
	});

	// countdown

	$("#countdown").TimeCircles({bg_width: 0.5, use_background:false}); 

});