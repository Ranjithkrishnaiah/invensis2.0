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
        80 < e("#mainNav").offset().top ? e("#mainNav").addClass("navbar-shrink") : e("#mainNav").removeClass("navbar-shrink")
    }
    a(), e(window).scroll(a)
}(jQuery);


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



var nav           = $('nav');
var menu          = $('.menu');
var menuContainer = $('.menu-container');
var subMenu       = $('.submenu');
var toggle        = $('.toggle');
var subToggle     = $('.has-children span');
var back          = '<div class="hide-submenu"></div>';
var subHide       = $(back);

// Toggle menu
toggle.on("click", function() {
  nav.toggleClass('is-visible');
  if(menu.hasClass('visually-hidden')) {
    menu.toggleClass('visually-hidden is-visible')
  } else {
    menu.removeClass('is-visible');
    // Wait for CSS animation
    setTimeout(function() {
      nav.removeClass('view-submenu');
      menu.addClass('visually-hidden');
    }, 200);
  }
});

// Add submenu hide bar
subHide.prependTo(subMenu);
var subHideToggle = $('.hide-submenu');

// Show submenu
subToggle.on("click", function() {
  nav.addClass('view-submenu');
  // Hide all the submenus...
  subMenu.hide();
  // ...except for the one being called
  $(this).parents('li').find('.submenu').show();
});

// Hide submenu
subHideToggle.on("click", function() {
  nav.removeClass('view-submenu');
});