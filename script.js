// Variables for Character Sets
var Special =  " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var Numbers = "1234567890";
var LowerCase = "abcdefghijklmnopqrstuvwxyz";
var UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

// Write a function that confirms which options the user would like to enable.
function confirms() {
  isOp1 = confirm("Would you like to include special characters?");
  isOp2 = confirm("Would you like to include numbers?");
  isOp3 = confirm("Would you like to include lower case letters?");
  isOp4 = confirm("Would you like to include upper case letters?");
  optionBuilder();
};

confirms()








// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
