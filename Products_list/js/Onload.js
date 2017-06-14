

$(function(){
	
	var hover1 = new Hover('.products_list');
	
	var carousel = new Carousel('.banner');
	
	//	回到顶部
	var backtop = new Backtop('.right_imessage');
	
	var addpro = new Addshop('.main_inner_right')
	
	var arr = JSON.parse(Cookies.get('products'));
	$('.spc').html('('+ arr.length +')');
	$('.spc').css('color','red');
	$('.npc').html(arr.length);
})