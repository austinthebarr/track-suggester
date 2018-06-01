$(function(){
  $("#inputForm").submit(function(event){
    event.preventDefault()
    // debugger;

    var name = $("input#name").val()

    var question1 = parseInt($("input:radio[name=question1]:checked").val())

    var question2 = parseInt($("input:radio[name=question2]:checked").val())

    var question3 = parseInt($("input:radio[name=question3]:checked").val())

    var question4 = parseInt($("input:radio[name=question4]:checked").val())

    var question5 = parseInt($("input:radio[name=question5]:checked").val())

    var sum = question1 + question2 + question3 + question4 + question5;

    $(".name").text(name);
    $(".results").text(sum);

    if 

    $("#hidden").show();

  });
});
