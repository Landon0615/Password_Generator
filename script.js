// Assignment Code
var generateBtn = document.querySelector("#generate");
var numberCheckbox = document.querySelector("input[name=include-numbers]");
var specialCheckbox = document.querySelector("input[name=special-characters]");
var lowerCheckbox = document.querySelector("input[name=lower-case]");
var upperCheckbox = document.querySelector("input[name=upper-case]");
var numbersIsChecked = false;
var specialIsChecked = false;
var lowerIsChecked = false;
var upperIsChecked = false;
var passwordLength = 128;
var numbers = "123456789".split("");
var special = "!%&*+-./<>?~".split("");
var lower = "abcdefghijklmnopqrstuvwxyz".split("");
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
//slider
function showvalue2(x) {
  document.getElementById("slidervalue2").innerHTML = x;
  passwordLength = x;
}

function addone() {
  document.f.passwordLengthSlider.value =
    parseInt(document.f.passwordLengthSlider.value) + 1;
  showvalue2(document.f.passwordLengthSlider.value);
}

function subtractone() {
  document.f.passwordLengthSlider.value =
    parseInt(document.f.passwordLengthSlider.value) - 1;
  showvalue2(document.f.passwordLengthSlider.value);
}

//Password Criteria
function generatePassword() {
  var password = "";
  for (let index = 0; index < passwordLength; index++) {
    password = password + getNextRandom();
  }
  return password;
}

function getNextRandom() {
  var validChoices = [];

  if (numbersIsChecked) {
    validChoices = validChoices.concat(numbers);
  }

  if (specialIsChecked) {
    validChoices = validChoices.concat(special);
  }

  if (lowerIsChecked) {
    validChoices = validChoices.concat(lower);
  }

  if (upperIsChecked) {
    validChoices = validChoices.concat(upper);
  }
  return validChoices[Math.floor(Math.random() * validChoices.length)];
}

function generateEnabled() {
  return (
    numbersIsChecked || specialIsChecked || lowerIsChecked || upperIsChecked
  );
}


numberCheckbox.addEventListener("change", function () {
  numbersIsChecked = this.checked;
  generateBtn.disabled = !generateEnabled();
});

specialCheckbox.addEventListener("change", function () {
  specialIsChecked = this.checked;
  generateBtn.disabled = !generateEnabled();
});

lowerCheckbox.addEventListener("change", function () {
  lowerIsChecked = this.checked;
  generateBtn.disabled = !generateEnabled();
});

upperCheckbox.addEventListener("change", function () {
  upperIsChecked = this.checked;
  generateBtn.disabled = !generateEnabled();
});

generateBtn.addEventListener("click", function () {
  writePassword();
});

