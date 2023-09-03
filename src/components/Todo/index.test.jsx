import { fireEvent, render, screen } from "@testing-library/react";
import Todo from ".";
import Wrapper from "../../Wrapper";

describe("Todo", () => {
  it("should render component according to props", () => {
    render(<Todo todo="hello" index={42} checked={true} />, {
      wrapper: Wrapper,
    });
    expect(screen.getByText(/hello/i)).toBeDefined();
    expect(screen.getByText(/43/)).toBeDefined();
    expect(screen.getByRole("checkbox").checked).toBe(true);
  });
});
