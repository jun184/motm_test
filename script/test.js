var btnLocation = ['LT', 'LB', 'RT', 'RB']
var btnTop
var btnLeft

if(btnRandom == true){
    var selected = btnLocation[Math.floor(Math.random() * btnLocation.length)] // 랜덤하게 버튼 위치 설정
}else if(!btnposition){
    selected = 'RB'
}else{
    selected = btnposition
}

if (selected == 'LT') { //Left top
    btnTop = AdHeight - (AdHeight - btnMargin)
    btnLeft = AdWidth - (AdWidth - btnMargin)
} else if (selected == 'LB') { //Left bottom
    btnTop = AdHeight - (btnSizeHeight + btnMargin)
    btnLeft = AdWidth - (AdWidth - btnMargin)
} else if (selected == 'RT') { //Right top
    btnTop = AdHeight - (AdHeight - btnMargin)
    btnLeft = AdWidth - (btnSizeWidth + btnMargin)
} else { //Right bottom
    btnTop = AdHeight - (btnSizeHeight + btnMargin)
    btnLeft = AdWidth - (btnSizeWidth + btnMargin)
}

document.write ('<div id="all_wrapper1" style="position:absolute; left:0px; top:0px; width:100%; height:0px; text-align:center; margin:0 auto; z-index:98;">\n');
document.write ('<div id="second_wrapper1" style="position:relative; left:0px; top:0px; text-align:left; width:0px; height:0px; margin:0 auto;">\n');
document.write ('<div id="FloatLayer1" STYLE="position:absolute; width:'+AdWidth+'px; height:'+AdHeight+'px; z-index:300; left:'+AdMarginLeft+'px; top:'+AdMarginTop+'px; display:block;">\n');

document.write ('<IFRAME FRAMEBORDER=0 MARGINWIDTH=0 MARGINHEIGHT=0 SCROLLING=NO WIDTH="'+AdWidth+'" HEIGHT="'+AdHeight+'" SRC="'+AdUrl+'" allowTransparency="true"></IFRAME>');
document.write ('<div id="close" style="position:absolute; top:'+btnTop+'px; left:'+btnLeft+'px; display:block;">\n');
document.write ('<a style="display: block;" href="javascript:flot_close();"><img src="//advimg.khan.co.kr/RealMedia/ads/Creatives/khan/js_upload_NEW/close_1212_black_article.jpg" width="'+btnSizeWidth+'" height="'+btnSizeHeight+'" border="0" style="display: block;"></a></div>\n');

document.write ('</div>\n');
document.write ('</div>\n');
document.write ('</div>\n');

function flot_close() {
    	document.getElementById('all_wrapper1').style.display = 'none'; 
    }
