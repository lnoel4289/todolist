import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  beforeEach(() => render(<App />));

  it("should keep displayed state values through navigating between pages(state persistance)", () => {
    const homeLink = screen.getByRole("link", { name: /home/i });
    const aboutLink = screen.getByRole("link", { name: /about/i });

    const textInput = screen.getByLabelText("Enter a task to do here");
    fireEvent.change(textInput, { target: { value: "i should do this task" } });
    expect(textInput.value).toBe("i should do this task");
    fireEvent.click(aboutLink);
    expect(
      screen.getByText(
        /this is an additional page to show that the state persists between pages. You can safely navigate between pages and the current display won't be reset when you come back/i
      )
    ).toBeDefined();
    fireEvent.click(homeLink);
    expect(textInput.value).toBe("i should do this task");
    expect(screen.getByDisplayValue(/i should do this task/i)).toBeDefined();
  });
});
