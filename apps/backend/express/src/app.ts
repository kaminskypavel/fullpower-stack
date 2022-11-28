import * as trpcExpress from '@trpc/server/adapters/express'
import cors from 'cors'
import type { Express } from 'express'
import express from 'express'
import { appRouter } from './trpc/appRouter'
import { createContext } from './trpc/context'

const app: Express = express()
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World 👋')
})

app.use(
  '/trpc',
  (res, req, next) => {
    next()
  },
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  }),
)

export default app
