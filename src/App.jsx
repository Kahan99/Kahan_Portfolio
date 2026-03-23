import Navbar from "./components/Navbar"
import LocomotiveScroll from 'locomotive-scroll';
import HomePage from "./pages/HomePage";
import { useEffect, useState } from "react";

export default function App() {

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });

    return () => scroll.destroy(); 
  }, []);
  const [activeSection, setActiveSection] = useState('home');
  
  return (
    <div className="bg-black text-gray-100 min-h-screen selection:bg-emerald-500/30">
      <Navbar activeSection={activeSection} />
      <HomePage setActiveSection={setActiveSection} />
    </div>
  )
}