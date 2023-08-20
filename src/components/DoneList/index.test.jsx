import DoneList from ".";
import { render } from "@testing-library/react";

describe("DoneList", () => {
  it("should render without crash", () => {
    render(<DoneList />);
  });
});
