import React from 'react';
import { FaJsSquare } from 'react-icons/fa';
import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaReact, FaWordpress } from 'react-icons/fa6';
import {
  SiFigma,
  SiFirebase,
  SiMongodb,
  SiNextdotjs,
  SiNpm,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

const Skills = () => {
  return (
    <section className='text-white max-w-7xl mx-auto py-16 px-4'>
      <h2 className='text-3xl font-bold mb-8 text-center text-black dark:text-white'>Skills</h2>
      <p className='text-gray-300 text-center text-xl mb-10'>
        The Skills, Tools and Technologies I use:
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-6 text-center">
        {/* Icon + Label */}
        <div>
          <FaHtml5 className="mx-auto text-4xl text-orange-500 hover:scale-110 transition" />
          <p className="mt-2 text-sm text-gray-300">HTML5</p>
        </div>
        <div>
          <FaCss3Alt className="mx-auto text-4xl text-blue-500 hover:scale-110 transition" />
          <p className="mt-2 text-sm text-gray-300">CSS3</p>
        </div>
        <div>
          <FaJsSquare className="mx-auto text-4xl text-yellow-400 hover:scale-110 transition" />
          <p className="mt-2 text-sm text-gray-300">JavaScript</p>
        </div>
        <div>
          <SiTypescript className="mx-auto text-4xl text-blue-600 hover:scale-110 transition" />
          <p className="mt-2 text-sm text-gray-300">TypeScript</p>
        </div>
        <div>
          <SiTailwindcss className="mx-auto text-4xl text-cyan-400 hover:scale-110 transition" />
          <p className="mt-2 text-sm text-gray-300">Tailwind CSS</p>
        </div>
        <div>
          <SiNpm className="mx-auto text-4xl text-red-600 hover:scale-110 transition" />
          <p className="mt-2 text-sm text-gray-300">NPM</p>
        </div>
        <div>
          <SiFigma className="mx-auto text-4xl text-pink-400 hover:scale-110 transition" />
          <p className="mt-2 text-sm text-gray-300">Figma</p>
        </div>
        <div>
          <FaReact className="mx-auto text-4xl text-blue-400 hover:scale-110 transition" />
          <p className="mt-2 text-sm text-gray-300">React</p>
        </div>
        <div>
          <SiNextdotjs className="mx-auto text-4xl text-black dark:text-white hover:scale-110 transition" />
          <p className="mt-2 text-sm text-gray-300">Next.js</p>
        </div>

        <div>
          <FaGitAlt className="mx-auto text-4xl text-orange-400 hover:scale-110 transition" />
          <p className="mt-2 text-sm text-gray-300">Git</p>
        </div>
        <div>
          <FaGithub className="mx-auto text-4xl text-black dark:text-white hover:scale-110 transition" />
          <p className="mt-2 text-sm text-gray-300">Git</p>
        </div>
        <div>
          <FaWordpress className="mx-auto text-4xl text-blue-700 hover:scale-110 transition" />
          <p className="mt-2 text-sm text-gray-300">WordPress</p>
        </div>
        <div>
          <SiMongodb className="mx-auto text-4xl text-green-500 hover:scale-110 transition" />
          <p className="mt-2 text-sm text-gray-300">MongoDB</p>
        </div>
        <div>
          <SiFirebase className="mx-auto text-4xl text-yellow-500 hover:scale-110 transition" />
          <p className="mt-2 text-sm text-gray-300">Firebase</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
