const palindromes = function(str) {
let re = /[\W_]/g;

str = str.toLowerCase().replace(re,"")
let reverse = str.split("").reverse().join("")
return reverse === str
}

module.exports = palindromes
