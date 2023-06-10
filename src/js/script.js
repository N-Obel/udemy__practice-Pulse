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

	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
		$(this)
			.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
			.closest('div.catalog__container').find('div.catalog__items').removeClass('catalog__items_active').eq($(this).index()).addClass('catalog__items_active');
	});

	$('.item-catalog__link').each(function (i) {
		$(this).on('click', function (e) {
			e.preventDefault();
			$('.item-catalog__content').eq(i).toggleClass('item-catalog__content_active');
			$('.item-catalog__list').eq(i).toggleClass('.item-catalog__list_active');
		})
	});

	$('.item-catalog__back').each(function (i) {
		$(this).on('click', function (e) {
			e.preventDefault();
			$('.item-catalog__content').eq(i).toggleClass('item-catalog__content_active');
			$('.item-catalog__list').eq(i).toggleClass('.item-catalog__list_active');
		})
	});
});
