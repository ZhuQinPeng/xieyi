var pictureAddress = ["img/bim-new-3.jpg", "img/bim-new-1.jpg", "img/bim-new-2.jpg"];
var imgList = document.getElementsByClassName("bg-picture");
var Img = [];
var G1 = 0;
var G2 = 0;
var G3 = 0;
var bg1 = document.getElementsByClassName("bg-picture1")[0];
var bg2 = document.getElementsByClassName("bg-picture2")[0];
var bg3 = document.getElementsByClassName("bg-picture3")[0];
var num = 0;

//function preload() {
	for (var i = 0; i < imgList.length; i++) {
		Img[i] = new Image();
		Img[i].src = pictureAddress[i];
		console.log(Img[i].src)
		Img[i].onload = function() {
			num++;
			if (num == imgList.length) {
				for (var j = 0; j < imgList.length; j++) {
					imgList[j].src = pictureAddress[j];
					if (j == imgList.length - 1) {
						dingwei();
					}
				}
			}
		}
	}
//}

function dingwei() {
	G1 = imgList[0].offsetHeight;
	G2 = imgList[1].offsetHeight;
	G3 = imgList[2].offsetHeight;
	bg1.style.height = G1 + "px";
	bg2.style.height = G2 + "px";
	bg3.style.height = G3 + "px";
//	alert(G1);
//	alert(G2);
//	alert(G3);
//	alert(bg1);
//	alert(bg2);
//	alert(bg3);
}
window.onresize = function() {
	dingwei();
}

$(function() {
	(function($) {
		$(".backTop").on("click", function() {
			$("html,body").animate({
				scrollTop: 0
			}, 500);
		});
		
		function mousewheel(ele,up,down) {
			ele.get(0).onmousewheel = fn;
			if (window.addEventListener) {
				ele.get(0).addEventListener("DOMMouseScroll",fn,false);
			}
			
			function fn(e) {
				var e = e || window.event;
				e.preventDefault();
				if(flag) {
					if (e.wheelDelta > 0 || e.detail < 0)  {
						up();
	
						if (index == 5) {
							Top = $("footer").position().top;
						}
						
					}
					else {
						down();
						if (index == -1) {
							Top = 0;
						}
					}
					flag = false;
					
//					console.log(flag);
				
					if (index >= 0 && index <= 4) {
						$("html,body").stop().animate({
							scrollTop: $(".part").eq(index).position().top - 70
						},1000,function() {
							flag = true;
//							console.log(1111)
						});
					}
					else {
						$("html,body").stop().animate({
							scrollTop: Top
						},500,function() {
							flag = true;
//							console.log(22222)
						});
					}
				}
				
				
				return false;
				
			}
		}
		var index = -1;
		var flag = true;
		mousewheel($(window),function() {
			index++;
			if (index > 4) {
				index = 5;
			}
//			alert('shang');
		},function() {
			index--;
			if (index < 0) {
				index = -1;
			}
		});
	}(jQuery));
});