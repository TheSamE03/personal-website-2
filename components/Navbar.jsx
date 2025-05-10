// components/Navbar.jsx
"use client";

import Link from "next/link";
import { useTheme } from "next-themes";

export function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="w-full py-4 bg-gray-100 dark:bg-gray-800 shadow">
      <div className="max-w-4xl mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-xl font-semibold">
          Sam Erne
        </Link>

        <div className="space-x-4 flex items-center">
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="btn btn-sm"
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
}
