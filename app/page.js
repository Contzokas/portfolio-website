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
    const headers = {
      'Accept': 'application/vnd.github.v3+json'
    };
    
    if (process.env.NEXT_PUBLIC_GITHUB_TOKEN) {
      headers['Authorization'] = `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`;
    }

    fetch('https://api.github.com/users/Contzokas', { headers })
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

      {/* Skills Section */}
      <section className="py-20 px-6 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-50">
              Skills & Technologies
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              A comprehensive overview of the tools and technologies I use to build amazing projects
            </p>
          </div>

          {/* Programming Languages */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-linear-to-r from-blue-500 to-purple-500 rounded"></div>
              <h3 className="text-2xl md:text-3xl font-bold text-zinc-50">Programming Languages</h3>
              <div className="h-1 flex-1 bg-linear-to-r from-purple-500 to-transparent rounded"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Python */}
              <div className="group p-6 bg-zinc-900/80 backdrop-blur-sm rounded-2xl border border-zinc-800 hover:border-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-400/20">
                <div className="flex flex-col items-center gap-3">
                  <div className="p-3 rounded-xl bg-blue-400/10 group-hover:bg-blue-400/20 transition-all">
                    <svg className="w-10 h-10 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-50">Python</h3>
                  <p className="text-xs text-zinc-400 text-center">Backend & Scripts</p>
                </div>
              </div>

              {/* JavaScript */}
              <div className="group p-6 bg-zinc-900/80 backdrop-blur-sm rounded-2xl border border-zinc-800 hover:border-yellow-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/20">
                <div className="flex flex-col items-center gap-3">
                  <div className="p-3 rounded-xl bg-yellow-500/10 group-hover:bg-yellow-500/20 transition-all">
                    <svg className="w-10 h-10 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-50">JavaScript</h3>
                  <p className="text-xs text-zinc-400 text-center">Full Stack</p>
                </div>
              </div>

              {/* Java */}
              <div className="group p-6 bg-zinc-900/80 backdrop-blur-sm rounded-2xl border border-zinc-800 hover:border-red-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-500/20">
                <div className="flex flex-col items-center gap-3">
                  <div className="p-3 rounded-xl bg-red-500/10 group-hover:bg-red-500/20 transition-all">
                    <svg className="w-10 h-10 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-50">Java</h3>
                  <p className="text-xs text-zinc-400 text-center">OOP & Backend</p>
                </div>
              </div>

              {/* C */}
              <div className="group p-6 bg-zinc-900/80 backdrop-blur-sm rounded-2xl border border-zinc-800 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
                <div className="flex flex-col items-center gap-3">
                  <div className="p-3 rounded-xl bg-purple-500/10 group-hover:bg-purple-500/20 transition-all flex items-center justify-center">
                    <span className="text-4xl font-bold text-purple-500">C</span>
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-50">C</h3>
                  <p className="text-xs text-zinc-400 text-center">System Programming</p>
                </div>
              </div>

              {/* PHP */}
              <div className="group p-6 bg-zinc-900/80 backdrop-blur-sm rounded-2xl border border-zinc-800 hover:border-indigo-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/20">
                <div className="flex flex-col items-center gap-3">
                  <div className="p-3 rounded-xl bg-indigo-500/10 group-hover:bg-indigo-500/20 transition-all">
                    <svg className="w-10 h-10 text-indigo-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zm-2.595-1.382h-.943l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995s-.523-.29-1.048-.29z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-50">PHP</h3>
                  <p className="text-xs text-zinc-400 text-center">Server Side</p>
                </div>
              </div>
            </div>
          </div>

          {/* Frontend & Frameworks */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-linear-to-r from-cyan-500 to-blue-500 rounded"></div>
              <h3 className="text-2xl md:text-3xl font-bold text-zinc-50">Frontend & Frameworks</h3>
              <div className="h-1 flex-1 bg-linear-to-r from-blue-500 to-transparent rounded"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* React */}
              <div className="group p-6 bg-zinc-900/80 backdrop-blur-sm rounded-2xl border border-zinc-800 hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">
                <div className="flex flex-col items-center gap-3">
                  <div className="p-3 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-all">
                    <svg className="w-10 h-10 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-50">React</h3>
                  <p className="text-xs text-zinc-400 text-center">UI Library</p>
                </div>
              </div>

              {/* Next.js */}
              <div className="group p-6 bg-zinc-900/80 backdrop-blur-sm rounded-2xl border border-zinc-800 hover:border-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-white/20">
                <div className="flex flex-col items-center gap-3">
                  <div className="p-3 rounded-xl bg-zinc-700 group-hover:bg-zinc-600 transition-all">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-50">Next.js</h3>
                  <p className="text-xs text-zinc-400 text-center">React Framework</p>
                </div>
              </div>

              {/* HTML */}
              <div className="group p-6 bg-zinc-900/80 backdrop-blur-sm rounded-2xl border border-zinc-800 hover:border-orange-600 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-600/20">
                <div className="flex flex-col items-center gap-3">
                  <div className="p-3 rounded-xl bg-orange-600/10 group-hover:bg-orange-600/20 transition-all">
                    <svg className="w-10 h-10 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-50">HTML5</h3>
                  <p className="text-xs text-zinc-400 text-center">Markup</p>
                </div>
              </div>

              {/* CSS */}
              <div className="group p-6 bg-zinc-900/80 backdrop-blur-sm rounded-2xl border border-zinc-800 hover:border-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-600/20">
                <div className="flex flex-col items-center gap-3">
                  <div className="p-3 rounded-xl bg-blue-600/10 group-hover:bg-blue-600/20 transition-all">
                    <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-50">CSS3</h3>
                  <p className="text-xs text-zinc-400 text-center">Styling</p>
                </div>
              </div>

              {/* Tailwind CSS */}
              <div className="group p-6 bg-zinc-900/80 backdrop-blur-sm rounded-2xl border border-zinc-800 hover:border-cyan-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20">
                <div className="flex flex-col items-center gap-3">
                  <div className="p-3 rounded-xl bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-all">
                    <svg className="w-10 h-10 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-50">Tailwind</h3>
                  <p className="text-xs text-zinc-400 text-center">CSS Framework</p>
                </div>
              </div>

              {/* WordPress */}
              <div className="group p-6 bg-zinc-900/80 backdrop-blur-sm rounded-2xl border border-zinc-800 hover:border-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-700/20">
                <div className="flex flex-col items-center gap-3">
                  <div className="p-3 rounded-xl bg-blue-700/10 group-hover:bg-blue-700/20 transition-all">
                    <svg className="w-10 h-10 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.607-3.582.607M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-50">WordPress</h3>
                  <p className="text-xs text-zinc-400 text-center">CMS Platform</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tools & Version Control */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-linear-to-r from-green-500 to-orange-500 rounded"></div>
              <h3 className="text-2xl md:text-3xl font-bold text-zinc-50">Tools & Runtime</h3>
              <div className="h-1 flex-1 bg-linear-to-r from-orange-500 to-transparent rounded"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {/* Git */}
              <div className="group p-6 bg-zinc-900/80 backdrop-blur-sm rounded-2xl border border-zinc-800 hover:border-orange-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20">
                <div className="flex flex-col items-center gap-3">
                  <div className="p-3 rounded-xl bg-orange-500/10 group-hover:bg-orange-500/20 transition-all">
                    <svg className="w-10 h-10 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-50">Git</h3>
                  <p className="text-xs text-zinc-400 text-center">Version Control</p>
                </div>
              </div>

              {/* Node.js */}
              <div className="group p-6 bg-zinc-900/80 backdrop-blur-sm rounded-2xl border border-zinc-800 hover:border-green-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/20">
                <div className="flex flex-col items-center gap-3">
                  <div className="p-3 rounded-xl bg-green-500/10 group-hover:bg-green-500/20 transition-all">
                    <svg className="w-10 h-10 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57.329.924.944.924 1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-50">Node.js</h3>
                  <p className="text-xs text-zinc-400 text-center">JavaScript Runtime</p>
                </div>
              </div>
            </div>
          </div>

          {/* Operating Systems */}
          <div className="mt-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-linear-to-r from-sky-500 to-indigo-500 rounded"></div>
              <h3 className="text-2xl md:text-3xl font-bold text-zinc-50">Operating Systems</h3>
              <div className="h-1 flex-1 bg-linear-to-r from-indigo-500 to-transparent rounded"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {/* Windows */}
              <div className="group p-6 bg-zinc-900/80 backdrop-blur-sm rounded-2xl border border-zinc-800 hover:border-sky-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-sky-500/20">
                <div className="flex flex-col items-center gap-3">
                  <div className="p-3 rounded-xl bg-sky-500/10 group-hover:bg-sky-500/20 transition-all">
                    <svg className="w-10 h-10 text-sky-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-50">Windows</h3>
                  <p className="text-xs text-zinc-400 text-center">Desktop & Dev</p>
                </div>
              </div>

              {/* Ubuntu */}
              <div className="group p-6 bg-zinc-900/80 backdrop-blur-sm rounded-2xl border border-zinc-800 hover:border-orange-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20">
                <div className="flex flex-col items-center gap-3">
                  <div className="p-3 rounded-xl bg-orange-500/10 group-hover:bg-orange-500/20 transition-all">
                    <img 
                      src="/ubuntu.png" 
                      alt="Ubuntu Logo" 
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-50">Ubuntu</h3>
                  <p className="text-xs text-zinc-400 text-center">Linux Server</p>
                </div>
              </div>

              {/* Arch Linux */}
              <div className="group p-6 bg-zinc-900/80 backdrop-blur-sm rounded-2xl border border-zinc-800 hover:border-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-400/20">
                <div className="flex flex-col items-center gap-3">
                  <div className="p-3 rounded-xl bg-blue-400/10 group-hover:bg-blue-400/20 transition-all">
                    <img 
                      src="/arch.png" 
                      alt="Arch Linux Logo" 
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-50">Arch Linux</h3>
                  <p className="text-xs text-zinc-400 text-center">Advanced Linux</p>
                </div>
              </div>
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
            href="https://stackd.contzokas.xyz"
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
                  <p className="text-sm text-zinc-500">stackd.contzokas.xyz</p>
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
