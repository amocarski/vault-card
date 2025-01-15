import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ApolloProvider from "@/providers/apollo-provider";
import MainMenu from "@/components/main-menu";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Morpho Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <MainMenu />
        <ApolloProvider>
          <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
            <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
              {children}
            </main>
          </div>
        </ApolloProvider>
      </body>
    </html>
  );
}
