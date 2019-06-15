(function($) {

	'use strict';

	// bootstrap dropdown hover

  // loader
  var loader = function() {
    setTimeout(function() {
      if($('#loader').length > 0) {
        $('#loader').removeClass('show');
      }
    }, 1);
  };
  loader();

	$(function(){
	  $(".burger-container").click(function(){
	    $(".mobile-menu").fadeToggle().css('display','table');
	    $("#span2").toggleClass("spn2");
	    $("#span1").toggleClass("spn1");
	    $("#span3").toggleClass("spn3");
	  });
	  $(".glyphicon-remove").click(function(){
	    $(".mobile-menu").fadeToggle().css('display','table');
	    $("#span2").toggleClass("spn2");
	    $("#span1").toggleClass("spn1");
	    $("#span3").toggleClass("spn3");
	  });
	});

var width = $(window).width();

	$(window).scroll(function(){
	  var scroll = $(window).scrollTop();
	  if(width > 1200){
	    if(scroll >= 150){
	      $("#fixed-nav").css({
	        top: "0px"
	      });
	    }else{
	      $("#fixed-nav").css({
	        top: "-215px"
	      });
	    }
	  }
	});

	// validator

	$(function(){
	    $("#name > input").blur(function(){
	        var name = /^[A-Za-z ]+$/;
	       if(!($(this).val().match(name))){
	           $(this).addClass("is-invalid");
	           $(this).val("");
	           $(this).attr("placeholder","Please Enter a valid name");
	           return false;
	       }else{
	           $(this).removeClass("is-invalid");
	           $(this).addClass("is-valid");
	           return true;
	       }
	    });

	    $("#code input").blur(function(){
	        var code = /^\d{1,2}$/;
	       if(!($(this).val().match(code))){
	           alert("Plese Fill the country-code");
	           $(this).val("");
	           $(this).addClass("is-invalid");
	           return false;
	       }else{
	           $(this).removeClass("is-invalid");
	           $(this).addClass("is-valid");
	           return true;
	       }
	    });

	    $("#phone > input").blur(function(){
	        var phone = /^\d{10}$/;
	       if(!($(this).val().match(phone))){
	           $(this).addClass("is-invalid");
	           $(this).val("");
	           $(this).attr("placeholder","Please Enter a valid Phone number");
	           return false;
	       }else{
	           $(this).removeClass("is-invalid");
	           $(this).addClass("is-valid");
	           return true;
	       }
	    });

	    $("#email > input").blur(function(){
	        var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
	       if(!($(this).val().match(email))){
	           $(this).addClass("is-invalid");
	           $(this).val("");
	           $(this).attr("placeholder","Please Enter a valid email");
	           return false;
	       }else{
	           $(this).removeClass("is-invalid");
	           $(this).addClass("is-valid");
	           return true;
	       }
	    });

	    $("#message > textarea").blur(function(){
	       if($(this).val()==""){
	           $(this).addClass("is-invalid");
	           $(this).val("");
	           $(this).attr("placeholder","This field can't be empty");
	           return false;
	       }else{
	           $(this).removeClass("is-invalid");
	           $(this).addClass("is-valid");
	           return true;
	       }
	    });

	    $("#send").click(function(){
	       if(($("#name > input").val() == "") || ($("#code > input").val() == "") || ($("#phone > input").val() == "") || ($("#message > input").val() == "")){
	           $("#message , #phone , #name").addClass("is-invalid");
	           $("#message > textarea, #phone > input, #name > input").attr("placeholder","This field can't be empty");
	           $("#code").addClass("is-invalid");
	           return false;
	       }else{
	           return true;
	            }
	    });
	});

	// validator ends

  // Stellar
  // $(window).stellar({
  //   responsive: true,
  //   parallaxBackgrounds: true,
  //   parallaxElements: true,
  //   horizontalScrolling: false,
  //   hideDistantElements: false,
  //   scrollProperty: 'scroll'
  // });


	$('nav .dropdown').hover(function(){
		var $this = $(this);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			$this.find('.dropdown-menu').removeClass('show');
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});



	// home slider
	$('.home-slider').owlCarousel({
    loop:true,
    autoplay: true,
    margin:10,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav:true,
    autoplayHoverPause: true,
    items: 1,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:1,
        nav:false
      },
      1000:{
        items:1,
        nav:true
      }
    }
	});

	// owl carousel
	var majorCarousel = $('.js-carousel-1');
	majorCarousel.owlCarousel({
    loop:true,
    autoplay: false,
    stagePadding: 0,
    margin: 10,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: false,
    dots: false,
    autoplayHoverPause: false,
    items: 3,
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:2,
        nav:false
      },
      1000:{
        items:3,
        nav:true,
        loop:false
      }
  	}
	});

  // cusotm owl navigation events
  $('.custom-next').click(function(event){
    event.preventDefault();
    // majorCarousel.trigger('owl.next');
    majorCarousel.trigger('next.owl.carousel');

  })
  $('.custom-prev').click(function(event){
    event.preventDefault();
    // majorCarousel.trigger('owl.prev');
    majorCarousel.trigger('prev.owl.carousel');
  })

	// owl carousel
	var major2Carousel = $('.js-carousel-2');
	major2Carousel.owlCarousel({
    loop:true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: false,
    autoplayHoverPause: true,
    items: 4,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:3,
        nav:false
      },
      1000:{
        items:4,
        nav:true,
        loop:false
      }
  	}
	});


  $('.nonloop-block-13').owlCarousel({
      center: false,
      items: 1,
      loop: false,
      stagePadding: 0,
      margin: 20,
      nav: true,
      navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
      responsive:{
        600:{
          margin: 20,
          stagePadding: 10,
          items: 2
        },
        1000:{
          margin: 20,
          stagePadding: 150,
          items: 2
        },
        1200:{
          margin: 20,
          stagePadding: 150,
          items: 3
        }
      }
    });

	// var contentWayPoint = function() {
	// 	var i = 0;
	// 	$('.element-animate').waypoint( function( direction ) {
  //
	// 		if( direction === 'down' && !$(this.element).hasClass('element-animated') ) {
  //
	// 			i++;
  //
	// 			$(this.element).addClass('item-animate');
	// 			setTimeout(function(){
  //
	// 				$('body .element-animate.item-animate').each(function(k){
	// 					var el = $(this);
	// 					setTimeout( function () {
	// 						var effect = el.data('animate-effect');
	// 						if ( effect === 'fadeIn') {
	// 							el.addClass('fadeIn element-animated');
	// 						} else if ( effect === 'fadeInLeft') {
	// 							el.addClass('fadeInLeft element-animated');
	// 						} else if ( effect === 'fadeInRight') {
	// 							el.addClass('fadeInRight element-animated');
	// 						} else {
	// 							el.addClass('fadeInUp element-animated');
	// 						}
	// 						el.removeClass('item-animate');
	// 					},  k * 100);
	// 				});
  //
	// 			}, 100);
  //
	// 		}
  //
	// 	} , { offset: '95%' } );
	// };
	// contentWayPoint();


  $('.nonloop-block-11').owlCarousel({
      center: false,
      items:1,
      loop:false,
      stagePadding: 10,
      margin:0,
      nav: true,
      navText: ['<span class="ion-android-arrow-back">', '<span class="ion-android-arrow-forward">'],
      responsive:{
        600:{
          margin:20,
          stagePadding: 10,
          items:2
        },
        800:{
          margin:20,
          stagePadding: 10,
          items:2
        },
        1000:{
          margin:20,
          stagePadding: 10,
          items:3
        },
        1900:{
          margin:20,
          stagePadding: 200,
          items:4
        }
      }
    });


  // var counter = function() {
  //
  //   $('#section-counter').waypoint( function( direction ) {
  //
  //     if( direction === 'down' && !$(this.element).hasClass('element-animated') ) {
  //
  //       var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
  //       $('.number').each(function(){
  //         var $this = $(this),
  //           num = $this.data('number');
  //           console.log(num);
  //         $this.animateNumber(
  //           {
  //             number: num,
  //             numberStep: comma_separator_number_step
  //           }, 7000
  //         );
  //       });
  //
  //     }
  //
  //   } , { offset: '95%' } );
  //
  // }
  // counter();

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });



})(jQuery);
