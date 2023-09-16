import {
  fireEvent,
  render,
  screen,
  within,
  waitFor,
} from "@testing-library/react";
import App from "./App";

describe("App", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("should keep displayed state values through navigating between pages(state persistance)", () => {
    const homeLink = screen.getByRole("link", { name: /home/i });
    const aboutLink = screen.getByRole("link", { name: /about/i });
    const textInput = screen.getByLabelText("Enter a task to do here");

    fireEvent.change(textInput, { target: { value: "i should do this task" } });
    expect(textInput.value).toBe("i should do this task");
    expect(screen.getByDisplayValue(/i should do this task/i)).toBeDefined();
    fireEvent.click(aboutLink);
    expect(
      screen.getByText(
        /this additional page aims to show that state persists through navigating. You can safely visit an other page while current state isn't affected/i
      )
    ).toBeDefined();
    fireEvent.click(homeLink);
    expect(textInput.value).toBe("i should do this task");
    expect(screen.getByDisplayValue(/i should do this task/i)).toBeDefined();
  });

  it("should move todo element to done list when checking the box, and inversely", async () => {
    const textInput = screen.getByLabelText("Enter a task to do here");
    const createBtn = screen.getByRole("button", { name: "Create !" });
    fireEvent.change(textInput, { target: { value: "i should do this task" } });
    fireEvent.click(createBtn);
    const todoItem = await waitFor(() => screen.getByTestId("todo-list-item"));
    const todoText = within(todoItem).getByText(/i should do this task/i);
    expect(todoText).toBeDefined();

    const todoCheckbox = within(todoItem).getByRole("checkbox");
    expect(todoItem).toBeDefined();
    fireEvent.click(todoCheckbox);

    const doneItem = await waitFor(() => screen.getByTestId("done-list-item"));
    const doneText = within(doneItem).getByText(/i should do this task/i);
    expect(doneText).toBeDefined();
  });
});
