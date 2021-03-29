const CustomError = require("../extensions/custom-error");

const chainMaker = {
  mass: [],

  getLength() {
    return this.mass.length();
  },

  addLink(value) {
    if (value !== undefined) {
      this.mass.push("( " + value + " )");
    } else {
      this.mass.push("(  )");
    }
    return this;
  },

  removeLink(position) {
    if (
      typeof position !== "number" ||
      position < 0 ||
      position > this.mass.length - 1
    ) {
      this.mass = [];
      throw new Error("Error");
    } else {
      this.mass.splice(position - 1, 1);
      return this;
    }
  },

  reverseChain() {
    this.mass.reverse();
    return this;
  },

  finishChain() {
    let result = this.mass.join("~~");
    this.mass = [];
    return result;
  },
};

module.exports = chainMaker;
