const BaseBallResult = require("../src/model/BaseBallResult");

describe("사용자가 입력한 야구공에 대한 결과 테스트", () => {
  test("3볼의 결과를 검증한다.", () => {
    const { strike, ball } = new BaseBallResult("123", "312").getResult();
    expect(strike).toBe(0);
    expect(ball).toBe(3);
  });

  test("2볼 1스트라이크의 결과를 검증한다.", () => {
    const { strike, ball } = new BaseBallResult("123", "321").getResult();
    expect(strike).toBe(1);
    expect(ball).toBe(2);
  });

  test("3스트라이크의 결과를 검증한다.", () => {
    const { strike, ball } = new BaseBallResult("123", "123").getResult();
    expect(strike).toBe(3);
    expect(ball).toBe(0);
  });
});

describe("게임 종료 조건 확인 테스트", () => {
  test("3볼이면 게임 종료 조건이 맞지 않는다.", () => {
    const result = new BaseBallResult("123", "312");
    expect(result.isGameEnd()).toBe(false);
  });

  test("3스트라이크이면 게임 종료 조건을 충족한다.", () => {
    const result = new BaseBallResult("123", "123");
    expect(result.isGameEnd()).toBe(true);
  });
});
