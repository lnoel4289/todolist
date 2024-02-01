import { render, screen } from "@testing-library/react";
import ToggleSwitch from ".";
import { beforeEach } from "vitest";

describe("ToggleSwitch", () => {
  beforeEach(() => {
    render(<ToggleSwitch id="1234" text="toggle-text" />);
  });
  it("should render props", () => {
    const text = screen.getByText(/oggle-text/);
    expect(text).toBeDefined();
    const id = screen.getByAltText();
    expect(id).toBe("1234")
  });
});
