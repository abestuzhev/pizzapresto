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


var TouchMenu = TouchMenuLA({
    target: document.getElementById('menu')
});

document.getElementById('presto-header-hamburger').addEventListener('click', function(){
    TouchMenu.toggle();
});

$(document).ready(function() {

    var obg = $('.presto-header-sticky').offset().top;
    // console.log('obg: ' + obg);



    var yourNavigation = $(".presto-header-sticky");
    stickyDiv = "sticky";

    $(window).scroll(function() {
        if( $(this).scrollTop() > obg ) {
            yourNavigation.addClass(stickyDiv);
        } else {
            yourNavigation.removeClass(stickyDiv);
        }
    });


    fixedMobileMenu()


    $(window).on('resize', function () {
        fixedMobileMenu()
    });

    function fixedMobileMenu(){
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

        if($(window).width() < 980){
            headerMobile.addClass('sticky-mobile');
            $('.wrapper').css({
                'padding-top': headerMobileHeight
            });
        }else {
            headerMobile.removeClass('sticky-mobile');
            $('.wrapper').css({
                'padding-top': 0
            });
        }


    };


});