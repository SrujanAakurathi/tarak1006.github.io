$( 'input[type="text"]' ).wrap( "<div class='input-field'></div>" );
	var a = $('input[type="radio"]');
	a.addClass('with-gap');
	$.each(a,function(i,v){
		var text = $(v)
			    .clone()    //clone the element
			    .children() //select all the children
			    .remove()   //remove all the children
			    .end()  //again go back to selected element
			    .text();
        var k = makeid();
        $(v).attr("id",k);
		var markup = '<label for="'+$(v).attr("id")+'">'+text+'</label>';
		$(markup).insertAfter($(v));
	});
$(document).ready(function(){



    $('select').material_select();
});
function makeid()
{
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for( var i=0; i < 5; i++  )
                text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
}

