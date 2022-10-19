import request from 'supertest'
import app from './app'

describe('/', () => {
    it('should return return "Hello World!"', async () => {
        const res = await request(app)
            .get('/');

        expect(res.statusCode).toEqual(200)
        expect(res.text).toBe('Hello World!')
    })
})
