import modeReducer from "./modeSlice";
import { change } from "./modeSlice";

describe("modeSlice", () => {
  it("should modify state to dark when state is light", () => {
    const initialState = "light";
    const newState = modeReducer(initialState, change());
    expect(newState).toBe("dark");
    expect(newState).not.toBe("light");
  });
  it("should modify state to light when state is dark", () => {});
  const initialState = "dark";
    const newState = modeReducer(initialState, change());
    expect(newState).toBe("light");
    expect(newState).not.toBe("dark");
});
