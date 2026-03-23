"use client";

import * as React from "react";
import { Menu, Github } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { id: "01", name: "Home", href: "#home" },
  { id: "02", name: "About", href: "#about" },
  { id: "03", name: "Skills", href: "#skills" },
  { id: "04", name: "Projects", href: "#projects" },
  { id: "05", name: "Contact", href: "#contact" },
];

export default function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  const playClickSound = () => {
    const audio = new Audio("/src/assets/sfx/click.wav");
    audio.play();
  };

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 flex justify-center pointer-events-none ${
        isScrolled ? "pt-4" : "pt-8"
      }`}
    >
      <nav
        className={`pointer-events-auto transition-all duration-500 ease-in-out px-6 py-3 flex items-center justify-between border ${
          isScrolled
            ? "w-[95%] sm:w-[85%] md:w-[70%] max-w-4xl bg-[#111111]/90 backdrop-blur-xl border-gray-800 shadow-2xl shadow-black/50 rounded-full"
            : "w-full max-w-7xl bg-transparent border-transparent shadow-none rounded-none"
        }`}
      >
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <span className="text-xl md:text-2xl font-bold tracking-tighter text-gray-100 group-hover:text-white transition-colors">
            Kahan<span className="text-emerald-500">.</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={playClickSound}
              className={`text-sm md:text-base px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                activeSection === item.name.toLowerCase()
                  ? "bg-emerald-500/10 text-emerald-400"
                  : "text-gray-300 hover:text-gray-100 hover:bg-gray-800"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Kahan99"
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden md:flex items-center justify-center p-2 rounded-full transition-colors ${
              isScrolled ? "bg-gray-800 hover:bg-gray-700 text-gray-300" : "bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400"
            }`}
            aria-label="GitHub Profile"
          >
            <Github className="h-5 w-5" />
          </a>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                className={`md:hidden p-2 rounded-full transition-colors ${
                  isScrolled ? "hover:bg-gray-800 text-gray-300" : "hover:bg-emerald-500/10 text-emerald-400"
                }`}
                aria-label="Toggle Menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:w-[300px] bg-[#0a0a0a] backdrop-blur-xl border-l border-gray-800 text-gray-100"
            >
              <SheetHeader className="border-b border-gray-800 pb-4">
                <SheetTitle className="text-left text-gray-100">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-8">
                {navLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => {
                      setIsOpen(false);
                      playClickSound();
                    }}
                  >
                    <div className="flex items-center space-x-4 px-3 py-3 hover:bg-[#151515] active:bg-[#222] rounded-xl transition-colors border border-transparent hover:border-gray-800">
                      <span className="text-sm text-emerald-500/50 font-medium">
                        {item.id}
                      </span>
                      <span className="text-lg font-semibold text-gray-200">
                        {item.name}
                      </span>
                    </div>
                  </a>
                ))}
                
                {/* Mobile GitHub Button */}
                <a
                  href="https://github.com/Kahan99"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 mt-4 px-3 py-3 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 rounded-xl transition-colors border border-emerald-500/20"
                >
                  <Github className="h-5 w-5" />
                  <span className="font-semibold">GitHub Profile</span>
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
