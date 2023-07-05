import { AppThemeProvider } from "@/providers/ThemeContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "@/providers/AuthContext";
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AppThemeProvider>
          <Component {...pageProps} />
        </AppThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
