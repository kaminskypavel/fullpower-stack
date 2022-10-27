import {render, screen} from "@testing-library/react";

import {PrimaryButton} from "./Button.stories";
import {describe, it, expect} from 'vitest';

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
