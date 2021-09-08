/*-Table of Contents
    --------------------
    01- Mobile Menu
    02- Sticky Navbar     
 ----------------------------*/

$(function() {
    "use strict";

    // Global variables
    var $win = $(window);

    /*==========   Mobile Menu   ==========*/
    var $navToggler = $(".navbar-toggler");
    $navToggler.on("click", function() {
        $(this).toggleClass("actived");
    });
    $navToggler.on("click", function() {
        $(".navbar-collapse").toggleClass("menu-opened");
    });

    /*==========   Sticky Navbar   ==========*/
    $win.on("scroll", function() {
        if ($win.width() >= 992) {
            var $navbar = $(".sticky-navbar");
            if ($win.scrollTop() > 200) {
                $navbar.addClass("fixed-navbar");
            } else {
                $navbar.removeClass("fixed-navbar");
            }
        }
    });
});
