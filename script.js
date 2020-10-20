// Assignment Code
var generateBtn = document.querySelector("#generate");
var characterBase= ""
var randomPassword= ""
function generatePassword() {
// THEN I am presented with a series of prompts for password criteria

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
var passwordLength = prompt("Choose a password length between 8 and no more than 128 characters.")

// THEN I choose a length of at least 8 characters and no more than 128 characters
if (passwordLength < 8 || passwordLength > 128){
    alert ("Please pick a number greater than 8 and less than 128 characters!")
    return 
}
console.log (passwordLength)

// WHEN prompted for character types to include in the password
var lower = confirm("Do you want lowercase characters?");
var lowercaseCharacters = 'qwertyuiopasdfghjklzxcvbnm';
var upper = confirm("Do you want uppercase characters?");
var uppercaseCharacters = 'QWERTYUIOPASDFGHJKLZXCVBNM';
var num = confirm("Do you want numeric values?");
var numbers = '1234567890';
var specChar = confirm("Do you want special characters?");
var specialCharacters = '~!@#$%^&*()';

// THEN I choose lowercase, uppercase, numeric, and/or special characters


// WHEN I answer each prompt
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

// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered

// THEN a password is generated that matches the selected criteria


// WHEN the password is generated

for (let i=0; i<passwordLength; i++){
    randomPassword = randomPassword + characterBase.charAt(Math.floor(Math.random() * Math.floor(characterBase.length)));
}

return(randomPassword);

}

// THEN the password is either displayed in an alert or written to the page


// GIVEN I need a new, secure password
// WHEN I click the button to generate a password

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
   passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

