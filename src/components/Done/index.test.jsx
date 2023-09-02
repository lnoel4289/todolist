import { render, screen } from "@testing-library/react";
import Done from ".";
import { expect } from "vitest";

describe("Done", () => {
  it("should render component according to props", () => {
    render(<Done done="hello" checked={true} />);
    expect(screen.getByText(/hello/i)).toBeDefined();
    expect(screen.getByRole("checkbox").checked).toBe(true);
  });
});
