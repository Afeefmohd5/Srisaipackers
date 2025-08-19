(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


   // Local Video Modal Controller
    $(document).ready(function() {
    // Get the video element
    var video = document.getElementById("video");

    // When the modal is shown, play the video
    $('#videoModal').on('shown.bs.modal', function () {
        video.play();
    });

    // When the modal is hidden, pause the video and reset its time
    $('#videoModal').on('hide.bs.modal', function () {
        video.pause();
        video.currentTime = 0;
    });
});


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        center: true,
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    // Active navigation links based on current page
    $(document).ready(function() {
        // Get current page filename
        var currentPage = window.location.pathname.split('/').pop();
        
        // Remove 'active' class from all nav links
        $('.navbar-nav .nav-link').removeClass('active');
        
        // Add 'active' class to the nav link matching current page
        $('.navbar-nav .nav-link').each(function() {
            var linkHref = $(this).attr('href');
            if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html')) {
                $(this).addClass('active');
            }
        });
    });
    
})(jQuery);
