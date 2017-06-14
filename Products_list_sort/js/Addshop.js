function Addshop(selector){
	this.ele = $(selector).get(0)
	this.addaction();
}

Addshop.prototype.addaction = function(){
	
	$(this.ele).find('.ck_pro .add_shop').click(function(){
		var arr = [];
		var obj = {};
		
		if(Cookies.get('products')){
			arr = JSON.parse(Cookies.get('products'));
			obj.name = $(this).parent().find('.pro_num').html();
			obj.price = $(this).parent().find('.orderid').html();
			obj.img=$(this).parent().find('img').attr('src');
			arr.push(obj);
			Cookies.set('products',JSON.stringify(arr),{ expires:7,path:'/'})
		}else{
			obj.name = $(this).parent().find('.pro_num').html();
			obj.price = $(this).parent().find('.orderid').html();
			obj.img=$(this).parent().find('img').attr('src');
			arr.push(obj);
			Cookies.set('products',JSON.stringify(arr),{ expires:7,path:'/'})
		}
	})
}
