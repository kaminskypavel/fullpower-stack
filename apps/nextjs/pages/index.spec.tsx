import { expect, vi, describe, it } from "vitest";
import {
  render,
  screen,
  within,
  waitFor,
  fireEvent,
} from "@testing-library/react";
import Home from "./index";

global.window.alert = vi.fn();

describe("Index Page", () => {
  it("toBe true", () => {
    expect(true).toBe(true);
  });

  describe("#Home", async () => {
    it("render", () => {
      render(<Home />);
      screen.logTestingPlaygroundURL(); // .?
      const main = within(screen.getByRole("main"));
      expect(main.getByTestId("get-started")).toBeDefined();
    });

    it("should show an alert when clicking the 'boop' button", async () => {
      render(<Home />);

      const button = screen.getByText("Boop");
      fireEvent.click(button);

      expect(window.alert).toBeCalledWith("👉 + 🐈 = Boop");
    });
  });
});
