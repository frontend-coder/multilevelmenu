








$(document).ready(function () {

	$('.owl-carousel').owlCarousel({
    rtl:true,
    autoplay:true,
    autoplayTimeout: 3000,
    autoplayHoverPause:true,
    loop:true,
    margin:10,
  //  nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

//https://devacademy.ru/article/kak-sozdat-bokovoe-vypadaiushchee-meniu-s-pomoshchiu-css-i-jquery/
https://www.templatemonster.com/blog/demos/slide-out-menu-css3-jquery/slide-out-menu-templatemonster.html#




  $(".burge").on('click',function(){
    $(this).find(".burger_button").toggleClass("burger_button_active");
     $(this).find(".burger_nav").toggleClass("burger_active");
     $(this).find(".burger_overlay").toggleClass("burger_overlay_active");
     $("body").toggleClass("body_hidden");
    });

	$('.burger_button').on('click', (e) => {
			e.preventDefault();
	});









});