$(document).ready(function() {
	// Scroll user to content sections
	$('.navlink').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop: $($(this).attr('href')).offset().top}, 600);
	});

	// Model Unit Gallery
	$('.fancybox').fancybox();

	// Display back to top button on long pages
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('#back_to_top').fadeIn();
		} else {
			$('#back_to_top').fadeOut();
		}
	});

	// Scroll user back to top when button is clicked
	$('#back_to_top a').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop: 0}, 600);
	});
});
