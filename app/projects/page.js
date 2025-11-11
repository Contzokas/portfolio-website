'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function ProjectsPage() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // GitHub API headers with token
    const getHeaders = () => {
      const headers = {
        'Accept': 'application/vnd.github.v3+json'
      };
      
      if (process.env.NEXT_PUBLIC_GITHUB_TOKEN) {
        headers['Authorization'] = `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`;
      }
      
      return headers;
    };

    // Helper function to extract description from README
    const extractDescriptionFromReadme = (readmeContent) => {
      if (!readmeContent) return null;
      
      // Decode base64 content with proper UTF-8 support for Greek and other characters
      const decoded = decodeURIComponent(escape(atob(readmeContent)));
      
      // Remove title (first # heading)
      let content = decoded.replace(/^#\s+.+$/m, '').trim();
      
      // Remove HTML tags
      content = content.replace(/<[^>]*>/g, '');
      
      // Remove HTML entities and decode them
      content = content
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&[a-z]+;/g, '');
      
      // Get first paragraph or first few lines
      const lines = content.split('\n').filter(line => {
        const trimmed = line.trim();
        return trimmed && 
               !trimmed.startsWith('#') && 
               !trimmed.startsWith('!') && // Remove image tags
               !trimmed.startsWith('[') && // Remove badge lines
               trimmed.length > 10; // Skip very short lines
      });
      
      const firstParagraph = lines.slice(0, 3).join(' ').trim();
      
      // Clean up markdown syntax while preserving Greek and special characters
      let description = firstParagraph
        .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1') // Remove markdown links
        .replace(/[*_`~]/g, '') // Remove markdown formatting
        .replace(/#{1,6}\s/g, '') // Remove heading markers
        .replace(/!\[.*?\]\(.*?\)/g, '') // Remove images
        .replace(/\s+/g, ' ') // Normalize whitespace
        .trim();
      
      // Limit to reasonable length (considering Greek characters take same space)
      if (description.length > 250) {
        // Find last complete word before 250 chars
        description = description.substring(0, 250);
        const lastSpace = description.lastIndexOf(' ');
        if (lastSpace > 200) {
          description = description.substring(0, lastSpace);
        }
        description += '...';
      }
      
      return description || null;
    };

    // Fetch README for a specific repo
    const fetchReadme = async (owner, repoName) => {
      try {
        const response = await fetch(`https://api.github.com/repos/${owner}/${repoName}/readme`, {
          headers: getHeaders()
        });
        if (response.ok) {
          const data = await response.json();
          return extractDescriptionFromReadme(data.content);
        }
      } catch (err) {
        console.error(`Error fetching README for ${repoName}:`, err);
      }
      return null;
    };

    const fetchReposWithReadmes = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Contzokas/repos?sort=updated&per_page=100', {
          headers: getHeaders()
        });
        
        // Check if response is ok
        if (!response.ok) {
          const errorMsg = `GitHub API error: ${response.status} ${response.statusText}`;
          setError(errorMsg);
          throw new Error(errorMsg);
        }
        
        const data = await response.json();
        
        // Check if we got an error message from GitHub
        if (data.message) {
          console.error('GitHub API message:', data.message);
          if (data.message.includes('rate limit')) {
            setError('GitHub API rate limit exceeded. Please try again later.');
            console.error('Rate limit exceeded. Try again later or add a GitHub token.');
          } else {
            setError(data.message);
          }
        }
        
        // Check if data is an array
        if (!Array.isArray(data)) {
          console.error('Unexpected API response:', data);
          setError('Unexpected response from GitHub API');
          setLoading(false);
          return;
        }
        
        // Filter out forks and sort by stars/updated date
        const filteredRepos = data
          .filter(repo => !repo.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.updated_at) - new Date(a.updated_at));
        
        console.log(`Found ${filteredRepos.length} repositories`);
        
        // Fetch README for each repo
        const reposWithReadmes = await Promise.all(
          filteredRepos.map(async (repo) => {
            const readmeDescription = await fetchReadme('Contzokas', repo.name);
            return {
              ...repo,
              readmeDescription
            };
          })
        );
        
        setRepos(reposWithReadmes);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching repos:', err);
        setError(err.message || 'Failed to fetch repositories');
        setLoading(false);
      }
    };

    fetchReposWithReadmes();
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-black">
      {/* Navigation */}
      <Navigation />

      {/* Projects Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-zinc-900 dark:text-zinc-50">
              My <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">Projects</span>
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              A collection of my work and open-source contributions
            </p>
          </div>
          
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="w-16 h-16 border-4 border-zinc-300 dark:border-zinc-700 border-t-blue-600 rounded-full animate-spin"></div>
            </div>
          ) : error ? (
            <div className="max-w-2xl mx-auto">
              <div className="p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-100 dark:bg-red-900/40 rounded-lg">
                    <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">Unable to Load Projects</h3>
                    <p className="text-red-700 dark:text-red-300 mb-4">{error}</p>
                    <button
                      onClick={() => window.location.reload()}
                      className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                    >
                      Try Again
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">You can also view my projects directly on GitHub:</p>
                <a
                  href="https://github.com/Contzokas?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 rounded-full font-semibold hover:scale-105 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View on GitHub
                </a>
              </div>
            </div>
          ) : repos.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-zinc-600 dark:text-zinc-400">No repositories found</p>
            </div>
          ) : (
            <>
              <div className="flex justify-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-900 rounded-full border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-600 dark:text-zinc-400">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 1 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 0 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 0 1 1-1h8zM5 12.25v3.25a.25.25 0 0 0 .4.2l1.45-1.087a.25.25 0 0 1 .3 0L8.6 15.7a.25.25 0 0 0 .4-.2v-3.25a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25z"/>
                  </svg>
                  {repos.length} {repos.length === 1 ? 'project' : 'projects'}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {repos.map((repo, index) => (
                  <a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:scale-105 animate-fade-in-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-2 flex-1 min-w-0">
                        <svg className="w-5 h-5 text-zinc-400 shrink-0" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 1 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 0 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 0 1 1-1h8zM5 12.25v3.25a.25.25 0 0 0 .4.2l1.45-1.087a.25.25 0 0 1 .3 0L8.6 15.7a.25.25 0 0 0 .4-.2v-3.25a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25z"/>
                        </svg>
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                          {repo.name}
                        </h3>
                      </div>
                      <svg className="w-5 h-5 text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                    
                    <p className="text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-3 min-h-16">
                      {repo.readmeDescription || repo.description || 'No description available'}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-500 flex-wrap">
                      {repo.language && (
                        <div className="flex items-center gap-1">
                          <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                          <span>{repo.language}</span>
                        </div>
                      )}
                      {repo.stargazers_count > 0 && (
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                          <span>{repo.stargazers_count}</span>
                        </div>
                      )}
                      {repo.forks_count > 0 && (
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M5 3.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm0 2.122a2.25 2.25 0 1 0-1.5 0v.878A2.25 2.25 0 0 0 5.75 8.5h1.5v2.128a2.251 2.251 0 1 0 1.5 0V8.5h1.5a2.25 2.25 0 0 0 2.25-2.25v-.878a2.25 2.25 0 1 0-1.5 0v.878a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 5 6.25v-.878zm3.75 7.378a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm3-8.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z"/>
                          </svg>
                          <span>{repo.forks_count}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                      <div className="text-xs text-zinc-500 dark:text-zinc-500">
                        Updated {new Date(repo.updated_at).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
