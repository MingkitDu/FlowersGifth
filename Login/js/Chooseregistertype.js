

function Chooseregistertype(selector){
	this.ele = $(selector).get(0);
	this.action();
}

Chooseregistertype.prototype.action = function(){
	
	var _this = this;
	$(this.ele).find('.usephonr_reg a').click(function(){
		
		$(_this.ele).find('.login_contant').css('display','none')
		
		$(_this.ele).find('.phonelogin_contant').css('display','none')
		
		$(_this.ele).find('.register_contant').css('display','none')
		
		$(_this.ele).find('.phoneregister_contant').css('display','block')
		
	})
	
	$(this.ele).find('.useemail_reg a').click(function(){
		
		$(_this.ele).find('.login_contant').css('display','none')
		
		$(_this.ele).find('.phonelogin_contant').css('display','none')
		
		$(_this.ele).find('.phoneregister_contant').css('display','none')
		
		$(_this.ele).find('.register_contant').css('display','block')
		
	})
	
}
