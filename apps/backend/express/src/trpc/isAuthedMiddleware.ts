import { TRPCError, initTRPC } from '@trpc/server'
import type { Context } from './context'

export const t = initTRPC.context<Context>().create()

export const isAuthedMiddleware = t.middleware(({ next, ctx }) => {
  if (!ctx.session?.user?.email) {
    throw new TRPCError({
      code: 'UNAUTHORIZED',
    })
  }

  return next({
    ctx: {
      session: ctx.session,
    },
  })
})
