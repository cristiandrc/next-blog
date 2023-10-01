import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getGlobal } from "./utils/getGlobals";

const inter = Inter({ subsets: ["latin"] });

export const generateMetadata = async (): Promise<Metadata> => {
  const meta = await getGlobal();
  return {
    title: meta.title,
    description: meta.description,
    icons: {
      icon: ["http://localhost:1337/uploads/favicon.png"],
    },
  };
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
