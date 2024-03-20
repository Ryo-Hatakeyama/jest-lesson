import fs from "fs";
import { readFile } from "./mock_module";

/**
 * 依存ライブラリをmock化する理由としては、
 * 依存ライブラリの戻り値を任意にしていすることで、
 * ラップした関数(テストしたい関数)の挙動だけをテストすることが
 * できるようにするため
 */

// jest.mock()はモジュールのパスを引数にとりそのモジュール全体をmock化することが可能
// typescriptではfsがモジュール化されているということを認識できない
jest.mock("fs");
const mockFs = jest.mocked(fs);
mockFs.readFileSync.mockReturnValue("dummy data");

it("reqdFileがデータを返却する", () => {
  const result = readFile("path/dummy");
  expect(result).toBe("dummy data");
  expect(fs.readFileSync).toHaveBeenCalledTimes(1);
});
