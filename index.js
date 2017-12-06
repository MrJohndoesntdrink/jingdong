

	
$(function(){ 
	//
	for(var i=0;i<$(".menu>ul>li").length;i++){
		$(".menu>ul>li").eq(i).mouseover(function(){
			var index = $(this).index();
			$(this).css({"background":"rgba(255,255,255,.2)"}).siblings().css({"background":"rgba(255,255,255,0)"})
			$(".cate_pop").attr({"style":"display:block"});
			$(".cate").eq(index).attr({"style":"display:block"}).siblings().attr({"style":"display:none"})
		})
	}
	$(".menu").mouseout(function(){
		$(".cate_pop").attr({style:"display:none"});
		$(".menu>ul>li").css({"background":"rgba(255,255,255,0)"});
	})

	$(".cate_pop").mouseover(function(){
		$(this).attr({"style":"display:block"});
	})


	// jq轮播
	var timer = null;

	//主轮播
	for(var j=0;j<$(".slider_intor>span").length;j++){
		$(".slider_intor>span").eq(j).mouseover(function(){
			var index = $(this).index();
			show(index);
		})
	}
	function lunbo(){
		var i = 0;
		var long = $(".slider_intor>span").length;
		clearInterval(timer);
		timer = setInterval(function(){
			show(i);
			i++;
			if(i == long){
				i = 0;
			}
		},3000)
	}
	lunbo();
	$(".banner_box").mouseover(function(){
		clearInterval(timer);
	}).mouseout(function(){
		lunbo();
	})

	//次轮播
	function lunbo1(){
		var i = 0;
		var long = $('.jump>ul>li').length;
		clearInterval(timer);
		timer = setInterval(function(){
			show(i);
			i++;
			if(i == long){
				i = 0;
			}
		},3000)
	}
	lunbo1();

	for(var j=0;j<$(".jump>div>span").length;j++){
		$(".jump>div>span").eq(j).mouseover(function(){
			var index = $(this).index();
			show(index);
		})
	}
	$(".jump").mouseover(function(){
		clearInterval(timer);
	}).mouseout(function(){
		lunbo();
	})
	//
	function lunbo2(){
		var i = 0;
		var long = $("#side_box>ul>li").length;
		clearInterval(timer);
		timer = setInterval(function(){
			show(i);
			i++;
			if(i == long){
				i = 0;
			}
		},3000)
	}
	lunbo2();


	function show(v){
		$(".slider_intor>span").eq(v).attr({"style":"background:#db192a"}).siblings().attr({"style":"background:#fff"});
		$('.banner_box>ul>li').eq(v).fadeIn(300).siblings().fadeOut(300);
		$(".jump>div>span").eq(v).attr({"style":"background:#db192a"}).siblings().attr({"style":"background:#fff"});
		$('.jump>ul>li').eq(v).fadeIn(300).siblings().fadeOut(300);
		$("#side_box>ul>li").eq(v).fadeIn(300).siblings().fadeOut(300);
	}





	//侧边栏滑块
	for(var z=0;z<$(".toolbar li").length;z++){
		$(".toolbar li").eq(z).mouseenter(function(){
			$(this).find(".tbar-div").animate({"left":"-62px"},500);
		}).mouseleave(function(){
			$(this).find(".tbar-div").stop(true).animate({"left":"0px"},500);
		})
		
	}
	//回到顶部
	$(".back_top").click(function(){
		var oHeight = $("body").scrollTop()+$("html").scrollTop();
		var timer = null;
		clearInterval(timer);
		timer = setInterval(function(){
			oHeight -= 15;
			if(oHeight <= 0){
				oHeight = 0;
				clearInterval(timer);
			}
			$("body").scrollTop(oHeight);
		},2)
	})
	//滚动显示头部底部内容
	$(window).scroll(function(){
		var oHeight = $("body").scrollTop()+$("html").scrollTop();
		if(oHeight>400){
			$(".fix_t").slideDown();
			$(".fix_b").slideDown();
		}else{
			$(".fix_t").slideUp();
			$(".fix_b").slideUp();	
		}
	})
	//
	$(".delete").click(function(){
		$(this).parents(".inter").remove();
	})


		
	



})