const sumAll = function (num1, num2) {
  let finalSum = 0;
  let i = num1;
  if (
    num1 < 0 ||
    num2 < 0 ||
    typeof num1 !== "number" ||
    typeof num2 !== "number"
  ) {
    return "ERROR";
  }
  if (num1 > num2) {
    let temp = num2;
    num2 = num1;
    num1 = temp;
  }
  while (i <= num2) {
    console.log("finalSum: " + finalSum);
    console.log("num1: " + num1);

    finalSum = (i * i) / 2 + i / 2;
    i++;
  }
  return finalSum;
};

module.exports = sumAll;
