import { AppThemeProvider } from "@/providers/ThemeContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "@/providers/AuthContext";
import { MessageProvider } from "@/providers/MessageContext";
import { EmployeeProvider } from "@/providers/EmployeeContext";
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppThemeProvider>
      <QueryClientProvider client={queryClient}>
        <MessageProvider>
          <EmployeeProvider>
            <AuthProvider>
              <Component {...pageProps} />
            </AuthProvider>
          </EmployeeProvider>
        </MessageProvider>
      </QueryClientProvider>
    </AppThemeProvider>
  );
}
