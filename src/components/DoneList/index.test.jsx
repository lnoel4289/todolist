import DoneList from ".";
import { render, screen } from "@testing-library/react";
import Wrapper from "../../testsUtils/Wrapper";
import store from "../../store";
import { add } from "./doneListSlice";
import data from "../../data/lang";

describe("DoneList", () => {
  beforeEach(() => {
    const text = data.en;
    store.dispatch(add("done1"));
    store.dispatch(add("done2"));
    render(<DoneList text={text} />, { wrapper: Wrapper });
  });

  it("should display every Done Component from strings being in state.doneList into the DoneList component", () => {
    const done1 = screen.getByText(/done1/i);
    expect(done1).toBeDefined();
    const done2 = screen.getByText(/done2/i);
    expect(done2).toBeDefined();
  });
});
