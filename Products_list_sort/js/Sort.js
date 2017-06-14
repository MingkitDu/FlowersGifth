
function Sortt(selector){
	this.ele = $(selector).get(0);
	this.action();
	
}

Sortt.prototype.action = function(){
	var _this = this;
	
	
	//价格排序
	$(this.ele).find('.left .price_sort').click(function(){
		$(_this.ele).find('.left').find('a').removeClass('select_sort');
		$(this).addClass('select_sort')
		$(_this.ele).find('.left a span').removeClass('select_sort');
		$(this).find('span').addClass('select_sort');
		
		sor();
	
	})
	//默认排序
	$(this.ele).find('.left .normal').click(function(){
		$(_this.ele).find('.left').find('a').removeClass('select_sort');
		$(this).addClass('select_sort')
		$(_this.ele).find('.left a span').removeClass('select_sort');
		$(this).find('span').addClass('select_sort');
		
		sor1();
		
	})
	
}

//价格排序
function sor(){
	var orderIdArray = [];
	var idIndex = [];

	 $(".orderid").each(function(i){
		var id=parseInt($(this).html());
		idIndex[id]=i;
		orderIdArray.push(id);

	})
	var order = orderIdArray.slice(0)
	orderIdArray = orderIdArray.sort(function(a, b) {
		return a-b
	}); 
	
	var list = $(".ck_contane").find(".ck_pro");
	var length = orderIdArray.length;

	for(var i = 0; i < length; i++) {
		$(".ck_contane").append(list.eq(idIndex[orderIdArray[i]]));
	}
}
//默认排序
function sor1(){
	var orderIdArray = [];
	var idIndex = [];

	 $(".ck_pro").each(function(i){
		var id=parseInt($(this).attr('mode'));
		
		idIndex[id]=i;
		orderIdArray.push(id);

	})
	 
	orderIdArray = orderIdArray.sort(function(a, b) {
		return a-b
	}); 
	
	console.log(orderIdArray)
	
	var list = $(".ck_contane").find(".ck_pro");
	var length = orderIdArray.length;

	for(var i = 0; i < length; i++) {
		$(".ck_contane").append(list.eq(idIndex[orderIdArray[i]]));
	}
}