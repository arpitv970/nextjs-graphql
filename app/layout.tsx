import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/common/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Awesome Linis",
  description: "This Next.js project is based on TypeScript utilizing Prisma & GraphQL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Header />
          <div className="flex justify-center items-center mx-auto">
            <div className="w-3/4">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
