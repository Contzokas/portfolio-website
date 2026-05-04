import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t-[3px] border-[var(--border)]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-sm" style={{ color: 'var(--muted)' }}>
          &copy; {new Date().getFullYear()} Constantinos Tzokas
        </p>
        <div className="flex gap-6">
          {[
            { href: "/", label: "Home" },
            { href: "/projects", label: "Projects" },
            { href: "/contact", label: "Contact" },
            { href: "/cv", label: "CV" },
            { href: "/awards", label: "Awards" },
            { href: "https://github.com/Contzokas", label: "GitHub", external: true },
          ].map(({ href, label, external }) => (
            external ? (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm uppercase tracking-wide hover:text-lime transition-colors"
                style={{ color: 'var(--muted)' }}
              >
                {label}
              </a>
            ) : (
              <Link
                key={href}
                href={href}
                className="font-mono text-sm uppercase tracking-wide hover:text-lime transition-colors"
                style={{ color: 'var(--muted)' }}
              >
                {label}
              </Link>
            )
          ))}
        </div>
      </div>
    </footer>
  );
}
