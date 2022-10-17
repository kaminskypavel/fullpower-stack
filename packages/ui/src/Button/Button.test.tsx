import { render, screen, fireEvent } from "@testing-library/react";

import { PrimaryButton } from "./Button.stories";

describe("#PrimaryButton", () => {
  it("renders a count button", () => {
    render(<PrimaryButton />);
    const button = screen.getByRole("button", {
      name: /boop/i,
    });

    expect(button).toBeInTheDocument();
    // console.log(screen.logTestingPlaygroundURL());
  });
});
