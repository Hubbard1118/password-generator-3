// Assignment Code
var generateBtn = document.querySelector("#generate");

//Created a function to generate the passcode

function generatePassword () {

 //Arrays with possible character options
  const uppercaseOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const lowercaseOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const numberOptions= ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const specialOptions = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

  var randomArray = [];
  var passArray = [];

  //Prompts to validate numbers, cases, and specials
  var passLength = prompt ("Choose a password length from 8 to 128 characters");
    if (isNaN (passLength)) {
      return ("Try again!");
    }
    if (passLength < 8 || passLength > 128){
      return ("Please select a number from 8-128!");
    }
  var numbers = confirm ("Would you like to include numbers?");
  var upperCases = confirm ("Would you like to include uppercases?");
  var lowerCases = confirm ("Would you like to include lowercases?");
  var specialCharacters = confirm ("Would you like to include special characters?");

  //If statements add the selected character options to the empty  randomArray
  
  if (numbers) {
    randomArray = randomArray.concat(numberOptions);
  }

  if (upperCases) {
    randomArray = randomArray.concat(uppercaseOptions);
  }

  if (lowerCases) {
    randomArray = randomArray.concat(lowercaseOptions);
  }

  if (specialCharacters) {
    randomArray = randomArray.concat(specialOptions);
  }
    console.log(randomArray)

  //for loop here adds to the passArray based on character length
  for (var i = 0; i < passLength; i++) {
    passArray.push (randomArray[Math.floor(Math.random() * randomArray.length)]);
  }
    return passArray.join('-');
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Adds event listener to generate button
generateBtn.addEventListener("click", writePassword);

