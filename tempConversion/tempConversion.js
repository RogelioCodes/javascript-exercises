var ftoc = function (val) {
  val = (val - 32) * 5/9;
  console.log(val);
  return  parseFloat(val.toFixed(1))
   
};

var ctof = function (val) {
  val = (val *9/5 )+32;
  return parseFloat(val.toFixed(1))
};

module.exports = {
  ftoc,
  ctof,
};
