function Topstop(selector){
	this.ele = $(selector);
	this.action();
}
Topstop.prototype.action = function(){
	
	var _this = this;
	$(window).scroll(function(){
		if($(this).scrollTop() >= 1070){
						
			$(_this.ele).find('.selec_list').css({
				'position':'fixed',
				'top':0
			})
			$(_this.ele).find('.selec_list p').css('display','block')
			
		}else{
			
			$(_this.ele).find('.selec_list').css({
				'position':'relative',
				'top':0
			})
			$(_this.ele).find('.selec_list p').css('display','none')
		}
		if($(this).scrollTop() > 1070 && $(this).scrollTop() <= 9660){
			$('.selec_list li').removeClass('select')
			$('.selec_list li').eq(0).addClass('select')
			$('.selec_list span').css('display','none')
			$('.selec_list span').eq($('.selec_list li').index()-7).css('display','block')
			
		}
		else if($(this).scrollTop() > 9660 && $(this).scrollTop() <= 10748){
			$('.selec_list li').removeClass('select')
			$('.selec_list li').eq(1).addClass('select')
			$('.selec_list span').css('display','none')
			$('.selec_list span').eq($('.selec_list li').index()-6).css('display','block')
			
		}
		else if($(this).scrollTop() > 10748 && $(this).scrollTop() <= 11280){
			$('.selec_list li').removeClass('select')
			$('.selec_list li').eq(2).addClass('select')
			$('.selec_list span').css('display','none')
			$('.selec_list span').eq($('.selec_list li').index()-5).css('display','block')
			
		}
		else if($(this).scrollTop() > 11280){
			$('.selec_list li').removeClass('select')
			$('.selec_list li').eq(3).addClass('select')
			$('.selec_list span').css('display','none')
			$('.selec_list span').eq($('.selec_list li').index()-4).css('display','block')
			
		}
		console.log($(this).scrollTop())
	})
	
}
