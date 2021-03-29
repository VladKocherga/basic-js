const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let result = 1;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        let deeper = 0;
        deeper = 1 + this.calculateDepth(arr[i]);
        if (deeper > result) {
          result = deeper;
        }
      }
    }
    return result;
  }
};
