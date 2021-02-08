function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function sum(array) {
  return array.reduce((total, current) => total + current, 0);
}

function multiply(array) {
  return array.reduce((a, b) => a * b);
}

function power(x, y) {
  let result = 1;
  if (y == undefined) y = 2;
  for (let i = 1; i <= y; i++) {
    result = result * x;
  }

  return result;
}

function factorial(num) {
  if (num < 0) return -1;
  else if (num == 0) return 1;
  else {
    return num * factorial(num - 1);
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
