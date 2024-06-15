"use client";
import { ThemeProvider } from "@/components/theme-provider";
import apolloClient from "@/lib/apollo";
import { ApolloProvider } from "@apollo/client";

interface IProps {
  children: React.ReactNode;
}

export const GlobalProvider = ({ children }: IProps) => (
  <ApolloProvider client={apolloClient}>
    <ThemeProvider attribute="class" defaultTheme="dark">
      {children}
    </ThemeProvider>
  </ApolloProvider>
);
