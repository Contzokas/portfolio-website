'use client';

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-zinc-600 dark:text-zinc-400">
          © {new Date().getFullYear()} Constantinos Tzokas. Built with Next.js
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <Link href="/" className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Home
          </Link>
          <Link href="/projects" className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Projects
          </Link>
          <Link href="/contact" className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Contact
          </Link>
          <Link href="/cv" className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            CV
          </Link>
          <Link href="/awards" className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Awards
          </Link>
          <a href="https://github.com/Contzokas" target="_blank" rel="noopener noreferrer" className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
