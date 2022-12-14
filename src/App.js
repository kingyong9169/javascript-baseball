const Computer = require("./model/Computer");
const BaseBallNum = require("./model/BaseBallNum");
const BaseBallResult = require("./model/BaseBallResult");
const InputView = require("./view/InputView");
const OutputView = require("./view/OutputView");
const MESSAGE = require("./view/view.constants");

class App {
  constructor() {
    this.computer = new Computer();
  }

  play() {
    OutputView.printStart();
    this.inputBaseBallNum();
  }

  #inputBaseBallNumCallback = (num) => {
    this.input = new BaseBallNum(num);
  };

  inputBaseBallNum() {
    InputView.readBaseBallNum(this.#inputBaseBallNumCallback);
  }

  #makeResultView(result) {
    const { strike, ball } = result;
    if (!strike && !ball) return MESSAGE.BASEBALL.NOTHING;
    if (!strike) return `${ball}볼`;
    if (!ball) return `${strike}스트라이크`;
    return `${ball}볼 ${strike}스트라이크`;
  }
}

module.exports = App;
