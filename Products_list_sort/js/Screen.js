function Screen1(selector){
	
	this.ele = $(selector).get(0)
	this.action();
}

Screen1.prototype.action = function(){
//  筛选商品
	$(this.ele).find('.scre').click(function(){
		
		$('.orderid').parent().parent().css('display','block')
			$('.orderid').each(function(index){
					var price=parseInt($('.orderid').eq(index).html())
			 		if(price<150 || price>300){
			 			$('.orderid').eq(index).parent().parent().css('display','none');
			 			
			 		}
			 			
			 	})
		
	})
//	全部商品
	$(this.ele).find('.all_scre').click(function(){
		
		$('.orderid').parent().parent().css('display','block')
		
	})
	
}
