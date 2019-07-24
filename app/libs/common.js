








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



var $toggleButton = $('.toggle-button'),
    	$menuWrap = $('.menu-wrap'),
    	$sidebarArrow = $('.sidebar-menu-arrow');

	// Hamburger button

	$toggleButton.on('click', function() {
		$(this).toggleClass('button-open');
		$menuWrap.toggleClass('menu-show');
	});

	// Sidebar navigation arrows

	$sidebarArrow.click(function() {
		$(this).next().slideToggle(300);
	});









});