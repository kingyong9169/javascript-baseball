const Computer = require("./model/Computer");
const BaseBallNum = require("./model/BaseBallNum");
const BaseBallResult = require("./model/BaseBallResult");
const InputView = require("./view/InputView");
const OutputView = require("./view/OutputView");
const MESSAGE = require("./view/view.constants");

class App {
  constructor() {
    this.computer = new Computer().getResult();
  }

  play() {
    OutputView.printStart();
    this.inputBaseBallNum();
  }

  #inputBaseBallNumCallback = (num) => {
    this.num = new BaseBallNum(num).getResult();
    const result = new BaseBallResult(this.computer, this.num);
    OutputView.printResult(this.#makeResultView(result.getResult()));
    if (result.isGameEnd()) {
      OutputView.printEnd();
      return;
    }
    this.inputBaseBallNum();
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
