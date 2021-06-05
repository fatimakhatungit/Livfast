(function ($) {
"use strict";

// Stikey Js  
    (function () {
      var nav = $('.menu-nav-sec');
      var scrolled = false;
      $(window).on('scroll', function () {
        if (120 < $(window).scrollTop() && !scrolled) {
          nav.addClass('sticky_menu animated fadeInDown').animate({ 'margin-top': '0px' });
          scrolled = true;
        }
        if (90 > $(window).scrollTop() && scrolled) {
          nav.removeClass('sticky_menu animated fadeInDown').css('margin-top', '0px');
          scrolled = false
        }
      });
    }());

    // data-background
$("[data-background]").each(function () {
  $(this).css("background-image", "url(" + $(this).attr("data-background") +")")
})


// owlCarousel
$('.hero-slider').owlCarousel({
    loop:true,
    nav:false,
    dots:true,
    autoplay:true,
    navText: [ '<span class="fa fa-angle-left">', '<span class="fa fa-angle-right">' ],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        767:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// owlCarousel
$('').owlCarousel({
  loop:true,
  nav:false,
  dots:true,
  autoplay:true,
  navText: [ '<span class="fa fa-angle-left">', '<span class="fa fa-angle-right">' ],
  responsive:{
      0:{
          items:1,
          nav:false
      },
      767:{
          items:1
      },
      1000:{
          items:1
      }
  }
})






//for menu active class
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});


 /*START WOW ANIMATION JS*/
 new WOW().init(); 
 /*END WOW ANIMATION JS*/



//   wow = new WOW(
//     {
//         animateClass: 'animated',
//         offset: 100,
//         callback: function (box) {
//             console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
//         }
//     }
// );
// wow.init();

})(jQuery);	