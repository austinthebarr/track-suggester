$(function(){
  $("#inputForm").submit(function(event){

    var question1 = parseInt($("input:radio[name=question1]:checked").val())

    var question2 = parseInt($("input:radio[name=question2]:checked").val())

    var question3 = parseInt($("input:radio[name=question3]:checked").val())

    var question4 = parseInt($("input:radio[name=question4]:checked").val())

    var question5= parseInt($("input:radio[name=question5]:checled").val())
  });
});
