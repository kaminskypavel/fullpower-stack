// https://trpc.io/docs/v10/react
import {createTRPCReact} from "@trpc/react-query";
import type {AppRouter} from "@fullpower-stack/express-backend/src/appRouter";

export const trpc = createTRPCReact<AppRouter>();
