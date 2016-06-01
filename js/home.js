$(function() {
	(function($) {
		$("#wrap #content .content-box .detailed .part1").hover(function() {
			$("#wrap #content .content-box .detailed .part1 img").attr("src", "img/home-23.png");
			$("#wrap #content .content-box .detailed .part1 .bar").css({
				backgroundColor: "#cfdb00"
			});
			$("#wrap #content .content-box .detailed .part1 .description").css({
				color: "#3c3c3c"
			});
		}, function() {
			$("#wrap #content .content-box .detailed .part1 img").attr("src", "img/home-23-2.png");
			$("#wrap #content .content-box .detailed .part1 .bar").css({
				backgroundColor: "#e1e1e1"
			});
			$("#wrap #content .content-box .detailed .part1 .description").css("color", "#b4b4b4");
		});

		$("#wrap #content .content-box .detailed .part2").hover(function() {
			$("#wrap #content .content-box .detailed .part2 img").attr("src", "img/home-24-2.png");
			$("#wrap #content .content-box .detailed .part2 .bar").css({
				backgroundColor: "#cfdb00"
			});
			$("#wrap #content .content-box .detailed .part2 .description").css("color", "#3c3c3c");
		}, function() {
			$("#wrap #content .content-box .detailed .part2 img").attr("src", "img/home-24.png");
			$("#wrap #content .content-box .detailed .part2 .bar").css({
				backgroundColor: "#e1e1e1"
			});
			$("#wrap #content .content-box .detailed .part2 .description").css("color", "#b4b4b4");
		});

		$("#wrap #content .content-box .detailed .part3").hover(function() {
			$("#wrap #content .content-box .detailed .part3 img").attr("src", "img/home-25-2.png");
			$("#wrap #content .content-box .detailed .part3 .bar").css({
				backgroundColor: "#cfdb00"
			});
			$("#wrap #content .content-box .detailed .part3 .description").css("color", "#3c3c3c");
		}, function() {
			$("#wrap #content .content-box .detailed .part3 img").attr("src", "img/home-25.png");
			$("#wrap #content .content-box .detailed .part3 .bar").css({
				backgroundColor: "#e1e1e1"
			});
			$("#wrap #content .content-box .detailed .part3 .description").css("color", "#b4b4b4");
		});
	}(jQuery));
});