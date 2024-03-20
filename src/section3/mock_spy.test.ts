import { sum } from "../section2/sum";
import { Calculator } from "./mock_spy";

it("sumメソッドが呼び出される", () => {
  const calculator = new Calculator();
  const sumSpy = jest.spyOn(calculator, "sum");
  const result = calculator.sum(1, 2);
  expect(result).toBe(3);
  // spyはメソッドの呼び出しを監視できる
  expect(sumSpy).toHaveBeenCalledTimes(1);
  expect(sumSpy).toHaveBeenCalledWith(1, 2);

  // 最後はspyを解除するのが推奨される（他のテストケースに影響を与えないようにするため）
  sumSpy.mockRestore();
});
