import textInputReducer from "./textInputSlice";
import { change } from "./textInputSlice";

describe("textInputSlice", () => {
  it("should update TextContent when action is change", () => {
    const initialState = "";
    const newState = textInputReducer(initialState, change("hello"));
    expect(newState).toBe("hello");
  });
});
