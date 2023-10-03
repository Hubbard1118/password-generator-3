// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {

  const uppercaseOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const lowercaseOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const numberOptions= ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const specialOptions = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

  var randomArray = [];
  var passArray = [];

  var passLength = prompt ("Choose a password length between 8 and 128 characters");
  var numbers = confirm ("Would you like to include numbers?");
  var upperCases = confirm ("Would you like to include uppercases?");
  var lowerCases = confirm ("Would you like to include lowercases?");
  var specialCharacters = confirm ("Would you like to include special characters?");


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

  for (var i = 0; i < passLength; i++) {
  passArray.push (randomArray[Math.floor(math.random() * randomArray.length)]);
  }

  return passArray.join('');
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

