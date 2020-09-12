$(function(){
  $(".devourBtn").on("click", function(e){
    e.preventDefault();
    const id = $(this).data("id");
    const devoured = {
      devoured: 1
    };
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devoured,
    }).then(function(){
      console.log("num num num");
      location.reload();
    })
  })
})