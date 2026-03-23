import React from "react";
import Hero from "../components/Hero";
import ScrollStack from "../components/common/ScrollStack";
import SEO from "../components/SEO";

const HomePage = ({ setActiveSection }) => {
  return (
    <>
      <SEO
        title="Kahan Chauhan - Full-Stack Developer & AI Enthusiast"
        description="Portfolio of Kahan Chauhan, Full-Stack Developer specializing in Python, Django, React, and AI applications."
        path="/"
      />
      <div id="home">
        <Hero />
      </div>
      <ScrollStack onSectionChange={setActiveSection} />
    </>
  );
};

export default HomePage;
