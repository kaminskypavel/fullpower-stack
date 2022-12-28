import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Home from "../pages/index";

global.window.alert = vi.fn();

vi.mock("../services/trpc", () => ({
  trpc: {
    cat: {
      useQuery: () => ({
        data: { url: "cat" },
      }),
    },
  },
}));

describe("Index Page", () => {
  it("toBe true", () => {
    expect(true).toBe(true);
  });

  describe("#Home", async () => {
    it("render", () => {
      render(<Home />);

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
