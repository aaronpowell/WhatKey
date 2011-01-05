$('body').live('keydown', function(e) {
	$('#kc').text(e.keyCode);
});
$(function() {
	$(document).keydown(function(e) {
		$('#kc').text(e.keyCode === 0 ? e.which : e.keyCode);
	});
});
