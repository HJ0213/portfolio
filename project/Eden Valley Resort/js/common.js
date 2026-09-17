$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".gotop").fadeIn();
        } else {
            $(".gotop").fadeOut();
        }
    });

    $(".gotop").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });
    
    //상단고정
    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
          $('#header').addClass('fix');
      } else {
          $('#header').removeClass('fix');
      }
    });

    //gnb 2차 메뉴
    $('.depth2,.depth2_bg').hide();

    $('.gnb > li').mouseenter(function () {
        $('.depth2,.depth2_bg').stop().fadeIn();
    });

    $('.gnb > li').mouseleave(function () {
        $('.depth2,.depth2_bg').stop().fadeOut();
    });


    //mgnb_wrap
    $('.ham').click(function(){
        $('.mgnb_wrap').animate({
            left: '0'
        });
     });
     $('.mgnb_close').click(function(){
        $('.mgnb_wrap').animate({
            left: '100%'
        });
     });


     //mobile_depth2
     $('.mdepth2').hide();
     $('.mgnb > li').click(function(){
        $(this).children('.mdepth2').stop().slideDown();
        $(this).siblings().children('.mdepth2').stop().slideUp();
     });





    //season
    $('.season_mv').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.paging'
    });
    $('.paging').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.season_mv'
    });


    //event
    $('.event_list').slick({
        autoplay: true,
        arrows: false,
        dots: true
    });


    //sports_list
    $('.sports_list').slick({
        autoplay: true,
        slidesToShow: 5,
        slidesToscroll: 1,
        centerMode: true,
        centerPadding: '50px',
        arrows: false,
        responsive: [
            {
              breakpoint: 1400,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '50px',
                slidesToShow: 3
              }
            },
            {
              breakpoint: 1000,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '50px',
                slidesToShow: 2
              }
            },
            {
                breakpoint: 700,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '50px',
                  slidesToShow: 1
                }
              }
          ]
    });


    //sub
    //slope_list
    $('.list_slick').slick({
        autoplay: true,
        arrows: true,
        dots: true
    });

    //sketch
    $('.sketch_list').slick({
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3,
        arrows: true,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 3
              }
            },
            {
              breakpoint: 1000,
              settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 3
              }
            },
            {
                breakpoint: 700,
                settings: {
                  arrows: true,
                  centerMode: true,
                  centerPadding: '100px',
                  slidesToShow: 1
                }
              }
          ]
        
      });
});