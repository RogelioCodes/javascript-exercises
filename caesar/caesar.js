// write a function that takes a string to be encoded and a shift factor and then returns the encoded string:
//65 - 90 = A - Z, 97 - 122 = a - z
//  65 = @ , 65 = A, 90 = Z, 97 = a , 122 = z ,
//   65-90 are the ranges for A-Z (uppercase letters)
//   97-122 are the ranges for a-z (lowercase letters)
//   26 is the number of letters in the alphabet

const caesar = function (str, shiftFactor){
if(shiftFactor<0){
    return caesar(str, shiftFactor+26);
}

    let result = "";
    for(let i = 0; i < str.length; i++){
        let c = str[i];
        
        if (c.match(/[a-z]/i)){
            let varCode = str.charCodeAt(i);
            if(varCode >= 65 && varCode <=90 ){
                c = String.fromCharCode(((varCode -65 +shiftFactor)%26 )+ 65);
            }
            else if(varCode >= 97 && varCode <=122 ){
                c = String.fromCharCode(((varCode - 97 +shiftFactor)%26 )+ 97);
            }
            
        }
        result += c;
    }

return result;
};
module.exports = caesar;