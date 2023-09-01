import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {

  beforeEach(() => render(<App />));

  it("should render without crash", () => {
    screen.debug();
  });

  it("should keep displayed selectors when navigating between pages", () => {
    
  })
});
