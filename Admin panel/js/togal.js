$('.bar').click(function (){
    $('.head').toggleClass("headnew");
    $('.content').toggleClass("contentnew"); 
    $('.slidebar').toggle();
});


$('.sub-manu-dashboard').click(function (){
  $('.sub-dashboard').slideToggle("slow")
});
// couner js
$(document).ready(function() {
    var mySwiper = new Swiper(".swiper-container", {
      spaceBetween: 1,
      slidesPerView: 1,
      centeredSlides: true,
      roundLengths: true,
      loop: true,
      loopAdditionalSlides: 30,
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
        
      }
    });
  });
  

  // countr

  
	$.fn.jQuerySimpleCounter = function( options ) {
    var settings = $.extend({
        start:  0,
        end:    100,
        easing: 'swing',
        duration: 500,
        complete: ''
    }, options );

    var thisElement = $(this);

    $({count: settings.start}).animate({count: settings.end}, {
    duration: settings.duration,
    easing: settings.easing,
    step: function() {
      var mathCount = Math.ceil(this.count);
      thisElement.text(mathCount);
    },
    complete: settings.complete
  });
};


$('#number1').jQuerySimpleCounter({end: 2500,duration: 3000});
$('#number2').jQuerySimpleCounter({end: 123.05,duration: 3000});
$('#number3').jQuerySimpleCounter({end: 1805,duration: 3000});
$('#number4').jQuerySimpleCounter({end: 54,duration: 3000});