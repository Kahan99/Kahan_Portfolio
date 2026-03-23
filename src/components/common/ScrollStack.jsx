// 'use client';

// import { ReactLenis } from 'lenis/react';
// import Experience from './experience';
// import Skills from './skills';
// import Projects from './project';
// import AboutUs from './aboutus';
// import { RevealLinks } from './RevealLinks';
// export default function ScrollStack() {
//   return (
//     <ReactLenis root>
//       <main>
//         <article>
//           <section className="  h-screen  w-full   sticky top-0">
//             <AboutUs />
//           </section>
//           <section className=" h-screen  sticky top-0  overflow-hidden">
//             <Projects />
//           </section>
//           <section className="  h-screen   sticky top-0">
//             <Skills />
//           </section>
//           <section className="h-screen  w-full sticky -top-32 md:top-0 mb-10">
//             <Experience />
//           </section>
//           <section className=" bg-green-300 rounded-t-[80px]  sticky top-10 md:top-0 ">
//             <RevealLinks />
//           </section>
//         </article>
//       </main>
//     </ReactLenis>

//   );
// }
import React, { useEffect } from "react";
import { ReactLenis } from "lenis/react";
import AboutUs from "./aboutus";
import Projects from "./project";
import Skills from "./skills";
import Footer from "./footer";
import Contact from "./contact";

export default function ScrollStack({ onSectionChange }) {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section, div#home');
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - 50 && window.scrollY < sectionTop + sectionHeight) {
          const sectionId = section.getAttribute('id');
          if (sectionId) {
            onSectionChange(sectionId);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [onSectionChange]);

  return (
    <ReactLenis root>
      <main>
        <article className="flex flex-col">
          <section className="min-h-screen bg-[#0a0a0a] relative" id="about">
            <AboutUs />
          </section>
          <section className="min-h-screen bg-[#0a0a0a] relative" id="skills">
            <Skills />
          </section>
          <section className="min-h-screen bg-[#0a0a0a] relative" id="projects">
            <Projects />
          </section>
          <section className="bg-[#0a0a0a] relative" id="contact">
            <Contact />
            <Footer />
          </section>
        </article>
      </main>
    </ReactLenis>
  );
}
