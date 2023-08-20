import TextInput from ".";
import { render } from "@testing-library/react";

describe("TextInput", () => {
  it("should render without crash", () => {
    render(<TextInput />);
  });
});
