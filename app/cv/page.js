'use client';

import { useState } from 'react';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function CVPage() {
  const [language, setLanguage] = useState('english');

  const cvFiles = {
    english: '/cv-english.pdf',
    greek: '/cv-greek.pdf'
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = cvFiles[language];
    link.download = language === 'english' ? 'Constantinos_Tzokas_CV_EN.pdf' : 'Constantinos_Tzokas_CV_EL.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <Navigation />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4" style={{ color: 'var(--fg)' }}>
              Curriculum Vitae
            </h1>
            <p className="font-mono text-lg" style={{ color: 'var(--muted)' }}>
              View and download my resume
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8 p-4 neo-card">
            <div className="flex gap-2">
              <button
                onClick={() => setLanguage('english')}
                className={`px-6 py-2 font-mono text-sm uppercase tracking-wide transition-colors ${
                  language === 'english'
                    ? 'bg-lime text-zinc-900 border-[3px] border-[var(--border)]'
                    : 'bg-transparent border-[3px] border-transparent'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('greek')}
                className={`px-6 py-2 font-mono text-sm uppercase tracking-wide transition-colors ${
                  language === 'greek'
                    ? 'bg-lime text-zinc-900 border-[3px] border-[var(--border)]'
                    : 'bg-transparent border-[3px] border-transparent'
                }`}
              >
                EL
              </button>
            </div>

            <button
              onClick={handleDownload}
              className="neo-btn flex items-center gap-2 px-6 py-3 bg-[var(--fg)] text-lime font-mono text-sm uppercase"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download
            </button>
          </div>

          {/* PDF Viewer */}
          <div className="neo-card overflow-hidden">
            <div className="aspect-[8.5/11] w-full">
              <iframe
                src={cvFiles[language]}
                className="w-full h-full"
                title={`CV - ${language === 'english' ? 'English' : 'Greek'}`}
                style={{ border: 'none' }}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
