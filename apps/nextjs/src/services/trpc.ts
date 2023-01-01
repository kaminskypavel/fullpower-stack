// https://trpc.io/docs/v10/react
import { httpLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";
import type { AppRouter } from "@fullpower-stack/express-backend";
import { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import superjson from "superjson";
import getConfig from "next/config";
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
const API_URI = serverRuntimeConfig.URI || publicRuntimeConfig.URI;
console.log("API_URI", API_URI);
export const trpc = createTRPCNext<AppRouter>({
  config() {
    return {
      transformer: superjson,
      links: [
        httpLink({
          /**
           * If you want to use SSR, you need to use the server's full URL
           * @link https://trpc.io/docs/ssr
           **/
          url: API_URI,
        }),
      ],
      /**
       * @link https://tanstack.com/query/v4/docs/reference/QueryClient
       **/
      queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  ssr: true,
  responseMeta({ clientErrors }) {
    if (clientErrors.length) {
      // propagate first http error from API calls
      return {
        status: (clientErrors[0].data as any)?.httpStatus ?? 500,
      };
    }
    // cache full page for 1 day + revalidate once every second
    const ONE_DAY_IN_SECONDS = 60 * 60 * 24;
    return {
      "Cache-Control": `s-maxage=1, stale-while-revalidate=${ONE_DAY_IN_SECONDS}`,
    };
  },
});

export type RouterInput = inferRouterInputs<AppRouter>;
export type RouterOutput = inferRouterOutputs<AppRouter>;
