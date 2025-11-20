$(document).ready(function (){
	var $clSelectxt=$("#counselList .sub_container .content_box .txt .util_wrap .right .select_box .select_txt");
	var $clSelectLi=$("#counselList .sub_container .content_box .txt .util_wrap .right .select_box .select_list li");
	//var $faqTabA=$("#faq .sub_container .content_box .txt .tab_split .tab_btn li a");
	var $faqQ=$("#faq .sub_container .content_box .txt .tab_split .tab_cnt > div ul .td .question");
	var $entryFile=$("#entryWrite .sub_container .content_box .txt .write_wrap ul li.write_file .file_box #file");
	var $entryUpName=$("#entryWrite .sub_container .content_box .txt .write_wrap ul li.write_file .file_box .upload_name");
	var $storyTabA=$("#story .sub_container .content_box .txt .tab_split .tab_btn li a");
	var $eventTabA=$("#event .sub_container .content_box .txt .tab_split .tab_btn li a");

	$clSelectxt.on("click", function () {
		var $select=$(this).parent(".select_box");
		var $list=$(this).siblings(".select_list");

		if( !$select.hasClass("focus") ){
			$select.addClass("focus");
			$list.stop().slideDown(200);
		} else {
			$list.stop().slideUp(200, function(){
				$select.removeClass("focus");
			});
		}
  	});

	$clSelectLi.on("click", function () {
		var $select=$(this).parents(".select_box");
		var $txt=$select.find(".select_txt");
		var $list=$(this).parents(".select_list");
		var $this=$(this);

		$txt.text($this.text());
		$select.addClass("selected");
		$list.stop().slideUp(200, function(){
			$select.removeClass("focus");
		});
  });

	/*$faqTabA.on("click", function() {
		var tgIdx=$(this).parent().index();

		$(this).parent().addClass("on").siblings().removeClass("on");
		//$(this).closest(".tab_split").find(">.tab_cnt>div").eq(tgIdx).show().siblings().hide();

		return false;
	});*/

	$faqQ.on("click", function() {
		if($(this).hasClass("on")){
			$(this).removeClass("on").next().slideUp();
		} else {
			$(this).addClass("on").next().slideDown();
		}
	});

	$("#checkAll").click(function() {
		if($("#checkAll").is(":checked")) {
      $("input[name=agree-name]:not(:disabled)").prop("checked", true);
    } else {
      $("input[name=agree-name]:not(:disabled)").prop("checked", false);
    }
	});

	$("input[name=agree-name]:not(:disabled)").click(function() {
		var total = $("input[name=agree-name]:not(:disabled)").length;
		var checked = $("input[name=agree-name]:not(:disabled):checked").length;

		if(total != checked) $("#checkAll").prop("checked", false);
		else $("#checkAll").prop("checked", true); 
	});

	$entryFile.on('change',function(event){
		var fileName = $("#file").val();
		$entryUpName.val(fileName);
		var target = event.target;
	    var files = target.files;
	    var file = files[0];
	    $("#user_file").val(file);
	});

	$storyTabA.on("click", function() {
		var tgIdx=$(this).parent().index();

		$(this).parent().addClass("on").siblings().removeClass("on");
		$(this).closest(".tab_split").find(">.tab_cnt>div").eq(tgIdx).show().siblings().hide();

		return false;
	});

	$eventTabA.on("click", function() {
		var tgIdx=$(this).parent().index();

		$(this).parent().addClass("on").siblings().removeClass("on");
		$(this).closest(".tab_split").find(">.tab_cnt>div").eq(tgIdx).show().siblings().hide();

		return false;
	});
});


function popupOpen(type){
	var box = $(".popup-box > .box[data-name=" + type + "]");

	$("html , body , .popup-box").addClass("fixed");
	box.addClass("active");
	box.siblings().removeClass("active");
}

function popupClose(){
	$("html , body , .popup-box").removeClass("fixed");
}
