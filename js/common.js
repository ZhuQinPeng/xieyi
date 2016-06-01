$(function() {
	(function($) {
		var showFlag = true;
		$("#wrap nav>div .box a").eq(6).on("click", function() {
			if (showFlag) {
				$("#wrap nav").css({
					height: "256"
				});
				$("#wrap nav .menu").show();
				$("#content .place").css({
					height: "257"
				});
				showFlag = !showFlag;
			} else {
				$("#wrap nav").css({
					height: "70"
				});
				$("#wrap nav .menu").hide();
				$("#content .place").css({
					height: "71"
				});
				showFlag = !showFlag;
			}
		});

		$(window).resize(function() {
			if ($(window).width() > 900) {
				$("#wrap nav").css({
					height: "70"
				});
				$("#wrap nav .menu").hide();
				$("#content .place").css({
					height: "71"
				});
				showFlag = true;
			}
		})
	}(jQuery));
});