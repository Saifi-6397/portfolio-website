$(function() {
    $(".nav-icon").click(function() {
        $("header .left-container").slideToggle();
    })

    AOS.init({
        duration: 1000,
        delay: 500,
    });
})