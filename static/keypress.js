$('body').live('keypress', function(e) {
	$('#kc').text(e.keyCode);
});