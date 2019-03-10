// window.onscroll = function() {myFunction()};
//
// // Get the header
// var header = document.getElementById("myHeader");
//
// // Get the offset position of the navbar
// var sticky = header.offsetTop;
// var sticky2 = header.offsetTop;
//
// console.log('sticky: ' + sticky);
// console.log('sticky2: ' + sticky2);
//
// function myFunction() {
//     if (window.pageYOffset >= sticky) {
//         header.classList.add("sticky");
//     } else {
//         header.classList.remove("sticky");
//     }
// }


// var TouchMenu = TouchMenuLA({
//     target: document.getElementById('menu')
// });
//
// document.getElementById('presto-header-hamburger').addEventListener('click', function () {
//     TouchMenu.toggle();
// });

$(document).ready(function () {


    var swipe = new Hammer(document);
// detect swipe and call to a function
    swipe.on('swiperight swipeleft', function(e) {
        e.preventDefault();
        if (e.type == 'swiperight') {
            // open menu
            $('.touch-menu-la').addClass('opened');
            $('body').addClass('is-lock');
            $('.tmla-mask').addClass('is-show');
            $('.presto-header-hamburger__icon').addClass('active');
        } else {
            // close/hide menu
            $('.touch-menu-la').removeClass('opened');
            $('body').removeClass('is-lock');
            $('.tmla-mask').removeClass('is-show');
            $('.presto-header-hamburger__icon').removeClass('active');
        }

    });

    $('.tmla-mask').on('click', function(){
        $(this).toggleClass('is-show');
        $('.touch-menu-la').toggleClass('opened');
        $('body').toggleClass('is-lock');
        $('.presto-header-hamburger__icon').removeClass('active');
    });


    $('.presto-header-hamburger__icon').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.tmla-mask').toggleClass('is-show');
        $('.touch-menu-la').toggleClass('opened');
        $('body').toggleClass('is-lock');
    });

    var obg = $('.presto-header-sticky').offset().top;
    // console.log('obg: ' + obg);


    var yourNavigation = $(".presto-header-sticky");
    stickyDiv = "sticky";

    $(window).scroll(function () {
        if ($(this).scrollTop() > obg) {
            yourNavigation.addClass(stickyDiv);
        } else {
            yourNavigation.removeClass(stickyDiv);
        }
    });


    fixedMobileMenu()


    $(window).on('resize', function () {
        fixedMobileMenu()
    });

    function fixedMobileMenu() {
        var headerMobile = $('.presto-header-layout');
        var headerMobileHeight = headerMobile.height();
        var footerHeight = $('.presto-footer').height();

        console.log('footerHeight: ' + footerHeight);

        $('.wrapper').css({
            'padding-bottom': footerHeight
        });

        $('.presto-footer').css({
            'margin-top': -footerHeight
        });

        if ($(window).width() < 980) {
            headerMobile.addClass('sticky-mobile');
            $('.wrapper').css({
                'padding-top': headerMobileHeight
            });
        } else {
            headerMobile.removeClass('sticky-mobile');
            $('.wrapper').css({
                'padding-top': 0
            });
        }


    };

    $('.header-mobile-menu__link.has-child').on('click', function (e) {
        e.preventDefault();
        $(this).siblings('ul').toggleClass('is-show');
        $(this).toggleClass('active');
    });


    $('div').each(function () {
        if ($('.touch-menu-la').hasClass('opened')) {
            $('body').addClass('is-lock');
            console.log('open');
        } else {
            $('body').removeClass('is-lock');
            console.log('no open');
        }
    });


});


