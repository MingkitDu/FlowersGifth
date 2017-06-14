function Carousel(selector){
	
	this.ele = $(selector).get(0);
	this.count = 0;
	this.timer = setInterval(this.timerAction.bind(this),5000);
	this.action();
	this.pauseAction();
	this.itemSelect();
}

Carousel.prototype.action = function(){
	var _this = this;
	$(_this.ele).parent().find('.right').click(function(){
		_this.count++;
		if(_this.count > 2){
			 _this.count = 0;
		}
		$(_this.ele).find('li').css('opacity','0')
		$(_this.ele).find('li').eq(_this.count).animate({'opacity':'1'})
		$(_this.ele).parent().find('.select_point').find('li').removeClass('choice')
		$(_this.ele).parent().find('.select_point').find('li').eq(_this.count).addClass('choice')
	})
	
	$(_this.ele).parent().find('.left').click(function(){
		_this.count--;
		if(_this.count < 0){
			 _this.count = 2;
		}
		$(_this.ele).find('li').css('opacity','0')
		$(_this.ele).find('li').eq(_this.count).animate({'opacity':'1'})
		$(_this.ele).parent().find('.select_point').find('li').removeClass('choice')
		$(_this.ele).parent().find('.select_point').find('li').eq(_this.count).addClass('choice')
	})
}

Carousel.prototype.itemSelect = function(){
	var _this = this;
	
	$(_this.ele).parent().find('.select_point').find('li').on({
		mouseenter:function(){
			_this.count = $(this).index();
			$(_this.ele).find('li').css('opacity','0')
			$(_this.ele).find('li').eq(_this.count).animate({'opacity':'1'})
			$(_this.ele).parent().find('.select_point').find('li').removeClass('choice')
			$(_this.ele).parent().find('.select_point').find('li').eq(_this.count).addClass('choice')
			clearInterval(_this.timer);
			
		},
		mouseleave:function(){
			//重启定时器
			_this.timer = setInterval(_this.timerAction.bind(_this),2000);
			
		}
	})
	
}


Carousel.prototype.timerAction = function(){
	
	
	var _this = this;
	_this.count++;
	if(_this.count > 2){
		 _this.count = 0;
	}
	$(_this.ele).find('li').css('opacity','0')
	$(_this.ele).find('li').eq(_this.count).animate({'opacity':'1'})
	$(_this.ele).parent().find('.select_point').find('li').removeClass('choice');
	$(_this.ele).parent().find('.select_point').find('li').eq(_this.count).addClass('choice')
	
}

Carousel.prototype.pauseAction = function(){
	var oSelf = this;
	
	$(oSelf.ele).on({
		mouseenter:function(){
			//停止定时器
			clearInterval(oSelf.timer);
			
		},
		mouseleave:function(){
			//重启定时器
			oSelf.timer = setInterval(oSelf.timerAction.bind(oSelf),2000);
			
		}
	})
	
	
}