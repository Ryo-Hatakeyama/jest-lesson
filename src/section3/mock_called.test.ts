it("モック関数が呼び出される", () => {
  const mockFunc = jest.fn();
  mockFunc();
  // モック関数が実行されていれば成功する。1行前で呼び出されているため成功する。
  expect(mockFunc).toHaveBeenCalled();
});

it("モック関数が2回呼び出される", () => {
  const mockFunc = jest.fn();
  mockFunc();
  mockFunc();
  // 引数に指定された回数分呼び出されていれば成功する
  expect(mockFunc).toHaveBeenCalledTimes(2);
});

it("モック関数に引数hogeが渡される", () => {
  const mockFunc = jest.fn();
  mockFunc("hoge");
  // 引数に渡した値がモック関数の引数と同じ値なら成功する
  expect(mockFunc).toHaveBeenCalledWith("hoge");
});
