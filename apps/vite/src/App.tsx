import { QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink, httpLink } from "@trpc/client";
import { Toaster } from "react-hot-toast";
import "./App.css";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet, RouterProvider } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Provider as JotaiProvider } from "jotai";
import Navbar from "./components/Navbar";
import { router } from "./router";
import { queryClient } from "./services/queryClient";
import { trpc } from "./services/trpc";

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
    default:
      apiUrl = "/api/trpc";
      break;
  }

  return apiUrl;
};

const trpcClient = trpc.createClient({
  links: [
    httpLink({
      url: getApiUrl(),
      // optional
      headers() {
        return {
          authorization: "fake-cookie",
        };
      },
    }),
  ],
});

export default function App() {
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
