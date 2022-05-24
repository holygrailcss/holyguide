$(document).ready(function () {
	$(".resize-code").on("click", function () {
		$(this.parentNode.parentNode.parentNode).toggleClass("openCode");
		e.preventDefault();
	});
	$(".resize-rules").on("click", function () {
		console.log("esto no funciona");
		$(this.parentNode.parentNode).toggleClass("openRules");
	});
	$(".btn-anim").click(function () {
		$(this).toggleClass("is-loading");
	});
	var clipboard = new ClipboardJS(".btncode");
	clipboard.on("success", function (e) {
		console.info("Action:", e.action);
		console.info("Text:", e.text);
		console.info("Trigger:", e.trigger);
		e.clearSelection();
	});
	// Enseñamos el primero ocultamos el resto
	$("#tabguide-nav li:first-child").addClass("active");
	$(".tabguide-content").hide();
	$(".tabguide-content:first").show();
	// Click function
	$("#tabguide-nav li").click(function () {
		$("#tabguide-nav li").removeClass("active");
		$(this).addClass("active");
		$(".tabguide-content").hide();
		var activeTab = $(this).find("a").attr("href");
		$(activeTab).fadeIn();
		return false;
	});





        $('input[type="checkbox"]').click(function(){
            if($(this).is(":checked")){
                console.log("Checkbox esta seleccionado.");
            }
            else if($(this).is(":not(:checked)")){
                console.log("Checkbox no esta seleccionado.");
            }
        });



});
