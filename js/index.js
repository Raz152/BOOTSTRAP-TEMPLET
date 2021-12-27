$(document).ready(function () {
	//  show .scroll-up div
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.scroll-up').slideDown(500);
		} else {
			$('.scroll-up').slideUp(500);
		}
	});
	// btn click animate
	$('.scroll-btn').click(function () {
		$('html,body').animate({ scrollTop: 0 }, 200);
	});
});
