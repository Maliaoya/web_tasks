$(function() {
    $("#slider").slider();
    $("#slider").slider("option", "max", 360);
    $(".color-list li").click(function() {
        $(".user .color-list li").css("border-color", "white");
        $(this).css("border-color", "black");
        $(".user .color-list li i").css("display", "none");
        $(" i", this).css("display", "block");
        var color = $(this).css("background-color");
        var rgb = rgb2hex(color);
        $("#txt_user").val(rgb)
    });
    $("#slider").slider({
        orientation: "vertical"
    });
    $("#slider").slider({
        slide: refreshView,
        change: refreshView
    });
    $("#dragger").draggable({
        containment: "parent"
    });
    $("#dragger").draggable({
        drag: getDrag
    });
    for (var i = 1; i <= 24; i++) {
        var n = i.toString();
        var color = "color" + i.toString();
        $(".user .color-list li:nth-of-type(" + n.toString() + ")").css("background-color", window.localStorage[color])
    }
    $("#slider").slider("option", "min", 0);
})

function getDrag() {
	var ev = event || window.event;
	var point = { x: 0, y: 0 };
	if (ev.pageX || ev.pageY) {
		point.x = ev.pageX;
		point.y = ev.pageY;
	} else {//兼容ie
		point.x = ev.clientX + document.body.scrollLeft - document.body.clientLeft;
		point.y = ev.clientY + document.documentElement.scrollTop;
	}
	var left = $(".color-img img").offset().left;
	var top = $(".color-img img").offset().top;
	var img_left = point.x - left;
	var img_top = point.y - top;
	var rate = 255 / 100;
	var S = parseInt(img_left / rate);
	if (S > 100) S = 100;
	if (S < 0) S = 0;
	var V = parseInt((255 - img_top) / rate);
	if (V > 100) V = 100;
	if (V < 0) V = 0;
	$("#txt_s").val(S);
	$("#txt_v").val(V);
	refreshView();
}

function refreshView() {
	var color = $("#slider").slider("value");
	if (color == 360) {
		color = 0;
	}
	$("#txt_h").val(color);
	var sendH = color;
	var sendS = $("#txt_s").val() / 100;
	var sendV = $("#txt_v").val() / 100;
	var arr = HSV2RGB(sendH, sendS, sendV);
	var red = arr[0];
	var green = arr[1];
	var blue = arr[2];
	$("#txt_r").val(red);
	$("#txt_g").val(green);
	$("#txt_b").val(blue);
	var hex = hexFromRGB(red, green, blue);
	$(".color-view .view").css("background-color", "#" + hex);
	$("#txt_you").val("#" + hex);
	var fixArr = HSV2RGB(sendH, 1, 1);
	var fixHex = hexFromRGB(fixArr[0], fixArr[1], fixArr[2]);
	$(".color-img img").css("background-color", "#" + fixHex);
}
function hexFromRGB(r, g, b) {
	var hex = [
  r.toString(16),
  g.toString(16),
  b.toString(16)
  ];
	$.each(hex, function (nr, val) {
		if (val.length === 1) {
			hex[nr] = "0" + val;
		}
	});
	return hex.join("").toUpperCase();
}
function HSV2RGB(getH, getS, getV) {
	var h = getH;
	var s = getS;
	var v = getV;
	var r = 0;
	var g = 0;
	var b = 0;
	var i = (Math.floor(h / 60)) % 6;
	var f = h / 60 - i;
	var p = v * (1 - s);
	var q = v * (1 - f * s);
	var t = v * (1 - (1 - f) * s);
	switch (i) {
		case 0: r = v; g = t; b = p; break;
		case 1: r = q; g = v; b = p; break;
		case 2: r = p; g = v; b = t; break;
		case 3: r = p; g = q; b = v; break;
		case 4: r = t; g = p; b = v; break;
		case 5: r = v; g = p; b = q; break;
	}
	r = parseInt(r * 255);
	g = parseInt(g * 255);
	b = parseInt(b * 255);
	return [r, g, b];
}
function getPosition(ev) {
	ev = ev || window.event;
	var point = { x: 0, y: 0 };
	if (ev.pageX || ev.pageY) {
		point.x = ev.pageX;
		point.y = ev.pageY;
	} else {//兼容ie
		point.x = ev.clientX + document.body.scrollLeft - document.body.clientLeft;
		point.y = ev.clientY + document.documentElement.scrollTop;
	}
	var left = $(".color-img img").offset().left;
	var top = $(".color-img img").offset().top;
	var img_left = point.x - left;
	var img_top = point.y - top;
	$("#dragger").css({ "left": img_left + "px", "top": img_top + "px" });
	var rate = 255 / 100;
	var S = parseInt(img_left / rate);
	var V = parseInt((255 - img_top) / rate);
	$("#txt_s").val(S);
	$("#txt_v").val(V);
	refreshView();
}
function removeColor(n) {
	var s = "color" + n.toString();
	var localStorage = window.localStorage;
	localStorage.removeItem(s);
	$(".user .color-list li:nth-of-type(" + n.toString() + ")").css("background-color", "transparent");
}
function rgb2hex(rgb) {
	rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
	function hex(x) {
		return ("0" + parseInt(x).toString(16)).slice(-2).toUpperCase();
	}
	return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}