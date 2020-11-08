
//
    $('img[data-src]').live('inview', function(event, isVisible) {
      	if (!isVisible) { return; }
      	var img = $(this);
      	// Show a smooth animation
      	img.css('opacity', 0);
      	img.load(function() { img.animate({ opacity: 1 }, 500); });
       	// Change src
      	img.attr('src', img.attr('data-src'));
       	// Remove it from live event selector
      	img.removeAttr('data-src');
    });

//tab
    var tabs = function(e1, e2, e3){
        var e1 = $('a', e1);
        var e2 = $(e2);
        e1.mouseover(function(){
            if(!$(this).hasClass('current')){
                e1.removeClass('current');
                $(this).addClass('current');
                var idx = e1.index(this);
                e2.slideUp(0);
                $(e2[idx]).slideDown(0);
                $(e3).attr('href',$(this).attr('href'));
            }
        });
        e1.click(function(){
            return false;
        })
    }
    tabs('.tabs li', '.newscont');

// accordin
    $(function(){
	  var lastBlock = $("#currAccordin");
	  var maxWidth = 529, minWidth = 76;
	  $(lastBlock).children('.ac_btn').css('cursor','default');
	  $(".accordin").click(function(){
		$(lastBlock).animate({width: minWidth+"px"}, { queue:false, duration:600 }).removeClass('activeAccordin');
		$(lastBlock).children('.ac_btn').css('cursor','pointer');
		$(this).animate({width: maxWidth+"px"}, { queue:false, duration:600 }).addClass('activeAccordin');
		$(this).children('.ac_btn').css('cursor','default');
		lastBlock = this;
	  });
	});

// 解决奇像素背景错位BUG
function oddPxBug(){
	var w_w = $(window).width();
	if( w_w%2 ){
		$('html').width(w_w-1);	
	}else{
		$('html').width("auto");  
	}
}
oddPxBug();
$(window).resize( oddPxBug );

