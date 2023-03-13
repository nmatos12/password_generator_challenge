// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword(password) {
  var passwordText = document.querySelector("#password");

  passwordText.value = password.join('');
}

function generatePassword(passwordCriteriaObj) {
  var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specialCharacters = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
  
  var passwordChoices = [];
  var passwordList = [];

  if (passwordCriteriaObj.lowercase) {
    passwordChoices = passwordChoices.concat(lowercase);
  }

  if (passwordCriteriaObj.uppercase) {
    passwordChoices = passwordChoices.concat(uppercase);
  }

  if (passwordCriteriaObj.numeric) {
    passwordChoices = passwordChoices.concat(numeric);
  }

  if (passwordCriteriaObj.specialCharacters) {
    passwordChoices = passwordChoices.concat(specialCharacters);
  }

  for (var i = 0; i < passwordCriteriaObj.amount; i++) {
    var randomSelection = passwordChoices[Math.floor(Math.random() * passwordChoices.length)];

    passwordList.push(randomSelection);
  }

  writePassword(passwordList);
}

function getPasswordCriteria() {
  var needsLowercase = confirm('Must password include a lowercase?');
  var needsUppercase = confirm('Must password include a uppercase?');
  var needsNumeric = confirm('Must password include a numeric?');
  var needsSpecialCharacters = confirm('Must password include a special characters?');
  var characterAmount = prompt('How many characters would you like in your password? (Please choose a number from 8 - 128)');
  var parsedAmount = parseInt(characterAmount);

  var passwordCriteria = {
    lowercase: needsLowercase,
    uppercase: needsUppercase,
    numeric: needsNumeric,
    specialCharacters: needsSpecialCharacters,
    amount: parsedAmount,
  };

   generatePassword(passwordCriteria);
}

// Add event listener to generate button
generateBtn.addEventListener("click", getPasswordCriteria);

// Password criteria
// Length of password: min :8 characters max:128 characters
// Character types: lowercase, uppercase, numeric, and/or special characters

