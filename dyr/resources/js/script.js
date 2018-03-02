$(document).ready(function() {
    var templates, targetElement, templ;

    /* TEMPLATE IMPORT LOADING */
    templates = document.getElementById('templates').import;
    
    // Load header
    templ = templates.getElementById('nav-template');
    targetElement = document.getElementsByTagName('header')[0];
    targetElement.insertAdjacentHTML('afterbegin', templ.innerHTML);
    
    // Load search form
    templ = templates.getElementById('searchform-template');
    targetElement = document.querySelector('.section-search');
    targetElement.insertAdjacentHTML('afterbegin', templ.innerHTML);
    
    // Load newsletter
    templ = templates.getElementById('newsletter-template');
    targetElement = document.querySelector('.section-newsletter');
    targetElement.insertAdjacentHTML('afterbegin', templ.innerHTML);
    
    // Load footer
    templ = templates.getElementById('footer-template');
    targetElement = document.getElementsByTagName('footer')[0];
    targetElement.insertAdjacentHTML('afterbegin', templ.innerHTML);

    // Mobile navigation
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon .icon');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('fa-bars')) {
            icon.addClass('fa-times');
            icon.removeClass('fa-bars');
        } else {
            icon.addClass('fa-bars');
            icon.removeClass('fa-times');
        }
    });
    
    // Slider carousels
    var homeCarousel = $('.js--carousel-home');
    
    homeCarousel.owlCarousel({
        dots: false,
        stagePadding: 100,
        loop: true,
        center: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    
    var profileCarousel = $('.js--carousel-profile');
    
    profileCarousel.owlCarousel({
        dots: false,
        stagePadding: 100,
        loop: true,
        center: true,
        items: 1,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    
    $('.js--carousel-profile .center').css('background', 'red');
    
    // Home page carousel click events
    $('.section-featured .arrow-left').click(function(){
        homeCarousel.trigger('prev.owl.carousel');
    });
    
    $('.section-featured .arrow-right').click(function(){
        homeCarousel.trigger('next.owl.carousel');
    });
    
    // Profile page carousel click events
    $('.section-profile .arrow-left').click(function(){
        profileCarousel.trigger('prev.owl.carousel');
    });
    
    $('.section-profile .arrow-right').click(function(){
        profileCarousel.trigger('next.owl.carousel');
    });
    
    $('.filter-menu').click(function() {
        $('.filter-options').fadeToggle(200);
    });
});