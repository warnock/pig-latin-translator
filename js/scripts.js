//Business logic


//function for PigLatin Logic
var pigLatin = function(phrase){

  return singleLetter(phrase);




  //Checking to see if it is a single letter word.
  // if (singleLetter === true) {
  //   if (isLetter === true) {
  //     console.log("")
  //   }
  // }
  // //If the first letter is a vowell proceed
  // if (isLetter(phrase) === true) {
  //
  //   //Counting for each charecter
  //   for (var index = 0; index < phrase.length; index++) {
  //
  //   }
  // } else console.log("first is not true");

}





//Function to test if the a single letter word
var singleLetter = function(phrase) {
  if ((phrase.length === 1) && (phrase.match(/^[aeiou]/gi ))){
    return phrase += "ay";
  } else {
  console.log("your phrase is greater than 1 letter");
  return phrase;
  }
}

// jQuery user interface logic here.
$(document).ready(function() {
  $("form#pigLatin").submit(function(event) {
    event.preventDefault();
    var phrase = $("input#phrase").val();
    var result = pigLatin(phrase);
    $("#result").text(result);
  });
});
