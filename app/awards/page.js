'use client';

import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function AwardsPage() {
  const [selectedAward, setSelectedAward] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Function to detect award place and return appropriate colors
  const getAwardColors = (title) => {
    const lowerTitle = title.toLowerCase();
    
    // Gold/1st Place
    if (lowerTitle.includes('1st') || lowerTitle.includes('first') || lowerTitle.includes('gold')) {
      return {
        gradient: 'from-yellow-500 to-orange-500',
        shadow: 'shadow-yellow-500/50',
        border: 'border-yellow-500/50',
        hover: 'hover:border-yellow-500',
        text: 'text-yellow-400',
        glow: 'shadow-yellow-500/10'
      };
    }
    // Silver/2nd Place
    else if (lowerTitle.includes('2nd') || lowerTitle.includes('second') || lowerTitle.includes('silver')) {
      return {
        gradient: 'from-gray-400 to-gray-500',
        shadow: 'shadow-gray-400/50',
        border: 'border-gray-400/50',
        hover: 'hover:border-gray-400',
        text: 'text-gray-300',
        glow: 'shadow-gray-400/10'
      };
    }
    // Bronze/3rd Place
    else if (lowerTitle.includes('3rd') || lowerTitle.includes('third') || lowerTitle.includes('bronze')) {
      return {
        gradient: 'from-orange-600 to-amber-700',
        shadow: 'shadow-orange-600/50',
        border: 'border-orange-600/50',
        hover: 'hover:border-orange-600',
        text: 'text-orange-500',
        glow: 'shadow-orange-600/10'
      };
    }
    // Default (any other award)
    else {
      return {
        gradient: 'from-yellow-500 to-orange-500',
        shadow: 'shadow-yellow-500/50',
        border: 'border-yellow-500/50',
        hover: 'hover:border-yellow-500',
        text: 'text-yellow-400',
        glow: 'shadow-yellow-500/10'
      };
    }
  };
  
  // Awards from LinkedIn
  const awards = [
    {
      id: 1,
      title: "3rd – RoboRAVE International Finals 2025",
      issuer: "RoboRAVE International (Robotics Education and Competition)",
      date: "August 2025",
      description: "Awarded Bronze medal at the RoboRAVE International Finals 2025, competing against teams from around the world in robotics challenges.",
      images: ["/awards/1758033648347.jpg"] // Add your award image here
    },
    {
      id: 2,
      title: "1st Place Award – Collabrew",
      issuer: "University of Thessaly / One Planet Thessaly",
      date: "June 2025",
      description: "Awarded 1st place for presenting the innovative business idea 'Collabrew' during the Innovation & Entrepreneurship Day held on June 5, 2025. The award was granted following evaluation by a committee of academic and institutional representatives.",
      images: ["/awards/Screenshot_1.jpg", "/awards/IMG_3291.jpg"]
    },
    {
      id: 3,
      title: "1st Place – Mouse Labyrinth (Upper / Professional)",
      issuer: "RoboRAVE Greece",
      date: "April 2025",
      description: "Won 1st place in the 'Mouse Labyrinth – Upper / Professional' category at the 1st Panhellenic RoboRAVE Greece competition, organized by STEM Robotics Academy in cooperation with the Municipality of Larissa.",
      images: ["/awards/1749135875952.jpg"]
    },
  ];

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
        <div className="absolute w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Scanlines effect */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, rgba(59, 130, 246, 0.1) 0px, transparent 1px, transparent 2px, rgba(59, 130, 246, 0.1) 3px)',
        }}
      ></div>

      {/* Content wrapper */}
      <div className="relative z-10">
        {/* Navigation */}
        <Navigation />

        {/* Awards Section */}
        <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-flex items-center justify-center p-3 md:p-4 rounded-2xl bg-linear-to-br from-yellow-500/20 to-orange-500/20 mb-4 md:mb-6">
                <svg className="w-12 h-12 md:w-16 md:h-16 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-3 md:mb-4 text-zinc-50 animate-slide-up px-4">
                Awards & <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-orange-500">Honors</span>
              </h1>
              <p className="text-lg md:text-xl text-zinc-400 animate-slide-up delay-200 px-4">
                Recognition and achievements throughout my career
              </p>
            </div>

            {/* Awards List */}
            <div className="space-y-4 md:space-y-6">
              {awards.map((award, index) => {
                const colors = getAwardColors(award.title);
                
                return (
                  <div
                    key={award.id}
                    onClick={() => {
                      if (award.images && award.images.length > 0) {
                        setSelectedAward(award);
                        setCurrentImageIndex(0);
                      }
                    }}
                    className={`group relative p-4 md:p-8 bg-zinc-900/50 backdrop-blur-sm rounded-2xl border ${colors.border} ${colors.hover} transition-all duration-300 hover:shadow-2xl ${colors.shadow} animate-fade-in-up cursor-pointer`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Award Icon */}
                    <div className={`absolute -left-3 md:-left-4 top-6 md:top-8 w-10 h-10 md:w-12 md:h-12 bg-linear-to-br ${colors.gradient} rounded-full flex items-center justify-center shadow-lg ${colors.glow} group-hover:scale-110 transition-transform`}>
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    </div>

                    <div className="ml-8 md:ml-12">
                      {/* Award Title */}
                      <h3 className={`text-lg md:text-2xl font-bold text-zinc-50 mb-2 group-hover:${colors.text} transition-colors`}>
                        {award.title}
                      </h3>

                    {/* Issuer and Date */}
                    <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-4 mb-3 md:mb-4">
                      <div className="flex items-center gap-2 text-zinc-400 text-sm md:text-base">
                        <svg className="w-4 h-4 md:w-5 md:h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <span className="font-medium">{award.issuer}</span>
                      </div>
                      <div className="flex items-center gap-2 text-zinc-500 text-sm md:text-base">
                        <svg className="w-4 h-4 md:w-5 md:h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{award.date}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
                      {award.description}
                    </p>
                  </div>

                  {/* Decorative corner accent */}
                  <div className={`absolute top-3 right-3 md:top-4 md:right-4 w-12 h-12 md:w-16 md:h-16 border-t-2 border-r-2 ${colors.border} group-hover:${colors.hover.replace('hover:', '')} transition-colors rounded-tr-2xl`}></div>
                </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Image Modal */}
        {selectedAward && (() => {
          const colors = getAwardColors(selectedAward.title);
          
          return (
            <div 
              className="fixed inset-0 z-100 flex items-center justify-center p-2 md:p-4 bg-black/90 backdrop-blur-sm animate-fade-in"
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
                  className={`absolute -top-10 md:-top-12 right-0 text-white hover:${colors.text} transition-colors z-50`}
                >
                  <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Award Title */}
                <div className="text-center mb-2 md:mb-4">
                  <h3 className={`text-lg md:text-2xl font-bold ${colors.text} mb-1 md:mb-2 px-2`}>{selectedAward.title}</h3>
                  <p className="text-sm md:text-base text-zinc-400 px-2">{selectedAward.issuer} • {selectedAward.date}</p>
                  {selectedAward.images.length > 1 && (
                    <p className="text-zinc-500 text-xs md:text-sm mt-1 md:mt-2">
                      Image {currentImageIndex + 1} of {selectedAward.images.length}
                    </p>
                  )}
                </div>

                {/* Image Container with Navigation */}
                <div 
                  className={`relative w-full bg-zinc-900 rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border ${colors.border}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Previous Button */}
                  {selectedAward.images.length > 1 && currentImageIndex > 0 && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(prev => prev - 1);
                      }}
                      className={`absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 bg-black/60 hover:bg-black/80 rounded-full text-white hover:${colors.text} transition-all`}
                    >
                      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    className="w-full h-auto max-h-[60vh] md:max-h-[70vh] object-contain"
                    priority
                  />

                  {/* Next Button */}
                  {selectedAward.images.length > 1 && currentImageIndex < selectedAward.images.length - 1 && (
                    <button
                      onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(prev => prev + 1);
                    }}
                    className={`absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 bg-black/60 hover:bg-black/80 rounded-full text-white hover:${colors.text} transition-all`}
                  >
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                )}

                {/* Image Indicators */}
                {selectedAward.images.length > 1 && (
                  <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2">
                    {selectedAward.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex(index);
                        }}
                        className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all ${
                          index === currentImageIndex 
                            ? `${colors.text.replace('text-', 'bg-')} w-5 md:w-6` 
                            : 'bg-zinc-500 hover:bg-zinc-400'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Description */}
              <div className={`mt-3 md:mt-4 p-3 md:p-4 bg-zinc-900/80 rounded-xl border ${colors.border}`}>
                <p className="text-sm md:text-base text-zinc-300 text-center">{selectedAward.description}</p>
              </div>
            </div>
          </div>
          );
        })()}

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
