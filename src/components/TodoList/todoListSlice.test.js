import todoListReducer from "./todoListSlice";
import * as todoListActions from "./todoListSlice";

describe("todoList reducer", () => {
  it("should add textContent to bottom of todoList array when action is add", () => {
    expect(todoListReducer([], todoListActions.add("hello"))).toEqual([
      "hello",
    ]);
    expect(todoListReducer(["hello"], todoListActions.add("world"))).toEqual([
      "hello",
      "world",
    ]);
  });
  it("should remove element from todoList array according to its index when action is remove", () => {
    expect(
      todoListReducer(
        ["goodbye", "hello", "world"],
        todoListActions.remove(1)
      )
    ).toEqual(["goodbye", "world"]);
  });
});
