/**
 * Created by tsa on 2018/4/16.
 */
$(document).ready(function() {

    $('a.blog-button').click(function() {
        if($("#iframe").attr("src") == undefined) $("#iframe").attr("src","https://www.cnblogs.com/Cylee");
        //if (location.hash && location.hash == "#blog") return;
        //if ($('.panel-cover').hasClass('panel-cover--collapsed')) return;
        // $('.main-post-list').removeClass('hidden');
        currentWidth = $('.panel-cover').width();
        //说明已经进入blogs模式
        if (currentWidth < 960) {
            $('.panel-cover').addClass('panel-cover--collapsed');
        } else {
            //进入blogs模式
            $('.panel-cover').css('max-width', currentWidth);
            $('.panel-cover').animate({ 'max-width': '700px', 'width': '30%' }, 400, swing = 'swing', function() {
                $('.panel-cover').addClass('panel-cover--collapsed');
            });
        }
    });


    //刷新后依然可以保持先有的模式
    if (window.location.hash && window.location.hash == "#blog") {
        $('.panel-cover').addClass('panel-cover--collapsed');
        if($("#iframe").attr("src") == undefined) $("#iframe").attr("src","https://www.cnblogs.com/Cylee");
    }


    if (window.location.pathname.substring(0, 5) == "/tag/") {
        $('.panel-cover').addClass('panel-cover--collapsed');
    }

    $('.btn-mobile-menu__icon').click(function() {
        // if ($('.navigation-wrapper').css('display') == "block") {
        //     $('.navigation-wrapper').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        //         $('.navigation-wrapper').toggleClass('visible animated bounceOutUp');
        //         $('.navigation-wrapper').off('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
        //     });
        //     $('.navigation-wrapper').toggleClass('animated bounceInDown animated bounceOutUp');

        // } else {
        //     $('.navigation-wrapper').toggleClass('visible animated bounceInDown');
        // }
        // $('.btn-mobile-menu__icon').toggleClass('fa fa-list fa fa-angle-up animated fadeIn');
    });


    $('.navigation-wrapper .blog-button').click(function() {
        // if ($('.navigation-wrapper').css('display') == "block") {
        //     $('.navigation-wrapper').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        //         $('.navigation-wrapper').toggleClass('visible animated bounceOutUp');
        //         $('.navigation-wrapper').off('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
        //     });

        //     $('.navigation-wrapper').toggleClass('animated bounceInDown animated bounceOutUp');
        // }

        // $('.btn-mobile-menu__icon').toggleClass('fa fa-list fa fa-angle-up animated fadeIn');
    });


    $("header").click(function(){
        //刷新后依然可以保持先有的模式
        if ($('.panel-cover').hasClass('panel-cover--collapsed')) {
            $('.panel-cover').removeClass('panel-cover--collapsed');
            var w_width = $(window).width() + "px";
            //进入blogs模式
            $('.panel-cover').animate({ 'max-width': w_width, 'width': '100%' }, 400, swing = 'swing', function() {});

        }
    })

});
