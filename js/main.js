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
	        top: "-300px"
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

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

})(jQuery);
