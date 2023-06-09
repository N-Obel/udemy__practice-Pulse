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

	// Modal windows

	$('[data-modal="consultation"]').on('click', function () {
		$('.overlay, #consultation').fadeIn('slow');
	});

	$('.modal__close').on('click', function () {
		$('.overlay, #consultation, #order, #thanks').fadeOut('slow');
	});

	$('.button_mini').each(function (i) {
		$(this).on('click', function () {
			$('#order .modal__descr').text($('.item-catalog__title').eq(i).text());
			$('.overlay, #order').fadeIn('slow');
		});
	});

	//Validate forms

	function valideForms(form) {
		$(form).validate({
			rules: {
				name: 'required',
				phone: 'required',
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				name: 'Пожалуйста, введите Ваше имя',
				phone: 'Пожалуйста, введите Ваш номер телефона',
				email: {
					required: 'Пожалуйста, введите Ваш почтовый адрес',
					email: 'Неверно введен почтовый адрес'
				}
			}
		})
	};

	valideForms('#start-form');
	valideForms('#consultation form');
	valideForms('#order form');

	// Message

	$('form').submit(function (e) {
		e.preventDefault();

		if (!$(this).valid()) {
			return;
		}
		$.ajax({
			type: 'POST',
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function () {
			$(this).find('input').val('');
			$('#consultation, #order').fadeOut();
			$('.overlay, #thanks').fadeIn('slow');
			$('form').trigger('reset');
		});
		return false;
	});

	// Scroll up (arrow)

	$(window).scroll(function () {
		if ($(this).scrollTop() > 1600){
			$('.pageup').fadeIn();
		} else {
			$('.pageup').fadeOut();
		}
	})

});
