$('body').live('keydown', function(e) {
	$('#content').text(e.keyCode);
});