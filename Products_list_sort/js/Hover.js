
function Hover(selector){

	this.ele = $(selector).get(0);
	this.action();

}

Hover.prototype.action = function(){
	
	var _this = this;
	$(this.ele).find('.guide').hover(function(){
		
		$(_this.ele).find('.guide_list').toggle();
		
		$(_this.ele).find('.guide_list').on({
			mouseenter:function(){
				$(this).css('display','block')
			},
			mouseleave:function(){
				$(this).css('display','none')
			}
		})
		
	})
	
}
