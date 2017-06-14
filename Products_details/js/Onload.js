

$(function(){
//	轮播
	var carousel = new Carousel('.products_datails');
//	放大镜
	var bigglass = new Bigglass('.banner')
//	商品信息
	var selectlist = new Selectlist('.main_inner_right')
//	吸顶效果
	var topstop = new Topstop('.main_inner_right')
	
	var carousela = new Carousela('.promise');
	
	var arr = JSON.parse(Cookies.get('products'));
	$('.spc').html('('+ arr.length +')');
	$('.spc').css('color','red');
})