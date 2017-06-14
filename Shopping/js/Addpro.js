
function Addpro(selector){
	this.ele = $(selector).get(0);
	this.action();
}

Addpro.prototype.action = function(){
	var _this = this;
	var $tr1 = ('<tr class="shopp_list"><td><img class="shopimg" scr=""/><a href="" class="shopname"></a></td><td class="markprice"></td><td class="price">￥<span></span></td><td>1</td><td><a class="del_btn">删除</a><br/><a href="">移到我的收藏</a></td></tr>')
	if(JSON.parse(Cookies.get('products')).length){
		
		$(this.ele).find('.empty').css('display','none');
		$(this.ele).find('.have').css('display','block');
		var arr = JSON.parse(Cookies.get('products'));
		var total = 0;
		for(var i=0;i< arr.length;i++){
			$(_this.ele).find('.shop_list tbody').append($tr1);
			$('.shopp_list').eq(i).find('.shopimg').attr('src',JSON.parse(Cookies.get('products'))[i].img)
			$('.shopp_list').eq(i).find('.shopname').html(JSON.parse(Cookies.get('products'))[i].name)
			$('.shopp_list').eq(i).find('.markprice').html('￥'+Math.floor(JSON.parse(Cookies.get('products'))[i].price/0.75))
			$('.shopp_list').eq(i).find('.price span').html(JSON.parse(Cookies.get('products'))[i].price)
			total += parseInt(JSON.parse(Cookies.get('products'))[i].price)
			$(this.ele).find('.com_lr span').html('￥' + total)
			$('.spc').find('span').html('('+ arr.length +')')
		}
		
	}else{
		$(this.ele).find('.empty').css('display','block');
		$(this.ele).find('.have').css('display','none');
	}
	
	$(this.ele).find('.del_btn').click(function(){
		var total = 0;
		var index=$(this).parents('.shopp_list').index();
		$('.shopp_list').eq(index).remove();
		arr.splice(index,1);
		Cookies.set('products',JSON.stringify(arr),{ expires:7,path:'/'});
		
		for(var j=0;j<arr.length;j++){
			
			total += parseInt(JSON.parse(Cookies.get('products'))[j].price) 		
		}
		$(_this.ele).find('.com_lr span').html('￥' + total)
		$('.spc').find('span').html('('+ arr.length +')')
		if(!JSON.parse(Cookies.get('products')).length){
			$(_this.ele).find('.empty').css('display','block');
			$(_this.ele).find('.have').css('display','none');
		}
		
	})
	
	$(this.ele).find('.com_r').click(function(){
		var total = 0
		for(var j=0;j<arr.length;j++){
			
			total += parseInt(JSON.parse(Cookies.get('products'))[j].price) 		
		}
		alert('请付款：'+ total +'元')
		total = 0
	})
	
	
}
