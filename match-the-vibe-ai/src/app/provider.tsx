"use client";
// deps
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Store } from "@tanstack/store";

export const store = new Store({
  isLoading: false,
});

export const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
