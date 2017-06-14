

$(function(){
	
	var hover1 = new Hover('.products_list');
	
	//	排序
	var sortt = new Sortt('.sort')
	//	回到顶部
	var backtop = new Backtop('.right_imessage');

	//	筛选
	var screen1 = new Screen1('.main_left_pro_list')
	
	//	添加到购物车
	var addshop = new Addshop('.ck_contane')
	
	var arr = JSON.parse(Cookies.get('products'));
	$('.spc').html('('+ arr.length +')');
	$('.spc').css('color','red');
	$('.npc').html(arr.length);
})