import React, { useState, useRef, useEffect } from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import { Linkedin, ChevronDown, Github } from 'lucide-react';

const TeamDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const team = [
    { name: 'Shardendu Mishra', url: 'https://www.linkedin.com/in/shardendumishra22/' },
    { name: 'Anas Khan', url: 'https://www.linkedin.com/in/anas-khan83/' },
    { name: 'Mayank', url: 'https://www.linkedin.com/in/mayank8127/' },
    { name: 'Saurav Karki', url: 'https://www.linkedin.com/in/saurav-karki-909687306/' }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Linkedin className="text-blue-600" size={20} />
        <span>Team Members</span>
        <ChevronDown 
          size={16}
          className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 transform origin-top-right transition-all duration-200">
          <div className="py-1">
            {team.map((member) => (
              <a
                key={member.url}
                href={member.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-150"
              >
                <Linkedin className="text-blue-600 flex-shrink-0" size={16} />
                <span className="font-medium">{member.name}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const config: DocsThemeConfig = {
  logo: (
    <div className="flex items-center gap-4">
      <img
        src="/api/placeholder/32/32"
        alt="Team Parshu"
        className="h-8 w-8 rounded-full object-cover ring-2 ring-red-500 ring-offset-2"
      />
      <span className="text-xl font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
        BloodSphere
      </span>
    </div>
  ),
  project: {
    link: 'https://github.com/ParshuVelocity/BloodBank-IIT-Dharwad-Original',
    icon: (
      <div className="flex items-center gap-2">
        <Github size={20} />
        <span className="hidden sm:inline">View on GitHub</span>
      </div>
    )
  },
  chat: {
    link: '#',
    icon: <TeamDropdown />
  },
  footer: {
    text: (
      <div className="flex items-center justify-center gap-2 text-gray-600">
        <span>IIIT Dharwad</span>
        <span>•</span>
        <span>Team ParshuVelocity</span>
      </div>
    )
  },
  feedback: {
    content: null,
  },
  editLink: {
    text: null,
  },
  gitTimestamp: () => (
    <time
      dateTime={new Date().toISOString()}
      className="text-sm text-gray-500"
    >
      Last updated: {new Date().toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })}
    </time>
  ),
};

export default config;
