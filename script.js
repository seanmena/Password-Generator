// Assignment Code
let generateBtn = document.querySelector("#generate");





let lowercase = ["abcdefghijlmnopqrstuvwxyz"];
let uppercase = ["ABCDEFGHIJLMNOPQRSTUVWXYZ"];
let specialChars = ["!@#$%^&*?"];
let numbers = ["0123456789"];
// Write password to the #password input



//determine the length
function passwordLength(){
  howMuch = prompt ("How long do you want your password?");


  if (howMuch < 8) {
    alert ("Must be at least 8");
    passwordLength();
  }

  if (howMuch > 128) {
    alert ("Must be shorter than 128");
    passwordLength();
  }

  else if (howMuch >= 8) {
    alert ("you will now be asked what specific characters you want");
  }

  else {
    alert ("you must pick a number between 8-128");
    passwordLength();
  }
  

}


//do you want special stuff
function determineUpper() {
  wantUpper = prompt ("Do you want upper case letters? Yes or no");

  if (wantUpper === "yes"){
    wantUpper = true;
    return wantUpper;
  }

  if (wantUpper === "no"){
    wantUpper = false;
    return wantUpper;
  }

  else {
    alert("yes or no");
    determineUpper();
  }


}

function determineLower() {
  wantLower = prompt("Do you want lower case numbers? Yes or no");

  if (wantLower === "yes"){
    wantLower = true;
    return wantLower;
  }

  if (wantLower === "no"){
    wantLower = false;
    return wantLower;
  }
  
 else {
    alert("yes or no");
    determineLower();
  }

}

function determineSpecial() {
  wantSpecial = prompt("Do you want special characters? Yes or no");


  if (wantSpecial === "yes"){
    wantSpecial = true;
    return wantSpecial;
  }

  if (wantSpecial === "no"){
    wantSpecial = false;
    return wantSpecial;
  }


  else  {
    alert ("yes or no");
    determineSpecial();
  }

}

function determineNumber() {
  wantNumber = prompt("Do you want numbers? Yes or no");

  if (wantNumber === "yes"){
    wantNumber = true;
    return wantNumber;
  }

  if (wantNumber === "no"){
    wantNumber = false;
    return wantNumber;
  }

  else  {
    alert ("yes or no");
    determineNumber();
  }

}

function determineAll() {
  if (wantUpper == false && wantLower == false && wantNumber == false && wantSpecial == false) {
  alert ("you must chooose at least one");
  generatePassword();
  }
  
}


function generatePassword() {
  passwordLength();
  console.log(howMuch);
  determineUpper();
  console.log(wantUpper);
  determineLower();
  console.log(wantLower);
  determineNumber();
  console.log(wantNumber);
  determineSpecial();
  console.log(wantSpecial);
  determineAll();


  if (wantUpper === true && wantLower ===  true && wantNumber === true && wantSpecial === true){
  characters = uppercase + lowercase + numbers + specialChars;
  console.log(characters)
  }

  if (wantUpper === true && wantLower === true && wantNumber === true && wantSpecial === false) {
    characters = uppercase + lowercase + numbers;
    console.log(characters)
  }

  if (wantUpper === true && wantLower === true && wantNumber === false && wantSpecial === true) {
    characters = uppercase + lowercase + specialChars;
    console.log(characters)
  }

  if (wantUpper === true && wantLower === false && wantNumber === true && wantSpecial === true){
    characters = uppercase + numbers + specialChars;
    console.log(characters)
  }

  if (wantUpper === false && wantLower === true && wantNumber === true && wantSpecial === true){
    characters = lowercase + numbers + specialChars;
    console.log(characters)
  }

  if (wantUpper === false && wantLower === false && wantNumber === false && wantSpecial === true) {
    characters = specialChars;
    console.log(characters)
  }

  if (wantUpper === true && wantLower === false && wantNumber === false && wantSpecial === false) {
    characters = uppercase;
    console.log(characters)
  }

  if (wantUpper === false && wantLower === true && wantNumber === false && wantSpecial === false) {
    characters = lowercase;
    console.log(characters)
  }

  if (wantUpper === false && wantLower === false && wantNumber === true && wantSpecial === false) {
    characters = numbers;
    console.log(characters)
  }

  if (wantUpper === false && wantLower === false && wantNumber === true && wantSpecial === true) {
    characters = numbers + specialChars;
    console.log(characters)
  }

  if (wantUpper === true && wantLower === true && wantNumber === false && wantSpecial === false) {
    characters = uppercase + lowercase;
    console.log(characters)
  }

  if (wantUpper === true && wantLower === false && wantNumber === false && wantSpecial === true) {
    characters = uppercase + specialChars;
    console.log(characters)
  }

  if (wantUpper === true && wantLower === false && wantNumber === true && wantSpecial === false){
    characters = uppercase + numbers;
    console.log(characters)
  }

  if (wantUpper === false && wantLower === true && wantNumber === true && wantSpecial === false){
    characters = lowercase + numbers
    console.log(characters)
  }

  if (wantUpper === false && wantLower === true && wantNumber === false && wantSpecial === true){
    characters = lowercase + specialChars
    console.log(characters)
  }





  for(var i = 0; i < howMuch; i++){
    password += characters.charAt(Math.random() * characters.length);
  }
  console.log(password)
  return password;
  

}


function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}
  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);