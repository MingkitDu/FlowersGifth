
function Chooselogintype(selector){
	this.ele = $(selector).get(0);
	this.action();
}

Chooselogintype.prototype.action = function(){
	
	var _this = this;
	$(this.ele).find('.usephone a').click(function(){
		
		$(_this.ele).find('.login_contant').css('display','none')
		
		$(_this.ele).find('.phonelogin_contant').css('display','block')
		
		$(_this.ele).find('.register_contant').css('display','none')
		
	})
	
	$(this.ele).find('.useemail a').click(function(){
		
		$(_this.ele).find('.login_contant').css('display','block')
		
		$(_this.ele).find('.phonelogin_contant').css('display','none')
		
	})
	
}
