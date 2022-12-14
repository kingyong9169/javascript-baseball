const { Console } = require("@woowacourse/mission-utils");
const MESSAGE = require("./view.constants");

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printResult() {},

  printStart() {
    Console.print(MESSAGE.GAME_START);
  },

  printError(error) {
    Console.print(error);
  },
};

module.exports = OutputView;