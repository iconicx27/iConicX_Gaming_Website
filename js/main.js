const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
};


$(document).ready(function () {
    $nav = $('.nav');
    $toogleCollapse = $('.toggle-collapse');

    // click event on toggle menu

    $toogleCollapse.click(function () {
        $nav.toggleClass('collapse');
    });

    // owl-carousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });

    // click to scroll top(for arrow button)
    $(".move-up span").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 800);
    });


    //for home
    $(".homeS").click(function() {
        $("html, body").animate({ scrollTop: $(".site-title").offset().top }, 450);
    });

    //for category
    $(".categoryS").click(function() {
        $("html, body").animate({ scrollTop: $(".posts").offset().top }, 800);
    });

    //for videos
    $(".videosS").click(function() {
        $("html, body").animate({ scrollTop: $(".blog").offset().top }, 700);
    });

    //for pages
    $(".pagesS").click(function() {
        $("html, body").animate({ scrollTop: $(".footer").offset().top }, 800);
    });

    // top to bottom (for contact us)
    $(".contactS").click(function() {
        $("html, body").animate({ scrollTop: $(".footer").offset().top }, 800);
    });
   
    //for explore btn
    $(".btnS").click(function() {
        $("html, body").animate({ scrollTop: $(".blog").offset().top }, 800);
    });


    // AOS instance
    AOS.init();

});