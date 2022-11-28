// check that App is rendered with vitest and msw

import { Button } from "@fullpower-stack/ui";
import { render, screen } from "@testing-library/react";
import { expect, it, describe } from "vitest";

describe("dummy", () => {
  it("should render a dummy button from a different package", () => {
    const { getByText } = render(<Button />);
    const boopButtonEl = getByText(/Boop/i);

    expect(boopButtonEl).toBeInTheDocument();
  });
});
