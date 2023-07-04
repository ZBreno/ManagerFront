import { AppThemeProvider } from "@/providers/ThemeContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AppThemeProvider>
        <Component {...pageProps} />
      </AppThemeProvider>
    </QueryClientProvider>
  );
}
