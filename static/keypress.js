$('body').live('keypress', function(e) {
	$('#content').text(e.keyCode);
});