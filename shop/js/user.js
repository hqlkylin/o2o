$(function(){
	/*左侧导航*/
	(function(){
			$(".user-nav dl dt").click(function(){
				if($(this).children("p").hasClass("active")){
					$(this).children("p").toggleClass("active").end().siblings("dd").stop().toggle(500).end().parent().siblings().children("dt").find("p").removeClass("active");
					}
				else {
					if($(this).siblings("dd").is(":hidden")){
						$(this).children("p").toggleClass("active").end().siblings("dd").stop().toggle(500).end().parent().siblings().children("dt").find("p").removeClass("active");
						}
					else{
						$(this).siblings("dd").stop().toggle(500).end().parent().siblings().children("dt").find("p").removeClass("active");
					    }
					}
				
			});
			var oheight=$("#user-index").height();
			$(".user-nav").css("min-height",oheight+"px");
		})();
	/*关注品牌滚动*/
	(function ($) {
	    $(function () {
	        var prevBtn = $(".previous"),
	                nextBtn = $(".next"),
	                index = 0,
	                scrollBarMain = $(".scrollBar"),
	                li_Item = scrollBarMain.find("li"),
	                li_Item_len = scrollBarMain.find("li").size(),
	                li_width = li_Item.first().outerWidth(),
	                li_min_len = 4,
	                moveFlag = true;
	        var move = function () {
	            scrollBarMain.animate({left: -li_width * index}, 400, function () {
	                moveFlag = true;
	            });
	        };
	        var isClick = function () {
	            if (index <= 0) {
	                prevBtn.addClass("active");
	            } else {
	                prevBtn.removeClass("active");
	            }
	            if (li_Item_len - index <= li_min_len) {
	                nextBtn.addClass("active");
	            } else {
	                nextBtn.removeClass("active");
	            }
	        };
	        if (li_Item_len > li_min_len) {
	            isClick();
	            nextBtn.click(function () {
	                if (moveFlag) {
	                    moveFlag = false;
	                    index++;
	                    if(!$(this).hasClass("active")){
	                        move();
	                    }else{
	                        moveFlag = true;
	                        index = index - 1;
	                    }
	                    isClick();
	                }
	            });
	            prevBtn.click(function () {
	                if (moveFlag) {
	                    moveFlag = false;
	                    index--;
	                    if(!$(this).hasClass("active")){
	                        move();
	                    }else{
	                        moveFlag = true;
	                        index = 0
	                    }
	                    isClick();
	                }
	
	            });
	        } else {
	            nextBtn.remove();
	            prevBtn.remove();
	        }
	    })
	})(jQuery);
	/*浏览历史*/
	$(function () {
	    $("#historyBox div.close").click(function () {
	        $(this).parent("li").remove();
	    })
	})
	
	/*去除产品最后一个边框*/
	$(".case.products li:last-child").addClass("no-border");
	$(".case.logo li:last-child").addClass("no-border");
	
	/*顶部 账户管理*/
	$("#header .manage dl").hover(function(){
		$(this).toggleClass("active").find("dd").toggle().end().find("dt").children("p");
	});	
	
	/*关注品牌选项卡*/
	(function(){
		$(".goodstab li").click(function(){
			var _index=$(this).index();
			$(this).addClass("active").siblings().removeClass("active").parent().siblings(".box").eq(_index).show().siblings(".box").hide();
		});		
	})();
	
	/*浏览历史选项卡*/
	(function(){
		$(".history .user-t p").click(function(){
			var _index=$(this).index();
			$(this).addClass("active").siblings("p").removeClass("active").parent(".user-t").siblings(".box").eq(_index).addClass("active").siblings(".box").removeClass("active")
		});		
	})();
	
	
	
	
	
});
