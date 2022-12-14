const { Console } = require("@woowacourse/mission-utils");
const MESSAGE = require("./view.constants");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  readBaseBallNum(callback) {
    Console.readLine(MESSAGE.NUM_INPUT, callback);
  },

  readGameCommand(callback) {
    Console.readLine(MESSAGE.GAME_WIN, callback);
  },

  close() {
    Console.close();
  },
};

module.exports = InputView;
