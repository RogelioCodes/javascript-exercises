// # Exercise XX - fibonacci

// Create a function that returns a specific member of the fibonacci sequence:

// > a series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.

// ```javascript
// fibonacci(4) // returns the 4th member of the series: 3  (1, 1, 2, 3)
// fibonacci(6) // returns 8

const fibonacci = function(count) {
   if(count < 0) return "OOPS"
   if(count == 0 ) return 0 ; 
   let a = 0;
   let b = 1 ;
   for(let i = 1; i < count; i++){
       const temp = b;
       b = b + a ;
       a = temp
   }
   return b
}

module.exports = fibonacci
