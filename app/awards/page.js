'use client';

import { useState } from 'react';
import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function AwardsPage() {
  const [selectedAward, setSelectedAward] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const getAwardStyle = (title) => {
    const lowerTitle = title.toLowerCase();

    if (lowerTitle.includes('1st') || lowerTitle.includes('first') || lowerTitle.includes('gold')) {
      return {
        borderColor: '#EAB308',
        tagBg: '#EAB308',
        tagText: '#1C1917',
      };
    } else if (lowerTitle.includes('2nd') || lowerTitle.includes('second') || lowerTitle.includes('silver')) {
      return {
        borderColor: '#9CA3AF',
        tagBg: '#9CA3AF',
        tagText: '#1C1917',
      };
    } else if (lowerTitle.includes('3rd') || lowerTitle.includes('third') || lowerTitle.includes('bronze')) {
      return {
        borderColor: '#D97706',
        tagBg: '#D97706',
        tagText: '#FFFFFF',
      };
    } else if (lowerTitle.includes('participation')) {
      return {
        borderColor: '#4ECDC4',
        tagBg: '#4ECDC4',
        tagText: '#1C1917',
      };
    } else {
      return {
        borderColor: '#AAFF00',
        tagBg: '#AAFF00',
        tagText: '#1C1917',
      };
    }
  };

  const awards = [
    {
      id: 1,
      title: "Participation – Kiefer AI Open Hackathon",
      issuer: "Kiefer",
      date: "April 27–30, 2026",
      description: "Built MEDΩ, an AI-powered medical triage assistant for the Greek public health system (ΕΣΥ), using Nvidia Nemotron 120B Super, FastAPI, and React.",
      images: []
    },
    {
      id: 2,
      title: "3rd – RoboRAVE International Finals 2025",
      issuer: "RoboRAVE International (Robotics Education and Competition)",
      date: "August 2025",
      description: "Awarded Bronze medal at the RoboRAVE International Finals 2025, competing against teams from around the world in robotics challenges.",
      images: ["/awards/1758033648347.jpg"]
    },
    {
      id: 3,
      title: "1st Place Award – Collabrew",
      issuer: "University of Thessaly / One Planet Thessaly",
      date: "June 2025",
      description: "Awarded 1st place for presenting the innovative business idea 'Collabrew' during the Innovation & Entrepreneurship Day held on June 5, 2025.",
      images: ["/awards/Screenshot_1.jpg", "/awards/IMG_3291.jpg"]
    },
    {
      id: 4,
      title: "1st Place – Mouse Labyrinth (Upper / Professional)",
      issuer: "RoboRAVE Greece",
      date: "April 2025",
      description: "Won 1st place in the 'Mouse Labyrinth – Upper / Professional' category at the 1st Panhellenic RoboRAVE Greece competition.",
      images: ["/awards/1749135875952.jpg"]
    },
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <Navigation />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-4" style={{ color: 'var(--fg)' }}>
              Awards
            </h1>
            <p className="font-mono text-lg" style={{ color: 'var(--muted)' }}>
              Competitions & recognition
            </p>
          </div>

          <div className="space-y-6">
            {awards.map((award, index) => {
              const style = getAwardStyle(award.title);
              const hasImages = award.images && award.images.length > 0;

              return (
                <div
                  key={award.id}
                  onClick={() => {
                    if (hasImages) {
                      setSelectedAward(award);
                      setCurrentImageIndex(0);
                    }
                  }}
                  className="neo-card p-6 animate-pop-in"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    borderColor: style.borderColor,
                    cursor: hasImages ? 'pointer' : 'default',
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="font-mono text-xs uppercase tracking-wider px-3 py-1 shrink-0 border-[3px] border-(--border) font-bold mt-1"
                      style={{ background: style.tagBg, color: style.tagText }}
                    >
                      {award.date}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold mb-1" style={{ color: 'var(--fg)' }}>
                        {award.title}
                      </h3>
                      <p className="font-mono text-sm mb-3" style={{ color: 'var(--muted)' }}>
                        {award.issuer}
                      </p>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                        {award.description}
                      </p>
                      {hasImages && (
                        <p className="font-mono text-xs mt-3 text-lime">
                          Click to view photos &rarr;
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedAward && (() => {
        const style = getAwardStyle(selectedAward.title);

        return (
          <div
            className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/80 animate-fade-in"
            onClick={() => {
              setSelectedAward(null);
              setCurrentImageIndex(0);
            }}
          >
            <div className="relative max-w-5xl w-full">
              {/* Close button */}
              <button
                onClick={() => {
                  setSelectedAward(null);
                  setCurrentImageIndex(0);
                }}
                className="absolute -top-10 right-0 text-white hover:text-lime transition-colors z-50"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Title */}
              <div className="text-center mb-4">
                <h3 className="text-lg md:text-2xl font-bold mb-1 px-2" style={{ color: style.borderColor }}>
                  {selectedAward.title}
                </h3>
                <p className="font-mono text-sm px-2" style={{ color: '#A8A29E' }}>
                  {selectedAward.issuer} &middot; {selectedAward.date}
                </p>
                {selectedAward.images.length > 1 && (
                  <p className="font-mono text-xs mt-2" style={{ color: '#78716C' }}>
                    Image {currentImageIndex + 1} of {selectedAward.images.length}
                  </p>
                )}
              </div>

              {/* Image Container */}
              <div
                className="relative w-full bg-[#18181B] border-[3px] overflow-hidden"
                style={{ borderColor: style.borderColor }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Previous */}
                {selectedAward.images.length > 1 && currentImageIndex > 0 && (
                  <button
                    onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(prev => prev - 1); }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-3 bg-[#27272A] border-[3px] border-[#3F3F46] text-white hover:text-lime transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                )}

                {/* Image */}
                <Image
                  src={selectedAward.images[currentImageIndex]}
                  alt={`${selectedAward.title} - Image ${currentImageIndex + 1}`}
                  width={1200}
                  height={800}
                  className="w-full h-auto max-h-[65vh] object-contain"
                  priority
                />

                {/* Next */}
                {selectedAward.images.length > 1 && currentImageIndex < selectedAward.images.length - 1 && (
                  <button
                    onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(prev => prev + 1); }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-3 bg-[#27272A] border-[3px] border-[#3F3F46] text-white hover:text-lime transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                )}

                {/* Indicators */}
                {selectedAward.images.length > 1 && (
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                    {selectedAward.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(index); }}
                        className={`w-2 h-2 transition-all ${
                          index === currentImageIndex ? 'w-6' : ''
                        }`}
                        style={{ background: index === currentImageIndex ? style.borderColor : '#78716C' }}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="mt-4 p-4 bg-[#27272A] border-[3px]" style={{ borderColor: style.borderColor }}>
                <p className="text-sm text-center" style={{ color: '#A8A29E' }}>{selectedAward.description}</p>
              </div>
            </div>
          </div>
        );
      })()}

      <Footer />
    </div>
  );
}
