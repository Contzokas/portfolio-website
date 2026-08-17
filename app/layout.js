import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const siteUrl = "https://www.contzokas.xyz";

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAF9" },
    { media: "(prefers-color-scheme: dark)", color: "#18181B" },
  ],
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Constantinos Tzokas | Software Developer",
    template: "%s | Constantinos Tzokas",
  },
  description:
    "Official website of Constantinos Tzokas — software developer based in Greece. Explore my projects, awards, CV, and open-source work across Python, JavaScript, Java, Next.js and more.",
  keywords: [
    "Constantinos Tzokas",
    "Konstantinos Tzokas",
    "Κωνσταντίνος Τζώκας",
    "software developer",
    "software engineer",
    "developer portfolio",
    "full stack developer",
    "Greece developer",
    "Python",
    "JavaScript",
    "Next.js",
  ],
  authors: [{ name: "Constantinos Tzokas", url: siteUrl }],
  creator: "Constantinos Tzokas",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Constantinos Tzokas | Software Developer",
    title: "Constantinos Tzokas | Software Developer",
    description:
      "Software developer based in Greece. Explore my projects, awards, CV, and open-source work.",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Constantinos Tzokas — Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Constantinos Tzokas | Software Developer",
    description:
      "Software developer based in Greece. Explore my projects, awards, CV, and open-source work.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'android-chrome-192x192', url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'android-chrome-512x512', url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Constantinos Tzokas",
  alternateName: "Konstantinos Tzokas",
  url: siteUrl,
  image: `${siteUrl}/og-image.jpg`,
  jobTitle: "Software Developer",
  email: "mailto:contzokas@proton.me",
  address: {
    "@type": "PostalAddress",
    addressCountry: "GR",
  },
  knowsAbout: [
    "Python",
    "JavaScript",
    "Java",
    "C",
    "PHP",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "WordPress",
    "Git",
  ],
  sameAs: [
    "https://github.com/Contzokas",
    "https://www.linkedin.com/in/constantinos-tzokas/",
    "https://www.facebook.com/konnos.tzokas/",
    "https://www.instagram.com/con.tzokas/",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var stored = localStorage.getItem('theme');
                if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className={`${spaceGrotesk.variable} ${spaceMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
