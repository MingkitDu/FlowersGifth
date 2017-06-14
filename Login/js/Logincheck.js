

function Logincheck(selector){
	
	this.ele = $(selector).get(0);
	this.action();
}

Logincheck.prototype.action = function(){
	var _this = this;
	$(this.ele).find('.login_button').click(function(){
		
		var patternLoginName = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
		var patternLoginPhoneName = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[05-9]))\d{8}$/;
		var patternLoginPassword = /^\S{6,}$/
	
		if(!patternLoginName.test($(_this.ele).find('.login_username').val()) && !patternLoginPhoneName.test($(_this.ele).find('.login_username').val())){
			$(_this.ele).find('.logincheck').css('display','block');
			$(_this.ele).find('.logincheck').html('请输入有效的Email地址或手机号码')
			
		}else if(!patternLoginPassword.test($(_this.ele).find('.login_userpass').val())){
			$(_this.ele).find('.logincheck').css('display','block');
			$(_this.ele).find('.logincheck').html('请输入密码，密码不能小于6位！')
		}else{
			$(_this.ele).find('.logincheck').css('display','none');
			axajFn3();
			console.log($('.login_username').val())
			console.log($('.login_userpass').val())
		}
	})
}

function axajFn3(){
	$.ajax({
		url:'../html/logincheck.php',
		dataType:'json',
		data:{
			username:$('.login_username').val(),
			password:$('.login_userpass').val()
		},
		success:function(data){
			alert(data.content);
		},
		error:function(xhr){
			console.log(xhr.responseText);
		}
	});
}



