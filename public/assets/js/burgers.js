$(function () {
  $(".devourBtn").on("click", function (e) {
    e.preventDefault();
    const id = $(this).data("id");
    const devoured = {
      devoured: 1,
    };
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devoured,
    }).then(function () {
      console.log("num num num");
      location.reload();
    });
  });
});
$(function () {
  $(".addBurgBtn").on("click", function (e) {
    e.preventDefault();
    const newBurg = {
      burger_name: $("#newBurg").val().trim(),
      devoured: 0,
    };
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurg
    }).then(function(){
      console.log("made a new burger");
      location.reload();
    })
  });
});
