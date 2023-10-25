import { render, screen } from "@testing-library/react";
import Todo from ".";
import Wrapper from "../../testsUtils/Wrapper";

describe("Todo", () => {
  it("should render component according to props", () => {
    render(<Todo string="hello" isChecked={true} />, {
      wrapper: Wrapper,
    });
    expect(screen.getByText(/hello/i)).toBeDefined();
    expect(screen.getByRole("checkbox").checked).toBe(true);
  });
});
