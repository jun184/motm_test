document.write ('<div id="all_wrapper1" style="position:absolute; left:0px; top:0px; width:0px; height:0px; text-align:center; margin:0 auto; z-index:98;">\n');
document.write ('<div id="second_wrapper1" style="position:relative; left:0px; top:0px; text-align:left; width:0px; height:0px; margin:0 auto;">\n');
document.write ('<div id="FloatLayer1" STYLE="position:absolute; width:'+AdWidth+'px; height:'+AdHeight+'px; z-index:300; left:'+AdMarginLeft+'px; top:'+AdMarginTop+'px; display:block;">\n');

document.write ('<IFRAME FRAMEBORDER=0 MARGINWIDTH=0 MARGINHEIGHT=0 SCROLLING=NO WIDTH="'+AdWidth+'" HEIGHT="'+AdHeight+'" SRC="'+AdUrl+'" allowTransparency="true"></IFRAME>');
document.write ('<div id="close" style="position:absolute; top:280px; left:280px; display:block;">\n');
document.write ('<a style="display: block;" href="javascript:flot_close();"><img src="//advimg.khan.co.kr/RealMedia/ads/Creatives/khan/js_upload_NEW/close_1212_black_article.jpg" width="12" height="12" border="0" style="display: block;"></a></div>\n');

document.write ('</div>\n');
document.write ('</div>\n');
document.write ('</div>\n');

function flot_close() {
    	document.getElementById('all_wrapper1').style.display = 'none'; 
    }