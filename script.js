// This is the Assignment Code
var generateBtn = document.querySelector("#generate");
var characterBase= ""
var randomPassword= ""
function generatePassword() {
// The below code is when the user presented with a series of prompts for password criteria
// This code is for the length of the password
var passwordLength = prompt("Choose a password length between 8 and no more than 128 characters.")
// THEN I choose a length of at least 8 characters and no more than 128 characters
if (passwordLength < 8 || passwordLength > 128){
    alert ("Please pick a number greater than 8 and less than 128 characters!")
    return 
}
console.log (passwordLength)
// This code is for the criteria to include in the password
var lower = confirm("Do you want lowercase characters?");
var lowercaseCharacters = 'qwertyuiopasdfghjklzxcvbnm';
var upper = confirm("Do you want uppercase characters?");
var uppercaseCharacters = 'QWERTYUIOPASDFGHJKLZXCVBNM';
var num = confirm("Do you want numeric values?");
var numbers = '1234567890';
var specChar = confirm("Do you want special characters?");
var specialCharacters = '~!@#$%^&*()';
// This code is for when the user answers each prompt
if (lower){
    characterBase = characterBase + lowercaseCharacters;
    console.log (characterBase)
}
if (upper){
    characterBase = characterBase + uppercaseCharacters;
    console.log (characterBase)
}
if (num){
    characterBase = characterBase + numbers;
    console.log (characterBase)
}
if (specChar){
    characterBase = characterBase + specialCharacters;
    console.log (characterBase)
}
// This code is when the password is generated
for (let i=0; i<passwordLength; i++){
    randomPassword = randomPassword + characterBase.charAt(Math.floor(Math.random() * Math.floor(characterBase.length)));
}

return(randomPassword);

}
// This code is when a password is generated that matches the selected criteria
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
   passwordText.value = password;
}
// This code is to add an event listener to generate button
generateBtn.addEventListener("click", writePassword);

