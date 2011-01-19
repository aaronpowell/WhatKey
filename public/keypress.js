$('body').live('keypress', function(e) {
	$('#kc').text(e.keyCode);
});
$(function() {
	$(document).keypress(function(e) {
		e.preventDefault();
		$('#kc').text(e.keyCode === 0 ? e.which : e.keyCode);
	});
});
