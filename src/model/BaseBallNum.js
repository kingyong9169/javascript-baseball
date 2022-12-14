const InValidInputError = require("../error/InValidInputError");
const { ERROR_MESSAGE } = require("../error/error.constants");

class BaseBallNum {
  constructor(num) {
    if (this.#isValidBaseball(num)) this.num = num;
  }

  #baseValidate(condition) {
    if (!condition)
      throw new InValidInputError(ERROR_MESSAGE.INVALID_BASEBALL_INPUT);
    return true;
  }

  #isValidBaseball(num) {
    return (
      this.#isValidNum(num) &&
      this.#isValidDifferentNum(num) &&
      this.#isValidNumSize(num)
    );
  }

  #isValidNum(num) {
    this.#baseValidate(/^[1-9]+$/.test(num));
  }

  #isValidDifferentNum(num) {
    this.#baseValidate(new Set([...num]).size === num.length);
  }

  #isValidNumSize(num) {
    this.#baseValidate(num.length === 3);
  }

  getNum() {
    return this.num;
  }
}
module.exports = BaseBallNum;
