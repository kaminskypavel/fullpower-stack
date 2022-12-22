import { expect } from "vitest";
import matchers from "@testing-library/jest-dom/matchers";
import "@testing-library/jest-dom/extend-expect";

expect.extend(matchers);
