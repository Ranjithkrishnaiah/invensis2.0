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
            //career-detail page js
            $(".desc-detail-body").addClass("collapse");
            $(".para-footercollapse").addClass("collapse");
        }
        else
        {
            //career-detail page js
            $(".desc-detail-body").removeClass("collapse");
            $(".para-footercollapse").removeClass("collapse");
            // service-page modal popup hide
            $('.modal-servicesbtnmobile').modal('hide');
        }
    }
});

// sub-services for only mobile screen
$(".modal-body-servicesbtnmobile").append($(".service-accordian").html());

// fix a subservices-button on scroll
var fixmeTop = $('.breadcrumb-sec').offset().top;
$(window).scroll(function() {
    var currentScroll = $(window).scrollTop();
    if (currentScroll >= fixmeTop) {
        $('.btn-servicesbtn').addClass("fixedtop-subservicesbtn");
    } else {
        $('.btn-servicesbtn').removeClass("fixedtop-subservicesbtn");
    }
});


// fix a resources-lists on scroll
var fixmeTop = $('.breadcrumb-sec').offset().top;
$(window).scroll(function() {
    var currentScroll = $(window).scrollTop();
    if (currentScroll >= fixmeTop) {
        $('.resourcestab-mb').addClass("fixedtop-resourcestab");
    } else {
        $('.resourcestab-mb').removeClass("fixedtop-resourcestab");
    }
});


// resources horizontal scrolling tabs
var hidWidth;
var scrollBarWidths = 40;

var widthOfList = function(){
var itemsWidth = 100;
$('.list-restabs a').each(function(){
    var itemWidth = $(this).outerWidth();
    itemsWidth+=itemWidth;
});
return itemsWidth;
};

var widthOfHidden = function(){
return (($('.wrapper-restabs').outerWidth())-widthOfList()-getLeftPosi())-scrollBarWidths;
};

var getLeftPosi = function(){
return $('.list-restabs').position().left;
};

var reAdjust = function(){
if (($('.wrapper-restabs').outerWidth()) < widthOfList()) {
    $('.scroller-right').show();
}
else {
    $('.scroller-right').hide();
}

if (getLeftPosi()<40) {
    $('.scroller-left').show();
}
else {
    $('.item-restabs').animate({left:"-="+getLeftPosi()+"px"},'slow');
    $('.scroller-left').hide();
}
}

reAdjust();

$(window).on('resize',function(e){
    reAdjust();
});

$('.scroller-right').click(function() {

$('.scroller-left').fadeIn('slow');
//$('.scroller-right').fadeOut('slow');

$('.list-restabs').animate({left:"+="+widthOfHidden()+"px"},'slow',function(){

});
});

$('.scroller-left').click(function() {

    $('.scroller-right').fadeIn('slow');
    //$('.scroller-left').fadeOut('slow');

    $('.list-restabs').animate({left:"-="+getLeftPosi()+"px"},'slow',function(){

    });
});
