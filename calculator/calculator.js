function add(x, y) {
  return x + y;
}

function subtract(x,y) 
{return x-y}

function sum(array) {
  return array.reduce((a,b) => a + b, 0)
}

function multiply(array) {
 
 return array.reduce((a,b) => a * b)
}

function power(a,b) {
 
 if(b==0){
   return 1
 }else{
   return a * power(a, b-1);
 }
//another way of doing this
 //let result = 1;

//   for (let i = 1; i <= b ; i++) {
//        result = result * a }
//  return result 
}


function factorial(n) {
  if( n==0 || n==1 ) {
    return 1
  }
  else {
    return n * factorial(n-1)
  }
}

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
