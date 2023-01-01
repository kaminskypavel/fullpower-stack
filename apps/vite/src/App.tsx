import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getFetch, httpLink, loggerLink } from "@trpc/client";
import { Toaster } from "react-hot-toast";
import "./App.css";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet, RouterProvider } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Provider as JotaiProvider } from "jotai";
import Navbar from "./components/Navbar";
import { router } from "./router";
import { trpc } from "./services/trpc";
import superjson from "superjson";
import { useState } from "react";

const getApiUrl = () => {
  let apiUrl;
  switch (process.env.NODE_ENV) {
    case "test":
      apiUrl = "http://localhost:4000/trpc";
      break;

    case "production":
      apiUrl = "TO BE ADDED";
      break;

    case "development":
      apiUrl = "http://localhost:4000/trpc";
      break;
    default:
      apiUrl = "/api/trpc";
      break;
  }

  return apiUrl;
};
function App() {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      })
  );
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        loggerLink(),
        httpLink({
          url: getApiUrl(),
          fetch: async (input, init?) => {
            const fetch = getFetch();
            return fetch(input, {
              ...init,
              credentials:
                process.env.NODE_ENV === "production" ? "include" : "omit",
            });
          },
        }),
      ],
      transformer: superjson,
    })
  );

  return (
    <RouterProvider router={router}>
      <trpc.Provider client={trpcClient} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
          <JotaiProvider>
            {import.meta.env.NODE_ENV !== "production" && (
              <div className="hidden md:block">
                <ReactQueryDevtools initialIsOpen={false} />
              </div>
            )}
            <Navbar />
            <Outlet />

            <Toaster />

            <TanStackRouterDevtools position="bottom-right" />
          </JotaiProvider>
        </QueryClientProvider>
      </trpc.Provider>
    </RouterProvider>
  );
}

export default App;
