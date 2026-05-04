'use client';

import { useState, useEffect } from 'react';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const langColors = {
  Python: '#3572A5',
  JavaScript: '#F7DF1E',
  Java: '#B07219',
  'C++': '#F34B7D',
  C: '#555555',
  PHP: '#4F5D95',
  TypeScript: '#3178C6',
  HTML: '#E34C26',
  CSS: '#563D7C',
  Shell: '#89E051',
  Dart: '#00B4AB',
  Rust: '#DEA584',
  Go: '#00ADD8',
  Swift: '#F05138',
  Kotlin: '#A97BFF',
  Lua: '#000080',
  Ruby: '#701516',
  Jupyter: '#DA5B0B',
};

export default function ProjectsPage() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getHeaders = () => {
      const headers = { 'Accept': 'application/vnd.github.v3+json' };
      if (process.env.NEXT_PUBLIC_GITHUB_TOKEN) {
        headers['Authorization'] = `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`;
      }
      return headers;
    };

    const extractDescriptionFromReadme = (readmeContent) => {
      if (!readmeContent) return null;
      const decoded = decodeURIComponent(escape(atob(readmeContent)));
      let content = decoded.replace(/^#\s+.+$/m, '').trim();
      content = content.replace(/<[^>]*>/g, '');
      content = content
        .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'")
        .replace(/&[a-z]+;/g, '');
      const lines = content.split('\n').filter(line => {
        const trimmed = line.trim();
        return trimmed && !trimmed.startsWith('#') && !trimmed.startsWith('!')
          && !trimmed.startsWith('[') && trimmed.length > 10;
      });
      const firstParagraph = lines.slice(0, 3).join(' ').trim();
      let description = firstParagraph
        .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1').replace(/[*_`~]/g, '')
        .replace(/#{1,6}\s/g, '').replace(/!\[.*?\]\(.*?\)/g, '')
        .replace(/\s+/g, ' ').trim();
      if (description.length > 250) {
        description = description.substring(0, 250);
        const lastSpace = description.lastIndexOf(' ');
        if (lastSpace > 200) description = description.substring(0, lastSpace);
        description += '...';
      }
      return description || null;
    };

    const fetchReadme = async (owner, repoName) => {
      try {
        const response = await fetch(`https://api.github.com/repos/${owner}/${repoName}/readme`, { headers: getHeaders() });
        if (response.ok) {
          const data = await response.json();
          return extractDescriptionFromReadme(data.content);
        }
      } catch { /* skip */ }
      return null;
    };

    const fetchReposWithReadmes = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Contzokas/repos?sort=updated&per_page=100', { headers: getHeaders() });
        if (!response.ok) {
          setError(`GitHub API error: ${response.status}`);
          return;
        }
        const data = await response.json();
        if (!Array.isArray(data)) {
          setError('Unexpected response from GitHub API');
          setLoading(false);
          return;
        }
        const filteredRepos = data
          .filter(repo => !repo.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.updated_at) - new Date(a.updated_at));

        const reposWithReadmes = await Promise.all(
          filteredRepos.map(async (repo) => ({
            ...repo,
            readmeDescription: await fetchReadme('Contzokas', repo.name),
          }))
        );
        setRepos(reposWithReadmes);
      } catch (err) {
        setError(err.message || 'Failed to fetch repositories');
      }
      setLoading(false);
    };

    fetchReposWithReadmes();
  }, []);

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <Navigation />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-4" style={{ color: 'var(--fg)' }}>
              Projects
            </h1>
            <p className="font-mono text-lg" style={{ color: 'var(--muted)' }}>
              Open-source work & side projects
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="w-10 h-10 border-[3px] border-[var(--border)] border-t-lime animate-spin"></div>
            </div>
          ) : error ? (
            <div className="max-w-2xl mx-auto">
              <div className="neo-card p-6 border-coral">
                <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--fg)' }}>Failed to load projects</h3>
                <p className="font-mono text-sm mb-4" style={{ color: 'var(--muted)' }}>{error}</p>
                <button onClick={() => window.location.reload()} className="neo-btn px-4 py-2 bg-coral text-white font-mono text-sm">
                  Retry
                </button>
              </div>
              <div className="mt-6 text-center">
                <a
                  href="https://github.com/Contzokas?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-btn inline-flex items-center gap-2 px-6 py-3 bg-[var(--fg)] text-lime font-mono text-sm uppercase"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ) : (
            <>
              <div className="flex justify-center mb-8">
                <span className="font-mono text-sm uppercase tracking-wider px-4 py-2 neo-btn bg-transparent" style={{ color: 'var(--muted)' }}>
                  {repos.length} {repos.length === 1 ? 'project' : 'projects'}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {repos.map((repo, index) => (
                  <a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neo-card p-6 block animate-pop-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-bold truncate pr-2 group-hover:text-lime transition-colors" style={{ color: 'var(--fg)' }}>
                        {repo.name}
                      </h3>
                      <svg className="w-5 h-5 shrink-0" style={{ color: 'var(--muted)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>

                    <p className="text-sm mb-4 line-clamp-3 min-h-[3rem]" style={{ color: 'var(--muted)' }}>
                      {repo.readmeDescription || repo.description || 'No description available'}
                    </p>

                    <div className="flex items-center gap-4 text-xs font-mono" style={{ color: 'var(--muted)' }}>
                      {repo.language && (
                        <div className="flex items-center gap-1">
                          <span
                            className="w-3 h-3 rounded-sm inline-block"
                            style={{ background: langColors[repo.language] || '#AAFF00' }}
                          ></span>
                          <span>{repo.language}</span>
                        </div>
                      )}
                      {repo.stargazers_count > 0 && (
                        <span>{repo.stargazers_count} stars</span>
                      )}
                      {repo.forks_count > 0 && (
                        <span>{repo.forks_count} forks</span>
                      )}
                    </div>

                    <div className="mt-4 pt-4 border-t-2 border-[var(--border)]">
                      <span className="font-mono text-xs" style={{ color: 'var(--muted)' }}>
                        Updated {new Date(repo.updated_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
