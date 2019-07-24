








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



// $('.burger_button').on('click', function(){
// $('burger_nav').toggleClass('burger_active');


// }
// );


  $(".burge").on('click',function(){
    $(this).find(".burger_button").toggleClass("burger_button_active");
     $(this).find(".burger_nav").toggleClass("burger_active");
     $(this).find(".burger_overlay").toggleClass("burger_overlay_active");
   // $(this).toggleClass("burger_active");
  });










	// let mnu = burger_button$(selector);

	// 	lnk.on('click', () => toggleMenu());


	// function burgerMenu(selector) {
	// 	let mnu = $(selector);
	// 	let btn = mnu.find('.burger_button');
	// 	let lnk = mnu.find('.burger_link');
	// 	let overlay = mnu.find('.burger_overlay');

	// 	btn.on('click', (e) => {
	// 		e.preventDefault();
	// 		toggleMenu();
	// 	});
	// 	lnk.on('click', () => toggleMenu());
	// 	overlay.on('click', () => toggleMenu());

	// 	function toggleMenu() {
	// 		mnu.toggleClass('burger_active');
	// 		if (mnu.hasClass('burger_active')){
	// 			$('body').css('overflow', 'hidden');
	// 		} else {
	// 			$('body').css('overflow', 'visible');
	// 		}
	// 	}
	// }
	// burgerMenu('.burger');





});