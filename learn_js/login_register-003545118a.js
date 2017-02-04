$(document).ready(function(){
	$('#register_form,#login_form').on( "submit", function(event) {
		event.preventDefault();
		var form = this;

		var submit_btn  = $(this).find("input[type=submit]");
		submit_btn.val("Please Wait...").prop( "disabled", true); //disable submit button
		var form_data = new FormData(this); //Creates new FormData object
		var post_url = $(this).attr("action"); //get action URL of form

		//jQuery Ajax to Post form data
		$.ajax({
			url : post_url,
			type: "POST",
			data : form_data,
			contentType: false,
			cache: false,
			processData:false
		}).done(function(res){
			window.location = '/user/dashboard';
		}).fail(function( jqXHR, textStatus  ) {
			var errors = JSON.parse(jqXHR.responseText);
			for(i in errors){
				$('#'+i+'-error').text(errors[i]);
			}
		});
	});
});