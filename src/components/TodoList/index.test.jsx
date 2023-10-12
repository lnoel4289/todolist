import TodoList from ".";
import { render, screen } from "@testing-library/react";
import Wrapper from "../../Wrapper";

describe("TodoList", () => {
  const state = {
    todoList: ["todo1", "todo2", "todo3"],
  };

  beforeEach(() => {
    render(<TodoList />, { wrapper: Wrapper });
  });

  screen.debug()

  it("", () => {})

  // it("should render a list of Todo components based on state.todoList", () => {
  //   const todoList = document.querySelectorAll("li");
  //   expect(todoList.length).toBe(state.todoList.length);
  // });
});
