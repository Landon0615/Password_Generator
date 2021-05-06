// Assignment Code
var generateBtn = document.querySelector("#generate");
//
var numbers = "123456789" .split(" ")
var specials = "!%&*+-./<>?~" .split(" ")
varaLower = "abcdefghijklmnopqrstuvwxyz" .split(" ")
varaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" .split(" ")

//Add event listener to generate button
document.querySelector("#generate").addEventListener("click",  Passwordcharacters);
document.querySelector("#include-numbers").addEventListener("click",  writePassword);
document.querySelector("#special-characters").addEventListener("click",  writePassword);
document.querySelector("#lower-case").addEventListener("click",  writePassword);
document.querySelector("#upper-case").addEventListener("click",  writePassword);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function show_value2(x)
{
 document.getElementById("slider_value2").innerHTML=x;
}
function add_one()
{
  document.f.sld6.value=parseInt(document.f.sld6.value)+1;
  show_value2(document.f.sld6.value);
}
function subtract_one()
{
  document.f.sld6.value=parseInt(document.f.sld6.value)-1;
  show_value2(document.f.sld6.value);
}

//Password Criteria

//TODO 
