

function Phoneregistercheck(selector){
	
	this.ele = $(selector).get(0);
	this.action();
}

Phoneregistercheck.prototype.action = function(){
	
	this.randomNum = parseInt(Math.random()*8999 + 1000);
	var _this = this;
	$(this.ele).find('.identify').html(_this.randomNum);
	
	$(this.ele).find('.change').click(function(){
		
		 _this.randomNum = parseInt(Math.random()*8999 + 1000);
		 $(_this.ele).find('.identify').html(_this.randomNum);
		
	})
//	很抱歉!请输入有效的手机号！
//	请输入您的登录密码且密码不能小于6位!
	var patternLoginPhoneName = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[05-9]))\d{8}$/;
	var patternLoginPassword = /^\S{6,}$/
	
	$(this.ele).find('.register_button').click(function(){
		
		if(!$(_this.ele).find('.phonenum').val()){
			
			$(_this.ele).find('.logincheck').css('display','block')
			$(_this.ele).find('.logincheck').html('手机号不能为空，请您重新输入！!')
			
		}
		else if(!patternLoginPhoneName.test($(_this.ele).find('.phonenum').val())){
			
			$(_this.ele).find('.logincheck').css('display','block')
			$(_this.ele).find('.logincheck').html('很抱歉!请输入有效的手机号！')
			
		}
		else if(!patternLoginPassword.test($(_this.ele).find('.userpass').val())){
			
			$(_this.ele).find('.logincheck').css('display','block')
			$(_this.ele).find('.logincheck').html('请输入您的登录密码且密码不能小于6位！')
			
		}
		else if($(_this.ele).find('.identifytext').val() != _this.randomNum){
			$(_this.ele).find('.logincheck').css('display','block')
			$(_this.ele).find('.logincheck').html('请输入正确的验证码')
		}
		else if($(_this.ele).find('.messageident').val() != _this.messagenum){
			$(_this.ele).find('.logincheck').css('display','block')
			$(_this.ele).find('.logincheck').html('手机验证码不正确')
		}
		else{
			$(_this.ele).find('.logincheck').css('display','none')
			axajFn2();
		}
		
	})
	//获取手机验证码
	$(this.ele).find('.get_num').click(function(){
		
		if(!$(_this.ele).find('.phonenum').val()){
			
			$(_this.ele).find('.logincheck').css('display','block')
			$(_this.ele).find('.logincheck').html('手机号不能为空，请您重新输入！!')
			
		}
		else if(!patternLoginPhoneName.test($(_this.ele).find('.phonenum').val())){
			
			$(_this.ele).find('.logincheck').css('display','block')
			$(_this.ele).find('.logincheck').html('很抱歉!请输入有效的手机号！')
			
		}
		else{
			_this.messagenum = parseInt(Math.random()*899999 + 100000);
			$(_this.ele).find('.logincheck').css('display','none')
			alert(_this.messagenum)
		}
		
	})
	
}

function axajFn2(){
	$.ajax({
		url:'../html/registercheck.php',
		dataType:'json',
		data:{
			username:$('.phonenum').val(),
			password:$('.phoneregister_contant').find('.userpass').val()
		},
		success:function(data){
			alert(data.content);
		},
		error:function(xhr){
			console.log(xhr.responseText);
		}
	});
}