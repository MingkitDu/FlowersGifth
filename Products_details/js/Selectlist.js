function Selectlist(selector){
	this.ele = $(selector).get(0)
	this.action();
	
}
Selectlist.prototype.action = function(){
	var _this = this;
	$(this.ele).find('.selec_list li').click(function(){
		$(_this.ele).find('.selec_list li').removeClass('select');
		$(this).addClass('select');
		$(_this.ele).find('.selec_list span').css('display','none')
		$(_this.ele).find('.selec_list span').eq($(this).index()-4).css('display','block')
	})
	$(this.ele).find('.selec_list li').eq(0).click(function(){
		$('html body').scrollTop(1070)
	})
	$(this.ele).find('.selec_list li').eq(1).click(function(){
		$('html body').scrollTop(9661)
	})
	$(this.ele).find('.selec_list li').eq(2).click(function(){
		$('html body').scrollTop(10749)
	})
	$(this.ele).find('.selec_list li').eq(3).click(function(){
		$('html body').scrollTop(11281)
	})
}
