const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let countTurns = Math.pow(2, disksNumber) - 1;
  let time = Math.floor(countTurns / (turnsSpeed / 3600));
  let ob = {
    turns: countTurns,
    seconds: time,
  };
  return ob;
};
