import DoneList from ".";
import { render } from "@testing-library/react";
import Wrapper from "../../Wrapper";

describe("DoneList", () => {
  it("should render without crash", () => {
    render(<DoneList />, { wrapper: Wrapper });
  });
});
