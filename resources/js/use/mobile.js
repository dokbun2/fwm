$(document).ready(function (){
	var $mbMenuTit=$(".sub_container .sub_menu .mb_menu_tit");

	$mbMenuTit.on("click", function() {
		if($(this).hasClass("on")){
			$(this).removeClass("on").next().slideUp();
		} else {
			$(this).addClass("on").next().slideDown();
		}

		return false;
	});
});