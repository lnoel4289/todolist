import { render } from "@testing-library/react";
import Header from ".";

describe("Header", () => {
  it("should render without crash", () => {
    render(<Header />);
  });
});
