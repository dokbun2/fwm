function toTop(){
	$("html, body").stop().animate({scrollTop:300});
}

function popupOpen(type){
	//alert("type: "+type);
	var box = $(".popup-box > .box[data-name=" + type + "]");

	$("html , body , .popup-box").addClass("fixed");
	box.addClass("active");
	box.siblings().removeClass("active");
}

function popupClose(){
	$("html , body , .popup-box").removeClass("fixed");
}

function menuOpen(){
	$("html , body , header").addClass("fixed");
}

function menuClose(){
	$("html , body , header").removeClass("fixed");
}

// 외부영역 클릭 시 특정요소 닫기
$(document).mouseup(function (e){
	var popupBox = $(".popup-box");	 
	var menuBox = $(".header-mobile");

	if(popupBox.has(e.target).length === 0){
		$("html , body , .popup-box").removeClass("fixed");
	}	
	if(menuBox.has(e.target).length === 0){
		$("html , body , header").removeClass("fixed");
	}	
});

// 탭
$(document).on("click", ".tab-box ul li a ", function(){
	var parents = $(this).closest("li");
	var index = parents.index();
	var box = $(".tab-content-box .tab-content");

	parents.addClass("active");
	parents.siblings().removeClass("active");
	box.eq(index).addClass("active");
	box.eq(index).siblings().removeClass("active");
});

/* 인풋박스 입력 */
$(document).on("keyup",".input-box input",function(){
	var box = $(this).closest(".input-box");
	var del = box.find(".input-delete-box");
	var redex = /\s/ig;
	var value = $(this).val().toString().replace(redex, "").length;

	// 띄어쓰기를 제외한 글자가 존재하다면
	if(value > 0){
		// 인풋박스 내 삭제버튼이 있다면
		if(del.length > 0){
			del.addClass("active");
		}
	}else{
		// 인풋박스 내 삭제버튼이 있다면
		if(del.length > 0){
			del.removeClass("active");
		}
	}
});

/* 인풋박스 포커스 */
$(document).on("focus",".input-box input",function(){
	var box = $(this).closest(".input-box");

	box.addClass("focus");
});

/* 인풋박스 블러 */
$(document).on("blur",".input-box input",function(){
	var box = $(this).closest(".input-box");

	box.removeClass("focus");

	var redex = /\s/ig;
	var value = $(this).val().toString().replace(redex, "").length;

	// 형제 인풋요소가 비어있다면 비활성화
	if(box.find("input").length > 1){
		var child = box.find("input").not($(this));
		var childvalue = child.val().toString().replace(redex, "").length;
		if(childvalue == 0) box.removeClass("active");
	}
	
	// 띄어쓰기를 제외한 글자가 존재하다면
	if(value > 0){
		box.addClass("active");
	}else{
		box.removeClass("active");
	}
});

/* 인풋박스 입력 */
$(document).on("keyup",".textarea-box textarea",function(){
	var box = $(this).closest(".textarea-box");
	var del = box.find(".input-delete-box");
	var redex = /\s/ig;
	var value = $(this).val().toString().replace(redex, "").length;
});

/* 인풋박스 포커스 */
$(document).on("focus",".textarea-box textarea",function(){
	var box = $(this).closest(".textarea-box");

	box.addClass("focus");
});

/* 인풋박스 블러 */
$(document).on("blur",".textarea-box textarea",function(){
	var box = $(this).closest(".textarea-box");

	box.removeClass("focus");

	var redex = /\s/ig;
	var value = $(this).val().toString().replace(redex, "").length;
	
	// 띄어쓰기를 제외한 글자가 존재하다면
	if(value > 0){
		box.addClass("active");
	}else{
		box.removeClass("active");
	}
});     

/* 셀렉박스 옵션선택 포커스 */
$(document).on("change",".select-box select",function(){
	var box = $(this).closest(".select-box");
	var opt = $(this).find("option:selected").val();
	var redex = /\s/ig;
	var value = opt.toString().replace(redex, "").length;

	// 띄어쓰기를 제외한 글자가 존재하다면
	if(value > 0){
		box.addClass("active");
	}else{
		box.removeClass("active");	   
	}
});  

/* 체크박스 전체동의 */
$(document).on("change",".check-total-box .check-total input",function(){
	var type = $(this).attr("data-name");
	$(".check-total-box .check-list input").prop("checked" , $(this).prop("checked"));
});

$(document).on("change",".check-total-box .check-list input",function(){
	var len = $(".check-total-box .check-list input").length;
	var checklen = $(".check-total-box .check-list input:checked").length;

	if(len > checklen) $(".check-total-box .check-total input").prop("checked",false);
	if(len == checklen) $(".check-total-box .check-total input").prop("checked",true);
});

/* 카운트 */		
$(document).on("click", ".count-box a", function(){	
	var parents = $(this).closest(".count-box");
	var input = parents.find("input");
	var num = Number(input.val());

	if( $(this).hasClass("minus") == true ){
		num--;	
		if(num < 1){
			alert('최소 수량입니다.');
			return false;
		}
	}else{
		num++;
	}

	input.val(num);
});



function selectAll(selectAll)  {
  const checkboxes 
       = document.getElementsByName('check');
  
  checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAll.checked;
  })
}

// 오직 숫자로만 입력
function onlyNumber(obj){
	var keyCode = obj.value;
	var returnValue = keyCode.replace(/[^0-9]/g,"");
	
	obj.value = returnValue;
}

//날짜 형식변환 -
function fn_dateMask(dateStr){
	var setValue = "";
	if(typeof dateStr == "null" || typeof dateStr == "undefined" || dateStr == ""){
		setValue = "";
	}else{
		setValue = dateStr.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3');
	}
	
	return setValue;
}

//날짜 형식변환 .
function fn_dateDotMask(dateStr){
	var setValue = "";
	if(typeof dateStr == "null" || typeof dateStr == "undefined" || dateStr == ""){
		setValue = "";
	}else{
		setValue = dateStr.replace(/(\d{4})(\d{2})(\d{2})/, '$1.$2.$3');
	}
	
	return setValue;
}

/**
* 숫자에 comma를 붙인다.
*
* @param	str
*/
function addCommaStr(str) {

	if(typeof str == 'number') {
		str = "" + str;
	}

	var num = "";
	var sign = "";

	if (str[0] == "+" || str[0] == "-"){
		sign = str[0];
		str = str.substr(1);
	}

	var index = str.indexOf('.');

	if (index != -1){
		num = str.substr(index);
	}else{
		index = str.length;
	}

	for(var i = index - 3; i > 0; ){
		num = ',' + str.substr(i, 3) + num;
		index = i;
		i -= 3;
	}
	num = sign + str.substr(0, index) + num;

	return	num;
}