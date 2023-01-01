import { TRPCError } from "@trpc/server";

export const isAuthedMiddleware = ({ next, ctx }: { next: any; ctx: any }) => {
  if (!ctx.session?.user?.email) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
    });
  }

  return next({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ctx: {
      session: ctx.session,
    },
  });
};
