$(function(){
	/*******产品图展示*******/
	(function(){
		$(".magnify").pluginPhotoShow();
        $("#small_wrap").pluginPicturesShow();
	})();
	/*******详情导航*******/
	(function(){
		$(".introduce .nav li").each(function(num){
			$(this).click(function(){			
				$(this).addClass("active").siblings().removeClass("active");
			});	
		});
		var _hTop=$(".introduce .nav").offset().top;
		$(window).scroll(function () {
	        var h_num = $(window).scrollTop();        
	        if (h_num > _hTop) {
	            $(".introduce .nav").addClass("fixed");
	        } else {
	            $(".introduce .nav").removeClass("fixed");
	        }
	    });		
	})();

	
	/********吐槽*********/
	(function(){
		function shake(ele,cls,times){
		var i = 0, t = false, o = ele.attr("class")+" ", c = "", times = times||2;
		if(t) return;
		t= setInterval(function(){
				i++;
				c = i%2 ? o+cls : o;
				ele.attr("class",c);
				if(i==2*times){
					clearInterval(t);
					ele.removeClass();
					ele.addClass("color1");
				}
			},150);
		};
		$(".introduce .roast li").on({
			click:function(){
				shake($(this),"active",3);		
				return false;
			}
		});
		
		/*点击展开下方吐槽内容*/
		$("#tucao-close").click(function(){
			$(this).parents(".rost-wrap").fadeOut(function(){
				$(".roast").slideDown(1000);
			});		
		});
	})();
	
	/*********右侧推荐*********/
	(function () {
        //初始化存储数据
        var wrapPosition = $(".similar").position();
        var offsetTop = $(".similar").offset().top;
        /*计算*/
        var calcScrollLeft = function (t) {
            var t = t || 1;
            var scroll_left = ($(window).width() - 1200) / 2;
            if (scroll_left >= 0) {
                $(".similar").addClass("fixed").css({"left": wrapPosition.left + scroll_left, "top": t});
            } else {
                $(".similar").addClass("fixed").css({"left": wrapPosition.left - $(window).scrollLeft(), "top": t});
            }
        };
        /*事件*/
        var scrollHandler = function () {
            if ($(".similar").removeClass("fixed").height() >= $(window).height()) {
                if ($(window).scrollTop() + $(window).height() > $(".similar").height() + offsetTop) {
                    if ($(".similar").height() > $(".introduce").height()) {
                        return;
                    }
                    calcScrollLeft("auto");
                } else {
                    $(".similar").removeClass("fixed").css({"left": wrapPosition.left, "top": wrapPosition.top});
                }
            } else {
                if ($(window).scrollTop() > offsetTop) {
                    calcScrollLeft();
                } else {
                    $(".similar").removeClass("fixed").css({"left": wrapPosition.left, "top": wrapPosition.top});
                }
            }
        };
        /*事件*/
        var resizeHandler = function () {
            if ($(".similar").hasClass("fixed")) {
                calcScrollLeft();
            }
        };
        $(".similar .tab li").click(function () {
            $(this).addClass("active").siblings().removeClass("active");
            $(this).parents(".similar").find(".cont").eq($(this).index()).addClass("active").siblings().removeClass("active");
            $(window).on("scroll", scrollHandler);
            $(window).on("resize", resizeHandler);
        }).first().trigger("click");

    })();
	/******产品所在店面信息弹出*****/
	(function(){
		var shop_info=$(".shop span");
		shop_info.mouseover(function(){
			$(this).css("z-index","1").find(".info").show();
		});
		shop_info.mouseout(function(){
			$(this).css("z-index","0").find(".info").hide();
		});
	})();
	
		


	
});









