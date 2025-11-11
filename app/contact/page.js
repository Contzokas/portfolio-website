'use client';

import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function ContactPage() {
  const contactMethods = [
    {
      name: 'Email',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      value: 'contzokas@proton.me',
      href: 'mailto:contzokas@proton.me',
      color: 'from-red-500 to-orange-500',
      hoverColor: 'hover:border-red-500 dark:hover:border-red-500',
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      value: 'LinkedIn Profile',
      href: 'https://www.linkedin.com/in/constantinos-tzokas/',
      color: 'from-blue-600 to-blue-800',
      hoverColor: 'hover:border-blue-600 dark:hover:border-blue-600',
    },
    {
      name: 'Facebook',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      value: 'Facebook Profile',
      href: 'https://www.facebook.com/konnos.tzokas/',
      color: 'from-blue-500 to-blue-700',
      hoverColor: 'hover:border-blue-500 dark:hover:border-blue-500',
    },
    {
      name: 'Instagram',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
        </svg>
      ),
      value: 'Instagram Profile',
      href: 'https://www.instagram.com/con.tzokas/',
      color: 'from-pink-500 to-purple-600',
      hoverColor: 'hover:border-pink-500 dark:hover:border-pink-500',
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-black">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl top-20 left-10 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl bottom-20 right-10 animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-zinc-900 dark:text-zinc-50 animate-slide-up">
              Get In <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">Touch</span>
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 animate-slide-up delay-200">
              Feel free to reach out through any of these platforms
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <a
                key={method.name}
                href={method.href}
                target={method.name === 'Email' ? '_self' : '_blank'}
                rel={method.name === 'Email' ? '' : 'noopener noreferrer'}
                className={`group p-8 bg-white dark:bg-zinc-900 rounded-2xl border-2 border-zinc-200 dark:border-zinc-800 ${method.hoverColor} transition-all duration-300 hover:shadow-xl hover:scale-105 animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-4 rounded-xl bg-linear-to-br ${method.color} text-white`}>
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-1">
                      {method.name}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 break-all">
                      {method.value}
                    </p>
                  </div>
                  <svg 
                    className="w-6 h-6 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-50 group-hover:translate-x-1 transition-all" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}
          </div>

          {/* Additional Info */}
          <div className="text-center p-8 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-200 dark:border-zinc-800">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
              Let&apos;s Collaborate
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              I&apos;m always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, I&apos;ll do my best to get back to you!
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
