"use client";

import { useMemo, useState, useRef, useEffect } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import useMeasure from "react-use-measure";
import { Download } from "lucide-react";
import FamilyButton from "../ui/FamilyButton";

export function ResumeActions() {
  return (
    <div className="fixed bottom-4 right-4 z-[100]">
      <FamilyButton>
        <ResumeActionsToggle />  
      </FamilyButton>
    </div>
  );
}

const tabs = [
  { id: 0, label: "Download" },               
];

export function ResumeActionsToggle() {
  const [activeTab, setActiveTab] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [ref, bounds] = useMeasure();

  //  Replace with your new Google Drive file ID
  const RESUME_PDF_ID = "1zjc5wdiKHuApY5RIA1s-qEKe2kqCF0W1";
  const PDF_URL = `https://drive.google.com/uc?export=download&id=${RESUME_PDF_ID}`;

  const handleDownload = () => {
    try {
      window.open(PDF_URL, "_blank");
    } catch (error) {
      console.error("Error in download handler:", error);
      alert(
        "Sorry, there was an error downloading the resume. Please try again later."
      );
    }
  };

  const content = useMemo(() => {
    return (
      <button
        onClick={handleDownload}
        className="flex items-center justify-center p-2 rounded-full hover:bg-neutral-600 transition-colors"
        aria-label="Download Resume"
      >
        <Download size={32} className="text-white" />
      </button>
    );
  }, []);

  const handleTabClick = (newTabId) => {
    if (newTabId !== activeTab && !isAnimating) {
      const newDirection = newTabId > activeTab ? 1 : -1;
      setDirection(newDirection);
      setActiveTab(newTabId);
    }
  };

  const variants = {
    initial: (direction) => ({
      x: 300 * direction,
      opacity: 0,
      filter: "blur(4px)",
    }),
    active: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
    },
    exit: (direction) => ({
      x: -300 * direction,
      opacity: 0,
      filter: "blur(4px)",
    }),
  };

  return (
    <div className="flex flex-col items-center pt-4 text-white">
      <div className="flex space-x-1 rounded-[8px] bg-neutral-700 px-[3px] py-[3.2px] shadow-inner">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`relative rounded-[5px] px-3 py-1.5 text-xs sm:text-sm font-medium transition focus-visible:outline-1 focus-visible:ring-1 focus-visible:ring-blue-light focus-visible:outline-none ${
              activeTab === tab.id
                ? "text-white"
                : "hover:text-white/60 text-white/60"
            }`}
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="resume-action-bubble"
                className="absolute inset-0 z-10 bg-neutral-800 mix-blend-difference"
                style={{ borderRadius: 5 }}
                transition={{ type: "spring", bounce: 0.19, duration: 0.4 }}
              />
            )}
            {tab.label}
          </button>
        ))}
      </div>

      <MotionConfig transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}>
        <motion.div
          className="relative mx-auto my-[10px] w-[60px] md:w-[150px] overflow-hidden"
          initial={false}
          animate={{ height: bounds.height }}
        >
          <div className="p-2 md:p-6" ref={ref}>
            <AnimatePresence
              custom={direction}
              mode="popLayout"
              onExitComplete={() => setIsAnimating(false)}
            >
              <motion.div
                key={activeTab}
                variants={variants}     
                initial="initial"
                animate="active"
                exit="exit"
                custom={direction}
                onAnimationStart={() => setIsAnimating(true)}
                onAnimationComplete={() => setIsAnimating(false)}
                className="flex items-center justify-center"
              >
                {content}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </MotionConfig>
    </div>
  );
}
          