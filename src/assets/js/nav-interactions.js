$(document).ready(function () {
        $(".doc-menu-title ").click(function () {
            if ($(this).parent().hasClass("active")) {
                $(this).parent().removeClass("active");
                $(this).siblings(".body").slideUp();
            }
            else {
                $(".body").slideUp();
                $(".list-clear").removeClass("active");
                $(this).parent().addClass("active");
                $(this).siblings(".body").slideDown();
            }
        });
    });