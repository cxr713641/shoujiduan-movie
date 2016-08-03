function fontAuto(width){
	var srceenWidth=document.documentElement.clientWidth;
	if(screenWith>=width){
		document.documentElement.style.fonSize="625%";
	}
	else{
		document.documentElement.Style.fontSize=(625*screenWidth/width)+"%";
	}
}

fontAuto(640);//网页加载的时候触发

window.onresize=function(){//当网页宽度发生变化时触发函数
	fontAuto(640);
}
