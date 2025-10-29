import doneListReducer from "./doneListSlice";
import * as doneListActions from "./doneListSlice";

describe("doneListSlice", () => {
  it("should add textContent to top of doneList array when action is add", () => {
    const emptyState: string[] = [];
    const singleItemState: string[] = ["hello"];
    
    expect(doneListReducer(emptyState, doneListActions.add("hello"))).toEqual([
      "hello",
    ]);
    expect(doneListReducer(singleItemState, doneListActions.add("world"))).toEqual([
      "world",
      "hello",
    ]);
  });

  it("should remove element from doneList array according to its index when action is remove", () => {
    const initialState: string[] = ["goodbye", "hello", "world"];
    expect(
      doneListReducer(initialState, doneListActions.remove(1))
    ).toEqual(["goodbye", "world"]);
  });
}); 