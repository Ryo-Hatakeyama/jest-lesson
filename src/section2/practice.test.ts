import { ShoppingList } from "./practice";

describe("addItemメソッド関連", () => {
  it("addItemがアイテムを追加できるか", () => {
    const shoppingList = new ShoppingList();
    shoppingList.addItem("バナナ");
    expect(shoppingList.list).toEqual(["バナナ"]);
  });
});

describe("removeitemメソッド関連", () => {
  it("removeItemがアイテムを削除できるか", () => {
    const shoppingList = new ShoppingList();
    shoppingList.addItem("バナナ");
    shoppingList.removeItem("バナナ");
    // toContain 配列に引数の要素が存在するか確認する
    expect(shoppingList.list).not.toContain("バナナ");
  });

  it("removeItemのスローエラー", () => {
    const shoppingList = new ShoppingList();
    expect(() => {
      shoppingList.removeItem("バナナ");
    }).toThrow(`アイテム: バナナ は存在しません`);
  });
});
