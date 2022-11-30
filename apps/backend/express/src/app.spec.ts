import request from "supertest";
import app from "./app";
import { describe, expect, it } from "vitest";

describe("app.ts", () => {
  it('should return return "Hello World!"', async () => {
    const res = await request(app).get(
      `/trpc/cat?batch=1&input={"0":{"text":"hello"}}`
    );
    expect(res.statusCode).toEqual(200);
  });
});
