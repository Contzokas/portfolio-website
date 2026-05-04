'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import profilePhoto from "./photos/IMG_1561.jpg";

const languageIcons = {
  Python: <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/></svg>,
  JavaScript: <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/></svg>,
  Java: <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639"/></svg>,
};

const skills = [
  { name: "Python", sub: "Backend", color: "bg-blue-100 dark:bg-blue-900/30" },
  { name: "JavaScript", sub: "Full Stack", color: "bg-yellow-100 dark:bg-yellow-900/30" },
  { name: "Java", sub: "OOP", color: "bg-coral/15 dark:bg-coral/10" },
  { name: "C", sub: "Systems", color: "bg-purple-100 dark:bg-purple-900/30" },
  { name: "PHP", sub: "Server", color: "bg-indigo-100 dark:bg-indigo-900/30" },
  { name: "React", sub: "UI", color: "bg-sky-100 dark:bg-sky-900/30" },
  { name: "Next.js", sub: "Framework", color: "bg-zinc-200 dark:bg-zinc-700/30" },
  { name: "HTML5", sub: "Markup", color: "bg-orange-100 dark:bg-orange-900/30" },
  { name: "CSS3", sub: "Styling", color: "bg-teal/15 dark:bg-teal/10" },
  { name: "Tailwind", sub: "CSS", color: "bg-teal/15 dark:bg-teal/10" },
  { name: "WordPress", sub: "CMS", color: "bg-blue-100 dark:bg-blue-900/30" },
  { name: "Git", sub: "VCS", color: "bg-orange-100 dark:bg-orange-900/30" },
  { name: "Node.js", sub: "Runtime", color: "bg-green-100 dark:bg-green-900/30" },
  { name: "Windows", sub: "Desktop", color: "bg-sky-100 dark:bg-sky-900/30" },
  { name: "Ubuntu", sub: "Server", color: "bg-orange-100 dark:bg-orange-900/30" },
  { name: "Arch Linux", sub: "Advanced", color: "bg-blue-100 dark:bg-blue-900/30" },
];

export default function Home() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const headers = { 'Accept': 'application/vnd.github.v3+json' };
    if (process.env.NEXT_PUBLIC_GITHUB_TOKEN) {
      headers['Authorization'] = `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`;
    }
    fetch('https://api.github.com/users/Contzokas', { headers })
      .then(res => res.json())
      .then(data => { setProfile(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <Navigation />

      {/* Hero — lime accent block behind */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20 pt-32 overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-20 right-0 w-72 h-72 md:w-96 md:h-96 bg-lime rotate-12 -translate-y-1/3 opacity-80 hidden md:block" />
        <div className="absolute bottom-20 left-0 w-48 h-48 md:w-72 md:h-72 bg-coral rotate-6 translate-y-1/3 opacity-60 hidden md:block" />
        <div className="absolute top-1/3 left-10 w-6 h-6 bg-lime" />
        <div className="absolute bottom-1/2 right-20 w-4 h-4 bg-coral" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8 inline-block animate-pop-in">
            <div className="w-36 h-36 mx-auto rounded-lg border-[3px] border-lime neo-shadow overflow-hidden">
              <Image
                src={profilePhoto}
                alt="Constantinos Tzokas"
                width={160}
                height={160}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-8xl font-bold mb-4 animate-pop-in delay-100" style={{ color: 'var(--fg)' }}>
            Constantinos Tzokas
          </h1>

          <p className="font-mono text-lg md:text-xl mb-12 animate-pop-in delay-200" style={{ color: 'var(--muted)' }}>
            Software Developer &middot; Problem Solver &middot; Greece
          </p>

          <div className="flex gap-4 justify-center items-center flex-wrap animate-pop-in delay-300">
            <a
              href="https://github.com/Contzokas"
              target="_blank"
              rel="noopener noreferrer"
              className="neo-btn px-8 py-4 bg-lime text-zinc-900 font-mono text-sm uppercase"
            >
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </span>
            </a>

            <Link
              href="/projects"
              className="neo-btn px-8 py-4 bg-transparent font-mono text-sm uppercase"
              style={{ color: 'var(--fg)' }}
            >
              Projects
            </Link>
          </div>
        </div>
      </section>

      {/* About — coral accent strip */}
      <section className="py-20 px-6 relative">
        <div className="absolute top-0 left-0 w-full h-2 bg-coral" />
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-3">
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--fg)' }}>
                About
              </h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--muted)' }}>
                Software developer based in Greece. I build things with Python, JavaScript, Java, and more.
                I enjoy tackling complex problems and shipping projects that work.
              </p>
              <a
                href="/cv"
                className="neo-btn inline-flex items-center gap-2 px-6 py-3 bg-coral text-white font-mono text-sm uppercase"
              >
                Download CV
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            <div className="md:col-span-2 flex md:flex-col gap-6">
              {!loading && [
                { value: profile?.public_repos || 0, label: "Repos", accent: "bg-lime" },
                { value: profile?.followers || 0, label: "Followers", accent: "bg-coral/20" },
                { value: profile?.following || 0, label: "Following", accent: "bg-teal/20" },
              ].map(({ value, label, accent }) => (
                <div key={label} className="neo-card p-5 text-center">
                  <div className={`text-4xl font-bold font-mono inline-block px-4 py-1 ${accent} rounded`}>
                    {value}
                  </div>
                  <div className="font-mono text-xs uppercase tracking-wider mt-2" style={{ color: 'var(--muted)' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills — lime bg block */}
      <section className="py-20 px-6 bg-lime relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[var(--bg)] rounded-tl-[100px]" />
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-zinc-900">
            // Skills & Tools
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {skills.map((skill, i) => (
              <div
                key={skill.name}
                className="border-[3px] border-zinc-900 bg-white p-4 transition-transform hover:translate-x-1 cursor-default animate-pop-in"
                style={{
                  boxShadow: '3px 3px 0 #18181B',
                  animationDelay: `${i * 30}ms`,
                  animationFillMode: 'both',
                }}
              >
                <div className={`w-10 h-10 ${skill.color} rounded flex items-center justify-center mb-3 border-[2px] border-zinc-900`}>
                  <span className="text-zinc-700">
                    {languageIcons[skill.name] || <span className="text-lg font-bold text-zinc-900">{skill.name.charAt(0)}</span>}
                  </span>
                </div>
                <h3 className="font-bold text-sm text-zinc-900">{skill.name}</h3>
                <p className="font-mono text-[10px] text-zinc-500">{skill.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project — teal accent */}
      <section className="py-20 px-6 relative">
        <div className="absolute top-0 left-0 w-32 h-32 bg-teal rounded-br-[80px]" />
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="font-mono text-sm uppercase tracking-widest mb-2" style={{ color: 'var(--muted)' }}>
            Featured Project
          </p>
          <a
            href="https://stackd.contzokas.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="neo-card block p-8 group"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-3xl font-bold group-hover:text-teal transition-colors" style={{ color: 'var(--fg)' }}>
                  Stackd
                </h3>
                <p className="font-mono text-sm mt-1" style={{ color: 'var(--muted)' }}>stackd.contzokas.xyz</p>
              </div>
              <div className="px-4 py-2 bg-teal text-white font-mono text-sm uppercase font-bold shrink-0">
                Visit &rarr;
              </div>
            </div>

            <p className="mb-6 leading-relaxed" style={{ color: 'var(--muted)' }}>
              Offline-first task management with drag-and-drop columns and cards.
              Next.js, Clerk auth, Supabase real-time sync, PWA support, and role-based permissions.
            </p>

            <div className="flex gap-2 flex-wrap">
              {["JavaScript", "Web App", "Live Demo"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 font-mono text-xs uppercase bg-teal/10 text-teal border-[2px] border-teal/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
