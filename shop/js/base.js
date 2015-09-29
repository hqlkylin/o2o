$(function(){
	(function(){
		/*专题列表页鼠标移上滑出遮罩层*/
		$(function(){
			$(".zt-list").find("li").hover(function(){
				$(this).find(".profile").stop().animate({top:'0'});
			},function(){
				$(this).find(".profile").stop().animate({top:'138px'});
			});
			
		});		
	})();
	
	
	
	
	
});




					
