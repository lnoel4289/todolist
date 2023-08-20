import Todo from ".";
import { render } from "@testing-library/react";

describe("TodoList", () => {
  it("should render without crash", () => {
    render(<Todo />);
  });
});
