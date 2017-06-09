$('.hader-right li,.hader-right dd').mouseenter(function() {
	$(this).children(".position_1_2,.position_1_2_3").show();
});
$('.hader-right li,.hader-right dd').mouseleave(function() {
	$(this).children(".position_1_2,.position_1_2_3").hide();
});
//左右
$('#top').mouseenter(function(){
	$("#top_left,#top_right").fadeIn();
	clearInterval(time);
});
$('#top').mouseleave(function(){
	$("#top_left,#top_right").fadeOut();
	time=setInterval(function(){
		$('#top_right').click();
	},2000);
});
//下方点
$('.top_btn span').mouseenter(function(){
	if ($(this).hasClass(" top_btn_1")){
		return;
	}//span的节点集合
		
	var curPos=$(this).index(".top_btn span");//得到当前位置的SPAN	
	var oldPos=$(".top_btn .top_btn_1").index(".top_btn span");//得到旧的位置的span
	$('.top_btn span').eq(curPos).addClass('top_btn_1');
	$('.top_btn span').eq(oldPos).removeClass('top_btn_1');
	
	$('.top_img_1 li').eq(curPos).fadeIn(500);
	$('.top_img_1 li').eq(oldPos).fadeOut(500);
});
//左边按钮
$('#top_left').click(function(){	
    var lastPos=$(".top_btn span").length-1;//得到最后一个位置 
 	var oldPos=$(".top_btn .top_btn_1").index(".top_btn span");//旧的位置

    var curPos=oldPos!=-1?oldPos-1:lastPos;	
    
    $('.top_btn span').eq(curPos).addClass('top_btn_1');
	$('.top_btn span').eq(oldPos).removeClass('top_btn_1');
	
	$('.top_img_1 li').eq(curPos).fadeIn(500);
	$('.top_img_1 li').eq(oldPos).fadeOut(500);
});
//右边按钮
$('#top_right').click(function(){
	var lastPos=$(".top_btn span").length-1;//得到最后一个位置 
 	var oldPos=$(".top_btn .top_btn_1").index(".top_btn span");//旧的位置

    var curPos=oldPos!=lastPos?oldPos+1:0;	
    
    $('.top_btn span').eq(curPos).addClass('top_btn_1');
	$('.top_btn span').eq(oldPos).removeClass('top_btn_1');
	
	$('.top_img_1 li').eq(curPos).fadeIn(500);
	$('.top_img_1 li').eq(oldPos).fadeOut(500);
});
	//4个球
	$("#four li").mouseenter(function(){
		if($(this).hasClass(".four_1"))
			return;//如果已经有本身了，则跳出

		var oldpos=$(".four_1").index();
		$(this).addClass(".four_1").stop().animate({width:"502px"},300);
		$(this).siblings().removeClass(".four_1").stop().animate({width:"167px"},300);
	});
//	$(".four .four_1").mouseout(function(){
//		$('.four .four_1').animate({width:"167px"});	
//	})





	//下方动画
	$('.one_img').mouseenter(function(){
		$('.one_img-img img').animate({width:"521px"});
		$('.one_img p').animate({top:"0px"});		
	});
	$('.one_img').mouseleave(function(){
		$('.one_img-img img').animate({width:"491px"});
		$('.one_img p').animate({top:"100%"});		
	});
	
	//下方按键切换
	$('.anjian1').click(function(){//左边按键
		var firPos=$(".one_img_1 li:last");
		$(".one_img_1 ul").prepend(firPos);
	});
	$('.anjian2').click(function(){//右边按键
		var firPos=$(".one_img_1 li:first");
		$(".one_img_1 ul").append(firPos);
	})
	//最下方按键切换
//	$('.anniu1').click(function(){
//		$(".bottom_ul li:first").stop().animate({marginLeft:"-193px"},"20",function(){
//			$(".bottom_ul").append($(".bottom_ul li:first"));
//			$(".bottom_ul li:last").css({marginLeft:"0px"});
//		})
//	});
//	$('.anniu2').click(function(){
//		$(".bottom_ul").prepend($(".bottom_ul li:last"));
//		$(".bottom_ul li:last").css({marginLeft:"-1624px"});
//		$(".bottom_ul li:first").stop().animate({marginLeft:"193px"},"slow",function(){
//			$(".bottom_ul li:first").css({marginLeft:"10px"});
//			$(".bottom_ul li:last").css({marginLeft:"5px"});
//		})
//	})
var dianji={
	Li:$(".bottom_ul li"),
	Ul:$(".bottom_ul"),
	Anniu:$(".anniu1"),
	Anniu2:$(".anniu2"),
	yidong:function(){
		var that=this;
		var Liwidth=that.Li.innerWidth();
		
		
		that.Anniu.stop().click(function(){
//			that.Li.stop();
			var mowei=$(".bottom_ul li:first");
				mowei.animate({marginLeft:-Liwidth-10},200,function(){
				that.Ul.append($(".bottom_ul li:first"));
		});
		that.Li.removeAttr("style");
		});
		
		that.Anniu2.stop().click(function(){
			var kaitou=$(".bottom_ul li:last");
			that.Ul.prepend($(".bottom_ul li:last").css({marginLeft:-Liwidth-10}));
			kaitou.animate({marginLeft:0},200
			)
			that.Li.removeAttr("style");
		})
	},
	init:function(){
		var that=this;
		that.yidong();
	}
}
dianji.init();
	
	
	//点击到最上
	$(".bottom_1_2").click(function(){
	$("body,html").animate({scrollTop:0},100);//向上距离0，200毫秒结束
})
	
$(window).scroll(function(){
	var scrollTop=$('html').scrollTop()+$('body').scrollTop();//得到网页的时时滚动位置
	var winHeight=$(window).height();//网页的可视高度
	var widHeight=$('html').outerHeight();//网页的实际高度
	if(scrollTop>winHeight/2){
		$(".bottom_1_2").fadeIn();//如果时时位置大于可视高度，则出现
	}
	else{
		$(".bottom_1_2").fadeOut();//如果时时位置小于可视高度，则消失
	}
})



var time=setInterval(function(){
		$('#top_right').click();
	},3000);

	

