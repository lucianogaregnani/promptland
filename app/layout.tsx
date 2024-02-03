import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleProvider from "@/components/GoogleProvider";
import Nav from "@/components/Nav/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Promptland",
  description:
    "Promptland is an open-source AI prompting tool for the modern world, enabling users to discover, create, and share creative prompts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`text-slate-700 ${inter.className}`}>
        <GoogleProvider>
          <Nav />
          <main className="">{children}</main>
        </GoogleProvider>
      </body>
    </html>
  );
}
