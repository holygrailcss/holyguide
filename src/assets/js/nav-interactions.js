$(document).ready(function () {
       


        $(".toggle-menu").click(function () {
            $("nav").toggleClass("open-menu");
            $(this).toggleClass("open-menu");
        });
    });