$(document).ready(function () {
	
	$(".resize-code").on("click", function () {
		$(this.parentNode.parentNode.parentNode).toggleClass("openCode");
		e.preventDefault();
	});
	$(".resize-rules").on("click", function () {
        console.log("esto no funciona")
		$(this.parentNode.parentNode).toggleClass("openRules");
	});

		$('.btn-anim').click(function () {
			$(this).toggleClass('is-loading');
		});


        var clipboard = new ClipboardJS('.btncode');
        
        clipboard.on('success', function(e) {
            console.info('Action:', e.action);
            console.info('Text:', e.text);
            console.info('Trigger:', e.trigger);

   
            
        
            e.clearSelection();
        });





});
