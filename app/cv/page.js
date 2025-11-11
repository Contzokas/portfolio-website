'use client';

import { useState } from 'react';
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function CVPage() {
  const [language, setLanguage] = useState('english');

  // You'll need to add your CV PDF files to the public folder
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
    <div className="min-h-screen bg-zinc-950 dark:bg-black relative overflow-hidden">
      {/* Tech Grid Background */}
      <div 
        className="fixed inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      ></div>
      
      {/* Animated gradient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content wrapper */}
      <div className="relative z-10">
        {/* Navigation */}
        <Navigation />

        {/* CV Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 text-zinc-50 animate-slide-up">
                Curriculum <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500">Vitae</span>
              </h1>
              <p className="text-xl text-zinc-400 animate-slide-up delay-200">
                View and download my professional resume
              </p>
            </div>

            {/* Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8 p-4 bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-zinc-800">
              {/* Language Toggle */}
              <div className="flex gap-2 bg-zinc-800/50 p-1 rounded-lg">
                <button
                  onClick={() => setLanguage('english')}
                  className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                    language === 'english'
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  🇬🇧 English
                </button>
                <button
                  onClick={() => setLanguage('greek')}
                  className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                    language === 'greek'
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  🇬🇷 Ελληνικά
                </button>
              </div>

              {/* Download Button */}
              <button
                onClick={handleDownload}
                className="group flex items-center gap-2 px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download CV
              </button>
            </div>

            {/* PDF Viewer */}
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800 overflow-hidden shadow-2xl">
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

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
