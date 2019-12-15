// Variables for Character Sets
var Special =  ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "`", "{", "|", "}", "~"];
var Numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var LowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s","t", "u", "v", "w", "x", "y", "z"];
var UpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Other Global Variables
var isOp1;
var isOp2;
var isOp3;
var isOp4;
var isOp5;
var possibleOptions = [];

// Variable for the button
var generateButton = document.getElementById("generate");

// Variable for the Text Box
var textBox = document.getElementById("password");


// Initialize confirms function on button click.
generateButton.addEventListener("click", function() {
  confirms();
});

// Write a function that confirms which options the user would like to enable.
// After all the confirms are completed, invoke optionBuilder()
function confirms() {
  isOp1 = confirm("Would you like to include special characters?");
  isOp2 = confirm("Would you like to include numbers?");
  isOp3 = confirm("Would you like to include lower case letters?");
  isOp4 = confirm("Would you like to include upper case letters?");
  isOp5 = prompt("Select a number of characters for your password (between 8 and 128).")
  optionBuilder();
};

// Option Builder's purpose is to validate that the user has enabled at least one of the options as well as to add the elements of the chosen option to the possible options array. When options have been added and validated, invoke charCheck.
// If the user has not enabled any option, alert them to do so then send them back to the confirms function to recomplete it.

function optionBuilder() {
  if (isOp1 || isOp2 || isOp3 || isOp4) {
      if (isOp1) {
          possibleOptions = possibleOptions.concat(Special)
      };
      
      if (isOp2) {
          possibleOptions = possibleOptions.concat(Numbers)
      };
      
      if (isOp3) {
          possibleOptions = possibleOptions.concat(LowerCase)
      };

      if (isOp4) {
        possibleOptions = possibleOptions.concat(UpperCase)
    };
      charCheck();
  } else {
      alert("You must select at least one character type.");
      confirms();
  }
};

// Checks that the number of characters is between 8 and 128. If it is a number outside of the range it asks them to pick a correct number and sends them back to the confirm function. A correct number will invoke getString.
function charCheck(){
  if (isOp5 < 8 || isOp5 > 128){
possibleOptions = []
    alert("Please select a character length between 8 and 128.");
    confirms();
    }
      else{
        getString();
      }
}

// Random number generator.
function randomNumber() {
  return Math.floor(Math.random() * possibleOptions.length)
};

// function that uses random numbers to create a string based on the possible options selected by the user. Puts generated password in the text box.
function getString() {
  var text = "";
  
  for (var i = 0; i < isOp5; i++) {
      text+=possibleOptions[randomNumber()]
  };
  textBox.textContent = text;
};

