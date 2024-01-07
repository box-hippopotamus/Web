;(function () {
  //输入
  $("#addTodo").keyup(function (e) {
    if(e.keyCode === 13){
      let value = $(this).val();

      if(value !== ''){
        $("#todoList").append(`
        <li style="display: none">
            <div class="view">
              <label>${value}</label>
              <button class="destroy"></button>
            </div>
          </li>
        `)
        $("#todoList li").last().slideDown(function () {
          $(".todo-count strong").text($("#todoList li").length);
        });
        $(this).val("");
      }
    }
  })

  //删除
  $("#todoList").on("click", ".destroy", function() {
    $(this).parent().parent().slideUp(function() {
      $(this).remove();
      $(".todo-count strong").text($("#todoList li").length);
    });
  })
  
})()