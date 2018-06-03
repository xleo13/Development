$(document).ready(function() {
	$("#h2").css("display", "none").slideDown(1000);

	$(window).scroll(function() {
		if ($(this).scrollTop() > 200) {
			$("#menu").fadeOut(500);
		} else {
			$("#menu").fadeIn(500);
		}
	})

})
