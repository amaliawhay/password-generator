// Assignment Code
var generateBtn = document.querySelector("#generate");
//These are the variables that hold the options the user can input
var charOptions = {
  small: [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ],

  big: [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ],
  numbers: [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ],
  special: [
    "!",
    "#",
    "$",
    "%",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    ".",
    ",",
    "?",
  ],
};

var userPassword = prompt(
  "How many characters do you want your password to have?"
);

if (userPassword >= 8 && userPassword <= 128) {
  var smallTrue = confirm(
    "Do you want your password to have lowecase letters?"
  );
  var bigTrue = confirm(
    "Do you want your password to have uppercase letters?"
  );
  var numbersTrue = confirm(
    "Do you want your password to have numbers?"
  );
  var specialTrue = confirm(
    "Do you want your password to have special characters?"
  );
}

// Write password to the #password input
function writePassword() {
  for (i = 0; i < userPassword; i++) {
    if (smallTrue === true) {
      var password =
        charOptions.small[
          Math.floor(
            Math.random() * charOptions.small.length
          )
        ];
    } else if (bigTrue === true) {
      var password =
        charOptions.big[
          Math.floor(Math.random() * charOptions.big.length)
        ];
    } else if (numbersTrue === true) {
      var password =
        charOptions.numbers[
          Math.floor(
            Math.random() * charOptions.numbers.length
          )
        ];
    } else if (specialTrue === true) {
      var password =
        charOptions.special[
          Math.floor(
            Math.random() * charOptions.special.length
          )
        ];
    }
  }

  // you can create a function named generatePassword that creates the password
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
console.log(writePassword);
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
