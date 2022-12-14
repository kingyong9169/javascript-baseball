const Computer = require("./model/Computer");
const BaseBallNum = require("./model/BaseBallNum");
const InputView = require("./view/InputView");
const OutputView = require("./view/OutputView");

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
}

module.exports = App;
