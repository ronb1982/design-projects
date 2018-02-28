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
        console.log(icon);
        if (icon.hasClass('fa-bars')) {
            icon.addClass('fa-times');
            icon.removeClass('fa-bars');
        } else {
            icon.addClass('fa-bars');
            icon.removeClass('fa-times');
        }
    });
    
    // Slider carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        center: true,
        items: 1,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
});