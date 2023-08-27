import textInputReducer from "./textInputSlice";
import * as textInputActions from "./textInputSlice";

/**
 * SPECS
 *
 * Given text input and textContent state
 * When user changes text content in the input
 * Then update textContent state
 *
 */

describe("textInputSlice", () => {
  it("should update TextContent when action is change", () => {
    let state = "";
    expect(textInputReducer(state, textInputActions.change("hello"))).toBe(
      "hello"
    );
  });
});
