import "@testing-library/jest-dom/extend-expect";
import matchers from "@testing-library/jest-dom/matchers";
import { afterEach, beforeAll, expect, afterAll, vi } from "vitest";

import { server } from "./src/mocks/server";

// Establish API mocking before all tests.
beforeAll(() => server.listen());
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());
// Clean up after the tests are finished.
afterAll(() => server.close());


expect.extend(matchers);
