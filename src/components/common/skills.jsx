import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { 
  SiPython, SiJavascript, SiDjango, SiFlask, SiReact, 
  SiMysql, SiPostgresql, SiHtml5, SiCss3, SiGit, 
  SiLinux 
} from "react-icons/si";
import { FaServer } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

const skillsList = [
  { name: "Python", icon: SiPython },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Django", icon: SiDjango },
  { name: "Flask", icon: SiFlask },
  { name: "React.js", icon: SiReact },
  { name: "REST APIs", icon: FaServer },
  { name: "MySQL", icon: SiMysql },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },
  { name: "Git", icon: SiGit },
  { name: "Linux", icon: SiLinux },
  { name: "VS Code", icon: VscVscode }
];

export default function Skills() {
     const sectionRef = useRef(null);
     const isInView = useInView(sectionRef, { once: false, margin: "-100px" })

     const containerVariants = {
          hidden: { opacity: 0 },
          visible: {
               opacity: 1,
               transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.2
               }
          }
     }

     const headerVariants = {
          hidden: { opacity: 0, y: 20 },
          visible: {
               opacity: 1,
               y: 0,
               transition: {
                    duration: 0.6,
                    ease: [0.4, 0.02, 0.2, 0.97]
               }
          }
     }

     return (
          <>
               <motion.section ref={sectionRef} initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="w-full mx-auto min-h-screen flex items-center justify-center flex-col overflow-hidden py-24">
                    <div className="flex justify-center items-center px-4 md:px-14">
                         <div className="grid gap-8 w-full max-w-4xl mx-auto">
                              <motion.div variants={headerVariants} className="space-y-4 text-center">
                                   <h2 className="text-sm font-semibold tracking-wider text-emerald-500 uppercase">Skills & Expertise</h2>
                                   <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-gray-100">
                                        The technologies I use to build robust applications.
                                   </h1>
                              </motion.div>
                              
                              <motion.div variants={headerVariants} className="mt-12 flex flex-wrap justify-center gap-4">
                                   {skillsList.map((skill, index) => (
                                        <motion.div
                                             key={index}
                                             whileHover={{ scale: 1.05, y: -2 }}
                                             whileTap={{ scale: 0.95 }}
                                             initial={{ opacity: 0, y: 20 }}
                                             whileInView={{ opacity: 1, y: 0 }}
                                             transition={{ duration: 0.3, delay: index * 0.05 }}
                                             className="flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-900/20 border border-emerald-500/30 text-emerald-400 font-medium tracking-wide shadow-lg shadow-emerald-900/10 backdrop-blur-sm hover:bg-emerald-500/20 hover:border-emerald-500/50 hover:text-emerald-300 hover:shadow-emerald-500/20 transition-all cursor-default select-none"
                                        >
                                             <skill.icon className="w-5 h-5" />
                                             {skill.name}
                                        </motion.div>
                                   ))}
                              </motion.div>
                         </div>
                    </div>
               </motion.section>
          </>
     );
}
