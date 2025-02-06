import React, { useState } from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import { Linkedin, ChevronDown } from 'lucide-react';

const TeamDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const team = [
    { name: 'Shardendu Mishra', url: 'https://www.linkedin.com/in/shardendumishra22/' },
    { name: 'Anas Khan', url: 'https://www.linkedin.com/in/anas-khan83/' },
    { name: 'Mayank', url: 'https://www.linkedin.com/in/mayank8127/' },
    { name: 'Saurav Karki', url: 'https://www.linkedin.com/in/saurav-karki-909687306/' }
  ];

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
      >
        <Linkedin size={20} />
        Team Members
        <ChevronDown size={16} />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {team.map((member) => (
              <a
                key={member.url}
                href={member.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <Linkedin size={16} />
                {member.name}
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
    <div className="flex items-center gap-3">
      <img
        src="http://sanity-admin.rudraksha-ratna.com/static/images/blogs/lord-parashuram(1).jpg"
        alt="Team Parshu"
        className="h-8 w-8 rounded-full"
      />
      <span className="text-xl font-bold text-red-500">BloodSphere</span>
    </div>
  ),
  project: {
    link: 'https://github.com/ParshuVelocity/BloodBank-IIT-Dharwad-Original',
  },
  chat: {
    link: '#',
    icon: <TeamDropdown />
  },
  footer: {
    text: 'IIIT Dharwad - Team ParshuVelocity',
  },
  feedback: {
    content: null,
  },
  editLink: {
    text: null,
  },
  gitTimestamp: <span>{new Date().toLocaleString()}</span>,
};

export default config;
