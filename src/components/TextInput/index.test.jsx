import TextInput from ".";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store";
import { beforeEach } from "vitest";

/**
 * SPECIFICATIONS
 *
 */

describe("TextInput", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <TextInput />
      </Provider>
    );
  });

  // const createBtn = screen.getByRole("button", { name: "CREATE TODO" });

  it("should modify state with text content, on change", async () => {
    const textInput = screen.getByLabelText("Enter a task to do here");
    fireEvent.change(textInput, { target: { value: "i should do this task" } });
    expect(store.getState().textInput).toBe("i should do this task");
  });

  it("should return '' to state when clicking on reset button", async () => {
    const resetBtn = await waitFor(() => screen.getByTestId("reset-btn"));
    expect(store.getState().textInput).toBe("i should do this task");
    fireEvent.click(resetBtn);
    expect(store.getState().textInput).toBe("");
  });
});
