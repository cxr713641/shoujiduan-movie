function fontAuto(width){
	var srceenWidth=document.documentElement.clientWidth;
	if(screenWith>=width){
		document.documentElement.style.fonSize="625%";
	}
	else{
		document.documentElement.Style.fontSize=(625*screenWidth/width)+"%"
	}
}
