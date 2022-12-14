class BaseBallResult {
  constructor(computer, num) {
    this.result = this.#makeResult(computer, num);
  }

  #makeResult(computer, num) {
    const result = { strike: 0, ball: 0 };
    return [...computer].reduce((acc, cur, idx) => {
      if (num[idx] === cur) return { ...acc, strike: acc.strike + 1 };
      if (num.includes(cur)) return { ...acc, ball: acc.ball + 1 };
      return acc;
    }, result);
  }

  isGameEnd() {
    return this.result.strike === 3;
  }

  getResult() {
    return this.result;
  }
}

module.exports = BaseBallResult;
