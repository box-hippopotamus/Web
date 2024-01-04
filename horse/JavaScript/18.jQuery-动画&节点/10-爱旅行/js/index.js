;(function () {
  $(".gotop").hide();


  //显示返回顶部
  $(window).scroll(function () {
    let top = $("html").scrollTop();

    if(top > 200){
      $(".gotop").stop().fadeIn(1000);
    }else{
      $(".gotop").stop().fadeOut(1000);
    }
  })

  //点击返回顶部
  $(".gotop").click(function () {
    $("html").animate({
      scrollTop: 0,
    },1000)
  })

  //点击展开
  $(".suggest").click(function () {
    $(".sugform").slideDown();
  })

  //点击收起
  $(".close").click(function () {
    $(".sugform").slideUp();
  })

})()