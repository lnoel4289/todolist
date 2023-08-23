import TextInput from ".";
import { fireEvent, render, screen } from "@testing-library/react";

/**
 * SPECIFICATIONS
 * 1 GIVEN an entered string, WHEN clicking on the button, THEN unshift() this string on top of todoList array in state
 */

describe("TextInput", () => {
  render(<TextInput />);
  const createBtn = screen.getByRole("button");
  const state = { todoList: [] };

  it("should fill state.todoList with textContent, at index=0", async () => {
    let textContent = "I should do this task";
    fireEvent.click(createBtn);
    expect(state.todoList[0]).toBe(textContent);

    textContent = "I should also do this other task";
    fireEvent.click(createBtn);
    expect(state.todoList[0]).toBe("I should also do this other task");
    expect(state.todoList[1]).toBe("I should do this task");
  });
});
