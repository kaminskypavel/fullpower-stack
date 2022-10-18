import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import LoginPage from ".";

describe("App", () => {
  it("renders a count button", () => {
    render(<LoginPage />);
    const button = screen.getByRole("button", {
      name: /count is 0/i,
    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(button).toBeInTheDocument();
    // console.log(screen.logTestingPlaygroundURL());
  });
  it("clicking increments the count", () => {
    render(<LoginPage />);
    const button = screen.getByRole("button", {
      name: /count is 0/i,
    });

    fireEvent.click(button);

    expect(button.textContent).toBe("count is 1");
    // console.log(screen.logTestingPlaygroundURL());
  });
});
