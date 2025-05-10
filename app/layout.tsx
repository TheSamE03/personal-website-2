import "./globals.css";
import { ReactNode } from "react";
import { Navbar } from "../components/Navbar";
import { Providers } from "../components/Providers";
import { Footer } from "../components/Footer";

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "Sam Erne • Portfolio",
  description: "Physics major & developer",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <Providers>
          <Navbar />
          <main className="max-w-4xl mx-auto px-4 py-8">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
