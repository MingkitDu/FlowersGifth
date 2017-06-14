

$(function(){
//	轮播
	var carousel = new Carousel('.banner_list');
//	回到顶部
	var backtop = new Backtop('.right_imessage');
	
	var arr = JSON.parse(Cookies.get('products'));
	$('.spc').html('('+ arr.length +')')
	$('.spc').css('color','red');
	$('.npc').html(arr.length)
})
