$(document).ready(function () {

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $(".gotop").fadeIn();
    } else {
        $(".gotop").fadeOut();
    }
  });


  //go_top
  $(".gotop").click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, "slow");
    return false;
  });

  //depth2
  $('.depth2').hide();
  $('.gnb > li').mouseenter(function(){
      $(this).find('.depth2').stop().fadeIn();
  });
  $('.gnb > li').mouseleave(function(){
      $(this).find('.depth2').stop().fadeOut();
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

  $('.sub_depth2').hide();
  $('.breadcrumbs > li').click(function(){
       $(this).children('.sub_depth2').stop().slideDown();
      $(this).siblings().children('.sub_depth2').stop().slideUp();
  });


//센터
  var swiper = new Swiper("#center .mySwiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,

    autoplay: {
      delay: 1500,
    },
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
      480:{
        slidesPerView: 1,
      },

      900:{
        slidesPerView: 2,
        spaceBetween: 20,
      },
      
      1300:{
        slidesPerView: 3,
        spaceBetween: 20,
      },

      1750:{
        slidesPerView: 4,
        spaceBetween: 20,
      },
    }
   
  });


  //adoption
  var MainSwiper = new Swiper('#adoption .main_swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: true,
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
    },
  });

  var SubSwiper = new Swiper('#adoption .sub_swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: true,
  });

  MainSwiper.controller.control = SubSwiper;
  SubSwiper.controller.control = MainSwiper;


  //sub_depth2
  $('.sdepth2').hide();

    $('.breadcrumbs > li').click(function () {
        $('.sdepth2').stop().fadeIn();
    });

    $('.breadcrumbs > li').mouseleave(function () {
        $('.sdepth2').stop().fadeOut();
    });


  //
  var swiper = new Swiper("#postscript .mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,

    autoplay: {
      delay: 1500,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });  
});

