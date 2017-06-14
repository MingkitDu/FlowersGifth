

function Login(selector){
	this.ele = $(selector).get(0)
	this.selectbtn();
}

Login.prototype.selectbtn = function(){
	var _this = this;
	
	$(this.ele).find('.login_btn').click(function(){
		if($(this).is('.select_btn')){
			
		}else{
			$(_this.ele).find('.select_line').css('left',0)
			$(this).addClass('select_btn');
			$(_this.ele).find('.register_btn').removeClass('select_btn')
			$(_this.ele).find('.login_contant').css('display','block')
			$(_this.ele).find('.phonelogin_contant').css('display','none')
			$(_this.ele).find('.register_contant').css('display','none')
			$(_this.ele).find('.phoneregister_contant').css('display','none')
		}
		
	})
	
	$(this.ele).find('.register_btn').click(function(){
		if($(this).is('.select_btn')){
			
		}else{
			$(_this.ele).find('.select_line').css('left',102)
			$(this).addClass('select_btn');
			$(_this.ele).find('.login_btn').removeClass('select_btn')
			$(_this.ele).find('.register_contant').css('display','block')
			$(_this.ele).find('.phoneregister_contant').css('display','none')
			$(_this.ele).find('.login_contant').css('display','none')
			$(_this.ele).find('.phonelogin_contant').css('display','none')
		}
		
	})
}
