import {QueryClientProvider} from "@tanstack/react-query";
import {httpBatchLink} from "@trpc/client";
import {Toaster} from 'react-hot-toast';
import "./App.css";

import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {
  Outlet,
  RouterProvider
} from '@tanstack/react-router';
import {TanStackRouterDevtools} from "@tanstack/react-router-devtools";
import {Provider as JotaiProvider} from 'jotai';
import Navbar from "./components/Navbar";
import {router} from "./router";
import {queryClient} from "./services/queryClient";
import {trpc} from "./services/trpc";

const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: import.meta.env.VITE_API_URL,
      // optional
      headers() {
        return {
          authorization: "fake-cookie",
        };
      },
    }),
  ],
})


export default function App() {

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}>
          <JotaiProvider>

            <Navbar />
            <Outlet />

            <Toaster />

          </JotaiProvider>
          <TanStackRouterDevtools position="bottom-right" />
        </RouterProvider>
        {import.meta.env.NODE_ENV !== 'production' && (
          <div className="hidden md:block">
            <ReactQueryDevtools initialIsOpen={false} />
          </div>
        )}
      </QueryClientProvider>
    </trpc.Provider>
     
  );
}
