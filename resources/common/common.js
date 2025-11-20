function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function dateWithhyphen(d){
    if(!d) return "";
    return d.substring(0,4) +"-"+ d.substring(4,6) +"-"+ d.substring(6,8);
}

//날짜 형식변환
function fn_dateMask(dateStr){
	var setValue = "";
	if(typeof dateStr == "null" || typeof dateStr == "undefined" || dateStr == ""){
		setValue = "";
	}else{
		setValue = dateStr.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3');
	}
	
	return setValue;
}

//날짜 형식변환 YYYY.MM.DD
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
* 날짜에서 "-"를 없앤다.
*
* @param	str
*/
function retDateFormat(str) 
{
	var temp = '';
	if (str == "" || str == null || str == undefined)
		return str;

	for(var i = 0; i < str.length; i++){
		if (str.charAt(i) == '-'){
			
		}else{
			temp += str.charAt(i);
		}
	}
	return	temp;
}


/**
* 숫자에서 comma를 없앤다.
*
* @param	str
*/
function deleteCommaStr(str){
	var temp = '';

	if (str == "" || str == null || str == undefined)
		return str;

	for(var i = 0; i < str.length; i++){
		if (str.charAt(i) == ','){
			
		}else{
			temp += str.charAt(i);
       }
   }
   return	temp;
}

/**
* 숫자에 comma를 붙인다.
*
* @param	str
*/
function addCommaStr(txt) {
	var num = "";
	var sign = "";
	
	str = String(txt);

	if (str.charAt(0) == "+" || str.charAt(0) == "-"){
		sign = str.charAt(0);
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

/**
* 숫자에서 comma를 없앤다.
*
* @param	str
*/
function deleteCommaStr(str){
	var temp = '';

	if (str == "" || str == null || str == undefined)
		return str;

	for(var i = 0; i < str.length; i++){
		if (str.charAt(i) == ','){
			
		}else{
			temp += str.charAt(i);
       }
   }
   return	temp;
}

// 오직 숫자로만 입력
function onlyNumber(obj){
	var keyCode = obj.value;
	var returnValue = keyCode.replace(/[^0-9]/g,"");
	
	obj.value = returnValue;
}

function isEmpty(str){
    
    if(typeof str == "undefined" || str == null || str == "")
        return true;
    else
        return false ;
}
