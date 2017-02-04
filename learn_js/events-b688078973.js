$(document).ready(function(){
	var sidebarData = [];
	var routeHash = false;
	$('.register-form-header,.login-form-header-footer').hide();
	$('.departmental-body,.departmental-mobile').hide();
	$('.departments-list').hide();
	$('.events-body').hide();
	$('.intro-body').show();
	$('.register-form-header-trigger').on('click',function(){
		$('.register-form-header-footer,.login-form-header').hide();
		$('.login-form-header-footer,.register-form-header').show();
		$('#login-head').html('Sign Up');
	});
	$('.login-form-header-trigger').on('click',function(){
		$('.login-form-header-footer,.register-form-header').hide();
		$('.register-form-header-footer,.login-form-header').show();
		$('#login-head').html('Sign In');
	});
	$('.centerstage-tab').on('click',function(){
		$(this).removeClass('info-div-head-inactive').addClass('info-div-head-active');
		$('.departmental-tab').removeClass('info-div-head-active').addClass('info-div-head-inactive');
		$('.departmental-body').hide()
		$('.centerstage-body').show();
		if(routeHash) {
			$('#event-category-' + routeHash[2]).click();
		}
		else
			$('.centerstage-body .event-category').first().click();
	});
	$('.departmental-tab').on('click',function(){
		$(this).removeClass('info-div-head-inactive').addClass('info-div-head-active');
		$('.centerstage-tab').removeClass('info-div-head-active').addClass('info-div-head-inactive');
		$('.centerstage-body').hide();
		$('.departmental-body').show();
		if(routeHash) {
			$('#event-category-' + routeHash[2]).click();
		}
		else
			$('.departmental-body .event-category').first().click();
	});
	$('.departmental-event-category').on('click',function(){
		$('.departmental-event-category .fa').toggleClass('fa-caret-up');
		$('.departments-list').slideToggle();
	});
	$('.events-tab').on('click', function(e) {
		$('.events-tab').removeClass('events-details-heading-active');
		$(this).removeClass('events-details-heading-inactive').addClass('events-details-heading-active');
		$('.events-body').hide();
		$(this).show();
		$('.' + $(this).attr('data-id')).show();
	});

	function eventCategoryClick() {
		$('.event-category').removeClass('events-main-active');
		$(this).removeClass('events-main-inactive').addClass('events-main-active');
		var event_id = $(this).data('id');
		var code = $(this).data('code');
		var type = $(this).data('type');
		$('.departments-list').slideUp();
		$.ajax('/json/' + type + '/' + event_id).done(function(result){
			var html = "";
			for (var i in result) {
				html += '<div id="sidebar-events-' + result[i].id +'" class="row sidebar-events ' + type + '-events" data-id="' + i + '" data-code="' + code + '" data-type="' + type+ '"> 					<div class="col-sm-12 italic ' + type + '-events-name sidebar-events-name"> 					<a>' + result[i].name + '</a></div></div>';
			}
			$('.events-list-side').html(html);
			sidebarData = result;

			$('.sidebar-events').on('click', sidebarEventClick);

			if(routeHash) {

				$('#sidebar-events-' + routeHash[3]).click();
				routeHash = false;
			}
			else {
				$('.sidebar-events').first().click();
			}
			
		});
	}

	function sidebarEventClick() {
		$('.department-name').on('click',function(){
			$('.departmental-event-category').html($(this).data('name') + '&nbsp&nbsp;<i class="fa fa-caret-down" aria-hidden="true"></i>');
		});
		var i = $(this).data('id');

		$('.intro-body').html(sidebarData[i].description);
		$('.reg-body').html(sidebarData[i].procedure);
		$('.rules-body').html(sidebarData[i].rules);
		$('.prob-body').html('<button class="common-button"><a href="' + sidebarData[i].statement + '" target="_blank">Problem Statement</a></button>');
		$('#contact_person').html(sidebarData[i].contact_person);
		$('#contact_email').html(sidebarData[i].contact_email);
		$('#contact_phone').html(sidebarData[i].contact_phone);
		$('#contact_person2').html(sidebarData[i].contact_person2);
		$('#contact_phone2').html(sidebarData[i].contact_phone2);
		var code = $(this).data('code');
		var type = $(this).data('type');
		history.pushState({}, '', "/events#" + type + "#" + code + "#" + sidebarData[i].id);

		$('.sidebar-events-name').removeClass('active strike');
		$(this).children().first().addClass('active strike');

		$('.events-tab').first().click();
	}

	$('.event-category').on('click', eventCategoryClick);

	if(window.location.hash.length > 0) {
		routeHash = window.location.hash.split('#');
		$('.' + routeHash[1] + '-tab').click();
	} else {
		$('.info-div-head-active').click();
	}
	
});
