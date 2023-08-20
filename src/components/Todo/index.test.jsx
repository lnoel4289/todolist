import Todo from ".";
import { render } from "@testing-library/react";

describe("Todo", () => {
  it("should render without crash", () => {
    render(<Todo />);
  });
});
