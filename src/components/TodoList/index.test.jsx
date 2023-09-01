import TodoList from ".";
import { render } from "@testing-library/react";

describe("TodoList", () => {
  beforeEach(() => {
    render(<TodoList />);
  });
  it("should render a Todo Component for each element of todoList state", () => {});
});
