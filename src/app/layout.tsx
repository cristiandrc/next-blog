import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getGlobal } from "./utils/getGlobals";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const generateMetadata = async (): Promise<Metadata> => {
  const meta = await getGlobal();
  return {
    title: meta.title,
    description: meta.description,
    icons: {
      icon: meta.icon,
    },
  };
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getGlobal();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar links={data.links} logoUrl={data.logo} logoText={"Logo"} />
        {children}
        <footer>Block </footer>
      </body>
    </html>
  );
}
