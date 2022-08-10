//Characters code
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMONPQRSTUVWXYZ';
var numbers ='123456789';
var specialCharacters = '!@#$%^&*';
var storePassword = 'generate password';
var passwordlength = 0;
var password = "";
var allCharacters = "";

// create password
var createPass = function () {
  // reset characters, password & length
  allCharacters = "";
  password = "";
  passLength = 0;
}

// ensure code is between 8-128 characters
while (passLength < 8 || passLength > 128) {
  passLength = window.prompt(
    "Please type a number between 8 and 128 for your password length"
  );
  }

// Assignment code here
var generateBtn = document.querySelector("#generate");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
