import TodoList from ".";
import { render } from "@testing-library/react";
import Wrapper from "../../Wrapper";

describe("TodoList", () => {
  beforeEach(() => {
    render(<TodoList />, { wrapper: Wrapper });
  });
  it("should render a Todo Component for each element of todoList state", () => {});
});
