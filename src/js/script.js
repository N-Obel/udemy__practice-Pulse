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

	$('ul.tabs__caption').on('click', 'li:not(.active)', function () {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	});
});
