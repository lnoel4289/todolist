import langReducer from "./langSlice";
import { change } from "./langSlice";

describe("langSlice", () => {
  it("should modify state to fr when state is en", () => {
    const initialState = "en";
    const newState = langReducer(initialState, change());
    expect(newState).toBe("fr");
    expect(newState).not.toBe("en");
  });
  it("should modify state to en when state is fr", () => {
    const initialState = "fr";
    const newState = langReducer(initialState, change());
    expect(newState).toBe("en");
    expect(newState).not.toBe("fr");
  });
});
