$(document).ready(function(){
	var eleme=document.querySelectorAll(".intense");
	Intense(eleme);
  	$("div").click (function(){
    	$("#login_popup").css({display:'none',opacity:'0'});
  	});
});

function openNavigation(){
	$(".list-menu").css({visibility: "visible",opacity: "1"});
}

function closeNavigation(){
	$(".list-menu").css({visibility: "hidden",opacity: "0"});
}

function closeIframe(){
  $("#login_popup").css({display:'none',opacity:'0'});
  location.reload();
}

function loginClick(event){
  event.stopPropagation();
  closeNavigation();
  $("#login_popup").css({display:'block',opacity:'1'});
}

function logout(){
  closeNavigation();
  $("#user_menu").css({display:'none',opacity:'0'});
  $.ajax({
      type: "POST",
      url: "../Register/logout.php",
      success: function( result ){
        if(result=='success'){
          location.reload();
        }else{
          alert('No Internet Connection');
        }
      }
    });
}

function login(){
  alert("Login Before Registration");
  loginClick();
}

function register(eventId){
	if(eventId=="AID05"){
		$("#register_iframe").attr({'src':"../AdizyaRegister/register_adizya.php?eventId="+eventId+"&lastPage=AdizyaInformals&minParticipant=3&maxParticipant=3"});
    	$("#popup").css({'visibility':'visible','opacity':1});
	}else if(eventId=='AID06'){
		$("#register_iframe").attr({'src':"../AdizyaRegister/register_adizya.php?eventId="+eventId+"&lastPage=AdizyaInformals&minParticipant=2&maxParticipant=2"});
    	$("#popup").css({'visibility':'visible','opacity':1});
	}else if(eventId=='AID07'){
		$("#register_iframe").attr({'src':"../AdizyaRegister/register_adizya.php?eventId="+eventId+"&lastPage=AdizyaInformals&minParticipant=2&maxParticipant=2"});
    	$("#popup").css({'visibility':'visible','opacity':1});
	}else if(eventId=='AID08'){
		window.location.href="../AdizyaRegister/register_one_adizya.php?eventId="+eventId+"&lastPage=AdizyaInformals";
	}else if(eventId=='AID09'){
		$("#register_iframe").attr({'src':"../AdizyaRegister/register_adizya.php?eventId="+eventId+"&lastPage=AdizyaInformals&minParticipant=1&maxParticipant=2"});
    	$("#popup").css({'visibility':'visible','opacity':1});
	}else if(eventId=='AID10'){
		$("#register_iframe").attr({'src':"../AdizyaRegister/register_adizya.php?eventId="+eventId+"&lastPage=AdizyaInformals&minParticipant=2&maxParticipant=3"});
    	$("#popup").css({'visibility':'visible','opacity':1});
	}
}

function closeRegister(lastPage){
  $("#popup").css({'visibility':'hidden','opacity':0});
  window.location.href="../"+lastPage+"/";
}

function hide_popup(){
  $("#popup").css({'visibility':'hidden','opacity':0});
}

function unregister(eventId,index){
  window.location.href="../AdizyaRegister/unregister_adizya.php?eventId="+eventId+"&lastPage=AdizyaInformals";
}

function closeRegisterSimply(){
	$("#popup").css({'visibility':'hidden','opacity':0});
}