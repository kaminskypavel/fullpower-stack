import request from "supertest";
import app from "./app";
import { describe, expect, it } from "vitest";

describe("app.ts", () => {
  it('should return return "Hello World!"', async () => {
    const res = await request(app).get(`/`);
    expect(res.statusCode).toEqual(200);
  });
});
