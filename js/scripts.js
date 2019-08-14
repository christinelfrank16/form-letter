$(document).ready(function() {
  $("#input").submit(function(event) {
    var nameVar = $("input#name1").val();
    $(".person1").text(nameVar);
    $("#letter").show();
    event.preventDefault();
  });

});
