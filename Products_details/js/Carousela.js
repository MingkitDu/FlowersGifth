function Carousela(selector){
	
	this.ele = $(selector).get(0);
	this.count = 0;
	this.itemSelect();
}



Carousela.prototype.itemSelect = function(){
	var _this = this;
	
	$(_this.ele).find('.select_point1').find('a').on({
		mouseenter:function(){
			_this.count = $(this).index();
			$(_this.ele).find('.pro_list li').css('opacity','0')
			$(_this.ele).find('.pro_list li').eq(_this.count).animate({'opacity':'1'})
			$(_this.ele).find('a').css('color','#666')
			$(_this.ele).find('span').css('background-position-y','0px')
			$(this).find('span').css('background-position-y','-60px')
			$(this).css('color','#FF6A00')
			
		}
	})
	
}


