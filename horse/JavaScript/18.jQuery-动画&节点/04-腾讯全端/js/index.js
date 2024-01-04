;(function(){


  //顶部高亮
  $(window).scroll(function () {
    let top = $('html').scrollTop();

    if(top === 0){
      $(".header").removeClass("scrolled");
    }else{
      $(".header").addClass("scrolled");
    }

  })

  //显示返回顶部
  $(window).scroll(function() {
    let top = $("html").scrollTop();

    if(top > 200)
    {
      //队列中自始至终只有一个动画，每当下一个动画要进入队列之前，都会清掉上一次的动画，所以无需true
      $(".gotop").stop().slideDown(1000);
    }else{
      $(".gotop").stop().slideUp(1000);
    }
  })

  //返回顶部
  $(".gotop").click(function () {
    $("html").animate({
      scrollTop: 0
    })
  })

})()//立即执行函数防止变量污染