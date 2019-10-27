$(function() {
	
	

	$(".top-line .sf-menu").superfish({
		cssArrows:false,
		hoverClass:'noclass',
		delay:300,
		speed:'slow', 
	});
	$(document).ready(function(){
		$(".owl-carousel").owlCarousel();
	});
	var owl = $('.slider');
	owl.owlCarousel({
		loop: true,
		items: 1,
		itemClass: "slide-wrap",
		nav: true,		
		navElement: false,
		navText: [""],
	
		dotsContainer:".owl-dots",
		autoplay:true,
		autoplayTimeout:4000,
		autoplaySpeed: true,
		autoplaySpeed: 800,
    autoplayHoverPause:true,
		 responsive:
		 {
			0:{
					items:1,
					nav:true,
					loop: true,
					
					
			}
		}
		//navContainer: '.slider-nav',
	// }
		// dots: false,
		
		//nav: true,
		//autoWidth: true,
		//center: true,
		// 
		
		// navContainer: ".slider",
		//navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
		
 });
 
//  var owl = $('.owl-carousel');
//  owl.owlCarousel();
 // Go to the next item
 $('.next').click(function() {
		 owl.trigger('next.owl.carousel');
 })
 // Go to the previous item
		 $('.prev').click(function() {
				 // With optional speed parameter
				 // Parameters has to be in square bracket '[]'
				 owl.trigger('prev.owl.carousel');
		 
		 
		})
		$('.owl-dot').click(function () {
			owl.trigger('to.owl.carousel', [$(this).index(), 300]);
			
			
 });
//  $("#my-menu").mmenu({
// 	// options
// });

//  $(".mobile-mnu").click(function() {
// 	var thiss= $(this).find(".toggle-mnu")
// 	.toggleClass("on");
//   $(".main-mnu").slideToggle();
//   return false;
// });

$('.services-item h4').equalHeights();
	

$('.new-item-text').equalHeights();

$('.h4').equalHeights();
//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$('.callback').submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$('.succes').addClass(visible);
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
				$('.succes').removeClass(visible)
				$.magnificPopup.close();
			}, 3000);
		});
		return false;
	});

	$(".partner-slider").owlCarousel({
		dots: false,
		nav: false,
		loop: true,
		autoplay:true,
		autoplayTimeout:4000,
		autoplaySpeed: true,
		autoplaySpeed: 800,
    autoplayHoverPause:true,
		smartSpeed: 700,
		navText: ['<i class="fa fa-angle-double-left"></i>','<i class="fa fa-angle-double-right"></i>'],
		responsiveClass: true,
		responsive:{
			0:{
				items: 1
			},
			800:{
				items: 2
			},
			1100:{
				items: 3
			}
	
		}
	
	
	});

	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});
});
