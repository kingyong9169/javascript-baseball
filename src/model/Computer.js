const MissionUtils = require("@woowacourse/mission-utils");

class Computer {
  constructor() {
    this.num = this.generateRandomNum();
  }

  generateRandomNum() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  getNum() {
    return this.num;
  }
}
module.exports = Computer;
