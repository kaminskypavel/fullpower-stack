import {render, screen, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {httpBatchLink} from "@trpc/client";


import LoginPage from ".";
import {trpc} from "../../services/trpc";
const queryClient = new QueryClient();
const trpcClient =
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


const Component = <trpc.Provider client={trpcClient} queryClient={queryClient}>
  <QueryClientProvider client={queryClient}>
    <LoginPage />
  </QueryClientProvider>
</trpc.Provider>

describe("App", () => {
  it("renders a count button", () => {
    render(Component);
    const button = screen.getByRole("button", {
      name: /count is 0/i,
    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(button).toBeInTheDocument();
    // console.log(screen.logTestingPlaygroundURL());
  });
  it("clicking increments the count", () => {
    render(Component);
    const button = screen.getByRole("button", {
      name: /count is 0/i,
    });

    fireEvent.click(button);

    expect(button.textContent).toBe("count is 1");
    // console.log(screen.logTestingPlaygroundURL());
  });
});
