import $ from 'jquery';// jquery script 
// Navigation scroll 
$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('nav').addClass("sticky");
        } else {
            $('nav').removeClass("sticky");

        }

        // scroll-up button show/hide script
        if (this.scrollY > 100) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }


    });

});
// slide-up script
$('.scroll-up-btn').click(function() {
    $('html').animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $('html').css("scrollBehavior", "auto");
});
$('.navbar .menu li a').click(function() {
    // applying again smooth scroll on menu items click
    $('html').css("scrollBehavior", "smooth");
});


// for navigation 
$(document).ready(function() {
    $('.burger').click(function() {
        $('.menu').addClass('active');
        $('.listli').addClass('color');
    });
    $('.close').click(function() {
        $('.menu').removeClass('active');
        $('.listli').removeClass('color');
    });
    
});




// nav text clicked script
const navLink = document.querySelectorAll('.click')
function linkAction() {
    navLink.forEach(n => n.classList.remove('clicked'))
    this.classList.add('clicked')

    
}
navLink.forEach(n => n.addEventListener('click', linkAction))