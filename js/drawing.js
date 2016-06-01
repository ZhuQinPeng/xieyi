$(function() {
	(function($) {
		var index = 0;
		$(".swiper-inner a").eq(0).clone().appendTo($(".swiper-inner"));
		var timer = setInterval(function() {
			var perWidth = $(".swiper-container").width();
			index++;
//			if (index > $(".swiper-inner a").size() - 1) {
//				index = 0;
//			}
			$(".swiper-inner").stop().animate({
				left:-index * perWidth
			},function() {
				if (index == $(".swiper-inner a").size() - 1) {
					$(".swiper-inner").css("left",0);
					index = 0;
				}
			});
		},3000);
		
		var address = ["img/Drawing-1.png","img/Drawing-2.png","img/Drawing-3_03.png","img/Drawing-4_03.png","img/Drawing-5_03.png","img/Drawing-6_03.png","img/Drawing-7_03.png","img/Drawing-8_03.png","img/Drawing-9_03.png","img/Drawing-10_03.png","img/Drawing-11_03.png","img/Drawing-12_03.png"];
		for (var i = 0; i < address.length; i++) {
			var Img = new Image();
			
		}
		function rnd(min, max) {
			return parseInt(Math.random()*(max-min+1))+min;
		}
		
		var Value = [];
		
		function rndArray() {
			Value = [];
			while(Value.length < address.length) {
				var r = rnd(0, 11);
				if (Value.indexOf(r) == -1) {
					Value.push(r);
				}
			}
		}
		rndArray();
		
		function create() {
			for (var i = 0; i < Value.length; i++) {
				zhi = Value[i];
//				console.log(zhi);
				var minHeight = $(".dynamic li").eq(0);
				for (var j = 0; j < $(".dynamic li").size(); j++) {
					if (minHeight.height() > $(".dynamic li").eq(j).height()) {
						minHeight = $(".dynamic li").eq(j);
					}
				}
				
				var Div = $("<div/>");
				Div.html("<div><div><img src='img/Drawing-seo.png'/><p>图片标题</p></div></div><img src='" + address[zhi] + "'/>");
				minHeight.append(Div);
			}
		}
		
		
		function getPosition(element) {
			var oP = element.offsetParent;
			var x = element.offsetLeft;
			var y = element.offsetTop;
			while(oP) {
				x = oP.clientLeft + x + oP.offsetLeft;
				y = oP.clientTop + y + oP.offsetTop;
				oP = oP.offsetParent;
			}
			return {
				x:x,
				y:y
			}
		}

		create();

		var wrap = document.getElementById('wrap');
		window.onscroll = function() {
			var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
			if (getPosition(wrap).y + wrap.offsetHeight <= document.documentElement.clientHeight + scrollTop) {
				rndArray();
				create();
			}
		}
		
		$(".block").click(function() {
			//兼容ie
			$("html,body").animate({
				scrollTop:0
			},500);
		});
	}(jQuery));
});