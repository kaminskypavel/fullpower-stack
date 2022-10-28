import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {httpBatchLink} from "@trpc/client";
import {useState} from "react";
import "./App.css";
import AddUserPage from "./pages/AddUserPage";
import {trpc} from "./services/trpc";

export default function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: "http://localhost:4000/trpc",
          // optional
          headers() {
            return {
              authorization: "fake-cookie",
            };
          },
        }),
      ],
    })
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <AddUserPage />
      </QueryClientProvider>
    </trpc.Provider>
  );
}
