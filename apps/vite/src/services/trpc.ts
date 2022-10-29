// https://trpc.io/docs/v10/react
import {createTRPCReact} from "@trpc/react-query";
import {AppRouter, addUserSchemaType} from '@fullpower-stack/express-backend';

export const trpc = createTRPCReact<AppRouter>();
