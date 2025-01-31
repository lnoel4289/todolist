import modeReducer from "./modeSlice";
import { change } from "./modeSlice";
import { ModeState } from "@/types/mode";

describe("modeSlice", () => {
  it("should modify state to dark when state is light", () => {
    const initialState: ModeState['currentMode'] = "light";
    const newState = modeReducer(initialState, change());
    expect(newState).toBe("dark");
    expect(newState).not.toBe("light");
  });

  it("should modify state to light when state is dark", () => {
    const initialState: ModeState['currentMode'] = "dark";
    const newState = modeReducer(initialState, change());
    expect(newState).toBe("light");
    expect(newState).not.toBe("dark");
  });
}); 