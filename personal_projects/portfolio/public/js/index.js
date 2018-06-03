
$(document).ready(function() {
	$("#nav-icon, .closebtn").click(function() {
		$("#nav-icon").toggleClass("nav-icon_hide");
	})

	$("#header > h1").delay(500).animate({top:"20px"},2000);

	$(".sticky-container").css("display","none").slideDown(2000);

	$("#nav-icon").css("display","none").slideDown(2000);

})

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

  function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
