// import { describe, expect, it } from "vitest"; not necessary as test.globals: true is enabled in vite.config.js
import App from "./App";
import { render } from "@testing-library/react";

describe("App", () => {
  it("should render without crash", () => {
    render(<App />);
  });
});
