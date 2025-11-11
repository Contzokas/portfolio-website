'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import profilePhoto from "./photos/IMG_1561.jpg";

export default function Home() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/Contzokas')
      .then(res => res.json())
      .then(data => {
        setProfile(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching profile:', err);
        setLoading(false);
      });
  }, []);

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
        <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: '2s' }}></div>
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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20 pt-32">
        <div className="relative max-w-5xl mx-auto text-center z-10">
          <div className="mb-8 inline-block relative">
            {/* Tech grid background */}
            <div className="absolute inset-0 w-40 h-40 mx-auto">
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-2xl animate-pulse"></div>
              <div 
                className="absolute inset-0 rounded-full"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px',
                  maskImage: 'radial-gradient(circle, white 60%, transparent 100%)',
                  WebkitMaskImage: 'radial-gradient(circle, white 60%, transparent 100%)'
                }}
              ></div>
            </div>
            <div className="relative w-40 h-40 mx-auto rounded-full bg-linear-to-br from-blue-500 to-purple-600 p-1 animate-fade-in">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-zinc-900 dark:bg-zinc-950">
                {/* Animated tech lines */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-1/4 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500 to-transparent animate-pulse"></div>
                  <div className="absolute top-1/2 left-0 right-0 h-px bg-linear-to-r from-transparent via-purple-500 to-transparent animate-pulse delay-500"></div>
                  <div className="absolute top-3/4 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-500 to-transparent animate-pulse delay-1000"></div>
                </div>
                <Image
                  src={profilePhoto}
                  alt="Constantinos Tzokas"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover relative z-10"
                  priority
                />
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-zinc-50 animate-slide-up">
            Constantinos <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500">Tzokas</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-300 mb-12 max-w-2xl mx-auto animate-slide-up delay-200">
            Software Developer · Problem Solver · Technology Enthusiast
          </p>
          
          <div className="flex gap-4 justify-center items-center flex-wrap animate-slide-up delay-400">
            <a
              href="https://github.com/Contzokas"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-8 py-4 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 rounded-full font-semibold hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View GitHub
            </a>
            
            <Link
              href="/projects"
              className="px-8 py-4 border-2 border-zinc-900 dark:border-zinc-50 text-zinc-900 dark:text-zinc-50 rounded-full font-semibold hover:bg-zinc-900 hover:text-zinc-50 dark:hover:bg-zinc-50 dark:hover:text-zinc-900 transition-all duration-300"
            >
              Explore Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Spotify Now Playing Section */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
            <h2 className="text-2xl font-bold text-zinc-50">
              Currently Listening
            </h2>
          </div>
          
          {/* Spotify Embed - Replace 'your-spotify-uri' with your actual Spotify profile URI or playlist */}
          <div className="relative group">
            <div className="absolute inset-0 bg-linear-to-r from-green-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
            <div className="relative bg-zinc-900/80 backdrop-blur-sm rounded-2xl border border-zinc-800 overflow-hidden hover:border-green-500/50 transition-all">
              <iframe
                style={{ borderRadius: '12px' }}
                src="https://6klabs.com/widget/spotify/a5923e2ae88c42a5c07ace04839f13cb4fa74e95eba1ba9bec34723bf3743ff2"
                width="100%"
                height="152"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-zinc-900/50 backdrop-blur-sm border-y border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-zinc-50">
            About Me
          </h2>
          <p className="text-lg text-zinc-300 text-center leading-relaxed mb-8">
            I&apos;m a software developer based in Greece with a passion for creating innovative solutions. 
            My work spans across various technologies including Python, JavaScript, Java, and more. 
            I enjoy tackling complex problems and building projects that make a difference.
          </p>
          <div className="flex justify-center gap-6 text-zinc-300">
            <div className="text-center">
              <div className="text-3xl font-bold text-zinc-50">{profile?.public_repos || 0}</div>
              <div className="text-sm">Public Repos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zinc-50">{profile?.followers || 0}</div>
              <div className="text-sm">Followers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zinc-50">{profile?.following || 0}</div>
              <div className="text-sm">Following</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-zinc-50">
            Featured Project
          </h2>
          <p className="text-center text-zinc-400 mb-12 text-lg">
            Check out my latest web application
          </p>
          
          <a
            href="https://5tackd.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-8 bg-linear-to-br from-zinc-900 to-zinc-950 rounded-2xl border-2 border-zinc-800 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105 animate-fade-in-up"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-linear-to-br from-blue-500 to-purple-600">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-zinc-50 group-hover:text-blue-400 transition-colors mb-1">
                    Stackd
                  </h3>
                  <p className="text-sm text-zinc-500">5tackd.vercel.app</p>
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800 border border-zinc-700 group-hover:border-blue-500 group-hover:bg-blue-500/10 transition-all">
                <span className="text-sm text-zinc-400 group-hover:text-blue-400 font-medium">Visit Site</span>
                <svg className="w-5 h-5 text-zinc-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </div>
            
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              A modern, offline-first task management application with free-form drag-and-drop columns and cards. Built with Next.js, Clerk authentication, and Supabase for real-time collaboration. Features include cloud storage, PWA support, role-based permissions, analytics dashboard, and automatic synchronization.
            </p>
            
            <div className="flex items-center gap-3 flex-wrap">
              <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
                JavaScript
              </span>
              <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium">
                Web App
              </span>
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium">
                Live Demo
              </span>
            </div>
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
      </div>
    </div>
  );
}
