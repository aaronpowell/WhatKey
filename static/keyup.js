$('body').live('keyup', function(e) {
	$('#kc').text(e.keyCode);
});
$(function() {
	$(document).keyup(function(e) {
		$('#kc').text(e.keyCode);
	});
});
