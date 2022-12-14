const Computer = require("./model/Computer");
const BaseBallNum = require("./model/BaseBallNum");
const BaseBallResult = require("./model/BaseBallResult");
const InputView = require("./view/InputView");
const OutputView = require("./view/OutputView");
const MESSAGE = require("./view/view.constants");
const { ERROR_MESSAGE } = require("./error/error.constants");
const InValidInputError = require("./error/InValidInputError");

class App {
  constructor() {
    this.initializeComputer();
  }

  play() {
    OutputView.printStart();
    this.#inputBaseBallNum();
  }

  initializeComputer() {
    this.computer = new Computer().getResult();
  }

  #inputBaseBallNumCallback = (num) => {
    const baseballNum = new BaseBallNum(num).getResult();
    const result = new BaseBallResult(this.computer, baseballNum);
    OutputView.printResult(this.#makeResultView(result.getResult()));
    if (result.isGameEnd()) {
      OutputView.printEnd();
      this.#gameCommand();
      return;
    }
    this.#inputBaseBallNum();
  };

  #inputBaseBallNum() {
    InputView.readBaseBallNum(this.#inputBaseBallNumCallback);
  }

  #makeResultView(result) {
    const { strike, ball } = result;
    if (!strike && !ball) return MESSAGE.BASEBALL.NOTHING;
    if (!strike) return `${ball}볼`;
    if (!ball) return `${strike}스트라이크`;
    return `${ball}볼 ${strike}스트라이크`;
  }

  #gameCommandCallback = (command) => {
    if (command !== "1" && command !== "2")
      throw new InValidInputError(ERROR_MESSAGE.INVALID_GAME_COMMAND);
    if (command === "1") {
      this.initializeComputer();
      this.#inputBaseBallNum();
      return;
    }
    InputView.close();
  };

  #gameCommand() {
    InputView.readGameCommand(this.#gameCommandCallback);
  }
}

module.exports = App;
