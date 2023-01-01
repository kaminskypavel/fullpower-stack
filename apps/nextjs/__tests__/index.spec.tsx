import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Home from "../src/pages/index";

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
});
