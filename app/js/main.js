$(document).ready(function () {

//SCROLL
$('a[data-target="menu"]').click(function () {
	var target = $(this).attr('href');
	$('a').removeClass('active');
	$(this).addClass('active');
	$('html, body').animate({ scrollTop: $(target).offset().top }, 700);
});

//Click Form
	$('#form input').click(function () {
	$(this).next('label').addClass('labelClick');

});
$(document).mouseup(function (e) { // событие клика по веб-документу
	var div = $("#form"); // тут указываем ID элемента
	var test = $("label"); // тут указываем ID элемента
	var name = $("#form input"); // тут указываем ID элемента

	if (!div.is(e.target) // если клик был не по нашему блоку
		// && div.has(e.target).length === 0 // и не по его дочерним элементам
		&& name.val() == '') //и если блок пустой
	{
		test.removeClass('labelClick') // скрываем его
	}
	});
//Magnific
	$('.imgPhoto a').click(function (e) {
		e.preventDefault();
	});
	$('.imgPhoto a').magnificPopup({
		disableOn: 400,
		type: 'image',
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});
//MMENU
	$('#mbutton').click(function () {
		$('.hamburger--slider').toggleClass('is-active');
		$(this).toggleClass('full');
		$('body').toggleClass('leftSlide');
	});

//MAIL
	$("form").submit(function () { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function () {
			alert("Thank you!");
			setTimeout(function () {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
});


//Show OnTop Section
$(document).scroll(function () {
	var y = $(this).scrollTop();
	if (y > 300) {
		$('.onTop').show();
	} else {
		$('.onTop').hide();

	}

});
