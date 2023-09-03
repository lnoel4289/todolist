import { render, screen } from "@testing-library/react";
import Done from ".";
import Wrapper from "../../Wrapper";

describe("Done", () => {
  it("should render component according to props", () => {
    render(<Done done="hello" checked={true} />, { wrapper: Wrapper });
    expect(screen.getByText(/hello/i)).toBeDefined();
    expect(screen.getByRole("checkbox").checked).toBe(true);
  });
});
