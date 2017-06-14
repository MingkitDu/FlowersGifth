function Carousel(selector){
	
	this.ele = $(selector).get(0);
	this.count = 0;
	this.action();
	this.itemSelect();
}

Carousel.prototype.action = function(){
	var _this = this;
	$(_this.ele).find('.right').click(function(){
		_this.count++;
		if(_this.count > $(_this.ele).find('li').length - 1){
			 _this.count = 0;
		}
		$(_this.ele).find('li').css('opacity','0')
		$(_this.ele).find('li').eq(_this.count).animate({'opacity':'1'})
		$(_this.ele).find('.select_point').find('p').removeClass('choice')
		$(_this.ele).find('.select_point').find('p').eq(_this.count).addClass('choice')
		
	})
	
	$(_this.ele).find('.left').click(function(){
		_this.count--;
		if(_this.count < 0){
			 _this.count = $(_this.ele).find('li').length -1;
		}
		$(_this.ele).find('li').css('opacity','0')
		$(_this.ele).find('li').eq(_this.count).animate({'opacity':'1'})
		$(_this.ele).find('.select_point').find('p').removeClass('choice')
		$(_this.ele).find('.select_point').find('p').eq(_this.count).addClass('choice')
		
	})
	
	
}

Carousel.prototype.itemSelect = function(){
	var _this = this;
	
	$(_this.ele).find('.select_point').find('p').on({
		mouseenter:function(){
			_this.count = $(this).index();
			$(_this.ele).find('li').css('opacity','0')
			$(_this.ele).find('li').eq(_this.count).animate({'opacity':'1'})
			$(_this.ele).find('.big').css('background','url(../../img/product_dbig_0'+(_this.count+1)+'.jpg)')
			$(_this.ele).find('.select_point').find('p').removeClass('choice')
			$(_this.ele).find('.select_point').find('p').eq(_this.count).addClass('choice')
			
		}
	})
	
}


