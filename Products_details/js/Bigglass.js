function Bigglass(selector){
	
	this.ele = $(selector).get(0);
	this.action();
}

Bigglass.prototype.action = function(){
	var _this = this;
	$(this.ele).find('.move').on({
		'mouseenter':function(){
			$(_this.ele).find('.small,.big').css('display','block');
		},
		'mouseleave':function(){
			$(_this.ele).find('.small,.big').css('display','none');
		},
		'mousemove':function(ev){
			
			$(_this.ele).find('.small').css({
				'left':ev.offsetX - 50,
				'top':ev.offsetY - 50
			})

			$(_this.ele).find('.big').css({
				'backgroundPositionX':-ev.offsetX * .3,
				'backgroundPositionY':-ev.offsetY * .3
			})
				
			}
		
	})
	
}
