const ERROR_PREFIX = "[ERROR]";

const ERROR_MESSAGE = Object.freeze({
  INVALID_BASEBALL_INPUT: "서로 다른 3자리의 수(1 ~ 9)를 입력해주세요.",
  INVALID_GAME_INPUT: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
});

module.exports = { ERROR_PREFIX, ERROR_MESSAGE };
