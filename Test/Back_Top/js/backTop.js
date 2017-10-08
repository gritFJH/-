/*
 * （1）
 * document.documentElement.scrollTop
 * document.body.scrollTop
 * document.documentElement.clientHeight
 * (2)减速返回，设置一个speed为scrollTop的1/5，每次减去它
 * (3)设置鼠标移入移出按钮不同效果
 * (4)设置“返回顶部”按钮什么时候显示（当滑动超过一屏），什么时候隐藏（当停留在第一屏时）
 */
window.onload = function(){
	var topBtn = document.getElementById("btn");
	var timer = null;
	var pageLookheight = document.documentElement.clientHeight/*获取一个高度如果滚动超过这个高度，将“返回顶部”显示，不超过就将其隐藏*/
	
	
	
	window.onscroll = function(){/*设置“返回顶部”按钮显示或者隐藏*/
//		alert();
		var backtop = document.documentElement.scrollTop;
		if(backtop>=pageLookheight)
		{
			topBtn.style.display = "block";
		}
		else{
			topBtn.style.display = "none";
		}
	}
	
	
	
	
	
	topBtn.onclick = function(){
//		alert();
		
//		console.log("OK");
		timer = setInterval(function(){
			var backtop = document.documentElement.scrollTop;
			var speedtop = backtop/5;
//			document.documentElement.scrollTop -= 100; /*每次滚动距离顶部长度减100*/
			document.documentElement.scrollTop = backtop-speedtop;/*越到上面减的速度越慢*/
//			console.log(document.documentElement.scrollTop);
			if(backtop==0)/*当滚动到顶部时,停止定时器*/
			{
				clearInterval(timer);
			}
		},10);//时间太长用户刚返回顶部就向下滚动，会出现卡顿，时间太短体验效果不好
		
	}
}

/*
 网页可见区域宽： document.body.clientWidth;
网页可见区域高： document.body.clientHeight;
网页可见区域宽： document.body.offsetWidth    (包括边线的宽);
网页可见区域高： document.body.offsetHeight   (包括边线的宽);
网页正文全文宽： document.body.scrollWidth;
网页正文全文高： document.body.scrollHeight;
网页被卷去的高： document.body.scrollTop;
网页被卷去的左： document.body.scrollLeft;
网页正文部分上： window.screenTop;
网页正文部分左： window.screenLeft;
屏幕分辨率的高： window.screen.height;
屏幕分辨率的宽： window.screen.width;
屏幕可用工作区高度： window.screen.availHeight;
屏幕可用工作区宽度：window.screen.availWidth;


scrollHeight: 获取对象的滚动高度。  
scrollLeft:设置或获取位于对象左边界和窗口中目前可见内容的最左端之间的距离
scrollTop:设置或获取位于对象最顶端和窗口中可见内容的最顶端之间的距离
scrollWidth:获取对象的滚动宽度
offsetHeight:获取对象相对于版面或由父坐标 offsetParent 属性指定的父坐标的高度
offsetLeft:获取对象相对于版面或由 offsetParent 属性指定的父坐标的计算左侧位置
offsetTop:获取对象相对于版面或由 offsetTop 属性指定的父坐标的计算顶端位置  
event.clientX 相对文档的水平座标
event.clientY 相对文档的垂直座标

event.offsetX 相对容器的水平坐标
event.offsetY 相对容器的垂直坐标  
document.documentElement.scrollTop 垂直方向滚动的值
event.clientX+document.documentElement.scrollTop 相对文档的水平座标+垂直方向滚动的量
Post by molong on 2009-05-19 11:57 PM   #1

要获取当前页面的滚动条纵坐标位置，用：
document.documentElement.scrollTop;
而不是：
document.body.scrollTop;
documentElement 对应的是 html 标签，而 body 对应的是 body 标签。

在标准w3c下，document.body.scrollTop恒为0，需要用document.documentElement.scrollTop来代替;
如果你想定位鼠标相对于页面的绝对位置时，你会发现google里面1000篇文章里面有999.99篇会让你使用 event.clientX+document.body.scrollLeft，event.clientY+document.body.scrollTop， 如果你发现你的鼠标定位偏离了你的想象，请不要奇怪，这是再正常不过的事情。
ie5.5之后已经不支持document.body.scrollX对象了。
所以在编程的时候，请加上这样的判断
if (document.body && document.body.scrollTop && document.body.scrollLeft)
{
top=document.body.scrollTop;
left=document.body.scrollleft;    
}
if (document.documentElement && document.documentElement.scrollTop && document.documentElement.scrollLeft)
{
top=document.documentElement.scrollTop;
left=document.documentElement.scrollLeft;
}
 */