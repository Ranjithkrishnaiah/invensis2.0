// navbar fixed on top script
! function(e) {
  "use strict";
  e('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
          var a = e(this.hash);
          if ((a = a.length ? a : e("[name=" + this.hash.slice(1) + "]")).length) return e("html, body").animate({
              scrollTop: a.offset().top - 54
          }, 1e3, "easeInOutExpo"), !1
      }
  }), e(".js-scroll-trigger").click(function() {
      e(".navbar-collapse").collapse("hide")
  }), e("body").scrollspy({
      target: "#mainNav",
      offset: 56
  });

  function a() {
      10 < e("#mainNav").offset().top ? e("#mainNav").addClass("navbar-shrink") : e("#mainNav").removeClass("navbar-shrink")
  }
  a(), e(window).scroll(a)
}(jQuery);

// !(function($) {
//   "use strict";

//   // Toggle .navbar-shrink class to #header when page is scrolled
//   $(window).scroll(function() {
//     if ($(this).scrollTop() > 50) {
//       $('#mainNav').addClass('navbar-shrink');
//     } else {
//       $('#mainNav').removeClass('navbar-shrink');
//     }
//   });

//   if ($(window).scrollTop() > 50) {
//     $('#header').addClass('navbar-shrink');
//   }

// })(jQuery);


// search full screen
$(document).ready(function() {
  $(".ser-input").click(function() {
      $('.search-full-view').addClass("search-normal-screen");
  });
  $("#search-close").click(function() {
      $('.search-full-view').removeClass("search-normal-screen");
  });
});


// accordion scipt
(function() {
	$(".card").on("show.bs.collapse hide.bs.collapse", function(e) {
		if (e.type=='show'){
		$(this).addClass('active');
		console.log('ok')
		}else{
		$(this).removeClass('active');
		}
	});
}).call(this);


// Product (Tools) show/hide scipt
jQuery(document).ready(function(){
    jQuery('.tools-img2').hide();
    jQuery('.tools-img3').hide();
    jQuery('.tools-img4').hide();
    jQuery('.tools-card1').hover(function() {
        jQuery('.tools-img1').show();
        jQuery('.tools-img2').hide();
        jQuery('.tools-img3').hide();
        jQuery('.tools-img4').hide();
    });
    jQuery('.tools-card2').hover(function() {
        jQuery('.tools-img2').show();
        jQuery('.tools-img1').hide();
        jQuery('.tools-img3').hide();
        jQuery('.tools-img4').hide();
    });
    jQuery('.tools-card3').hover(function() {
        jQuery('.tools-img3').show();
        jQuery('.tools-img1').hide();
        jQuery('.tools-img2').hide();
        jQuery('.tools-img4').hide();
    });
    jQuery('.tools-card4').hover(function() {
        jQuery('.tools-img4').show();
        jQuery('.tools-img1').hide();
        jQuery('.tools-img2').hide();
        jQuery('.tools-img3').hide();
    });
});


// select-box placeholder color scripet
$("#select-id, #select-id1").change(function () {
    if($(this).val() == "0") $(this).addClass("empty");
    else $(this).removeClass("empty")
});
$("#select-id, #select-id1").change();


// scroll to top script
$(document).ready(function() {
    // Show or hide the sticky footer button
    $(window).scroll(function() {
      if ($(this).scrollTop() > 2000) {
        $('.go-top').fadeIn(200);
      } else {
        $('.go-top').fadeOut(200);
      }
    });

    // Animate the scroll to top
    $('.go-top').click(function(event) {
      event.preventDefault();
      $('html, body').animate({scrollTop: 0}, 1000);
    })
});


// javascript for only mobile screen
$(document).ready(function () {
    $(window).on("resize", function (e) {
        checkScreenSize();
    });

    checkScreenSize();

    function checkScreenSize(){
        var newWindowWidth = $(window).width();
        if (newWindowWidth < 767) {
            $(".desc-detail-body").addClass("collapse");
        }
        else
        {
            $(".desc-detail-body").removeClass("collapse");
        }
    }
});
