const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (options.separator === undefined) {
    options.separator = "+";
  }
  if (options.addition === undefined) {
    options.addition = "";
  }
  let add = options.addition;
  for (let i = 1; i < options.additionRepeatTimes; i++) {
    add = add + options.additionSeparator + options.addition;
  }
  let newStr = str + add;
  for (let a = 1; a < options.repeatTimes; a++) {
    newStr = newStr + options.separator + str + add;
  }
  return newStr;
};
