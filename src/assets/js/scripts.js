$(document).ready(function () {
	
	$(".resize-code").on("click", function () {
		$(this.parentNode.parentNode.parentNode).toggleClass("openCode");
		e.preventDefault();
	});
	$(".resize-rules").on("click", function () {
        console.log("esto no funciona")
		$(this.parentNode.parentNode).toggleClass("openRules");
	});
});
