$(document).ready(function () {
	$('.body-slider').slick({
		speed: 1200,
		/* adaptiveHeight: true, */
		prevArrow: '<button type="button" class="slick-prev"><img src="../img/icons/prev.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="../img/icons/next.svg"></button>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					arrows: false,
					dots: true
				}
			}
		]
	});
});
