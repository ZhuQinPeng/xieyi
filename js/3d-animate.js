$(function() {
	(function($) {
		$(".part1 img").eq(0).on("click",function() {
			$(".part1 video").get(0).play();
			$(".part1 img").eq(0).hide();
			$(".part1 .word-box").hide();
		});
		
	}(jQuery));
});