
$('.song1').flowtype({
   minFont : 12,
   maxFont : 80
});

/*$( ".link_nav" ).click(function() { 

    if ( $( '.clicked' ).hasClass( "hidden" ) ) {
        $('.clicked').removeClass('hidden');
		 $('.without_clicked').addClass('hidden');
		 $('#s').css('color', 'orange');
   
	}
	if ( $( '.without_clicked1' ).hasClass( "hidden" ) ) {
		$('.clicked1').addClass('hidden');
		$('.without_clicked1').removeClass('hidden');
		$('#s1').css('color', 'white');
		}
	if ( $( '.without_clicked2' ).hasClass( "hidden" ) ) {
		$('.clicked2').addClass('hidden');
		$('.without_clicked2').removeClass('hidden');
		$('#s2').css('color', 'white');
		}	
		
		
});
*/

//yash//
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
/*
 jQuery(".without_clicked").mouseover(function() { 
     var src = "img/trending-active.png";
     jQuery(this).fadeOut(50,function(){
         jQuery(this).attr("src", src).fadeIn();
     })
}).mouseout(function() {
     var src = "img/trending.png";
     jQuery(this).fadeOut(50,function(){
         jQuery(this).attr("src", src).fadeIn();
     })
});
*/
if(!$('.trending0 > svg').hasClass('red')){
 jQuery(".trending0").mouseenter(function() { 
    
     jQuery('#trending_svg').addClass('red');
	 
	 var div = $(".nav-link-label");
        div.animate({top: '4.5vh', opacity: '1'}, "slow");
		div.css('color', '#f47c12');
  
}).mouseleave(function() {
     
     jQuery('#trending_svg').removeClass('red');
	 var div = $(".nav-link-label");
        div.animate({top: '4.5vh', opacity: '1'}, "slow");
		div.css('color', '#9B9B9B');
});
};
if(!$('.trending1 > svg').hasClass('red')){
 jQuery(".trending1").mouseenter(function() { 
    
     jQuery('#trending_svg1').addClass('red');
	 
	 var div = $(".nav-link-label1");
        div.animate({top: '4.5vh', opacity: '1'}, "slow");
		div.css('color', '#f47c12');
  
}).mouseleave(function() {
     
     jQuery('#trending_svg1').removeClass('red');
	 var div = $(".nav-link-label1");
        div.animate({top: '4.5vh', opacity: '1'}, "slow");
		div.css('color', '#9B9B9B');
});
};
if(!$('.trending2 > svg').hasClass('red')){
 jQuery(".trending2").mouseenter(function() { 
    
     jQuery('#trending_svg2').addClass('red');
	 
	 var div = $(".nav-link-label2");
        div.animate({top: '4.5vh', opacity: '1'}, "slow");
		div.css('color', '#f47c12');
  
}).mouseleave(function() {
     
     
	 var div = $(".nav-link-label2");
        div.animate({top: '4.5vh', opacity: '1'}, "slow");
		if(!$('.nav-link-label2').hasClass('sponsors')) {
			jQuery('#trending_svg2').removeClass('red');
		div.css('color', '#9B9B9B');
		}
});
};
if(!$('.trending3 > svg').hasClass('red')){
 jQuery(".trending3").mouseenter(function() { 
    
     jQuery('#trending_svg3').addClass('red');
	 
	 var div = $(".nav-link-label3");
        div.animate({top: '4.5vh', opacity: '1'}, "slow");
		div.css('color', '#f47c12');
  
}).mouseleave(function() {
     
     
	 var div = $(".nav-link-label3");
        div.animate({top: '4.5vh', opacity: '1'}, "slow");
		if(!$('.nav-link-label3').hasClass('about12')) {
			 jQuery('#trending_svg3').removeClass('red');
		div.css('color', '#9B9B9B');
		}
});
};
if(!$('.trending4 > svg').hasClass('red')){
 jQuery(".trending4").mouseenter(function() { 
    
     jQuery('#trending_svg4').addClass('red');
	 
	 var div = $(".nav-link-label4");
        div.animate({top: '4.5vh', opacity: '1'}, "slow");
		div.css('color', '#f47c12');
  
}).mouseleave(function() {
     
    
	 var div = $(".nav-link-label4");
        div.animate({top: '4.5vh', opacity: '1'}, "slow");
		if(!$('.nav-link-label4').hasClass('events12')) {
			 jQuery('#trending_svg4').removeClass('red');
		div.css('color', '#9B9B9B');
		}
});
};
if(!$('.trending5 > img').hasClass('red')){
jQuery(".trending5").mouseenter(function() { 
     jQuery('#trending_svg5').addClass('red');
	  $('#trending_svg5').attr('src','img/team_hover.svg');
	 var div = $(".nav-link-label5");
        div.animate({top: '4.5vh', opacity: '1'}, "slow");
		div.css('color', '#f47c12');
  
}).mouseleave(function() {
     
     jQuery('#trending_svg5').removeClass('red');
	 $('#trending_svg5').attr('src','img/team.svg');
	 var div = $(".nav-link-label5");
        div.animate({top: '4.5vh', opacity: '1'}, "slow");
		div.css('color', '#9B9B9B');
});
};
if(!$('.trending6 > svg').hasClass('red')){
jQuery(".trending6").mouseenter(function() { 
     jQuery('#trending_svg6').addClass('red');
	
	 var div = $(".nav-link-label6");
        div.animate({top: '4.5vh', opacity: '1'}, "slow");
		div.css('color', '#f47c12');
  
}).mouseleave(function() {
     
     jQuery('#trending_svg6').removeClass('red');
	 var div = $(".nav-link-label6");
        div.animate({top: '4.5vh', opacity: '1'}, "slow");
		div.css('color', '#9B9B9B');
});
};
 jQuery("#collage4").mouseenter(function() { 
    
     jQuery('.dim').css('background-position', 'left bottom');
	 jQuery('.dim').css('opacity', '1');
	 jQuery('#right_arrow').addClass('black');
}).mouseleave(function() {
     
     jQuery('.dim').css('background-position', 'right bottom');
	 jQuery('.dim').css('opacity', '0.75');
	 jQuery('#right_arrow').removeClass('black');
});
/*
 jQuery(".without_clicked2").mouseover(function() { 
     var src = "img/about-active.png";
     jQuery(this).fadeOut(100,function(){
         jQuery(this).attr("src", src).fadeIn();
     })
}).mouseout(function() {
     var src = "img/about.png";
     jQuery(this).fadeOut(100,function(){
         jQuery(this).attr("src", src).fadeIn();
     })
});
 jQuery(".without_clicked3").mouseover(function() { 
     var src = "img/sponsors-active.png";
     jQuery(this).fadeOut(100,function(){
         jQuery(this).attr("src", src).fadeIn();
     })
}).mouseout(function() {
     var src = "img/sponsors.png";
     jQuery(this).fadeOut(100,function(){
         jQuery(this).attr("src", src).fadeIn();
     })
});
 jQuery(".without_clicked4").mouseover(function() { 
     var src = "img/ca-active.png";
     jQuery(this).fadeOut(100,function(){
         jQuery(this).attr("src", src).fadeIn();
     })
}).mouseout(function() {
     var src = "img/ca.png";
     jQuery(this).fadeOut(100,function(){
         jQuery(this).attr("src", src).fadeIn();
     })
});
 jQuery("#collage4").mouseover(function() { 
     jQuery('.play').addClass('open');
   
}).mouseout(function() {
     jQuery('.play').removeClass('open');
});*/
$(document).ready(function(){
	
   
    $(window).scroll(function(){
	var containerHeight = $('#intro').height();
	var containerHeight1 = $('#intro').height() + $('#trending').height() - 40;
	var containerHeight2 = $('#trending').height();
	var containerHeight3 = $('#about').height() + $('#intro').height() + $('#trending').height() - 40;
	var containerHeight4 = $('#contact').height() + $('#about').height() + $('#intro').height() + $('#trending').height() - 40;
	$(".yash1234567").css("height", containerHeight);
	/* $(".yash1234").css("height", containerHeight2); */
       var scrollPosition = $(window).scrollTop();
	   if (scrollPosition < (containerHeight))
        {
			$('.trending1 > svg').removeClass('reddish'); 
			$('.nav-link-label1').css('color', '#9B9B9B');
			$('.trending0 > svg').removeClass('reddish');
			$('.nav-link-label').css('color', '#9B9B9B');
			$('.trending3 > svg').removeClass('reddish');
			$('.nav-link-label3').css('color', '#9B9B9B');
							
		}
        else if (scrollPosition > (containerHeight) && scrollPosition < (containerHeight1))
        {
			$('.trending0 > svg').addClass('reddish');  	
			$(".nav-link-label").css('color', '#f47c12');
			$('.trending3 > svg').removeClass('reddish');
			$('.nav-link-label3').css('color', '#9B9B9B');
			$('.trending1 > svg').removeClass('reddish'); 
			$('.nav-link-label1').css('color', '#9B9B9B');
		}
        else if (scrollPosition > (containerHeight1) && scrollPosition < (containerHeight3))
        {
			$('.trending3 > svg').addClass('reddish'); 
            $('.nav-link-label3').css('color', '#f47c12');
			$('.trending1 > svg').removeClass('reddish'); 
			$('.nav-link-label1').css('color', '#9B9B9B');
			$('.trending0 > svg').removeClass('reddish');
			$('.nav-link-label').css('color', '#9B9B9B');
		}
        
		else if (scrollPosition > (containerHeight3))
        {
			$('.trending1 > svg').addClass('reddish'); 
            $('.nav-link-label1').css('color', '#f47c12');	
			$('.trending0 > svg').removeClass('reddish');
			$('.nav-link-label').css('color', '#9B9B9B');
			$('.trending3 > svg').removeClass('reddish');
			$('.nav-link-label3').css('color', '#9B9B9B');
		}
        })



});

var action = 1;

$(".click_here_view").on("click", viewSomething);

function viewSomething() {
    if ( action == 1 ) {
        $(".view_more_1").removeClass("hidden");
		var containerHeight5 = $('#trending').height();
		$(".yash1234").css("height", containerHeight5);
        action = 2;
    } else {
        $(".view_more_2").removeClass("hidden");
		$(".click_here_view_more").addClass("hidden");
		var containerHeight8 = $('#trending').height();
		$(".yash1234").css("height", containerHeight8);
        action = 1;
    }
}
