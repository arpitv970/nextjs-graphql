import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/common/header";
import { GlobalProvider } from "@/components/global-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Awesome Linis",
  description:
    "This Next.js project is based on TypeScript utilizing Prisma & GraphQL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GlobalProvider>
        <body className={inter.className}>
          <Header />
          <div className="flex justify-center items-center mx-auto">
            <div className="w-3/4">{children}</div>
          </div>
        </body>
      </GlobalProvider>
    </html>
  );
}
