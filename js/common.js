$(document).ready(function () {

  //go_top
  $(".gotop").click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, "slow");
    return false;
  });


  $('.view').click(function(){
    $('.view_wrap').animate({
        left: '0'
    });
});
$('.view_close').click(function(){
    $('.view_wrap').animate({
        left: '100%'
    });
});




  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
    },
  });
 
});

