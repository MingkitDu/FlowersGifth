

function Registercheck(selector){
	this.ele = $(selector).get(0);
	this.action();
}

Registercheck.prototype.action = function(){
	
	this.randomNum = parseInt(Math.random()*8999 + 1000);
	var _this = this;
	$(this.ele).find('.identify').html(_this.randomNum);
	
	$(this.ele).find('.change').click(function(){
		
		 _this.randomNum = parseInt(Math.random()*8999 + 1000);
		 $(_this.ele).find('.identify').html(_this.randomNum);
		
	})

	var patternLoginName = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
	var patternLoginPassword = /^\S{6,}$/
	
	$(this.ele).find('.register_button').click(function(){
		
		if(!$(_this.ele).find('.useremail').val()){
			$(_this.ele).find('.logincheck').css('display','block')
			$(_this.ele).find('.logincheck').html('请输入你的Email地址!')
		}
		else if(!patternLoginName.test($(_this.ele).find('.useremail').val())){
			$(_this.ele).find('.logincheck').css('display','block')
			$(_this.ele).find('.logincheck').html('请输入有效的Email地址!')
		}
		else if(!patternLoginPassword.test($(_this.ele).find('.userpass').val())){
			$(_this.ele).find('.logincheck').css('display','block')
			$(_this.ele).find('.logincheck').html('此项为必填项，密码不能小于6位!')
		}
		else if($(_this.ele).find('.con_userpass').val() != $(_this.ele).find('.userpass').val()){
			$(_this.ele).find('.logincheck').css('display','block')
			$(_this.ele).find('.logincheck').html('两次输入密码不一致，请重新输入！')
		}
		else if($(_this.ele).find('.identifytext').val() != _this.randomNum){
			$(_this.ele).find('.logincheck').css('display','block')
			$(_this.ele).find('.logincheck').html('请输入正确的验证码')
		}
		else{
			$(_this.ele).find('.logincheck').css('display','none')
			axajFn1();
		}
		
	})
	
}

function axajFn1(){
	$.ajax({
		url:'../html/registercheck.php',
		dataType:'json',
		data:{
			username:$('.useremail').val(),
			password:$('.register_contant').find('.userpass').val()
		},
		success:function(data){
			alert(data.content);
		},
		error:function(xhr){
			console.log(xhr.responseText);
		}
	});
}


	

