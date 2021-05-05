// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
document.querySelector("#generate").addEventListener("click",  writePassword);
// Arrays
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specials = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var aLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var aUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variables
const number = arraynumbers(0,9)
const special = arrayspecials(0,13)
const alphaLower = arrayaLower(0,27)
const alphaUpper = arrayaUpper(0,27)
//Password Criteria

//TODO 
/**Add event listener to check boxes to generate button enabled
 * Add value to Password Length Slider
 */