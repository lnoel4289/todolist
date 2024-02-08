import { render } from "@testing-library/react";
import Footer from ".";
import Wrapper from "../../testsUtils/Wrapper";


describe("Footer", () => {
  it("should render without crash", () => {
    render(<Footer />, { wrapper: Wrapper });
  });
});
