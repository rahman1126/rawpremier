$(function() {
    var width = $(window).width();
    var headerHeight = $("#header").height();
    $(".header-wrapper").css("padding-top", headerHeight + "px");

    // scroll event
    var prevScrollpos = window.pageYOffset;

    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;

        if (prevScrollpos > currentScrollPos) {
            $(".header-nav-wrapper").removeClass("hide-half-menu");
        } else {
            $(".header-nav-wrapper").addClass("hide-half-menu");
        }
        prevScrollpos = currentScrollPos;
    }

    $("button.header-sidebar-trigger").click(function() {
        $("body").toggleClass("sidebar-open");
        $("nav#sidebar").toggleClass("expanded active");
    });

    // lang selector
    // $("a.lang-selector").click(function() {
    //     $(".header-dropdown-lang").toggleClass("is-expanded");
    // });

    // only for mobile device
    if (width < 960) {
        $(".header-main-navigation-item").click(function(event) {
            event.stopPropagation();

            $(".close-submenu-trigger").removeClass("hidden");
            $(".header-doormat-mobile-title").removeClass("expanded active");
            $("li#mobile-lang-menu").removeClass("active expanded");
            $(".doormat-menu").removeClass("expanded active");
            $(".sidebar-submenu-wrapper").removeClass("active expanded");

            $("nav#sidebar").addClass("submenu-expanded");
            $(this).children(".header-doormat-mobile-title").addClass("expanded active");
            $(this).children(".doormat-menu").addClass("expanded active");
        });
    }

    $("li#mobile-lang-menu").click(function() {
        $(".close-submenu-trigger").removeClass("hidden");
        $(".header-doormat-mobile-title").removeClass("expanded active");
        $(".doormat-menu").removeClass("expanded active");
        $(".sidebar-submenu-wrapper").removeClass("active expanded");

        $("li#mobile-lang-menu").addClass("active expanded");
        $(".sidebar-submenu-wrapper").addClass("active expanded");
    });

    $(".close-submenu-trigger").click(function() {
        $(".close-submenu-trigger").addClass("hidden");
        $(".doormat-menu").removeClass("expanded active");
    });
});