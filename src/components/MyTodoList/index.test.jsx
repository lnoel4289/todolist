import { render } from "@testing-library/react";
import TodoList from "../TodoList";
import Wrapper from "../../Wrapper";

describe("TodoList", () => {
  beforeEach(() => {
    render(<TodoList />, { wrapper: Wrapper });
  });
  it("should render a list of state.todoList array", () => {
    const todoList = ["todo1", "todo2", "todo3"];
    
  });
});
