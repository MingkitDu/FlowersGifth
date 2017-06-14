function Phonelogincheck(selector){
	this.ele = $(selector).get(0);
	this.action();
}

Phonelogincheck.prototype.action = function(){
	
	var _this = this;
	var patternLoginPhoneName = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[05-9]))\d{8}$/;
	
	$(this.ele).find('.login_button').click(function(){
		
		 if(!patternLoginPhoneName.test($(_this.ele).find('.check_userphone').val())){
		 	
		 	$(_this.ele).find('.logincheck').css('display','block');
			$(_this.ele).find('.logincheck').html('请输入正确的手机号')
		 
		 }else if($(_this.ele).find('.check_num').val() != _this.identNum){
		 	$(_this.ele).find('.logincheck').css('display','block');
			$(_this.ele).find('.logincheck').html('验证码不正确')
		 }else{
		 	$(_this.ele).find('.logincheck').css('display','none');
		 	axajFn4()
		 }
		
	})
	

	$(_this.ele).find('.get_num').click(function(){
		
		 if(!patternLoginPhoneName.test($(_this.ele).find('.check_userphone').val())){
		 	
		 	$(_this.ele).find('.logincheck').css('display','block');
			$(_this.ele).find('.logincheck').html('请输入正确的手机号')
		 
		 }else{
		 	$(_this.ele).find('.logincheck').css('display','none');
			_this.identNum = parseInt(Math.random() * 899999 + 100000);
			alert(_this.identNum)
		 }
	})
	
	
}

function axajFn4(){
	$.ajax({
		url:'../html/phonelogincheck.php',
		dataType:'json',
		data:{
			username:$('.check_userphone').val()
		},
		success:function(data){
			alert(data.content);
		},
		error:function(xhr){
			console.log(xhr.responseText);
		}
	});
}
