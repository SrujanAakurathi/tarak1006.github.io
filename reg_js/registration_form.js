$(document).ready(function(){
	$('#name').alphanum({
		allow: ' ',allowNumeric: false,
	});
	$("#email").alphanum({allowUpper    : false,allow:'!@#%^&*+\\\';,/|"`.- _'});
	$("#mobile,#age").alphanum({allowNumeric       : true,allowLatin         : false,})
	$("#college").alphanum({
		allow: '.-',
	});
	
});
$(document).ready(function(){
	
	// validate signup form on keyup and submit
	$("#registration_form").validate({
		rules: {
			
			name: {
				required: true,
				minlength: 2
			},
			pwd: {
				required: true,
				minlength: 8
			},
			mobile: {
				required: true,
				minlength: 10
			},
			confpwd: {
				required: true,
				minlength: 8,
				equalTo: "#pwd"
			},
			email: {
				required: true,
				email: true
			},
			college:
			{
				required: true,
				minlength: 2
			},
			gender:
			{
				required:true
			},
			age:
			{
				required: true
			},
			accomodation:
			{
				required:true
			},
			event:{
				required: true
			},
			fileToUpload:
			{
				required:true
			}
		},
		messages: {
			name: {
				required: "Please enter your name.",
				minlength: "Your name must consist of at least 2 characters."
			},
			pwd: {
				required: "Please provide a password.",
				minlength: "Your password must be at least 8 characters long."
			},
			confpwd: {
				required: "Please provide a password.",
				minlength: "Your password must be at least 8 characters long.",
				equalTo: "Please enter the same password as above."
			},
			email: {
				required: "Please enter a valid email address."
			},
			mobile: {
				required: "Please enter your mobile number.",
				minlength: "Enter valid mobile number."},
			college: {
				required: "Please enter the name of your college."},
			event:{
				required: "Please select an event."
			},
			gender:{
				required: "Select your gender."
			},
			accomodation:{
				required: "Need accomodation?"
			},
			fileToUpload:
			{
				required: "Please upload your photo."
			}
		}
	});
});
$(document).ready(function(){
	 $("#fileToUpload").on('change', function () {
 
        if (typeof (FileReader) != "undefined") {
 
            var image_holder = $("#image-holder");
            image_holder.empty();
 
            var reader = new FileReader();
            reader.onload = function (e) {
                $("<img />", {
                    "src": e.target.result,
                    "class": "thumb-image"
                }).appendTo(image_holder);
 
            }
            image_holder.show();
            reader.readAsDataURL($(this)[0].files[0]);
        } else {
            alert("This browser does not support FileReader.");
        }
    });
})
$(function() {

$('#event').on('change', function () {
     var selectVal = $("#event option:selected").val();
	 $("#hide").css("display","block");
	 $('input[name=yes]').attr('checked',false);
	 if(selectVal != null){
		 $('.choice').removeClass('hidden');
	 }
	 if(!$('.another_event').hasClass('hidden')){
		 $('.another_event').addClass('hidden');
	 }
	 if(selectVal == 'None'){
		if(!$('.choice').hasClass('hidden')) {
		 $('.choice').addClass('hidden');
		}
	 }
});
/*$('#event1').on('change', function () {
     var selectVal = $("#event1 option:selected").val();
	 if(selectVal != null){
		 $('.other_event1').removeClass('hidden');
	 }
	 
	 if(selectVal == 'None'){
		if(!$('.other_event1').hasClass('hidden')) {
		 $('.other_event1').addClass('hidden');
		}
	 }
});*/

$("#positive").click(function() {
	$('.another_event').removeClass("hidden");
$('#hide').css("display","none");
$('#event1').css("marginTop","6vh");
});
$("#negative").click(function() {
	if(!$('.another_event').hasClass('hidden')) {
		$('.another_event').addClass("hidden");
		$("#another_event").find("select option").prop("selected", false);
	}
	
	/* if(!$('.another_event1').hasClass('hidden')) {
		
		$('.another_event1').addClass("hidden");
		$("#another_event1").find("select option").prop("selected", false);
		
	} */
	/* if(!$('.other_event1').hasClass('hidden')) {
		$('.other_event1').addClass("hidden");
		$("#another_event1").find("select option").prop("selected", false);
		$('input[name="Yes1"]').attr('checked', false);
	} */
	$('#hide').css("display","none");
	$('#event1').css("marginTop","6vh");
});
$("#positive1").click(function() {
	$('.another_event1').removeClass("hidden");
	$('#registration_form > div:nth-child(3) > span').display="none";

});
$("#negative1").click(function() {
	if(!$('.another_event1').hasClass('hidden')) {
		$('.another_event1').addClass("hidden");
		$("#another_event1").find("select option").prop("selected", false);
		
	}
});
var $selects = $('select');
$selects.on('change', function() {
    var $select = $(this), 
        $options = $selects.not($select).find('option'),
        selectedText = $select.children('option:selected').text();
		

    var $optionsToDisable = $options.filter(function() {
        return $(this).text() == selectedText;
    });

    $optionsToDisable.prop('disabled', true);
});
$('#gender').on('change',
function(){
	if($('#gender').val()=="Female")
	{
	if($('#accomodation').val()=="No")
	{
		$('#accomodation').val("yes");
	}
	$('#accomodation > option:nth-child(3)').css("display","none");
	}
	else if($('#gender').val()=="Male")
	{
		$('#accomodation > option:nth-child(3)').css("display","block");
	}


});
//to apply initial selection
$selects.eq(0).trigger('change');
});
