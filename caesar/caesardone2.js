// Implement the legendary caesar cipher:

// > In cryptography, a Caesar cipher, also known as Caesar's cipher, the shift cipher, Caesar's code or Caesar shift, is one of the simplest and most widely known encryption techniques. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. For example, with a left shift of 3, D would be replaced by A, E would become B, and so on. The method is named after Julius Caesar, who used it in his private correspondence.

// write a function that takes a string to be encoded and a shift factor and then returns the encoded string:
//65 - 90 = A - Z, 97 - 122 = a - z
//  65 = @ , 65 = A, 90 = Z, 97 = a , 122 = z ,
//   65-90 are the ranges for A-Z (uppercase letters)
//   97-122 are the ranges for a-z (lowercase letters)
//   26 is the number of letters in the alphabet
const caesar = function (str, shiftFactor) {
//handles negative shift factor
  if (shiftFactor < 0) {
      console.log("shift+26: " + (shiftFactor + 26))
    return caesar(str, shiftFactor + 26);
  }
  console.log("here")
  //make output variable
  let result = "";
  //go through each character
  for (let i = 0; i < str.length; i++) {
    console.log("in for loop")
    let c = str[i]//the character we will be appending  
   
    if (c.match(/[a-z]/i))// if its a letter
      {
          console.log("its a letter")
        let charValue = str.charCodeAt(i); // get its code
        //uppercase letters
        if (charValue >= 65 && charValue <= 90) {
            console.log("upper case !")
            c = String.fromCharCode(((charValue - 65 + shiftFactor) % 26) + 65);
          }
    
          // Lowercase letters
          else if (charValue >= 97 && charValue <= 122) {
            c = String.fromCharCode(((charValue - 97 + shiftFactor) % 26) + 97);
          }
    }
    console.log("result: " + result)
    result += c;
    console.log("newresult: " + result)

  }
  return result;
};

module.exports = caesar;
