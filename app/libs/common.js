








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
})



$('button.effect1').on('click',function(){
  $(this).find('span').toggleClass('active');
  $('.hamburger').toggleClass("hamburger_active");
  $(".top_sidemenu").toggleClass("top_sidemenu-active");
});

$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}

	var accordion = new Accordion($('#accordion'), false);
});


});