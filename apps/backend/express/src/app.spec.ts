import request from "supertest";
import app from "./app";
import {describe, expect, it} from 'vitest';

describe("/", () => {
  it('should return return "Hello World!"', async () => {
    const res = await request(app).get("/trpc/cat");

    expect(res.statusCode).toEqual(200);
  });
});
