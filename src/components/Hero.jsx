"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FlipWords } from "./ui/flip-words";
import { ArrowRight, Link, Mail, Github, Linkedin } from "lucide-react";
import AnimatedShinyText from "./ui/animated-shiny-text";
import Lottie from "lottie-react";
import modernCharacterAnimation from "../../public/animation/modern-character.json.json";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;

    gsap.fromTo(
      hero.querySelector(".hero-title"),
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      hero.querySelector(".hero-subtitle"),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.3,
      }
    );

    gsap.fromTo(
      hero.querySelector(".cta-buttons"),
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.6,
      }
    );

    gsap.fromTo(
      hero.querySelector(".hero-animation"),
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2, ease: "elastic.out(1, 0.5)" }
    );
  }, []);

  const words = ["creative", "interactive", "beautiful", "modern"];

  return (
    <div
      ref={heroRef}
      className="relative min-h-[90vh] flex flex-col-reverse lg:flex-row items-center overflow-hidden"
    >
      <div className="container relative z-10 mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center lg:text-left">
        <motion.div className="max-w-4xl mx-auto">
          <motion.div className="space-y-8">
            <div className="space-y-4">
              <h1 className="hero-title text-3xl md:text-4xl lg:text-6xl font-bold text-accent">
                Hi, I&apos;m{' '}
                <AnimatedShinyText
                  text="Kahan Chauhan"
                  className="text-accent"
                />
              </h1>
              <div className="text-xl md:text-2xl lg:text-3xl text-highlight font-semibold mt-2">
                Full-Stack Developer | Python · Django · React · AI Enthusiast
              </div>
              <div className="hero-subtitle text-lg md:text-xl lg:text-2xl text-primary font-medium mt-2">
                Passionate about building scalable backends and integrating AI into modern web applications.
              </div>
            </div>
            {/* CTA Buttons */}
            <div className="cta-buttons mt-6 md:mt-8 flex flex-wrap justify-center lg:justify-start space-x-4 space-y-4 lg:space-y-0">
              <a href="https://github.com/Kahan99" target="_blank" rel="noopener noreferrer">
                <Button className="px-6 py-3 text-lg font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-all flex items-center gap-2">
                  <Github size={18} /> GitHub
                </Button>
              </a>
              <a href="https://linkedin.com/in/kahanchauhan" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="px-6 py-3 text-lg font-semibold flex items-center gap-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white"
                >
                  <Linkedin size={18} /> LinkedIn
                </Button>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
      {/* Lottie Animation */}
      <div className="hero-animation w-[60%] md:w-[40%] lg:w-[30%] max-w-[400px] mx-auto lg:mx-0">
        <Lottie animationData={modernCharacterAnimation} loop={true} />
      </div>
    </div>
  );
}
