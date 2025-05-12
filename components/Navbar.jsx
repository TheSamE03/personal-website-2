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
          Projects
        </Link>

        <div className="space-x-4 flex items-center">
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/resume" className="hover:underline">Resume</Link>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="hover:underline"
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
}
