import { render, screen } from "@testing-library/react";
import { PrimaryButton } from "./Button.stories";

describe("#PrimaryButton", () => {
  it("renders a count button", () => {
    render(<PrimaryButton />);
    const button = screen.getByRole("button", {
      name: /boop/i,
    });

    expect(button).toBeVisible();
    // console.log(screen.logTestingPlaygroundURL());
  });
});
