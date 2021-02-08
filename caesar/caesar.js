const caesar = function (str, shiftFactor) {
  let result = "";
  //   65-90 are the ranges for A-Z (uppercase letters)
  //   97-122 are the ranges for a-z (lowercase letters)
  //   26 is the number of letters in the alphabet
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);

    if (charCode < 65 || charCode > 122 || (charCode > 90 && charCode < 97)) {
      result += str[i];
    } else {
      //Alternatively you can convert the negative shift into a positive one at the start of your function (a -5 caear shift is the same as a 21 caesar shift):

      if (shiftFactor < 0) {
        shiftFactor = 26 + (shiftFactor % 26);
      }
      let newCharCode = charCode + Math.ceil(shiftFactor % 26);
      console.log("newCharCode: " + newCharCode);
      if (charCode >= 97 && newCharCode > 122) {
        newCharCode = newCharCode - 122 + 96;
      }
      if (charCode <= 90 && newCharCode > 90) {
        newCharCode = newCharCode - 90 + 64;
      }

      result += String.fromCharCode(newCharCode);
    }
  }

  console.log(result);
  return result;
};

module.exports = caesar;
