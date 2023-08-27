import todoListReducer from "./todoListSlice";
import * as todoListActions from "./todoListSlice";

describe("todoList reducer", () => {
  it("should add textContent to top of todoList array when action is add", () => {
    expect(todoListReducer([], todoListActions.add("hello"))).toEqual([
      "hello",
    ]);
    expect(todoListReducer(["hello"], todoListActions.add("world"))).toEqual([
      "world",
      "hello",
    ]);
  });
  it("should remove textContent from todoList array when action is remove", () => {
    expect(
      todoListReducer(
        ["goodbye", "hello", "world"],
        todoListActions.remove("hello")
      )
    ).toEqual(["goodbye", "world"]);
  });
});
