import {QueryClientProvider} from "@tanstack/react-query";
import {httpBatchLink} from "@trpc/client";
import {Toaster} from 'react-hot-toast';
import "./App.css";
import AddUserPage from "./pages/AddUserPage";
import {queryClient} from "./services/queryClient";
import {trpc} from "./services/trpc";
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';

export default function App() {
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

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {import.meta.env.NODE_ENV !== 'production' && (
          <div className="hidden md:block">
            <ReactQueryDevtools initialIsOpen={false} />
          </div>
        )}

        <AddUserPage />
        <Toaster />
      </QueryClientProvider>
    </trpc.Provider>
  );
}
