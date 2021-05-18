$("#enter").on("click", function(){
  var task = $("#todoItem").val();
  $("#todoList").append("<div class='task'>" + task + "<div class='x fas fa-times'></div></div>");
});

$(document).on("click", ".x", function(){
  $(this).parent().remove();
});

$(document).on("click", ".task", function(){
  $(this).toggleClass("done");
  if ($(this).hasClass("done")) {
    $(this).find("div").removeClass("fa-times");
    $(this).find("div").addClass("fa-check");
  }
  else {
    $(this).find("div").addClass("fa-times");
  }
});
