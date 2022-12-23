
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


	$(".opencode").click(function () {
	
		$(this.parentNode).toggleClass("active");


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


gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.saveStyles(".mobile, .desktop");

let container = document.querySelector(".md-scroll-wrap");

	ScrollTrigger.matchMedia({
		"(min-width: 768px)": function () {
			gsap.to(".md-scroll-wrap", {
				x: () =>
					-(container.scrollWidth - document.documentElement.clientWidth) + "px",
				ease: "none",
				scrollTrigger: {
					trigger: ".md-scroll",
					invalidateOnRefresh: true,
					pin: true,
					scrub: 1,
					end: () => "+=" + container.offsetWidth,
				},
			});
		},
	});


	// Script
lastScroll = 0;
$(window).on('scroll',function() {    
    var scroll = $(window).scrollTop();
    if(lastScroll - scroll > 0) {
        $("body").addClass("scrollUp");
    } else {
        $("body").removeClass("scrollUp");
    }
    lastScroll = scroll;
});
