// https://trpc.io/docs/v10/react
import { createTRPCReact } from "@trpc/react-query";
import { AppRouter } from "@fullpower-stack/express-backend";

export const trpc = createTRPCReact<AppRouter>();
