import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { SiCodechef } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";


export const RevealLinks = () => {
  const textRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );

    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, delay: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center bg-black text-white px-8 py-32 rounded-t-[80px]">
      {/* BIG "THANK YOU" TEXT */}
      <h1
        ref={textRef}
        className="text-6xl md:text-8xl font-extrabold uppercase text-center"
      >
        THANK YOU!
      </h1>
      <p className="mt-4 text-lg text-gray-400 text-center">
        We appreciate your time. Feel free to explore more.
      </p>

      {/* FOOTER */}
      <footer ref={footerRef} className="mt-16 w-full text-center">
       

      <div className="mt-6 flex justify-center gap-6">
          <SocialLink href="https://github.com/Kahan99">
            <Github className="w-6 h-6" />
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/kahan-chauhan-a15863373/">
            <FaLinkedin className="w-6 h-6" />
          </SocialLink>
          <SocialLink href="mailto:kahanchauhan090904@gmail.com">
            <Mail className="w-6 h-6" />
          </SocialLink>
      </div>

        <p className="mt-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Kahan Chauhan |{" "}
          <a href="/privacy-policy" className="underline hover:text-white">
            Privacy Policy
          </a>
        </p>
      </footer>
    </section>
  );
};

// FOOTER LINK COMPONENT
const FooterLink = ({ href, children }) => (
  <a href={href} className="text-lg font-medium hover:text-white transition">
    {children}
  </a>
);

// SOCIAL LINK COMPONENT
const SocialLink = ({ href, children }) => (
  <a
    href={href}
    className="flex items-center gap-2 text-lg text-gray-400 hover:text-white transition"
  >
    {children}
  </a>
);
