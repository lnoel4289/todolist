import doneListReducer from "./doneListSlice";
import * as doneListActions from "./doneListSlice";

describe("doneListSlice", () => {
  it("should add textContent to top of doneList array when action is add", () => {
    expect(doneListReducer([], doneListActions.add("hello"))).toEqual([
      "hello",
    ]);
    expect(doneListReducer(["hello"], doneListActions.add("world"))).toEqual([
      "world",
      "hello",
    ]);
  });
  it("should remove element from doneList array according to its index when action is remove", () => {
    expect(
      doneListReducer(["goodbye", "hello", "world"], doneListActions.remove(1))
    ).toEqual(["goodbye", "world"]);
  });
});
