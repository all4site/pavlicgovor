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
