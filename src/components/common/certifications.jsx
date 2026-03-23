import { FaCertificate } from 'react-icons/fa';
import { motion } from 'framer-motion';

const certifications = [
  {
    name: 'Intro to Software Engineering Virtual Experience',
  },
  {
    name: 'Data Analyst Skill Path',
  },
  {
    name: 'JavaScript Essential Training',
  },
  {
    name: 'Learning Java',
  },
];

export default function Certifications() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="w-full min-h-screen flex flex-col items-center justify-center bg-[#18191c] rounded-t-[80px] px-4 py-16"
    >
      <h2 className="text-4xl font-bold text-blue-400 mb-8 text-center flex items-center gap-2">
        <FaCertificate className="inline-block text-yellow-400" /> Certifications
      </h2>
      <ul className="grid gap-6 w-full max-w-2xl mx-auto">
        {certifications.map((cert, idx) => (
          <li
            key={cert.name}
            className="flex items-center gap-4 bg-[#23242a] rounded-xl p-5 shadow-md hover:bg-[#222] transition-colors"
          >
            <FaCertificate className="text-yellow-400 text-2xl" />
            <span className="text-white text-lg font-medium">{cert.name}</span>
          </li>
        ))}
      </ul>
    </motion.section>
  );
}