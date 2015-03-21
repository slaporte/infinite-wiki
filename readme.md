Enjoy random Wikipedia articles, ad infinitum.

To install the bookmarklet, create a bookmark with the following URL:

```javascript
javascript:(function(){var loading_random=false;var new_area=$("<div>");var next_area=false;function append_random_content(){$('#content').append('<div class="more">');if(next_area){$('.more:last').html(next_area);}next_area=new_area.clone();$('#loading-msg').css('top',$(document).height()).fadeIn();next_area.load('./Special:Random #content > *',function(){loading_random=false;$('#loading-msg').fadeOut();}).css('padding-top','2em');}var go_up=$('<a>').clone().html('Back up &uarr;').css({'margin':0,'border-radius':'15px','box-shadow':'0 0 10px 0 rgba(0, 0, 0, 0.3)','background':'rgba(41, 128, 185, 0.9)','bottom':'25px','right':0,'margin-right':'25px','position':'fixed','padding':'0.5em','color':'#fff'}).attr('href','#top');$('body').append(go_up);append_random_content();if($('body.mediawiki').length){if($('#loading-msg').length===0){$('body').append('<p id="loading-msg">loading more wikipedia ...</p>');}$('body').append('<p id="welcome-msg">Infinite Wikipedia enabled</p>');if($('#more-msg').length===0){$('#content').next().append('<p id="more-msg" style="border: 1px solid #a7d7f9; background-color: #f6f6f6; text-align:center; color: #a7d7f9; font-size: 2em; margin-left: 5.5em">&darr; <a href="#" style="color:#252525;" onclick="append_random_content(); return false;" >scroll for more</a> &darr;</p>');}$('#loading-msg').hide();$('#loading-msg').css({'position':'absolute','top':$(document).height(),'width':'100%','background':'rgba(41, 128, 185, 0.8)','color':'white','text-align':'center','font-size':'3em',});$('#welcome-msg').css({'position':'absolute','top':$(window).scrollTop(),'width':'100%','background':'rgba(39, 174, 96, 0.8)','color':'white','text-align':'center','font-size':'3em',}).delay(600).fadeOut(function(){$(this).remove();});$(window).scroll(function(){if(!loading_random&&$(window).scrollTop()+$(window).height()==$(document).height()){loading_random=true;append_random_content();}});}else{$('body').append('<p id="welcome-msg">Please <a href="https://en.wikipedia.org/wiki/Special:Random">visit Wikipedia</a>, and try again.</p>');$('#welcome-msg').css({'position':'absolute','top':$(window).scrollTop(),'width':'100%','background':'rgba(231, 76, 60, 0.7)','color':'white','text-align':'center','font-size':'3em',}).delay(1600).fadeOut(function(){$(this).remove();});}})();
```

# Compiling

Use [bookmarklet](https://github.com/mrcoles/bookmarklet) to compile from infinite-wiki.js


