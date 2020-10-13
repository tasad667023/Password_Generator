// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {
    // THEN I am presented with a series of prompts for password criteria

// WHEN prompted for password criteria

// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
var passwordLength = prompt("Choose a password length between 8 and no more than 128 characters.")
// THEN I choose a length of at least 8 characters and no more than 128 characters
console.log (passwordLength)
// WHEN prompted for character types to include in the password
confirm("Do you want lowercase characters?")
var lowercaseCharacters = ['qwertyuiopasdfghjklzxcvbnm']
confirm("Do you want uppercase characters?")
var uppercaseCharacters = ['QWERTYUIOPASDFGHJKLZXCVBNM']
confirm("Do you want numeric values?")
var numbers = ['1234567890']
confirm("Do you want special characters?")
var specialCharacters = ['~!@#$%^&*()']
// THEN I choose lowercase, uppercase, numeric, and/or special characters
var characterBase=[]
var randomPassword=[]
// WHEN I answer each prompt
if (lowercaseCharacters){
    characterBase.push(lowercaseCharacters)
    console.log (characterBase)
}
if (uppercaseCharacters){
    characterBase.push(uppercaseCharacters)
    console.log (characterBase)
}
if (numbers){
    characterBase.push(numbers)
    console.log (characterBase)
}
if (specialCharacters){
    characterBase.push(specialCharacters)
    console.log (characterBase)
}
else {
    return
}
// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered

// THEN a password is generated that matches the selected criteria
for (var i=0; i<passwordLength; i++) {
    
}

// WHEN the password is generated

// THEN the password is either displayed in an alert or written to the page
 
  console.log (characterBase);
}
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

