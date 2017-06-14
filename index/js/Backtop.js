

function Backtop(selector){
	this.ele = $(selector).get(0);
	this.action();
}

Backtop.prototype.action = function(){
	$(this.ele).find('.backtop').click(function(){
		$('html body').animate({
			'scrollTop':0
		})
	})
}
