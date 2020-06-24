// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// arrays
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "@", "*", "<", ">", "?", ",", "~", "-", ".", "%", "&", "+"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// variable declaration

var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

// Write password to the #password input
function writePassword() {
  var confirmLength = (prompt("How many characters would you like this password to contain?"));

  // while loop to ensure parameters
  while (confirmLength <= 7 || confirmLength > 128) {
    alert("The password must be between 8 and 128 characters. Please choose a different number of characters.");
    var confirmLength = (prompt("How many characters would you like this password to contain?"));
  }

  //alert the user to how many characters selected
  alert("Your password will contain ${confirmLength} characters.");
  // determine parameters
  var confirmSpecialCharacter = confirm("Click OK if you'd like this password to include special characters.");
  var confirmNumericCharacter = confirm("Click OK if you'd like this password to include numeric characters.");
  var confirmLowerCase = confirm("Click OK if you'd like this password to include lower case characters.");
  var confirmUpperCase = confirm("Click OK if you'd like this password to include Upper Case Characters.");

  // loop if answer's outside any parameter
  while (confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
    alert("You need to choose at least one parameter, please.");
    var confirmSpecialCharacter = confirm("Click OK if you'd like this password to include special characters.");
    var confirmNumericCharacter = confirm("Click OK if you'd like this password to include numeric characters.");
    var confirmLowerCase = confirm("Click OK if you'd like this password to include lower case characters.");
    var confirmUpperCase = confirm("Click OK if you'd like this password to include Upper Case Characters.");
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
