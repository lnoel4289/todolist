import { fireEvent, render, screen } from "@testing-library/react";
import Header from ".";
import { beforeEach } from "vitest";

describe("Header", () => {
  beforeEach(() => render(<Header />));

  it("should navigate between pages", () => {
    const aboutPageLink = screen.getByRole("link", { name: "About" });
    const homePageLink = screen.getByRole("link", { name: "Home" });
    fireEvent.click(aboutPageLink);
    expect(
      screen.getByText(
        "This is an additional page to show that the state persists between pages."
      )
    ).toBeInTheDocument();
    fireEvent.click(screen.getByRole(homePageLink));
    expect(screen.getByText("Enter a task to do here")).toBeInTheDocument();
  });
});
