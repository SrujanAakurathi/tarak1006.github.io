jQuery(function($) {

    var updateArrows = function(){
        $('.carouselGallery-right').removeClass('disabled');
        $('.carouselGallery-left').removeClass('disabled');
        var curIndex = $('.carouselGallery-carousel.active').data('index');
        updateArrows.nbrOfItems = updateArrows.nbrOfItems || $('.carouselGallery-carousel').length;

        curIndex === updateArrows.nbrOfItems && $('.carouselGallery-right').addClass('disabled');
        curIndex === 0 && $('.carouselGallery-left').addClass('disabled');
    }
    $('.carouselGallery-carousel').on('click', function(e){
        scrollTo = $('body').scrollTop();
       $('body').addClass('noscroll');
       $('body').css('position', 'fixed');
        $('.carouselGallery-col-1, .carouselGallery-col-2').removeClass('active');
        $(this).addClass('active');
        showModal($(this));
        updateArrows();
    });

    $('body').on('click', '.carouselGallery-right, .carouselGallery-left', function(e){
        if($(this).hasClass('disabled')) return;
        var curIndex = $('.carouselGallery-carousel.active').data('index');
        var nextItemIndex = parseInt(curIndex+1);
        if($(this).hasClass('carouselGallery-left')){
            nextItemIndex-=2;
        }
        var nextItem = $('.carouselGallery-carousel[data-index='+nextItemIndex+']');
       // console.log(nextItemIndex);
        if(nextItem.length > 0){
            $('.carouselGallery-col-1, .carouselGallery-col-2').removeClass('active');
            $('body').find('.carouselGallery-wrapper').remove();
            showModal($(nextItem.get(0)));
            nextItem.first().addClass('active');
        }
        updateArrows();
    });

    var modalHtml = '';
    showModal = function(that){
     //   console.log(that);
        var username = that.data('username'),
        location = that.data('location'),
        imagetext = that.data('imagetext'),
        likes =  that.data('likes'),
        imagepath = that.data('imagepath'),
        carouselGalleryUrl = that.data('url');
        postURL =  that.data('posturl');

        maxHeight = $(window).height()-100;

        /*if ($('.carouselGallery-wrapper').length === 0) {
            if(typeof imagepath !== 'undefined') {
                modalHtml = "<div class='carouselGallery-wrapper'>";
                modalHtml += "<div class='carouselGallery-modal'><span class='carouselGallery-left'><span class='icons icon-arrow-left6'></span></span><span class='carouselGallery-right'><span class='icons icon-arrow-right6'></span></span>";
                modalHtml += "<div class='container'>";
                modalHtml += "<span class='icons iconscircle-cross close-icon'></span>";
                modalHtml += "<div class='carouselGallery-scrollbox' style='max-height:"+maxHeight+"px'><div class='carouselGallery-modal-image'>";
                modalHtml += "<img src='"+imagepath+"' alt='carouselGallery image'>";
                modalHtml += "</div>";
                modalHtml += "<div class='carouselGallery-modal-text'>";
                modalHtml += "<span class='carouselGallery-modal-username'><a href='"+postURL+"'>"+username+"</a> </span>"
                modalHtml += "<span class='carouselGallery-modal-location'>"+location+"</span>";
                modalHtml += "<span class='carouselGallery-item-modal-likes'>";
                modalHtml += "<span class='icons icon-heart'></span>";
                modalHtml += "<a href='"+postURL+"'>"+likes+"</a>";
                modalHtml += "</span>";
                modalHtml += "<span class='carouselGallery-modal-imagetext'>";
                modalHtml += "<p>"+imagetext+"</p>";
                modalHtml += "</span></div></div></div></div></div>";
                $('body').append(modalHtml).fadeIn(2500);
            }
        }*/
		if ($('.carouselGallery-wrapper').length === 0) {
            if(typeof imagepath !== 'undefined') {
                modalHtml = '<div class="carouselGallery-wrapper"><div class="row carouselGallery-modal">';
                modalHtml += '<div class="include col-lg-12" style="background-color: black;"><div class="row"><div class="col-lg-12 heading"><div class="col-lg-7">';
                modalHtml += '<span class="modal-name carouselGallery-modal-username event_name"style="font-size: 40px;margin-left: -50px;">'+username+'</span></div>';
                modalHtml += '<div class="col-lg-1 col-lg-offset-11 col-xs-1 col-xs-offset-9 iconscircle-cross" ><svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 64 64"><path d="M28.9 31.8L0.6 60.1c-0.8 0.8-0.8 2.1 0 2.8 0.4 0.4 0.9 0.6 1.4 0.6 0.5 0 1-0.2 1.4-0.6l28.5-28.5 28.5 28.5c0.4 0.4 0.9 0.6 1.4 0.6 0.5 0 1-0.2 1.4-0.6 0.8-0.8 0.8-2.1 0-2.8L35.1 31.8 63.4 3.4c0.8-0.8 0.8-2.1 0-2.8 -0.8-0.8-2.1-0.8-2.8 0L32 29.2 3.4 0.6c-0.8-0.8-2.1-0.8-2.8 0 -0.8 0.8-0.8 2.1 0 2.8L28.9 31.8z"/></svg></div></div>';
                modalHtml += '<div class="col-lg-12"><div class="col-lg-5 col-xs-8 col-xs-offset-2"><img src="'+imagepath+'" style="" alt="carouselGallery image" class="img-responsive event_image"></div><div class="col-lg-6 col-xs-12 event_description"><center>';
                modalHtml += '<p>'+imagetext+'</p>';
				modalHtml += '<p><a href="'+postURL+'" target="_blank"><button type="submit" class="btn btn-lg rulebook">Rulebook</button></a><a href="http://thomso.in/register" target="_blank" style="margin-left: 14px;"><button type="submit" class="btn btn-lg rulebook">Register Now</button></a></p>';
                modalHtml += '</center></div></div><div class="col-lg-12" style="height: 50px;"><div class="col-lg-1 col-xs-1 carouselGallery-left"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 477.175 477.175" style="enable-background:new 0 0 477.175 477.175;" xml:space="preserve" width="32px" height="32px">	<path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225   c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z" fill="#FFFFFF"/></svg></div><div class="col-lg-1 col-xs-1 col-lg-offset-11 col-xs-offset-9 carouselGallery-right"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve" width="32px" height="32px" enable-background="new 0 0 477.175 477.175"><path d="M360.731 229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1 0s-5.3 13.8 0 19.1l215.5 215.5 -215.5 215.5c-5.3 5.3-5.3 13.8 0 19.1 2.6 2.6 6.1 4 9.5 4 3.4 0 6.9-1.3 9.5-4l225.1-225.1C365.931 242.875 365.931 234.275 360.731 229.075z" fill="#FFFFFF"/></svg></span></div></div></div></div></div>';
                $('body').append(modalHtml).fadeIn(2500);
            }
        }
    };

    $('body').on( 'click','.yash1234567', function(e) {
        /*if($(e.target).hasClass('.carouselGallery-wrapper')){*/
            removeModal();
        
    });
    $('body').on('click', '.carouselGallery-modal .iconscircle-cross', function(e){
        removeModal();
    });

     var removeModal = function(){
        $('body').find('.carouselGallery-wrapper').remove();
        $('body').removeClass('noscroll');
        $('body').css('position', 'static');
        $('body').animate({scrollTop: scrollTo}, 0);
    };

    // Avoid break on small devices
    var carouselGalleryScrollMaxHeight = function() {
        if ($('.carouselGallery-scrollbox').length) {
            maxHeight = $(window).height()-100;
            $('.carouselGallery-scrollbox').css('max-height',maxHeight+'px');
        }
    }
    $(window).resize(function() { // set event on resize
        clearTimeout(this.id);
        this.id = setTimeout(carouselGalleryScrollMaxHeight, 100);
    });
    document.onkeydown = function(evt) {
        evt = evt || window.event;
        if (evt.keyCode == 27) {
            removeModal();
        }
    };
	
});
