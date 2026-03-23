import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { RevealLinks } from "../components/common/RevealLinks";
import SEO from "../components/SEO";
import ScrollElement from "../components/ui/scroll-element";
import { FlipWords } from "../components/ui/flip-words";

export const AboutsPage = () => {
  const words = [
    "Creative", "Innovative", "Dynamic", "Problem-Solver", "Tech-Savvy", "Passionate",
    "Adaptive", "Full-Stack", "Backend", "Frontend", "Efficient", "Scalable",
    "Competitive Programmer", "Data Structures", "Algorithms", "Optimized Code",
    "Growth-Focused", "Collaborative", "Impactful"
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="About Me"
        description="Welcome to my portfolio. I'm a Full Stack Developer and DSA enthusiast, specializing in modern web technologies and efficient problem-solving."
        path="/about"
      />

      <section className="relative flex flex-col items-center justify-center min-h-screen bg-[#fff] text-center">
        <h2 className="text-[8vw] md:text-[120px] font-black text-neutral-800">
          Kahan Chauhan <span className="text-orange-500">.</span>
        </h2>
        <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 max-w-4xl px-4">
          Aspiring Python and Data Science Engineer with hands-on experience in data analysis, full-stack development, and problem-solving. Proficient in Python, SQL, and JavaScript with a solid understanding of machine learning, data visualization, and backend development. Passionate about extracting insights from data and building scalable, data-driven solutions.
        </p>
      </section>

      <div className="overflow-hidden min-h-screen py-20">
        <div className="max-w-5xl mx-auto px-6 space-y-24">
          <ScrollElement direction="top" viewport={{ amount: 0.3 }}>
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-primary">
              I&apos;m Kahan Chauhan, <span className="bg-accent text-background px-4 py-2 rounded-xl shadow-lg">Python & Data Science Engineer</span>
              <span className="block mt-4 text-2xl text-secondary">
                Building data-driven solutions and insightful analytics.
              </span>
            </div>
          </ScrollElement>

          <ScrollElement direction="top" viewport={{ amount: 0.3 }}>
            <div className="p-8 rounded-2xl bg-secondary shadow-lg">
              <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-primary">
                Proficient in <span className="font-semibold text-accent">Python, SQL, and JavaScript</span> with a solid foundation in <span className="text-accent">machine learning</span>, <span className="text-accent">data visualization</span>, and <span className="font-semibold text-accent">backend development</span>.
              </p>
            </div>
          </ScrollElement>

          <ScrollElement direction="top" viewport={{ amount: 0.3 }}>
            <div className="p-8 rounded-2xl bg-secondary shadow-lg">
              <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-primary">
                Passionate about extracting insights from data and building scalable, data-driven solutions. Always eager to collaborate and solve real-world problems with technology.
              </p>
            </div>
          </ScrollElement>
        </div>
      </div>

      <RevealLinks />
    </>
  );
};
