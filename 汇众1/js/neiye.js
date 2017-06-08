$(".hader-right li,.hader-right dd").mouseenter(function(){
	$(this).children(".position_1_2,.position_1_2_3").show();
});
$(".hader-right li,.hader-right dd").mouseleave(function(){
	$(this).children(".position_1_2,.position_1_2_3").hide();
});

$(".bottom_1_2").click(function(){
	$("body,html").animate({scrollTop:0},100);//向上距离0，200毫秒结束
})
$(window).scroll(function(){
	var scrollTop=$('html').scrollTop()+$('body').scrollTop();//得到网页的时时滚动位置
	var winHeight=$(window).height();//网页的可视高度
	var widHeight=$('html').outerHeight();//网页的实际高度
	console.log(scrollTop,winHeight)
	if(scrollTop>winHeight/2){
		$(".bottom_1_2").fadeIn();//如果时时位置大于可视高度，则出现
	}
	else{
		$(".bottom_1_2").fadeOut();//如果时时位置小于可视高度，则消失
	}
})
