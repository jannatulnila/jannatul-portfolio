import React from 'react';
import { FaMousePointer } from 'react-icons/fa';
import { FaServer } from 'react-icons/fa6';
import { SiNextui } from 'react-icons/si';

const About = () => {
    return (
        <section className='container max-w-7xl px-4 md:px-20 mx-auto'>
            <h1 className='text-4xl font-bold mb-8 text-center bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent'>
                About Me
            </h1>

            <div className='mb-12'>
                <p className='text-xl text-gray-600 dark:text-gray-400 max-w-5xl mx-auto text-center'>
                    I am a creative and motivated Full Stack Web Developer with a passion for building modern, responsive, and meaningful web experiences.
                </p>
            </div>

            {/* Centering the card grid */}
            <div className='flex justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-center'>
                    {/* Frontend Card */}
                    <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group hover:scale-105'>
                        <div className='flex justify-center mb-4'>
                            <div className='p-3 rounded-full bg-teal-100 dark:bg-teal-900/50 group-hover:bg-teal-200 dark:group-hover:bg-teal-800/70 transition-colors'>
                                <FaMousePointer className='text-3xl text-teal-600 dark:text-teal-400' />
                            </div>
                        </div>
                        <h2 className='text-xl font-bold text-gray-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors mb-2'>
                            Frontend Developer
                        </h2>
                        <p className='text-gray-600 dark:text-gray-300'>
                            I am a frontend developer with experience in building responsive and optimized sites.
                        </p>
                    </div>

                    {/* Backend Card */}
                    <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group hover:scale-105'>
                        <div className='flex justify-center mb-4'>
                            <div className='p-3 rounded-full bg-emerald-100 dark:bg-emerald-900/50 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800/70 transition-colors'>
                                <FaServer className='text-3xl text-emerald-600 dark:text-emerald-400' />
                            </div>
                        </div>
                        <h2 className='text-xl font-bold text-gray-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors mb-2'>
                            Backend Developer
                        </h2>
                        <p className='text-gray-600 dark:text-gray-300'>
                            I have experience developing fast and optimized back-end systems and APIs.
                        </p>
                    </div>

                    {/* UI Designer Card */}
                    <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group hover:scale-105'>
                        <div className='flex justify-center mb-4'>
                            <div className='p-3 rounded-full bg-cyan-100 dark:bg-cyan-900/50 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-800/70 transition-colors'>
                                <SiNextui className='text-3xl text-cyan-600 dark:text-cyan-400' />
                            </div>
                        </div>
                        <h2 className='text-xl font-bold text-gray-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors mb-2'>
                            UI Designer
                        </h2>
                        <p className='text-gray-600 dark:text-gray-300'>
                            I have designed multiple landing pages and created design systems as well.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;