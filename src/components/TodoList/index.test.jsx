import TodoList from ".";
import { render, screen } from "@testing-library/react";
import Wrapper from "../../testsUtils/Wrapper";
import store from "../../store";
import { add } from "./todoListSlice";

describe("TodoList", () => {
  beforeEach(() => {
    store.dispatch(add("todo1"));
    store.dispatch(add("todo2"));
    render(<TodoList />, { wrapper: Wrapper });
  });

  it("should display every Todo Component from from strings being in state.todoList into the TodoList component", () => {
    const todo1 = screen.getByText(/todo1/i);
    expect(todo1).toBeDefined();
    const todo2 = screen.getByText(/todo2/i);
    expect(todo2).toBeDefined();
  });

});
