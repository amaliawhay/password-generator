var lower = "abcdefghijklmnopqrstuvwxyz";

var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";

var special = "!@#$%^&*()-_+={[}]?<>";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordLength = prompt(
    "How many characters do you want your password to have?"
  );
  passwordLength = parseInt(passwordLength);
  if (passwordLength >= 8 && passwordLength <= 128) {
    alert(
      "Your password will be " +
        passwordLength +
        " characters long."
    );
  } else {
    return alert(
      "Invalid response. Please enter a number."
    );
  }
  var userLower = confirm(
    "Do you want your password to have lowercase letters?"
  );
  var userUpper = confirm(
    "Do you want your password to have uppercase letters?"
  );
  var userNum = confirm(
    "Do you want your password to have numbers?"
  );
  var userSpecial = confirm(
    "Do you want your password to have special characters?"
  );
  var collection = [];
  if (userLower === true) {
    collection = collection.concat(lower);
    console.log(collection);
  }
  if (userUpper === true) {
    collection = collection.concat(upper);
    console.log(collection);
  }
  if (userNum === true) {
    collection = collection.concat(num);
    console.log(collection);
  }
  if (userSpecial === true) {
    collection = collection.concat(special);
    console.log(collection);
  }
  // you can create a function named generatePassword that creates the password
  function generatePassword(passwordLength, collection) {
    for (var i = 0; i < passwordLength; i++) {
      var passwordText =
        collection[
          Math.floor(Math.random() * collection.length)
        ];
      passwordText += collection.charAt(passwordText);
      return passwordText;
    }
  }

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
