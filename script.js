// Assignment Code
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "j", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"];
var num = [1,2,3,4,5,6,7,8,9,10];
var spec = ["!", "@", "#", "$", "%","^", "&", "*", "?","/", "<", ">", "{", "}", "[", "]"];
var charSetLists = []
function generatePassword() {
  let pass = ''
  alert("Password must be no less than 8 characters and no more than 128 characters.");
  var passLength = prompt("How long would you like your new password to be?");
  if (passLength < 8 || passLength > 128){
    alert("Password must be no less than 8 characters and no more than 128");
  var passLength = prompt("Password must be no less than 8 characters and no more than 128 characters. How long would you like your new password to be?");
  if (passLength < 8 || passlength > 128){
    alert("Refresh the page and try again, please")
      return
  }};
  
  var wantsLower = confirm("Do you want lower case letters?");
    if (wantsLower){ 
      for (let i = 0; i<lower.length; i++){
      charSetLists.push(lower[i])
  }};

  var wantsUpper = confirm("Do you want upper case letters?");
    if (wantsUpper){
      for (let i = 0; i< upper.length; i++){
      charSetLists.push(upper[i])
  }};

  var wantsNum = confirm("Do you want numbers?");
    if (wantsNum){
      for (let i = 0; i< num.length; i++){
      charSetLists.push(num[i])
  }};

  var wantsSpec = confirm("Do you want special characters?");
    if (wantsSpec){ 
      for (let i= 0; i< spec.length; i++){
      charSetLists.push (spec[i])
  }};

  for (let i =0; i < passLength; i++) {
    let nextChar = charSetLists[Math.floor(Math.random() * charSetLists.length)];
    pass += nextChar;
  }
  return pass
}
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
  generateBtn.addEventListener("click", writePassword)

  