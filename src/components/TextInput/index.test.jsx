import TextInput from ".";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import store from "../../store";
import Wrapper from "../../testsUtils/Wrapper";
import data from "../../data/lang";

/**
 * SPECIFICATIONS
 *
 */

describe("TextInput", () => {
  const text = data.en;
  beforeEach(() => {
    render(<TextInput text={text} />, { wrapper: Wrapper });
  });

  it("should verify that state.textInput and textInput are always equal", async () => {
    const textInput = screen.getByPlaceholderText("Write");
    fireEvent.change(textInput, { target: { value: "i should do this task" } });
    expect(store.getState().textInput).toBe("i should do this task");
    fireEvent.change(textInput, {
      target: { value: "i should also do that other task" },
    });
    expect(store.getState().textInput).toBe("i should also do that other task");
  });

  it("should return '' when clicking on reset button", async () => {
    const textInput = screen.getByPlaceholderText("Write");
    const resetBtn = await waitFor(() => screen.getByTestId("reset-btn"));
    expect(store.getState().textInput).toBe("i should also do that other task");
    fireEvent.click(resetBtn);
    expect(store.getState().textInput).toBe("");
    expect(textInput.value).toBe("");
  });

  it("should unshift inputText content to state.todoList array and reset both on submit", () => {
    const createBtn = screen.getByRole("button", { name: "Create" });
    const textInput = screen.getByPlaceholderText("Write");
    fireEvent.change(textInput, { target: { value: "i should do this task" } });
    fireEvent.click(createBtn);
    expect(store.getState().todoList).toContain("i should do this task");
    fireEvent.change(textInput, {
      target: { value: "i should also do that other task" },
    });
    fireEvent.click(createBtn);
    expect(store.getState().todoList).toEqual([
      "i should do this task",
      "i should also do that other task",
    ]);
  });
});
