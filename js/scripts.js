$(document).ready(function() {
  $("button#cat").click(function() {
    $("#cat-p").after("<img src='img/cat.jpeg'>");
    });
  });

  $(document).ready(function() {
    $("#blanks form").submit(function(event) {
      var person1Input = $("input#person1").val().toUpperCase();
      var person2Input = $("input#person2").val().oUpperCase();
      var animalInput= $("input#animal").val()oUpperCase();
      var exclamationInput = $("input#exclamation").val()oUpperCase();
      var verbInput = $("input#verb").val()oUpperCase();
      var nounInput = $("input#noun").val()oUpperCase();

      $(".person1").text(person1Input);
      $(".person2").text(person2Input);
      $(".animal").text(animalInput);
      $(".exclamation").text(exclamationInput);
      $(".verb").text(verbInput);
      $(".noun").text(nounInput);

      $("#story").show();
        event.preventDefault();

    });
  });
