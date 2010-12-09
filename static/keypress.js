$('body').live('keypress', function(e) {
	$('#kc').text(e.keyCode);
});
$(function() {
	$(document).keypress(function(e) {
		$('#kc').text(e.keyCode);
	});
});
