$(function(){

	"use strict";

	var xurang = {
		init:function(){
			//xurang.navbarScrolling();
			xurang.mapLocation();
		},
		navbarScrolling :function(){

			$(window).scroll(function () {
				if ($('.fixed-header').offset().top > 50) { 
					$('.fixed-header').addClass("hamburger-header");
				} else {
					$('.fixed-header').removeClass("hamburger-header");
				}
			});
		},
		countdownTimer:function(){
			$("#countdown").TimeCircles({bg_width: 0.5, use_background:false});
		},
		mapLocation:function(){
			var map = new GMaps({
				el: '#map',
				lat: -12.043333,
				lng: -77.028333,
				zoomControl : true,
				zoomControlOpt: {
					style : 'SMALL',
					position: 'TOP_LEFT'
				},
				panControl : false,
				streetViewControl : false,
				mapTypeControl: false,
				overviewMapControl: false
			});

			map.addMarker({
				lat: -12.043333,
				lng: -77.028333,
				title: 'Lima',
				click: function(e) {
					alert('cjlabs office here');
				}
			});
		}

	}


	xurang.init();

});


