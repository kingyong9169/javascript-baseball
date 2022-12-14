const BaseBallNum = require("../src/model/BaseBallNum");

describe("BaseBallNum 테스트", () => {
  test("입력한 수가 숫자(1 ~ 9)가 아니면 에러 메시지 출력 후 종료", () => {
    expect(() => new BaseBallNum("a")).toThrow("[ERROR]");
  });

  test("입력한 수가 서로 다른 숫자가 아니면 에러 메시지 출력 후 종료", () => {
    expect(() => new BaseBallNum("1134")).toThrow("[ERROR]");
  });

  test("입력한 수가 3자리 숫자가 아니면 에러 메시지 출력 후 종료", () => {
    expect(() => new BaseBallNum("1234")).toThrow("[ERROR]");
  });

  test("입력한 수가 서로 다른 3자리 숫자이다.", () => {
    expect(new BaseBallNum("123").getResult()).toBe("123");
  });
});
