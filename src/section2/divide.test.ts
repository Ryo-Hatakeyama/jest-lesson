// 例外処理のテスト
// toThrow 関数がエラーをthrowすることを検証する

import { divide, ZeroDivisorError } from "./divide";

// テスト成功
it("0で割るとエラーが発生する", () => {
  // divide関数を直接渡すのではなく、無名関数でラップしてexpectに渡す
  expect(() => divide(10, 0)).toThrow();
  // エラーメッセージの検証もしたい
  expect(() => divide(10, 0)).toThrow("0で割ることはできません");
  // 特定のエラーが発生していることを確認する
  expect(() => divide(10, 0)).toThrow(ZeroDivisorError);
});
// テスト失敗
// it("0で割るとエラーが発生する", () => {
//     expect(() => divide(10, 0)).toThrow();
//   });
