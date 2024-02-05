import { render, screen } from "@testing-library/react";
import ToggleSwitch from ".";
// import { beforeEach } from "vitest";

describe("ToggleSwitch", () => {
  beforeEach(() => {
    render(<ToggleSwitch id="1234" text="toggle-text" />);
  });

  it("should render props", () => {
    const text = screen.getByText(/oggle-text/);
    expect(text).toBeDefined();
    const node = document.getElementById("1234");
    expect(node.id).toBe("1234");
  });

  it("should modify state on change", () => {})
});
