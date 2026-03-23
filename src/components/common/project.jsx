import { motion } from "framer-motion";
import { Github } from "lucide-react";

const projects = [
  {
    title: "DayFlow HRMS",
    description: "HR Management System for employee tracking, leave management, and payroll.",
    tech: ["JavaScript", "React", "Node.js"],
    github: "https://github.com/Kahan99/DayFlow-HRMS",
  },
  {
    title: "FleetIQ",
    description: "Fleet management application to track vehicles, maintenance, and driver performance.",
    tech: ["JavaScript", "React", "Express"],
    github: "https://github.com/Kahan99/FleetIQ",
  },
  {
    title: "zIdio Internship Project",
    description: "Data analysis and Machine Learning models built during zIdio internship.",
    tech: ["Jupyter Notebook", "Python", "Pandas", "Scikit-Learn"],
    github: "https://github.com/Kahan99/zIdio-Internship",
  },
  {
    title: "iSchool eLearning",
    description: "Comprehensive E-learning platform with course management and student portals.",
    tech: ["PHP", "MySQL", "HTML/CSS"],
    github: "https://github.com/Kahan99/iSchool",
  },
  {
    title: "Medisage / Medii",
    description: "Healthcare platform for symptom analysis and medical insights using AI.",
    tech: ["Python", "Django", "NLP", "Machine Learning"],
    github: "https://github.com/Kahan99/Medisage",
  }
];

export default function Projects() {
  return (
    <div className="w-full min-h-screen py-24 px-4 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-sm font-semibold tracking-wider text-emerald-500 uppercase mb-4">Portfolio</h2>
          <h1 className="text-3xl md:text-5xl font-medium text-gray-100">Selected Work</h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-[#111111] border border-gray-800 rounded-2xl p-6 hover:border-emerald-500/50 hover:bg-[#151515] hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-100 group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
              <p className="text-gray-400 mb-6 flex-grow leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
