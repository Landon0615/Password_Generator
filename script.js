// Assignment Code
var generateBtn = document.querySelector("#generate");
var numberCheckbox = document.querySelector("input[name=include-numbers]");
var numbersIsChecked = false;
var passwordLength = 128;
//
var numbers = "123456789".split("");
var special = "!%&*+-./<>?~".split("");
var lower = "abcdefghijklmnopqrstuvwxyz".split("");
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

//Add event listener to generate button

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}
//slider
function show_value2(x) {
  document.getElementById("slider_value2").innerHTML = x;
  passwordLength = x;
}

function add_one() {
  document.f.passwordLengthSlider.value = parseInt(document.f.passwordLengthSlider.value) + 1;
  show_value2(document.f.passwordLengthSlider.value);
}

function subtract_one() {
  document.f.passwordLengthSlider.value = parseInt(document.f.passwordLengthSlider.value) - 1;
  show_value2(document.f.passwordLengthSlider.value);
}

//Password Criteria
function generatePassword() {
  var password = "";
  for (let index = 0; index < passwordLength; index++) {
    password = password + getNextRandom(); 
  }
  return password;
}

function getNextRandom() {   // add more if statements.
  var validChoices = [];
  if (numbersIsChecked) {
    validChoices = validChoices.concat(numbers);
  }
  return validChoices[Math.floor(Math.random() * validChoices.length)];
}

function generateEnabled() {  // add special, upper,lower.
  return numbersIsChecked;
}
//Check box function

// check box value
numberCheckbox.addEventListener('change', function() {
  numbersIsChecked = this.checked;
  generateBtn.disabled = !generateEnabled();
});

generateBtn.addEventListener('click', function() {
  writePassword();
});














//TODO add event listener to enable and disable generate password for special characters, Lowercase, Uppercase.
// make snake case camel case
// Add Special, upper, lower if statments
// Add generateEnabled special upper and lower.  