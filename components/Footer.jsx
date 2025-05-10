// components/Footer.jsx
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-800 py-6 mt-12">
      <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {year} Sam Erne. All rights reserved.
        </p>
        <div className="space-x-4 mt-4 sm:mt-0">
          <a
            href="https://github.com/TheSamE03"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 text-sm"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/samuel-erne"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 text-sm"
          >
            LinkedIn
          </a>
          {/* add more links as needed */}
        </div>
      </div>
    </footer>
  );
}
