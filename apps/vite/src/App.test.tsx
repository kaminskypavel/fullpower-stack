import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "./App";

describe("App", () => {
  it("renders a count button", () => {
    render(<App />);
    const button = screen.getByRole("button", {
      name: /count is 0/i,
    });

    expect(button).toBeInTheDocument();
    // console.log(screen.logTestingPlaygroundURL());
  });
  it("clicking increments the count", () => {
    render(<App />);
    const button = screen.getByRole("button", {
      name: /count is 0/i,
    });

    fireEvent.click(button);

    expect(button.textContent).toBe("count is 1");
    // console.log(screen.logTestingPlaygroundURL());
  });
});
