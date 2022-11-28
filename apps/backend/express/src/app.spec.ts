import request from 'supertest'
import { describe, expect, it } from 'vitest'
import app from './app'

describe('app.ts', () => {
  it('should return return "Hello World!"', async () => {
    const res = await request(app).get(
      '/trpc/cat?batch=1&input={"0":{"text":"hello"}}',
    )
    expect(res.statusCode).toEqual(200)
  })
})
