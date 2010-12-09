$('body').live('keyup', function(e) {
	$('#kc').text(e.keyCode);
});