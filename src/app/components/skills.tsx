// 'use client';
// import React from 'react';
// import {
//   FaJsSquare, FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaReact, FaWordpress
// } from 'react-icons/fa';
// import {
//   SiFigma, SiFirebase, SiMongodb, SiNextdotjs, SiNpm, SiTailwindcss, SiTypescript
// } from 'react-icons/si';
// import { motion } from 'framer-motion';

// const skills = [
//   { icon: <FaHtml5 className="text-orange-500" />, label: 'HTML5' },
//   { icon: <FaCss3Alt className="text-blue-500" />, label: 'CSS3' },
//   { icon: <FaJsSquare className="text-yellow-400" />, label: 'JavaScript' },
//   { icon: <SiTypescript className="text-blue-600" />, label: 'TypeScript' },
//   { icon: <SiTailwindcss className="text-cyan-400" />, label: 'Tailwind CSS' },
//   { icon: <SiNpm className="text-red-600" />, label: 'NPM' },
//   { icon: <SiFigma className="text-pink-400" />, label: 'Figma' },
//   { icon: <FaReact className="text-blue-400" />, label: 'React' },
//   { icon: <SiNextdotjs className="text-black dark:text-white" />, label: 'Next.js' },
//   { icon: <FaGitAlt className="text-orange-400" />, label: 'Git' },
//   { icon: <FaGithub className="text-black dark:text-white" />, label: 'GitHub' },
//   { icon: <FaWordpress className="text-blue-700" />, label: 'WordPress' },
//   { icon: <SiMongodb className="text-green-500" />, label: 'MongoDB' },
//   { icon: <SiFirebase className="text-yellow-500" />, label: 'Firebase' },
// ];

// const Skills = () => {
//   return (
//     <motion.section
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       viewport={{ once: true }}
//       className='text-white max-w-5xl mx-auto py-16 px-4'
//     >
//       <h2 className='text-3xl font-bold mb-8 text-center text-black dark:text-white'>Skills</h2>
//       <p className='text-gray-500 text-center text-xl mb-10'>
//         The Skills, Tools and Technologies I use:
//       </p>

//       <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-6 text-center">
//         {skills.map((skill, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.3, delay: index * 0.05 }}
//             viewport={{ once: true }}
//             className="flex flex-col items-center justify-center text-center"
//           >
//             <div className="text-4xl hover:scale-110 transition">{skill.icon}</div>
//             <p className="mt-2 text-sm text-gray-500">{skill.label}</p>
//           </motion.div>
//         ))}
//       </div>
//     </motion.section>
//   );
// };

// export default Skills;


'use client';

import React from 'react';
import {
  FaJsSquare, FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaReact, FaWordpress
} from 'react-icons/fa';
import {
  SiFigma, SiFirebase, SiMongodb, SiNextdotjs, SiNpm, SiTailwindcss, SiTypescript
} from 'react-icons/si';
import { motion } from 'framer-motion';

// Skill categories
const frontendSkills = [
  { icon: <FaHtml5 className="text-orange-500" />, label: 'HTML5' },
  { icon: <FaCss3Alt className="text-blue-500" />, label: 'CSS3' },
  { icon: <FaJsSquare className="text-yellow-400" />, label: 'JavaScript' },
  { icon: <SiTypescript className="text-blue-600" />, label: 'TypeScript' },
  { icon: <SiTailwindcss className="text-cyan-400" />, label: 'Tailwind CSS' },
  { icon: <FaReact className="text-blue-400" />, label: 'React' },
  { icon: <SiNextdotjs className="text-black dark:text-white" />, label: 'Next.js' },
];

const backendSkills = [
  { icon: <SiMongodb className="text-green-500" />, label: 'MongoDB' },
  { icon: <SiFirebase className="text-yellow-500" />, label: 'Firebase' },
  { icon: <FaWordpress className="text-blue-700" />, label: 'WordPress' },
];

const toolSkills = [
  { icon: <SiFigma className="text-pink-400" />, label: 'Figma' },
  { icon: <SiNpm className="text-red-600" />, label: 'NPM' },
  { icon: <FaGitAlt className="text-orange-400" />, label: 'Git' },
  { icon: <FaGithub className="text-black dark:text-white" />, label: 'GitHub' },
];

// Skill Category Component
const SkillCategory = ({ title, skills }: { title: string; skills: { icon: React.ReactElement; label: string; }[] }) => (
  <div>
    <h3 className="text-xl font-semibold mb-6 text-center text-black dark:text-white">{title}</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition"
        >
          <div className="text-4xl hover:scale-110 transition">{skill.icon}</div>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{skill.label}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

// Main Skills Section
const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-6xl mx-auto py-16 px-4"
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-black dark:text-white">Skills</h2>
      <p className='text-gray-500 text-center text-xl mb-10'>
        The skills, tools, and technologies I use:
      </p>

      <div className="space-y-12">
        <SkillCategory title="Frontend" skills={frontendSkills} />
        <SkillCategory title="Backend" skills={backendSkills} />
        <SkillCategory title="Tools" skills={toolSkills} />
      </div>
    </motion.section>
  );
};

export default Skills;
