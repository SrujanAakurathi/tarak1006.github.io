$(document).ready(function(){
	var canvasDiv = document.getElementById('particle-canvas');
	var options = {
		particleColor: '#44432C',
		interactive: true,
		speed: 'medium',
		density: 'medium'
	};
	//https://raw.githubusercontent.com/JulianLaval/canvas-particle-network
	var particleCanvas = new ParticleNetwork(canvasDiv, options);
	$( "body" ).mousemove(function( event ) {
		$("#particle-canvas").css('transform', 'translate(' + event.pageY /50 + 'px,' + -event.pageX /50+ 'px)');
	});
});