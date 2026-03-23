import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, label: 'GitHub', href: 'https://github.com/Kahan99' },
    { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', href: 'https://linkedin.com/in/kahanchauhan' },
    { icon: <Mail className="w-5 h-5" />, label: 'Email', href: 'mailto:kahan090904@gmail.com' }
  ];

  return (
    <footer className="border-t border-gray-800 bg-[#0a0a0a] text-gray-400 py-12 px-4 shadow-lg shadow-black">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-2xl font-bold text-gray-100 mb-6 tracking-wide">Kahan Chauhan</h2>
        
        <div className="flex space-x-6 mb-8">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="p-3 rounded-full bg-emerald-900/10 border border-gray-800 text-gray-400 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-300"
              aria-label={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <p className="text-sm text-gray-500 flex flex-col md:flex-row items-center gap-2">
          <span>© {currentYear} Kahan Chauhan. All rights reserved.</span>
          <span className="hidden md:inline">•</span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hover:text-emerald-400 transition-colors"
          >
            Back to top
          </button>
        </p>
      </div>
    </footer>
  );
};

export default Footer;