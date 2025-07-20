import React from 'react';
import { FaMousePointer } from 'react-icons/fa';
import { FaServer } from 'react-icons/fa6';
import { SiNextui } from 'react-icons/si';
import { motion} from "framer-motion"
import { fadeIn, fadeInDown, fadeInUp, slideInRight } from '@/utils/animations';

const About = () => {
    return (
        <section className='container max-w-6xl mx-auto py-12'>
            <h1 className='text-4xl font-bold mb-8 text-center'>About Me</h1>

            <div className='mb-12'>
                <p className='text-xl text-secondary max-w-5xl mx-auto text-center'>
                    I am a creative and motivated MERN Stack Web Developer with a passion for building modern, responsive, and meaningful web experiences.
                </p>
            </div>

            {/* Centering the card grid */}
            <div className='flex justify-center'>
                <div
                
                className='grid grid-cols-1 md:grid-cols-3 gap-6 text-center'>
                    {/* Frontend Card */}
                    <div
                     className='bg-white dark:bg-dark/50 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow'>
                        <div className='flex justify-center mb-4'>
                            <FaMousePointer className='text-3xl text-black dark:text-white' />
                        </div>
                        <h2 className='text-xl font-bold text-black dark:text-white hover:text-primary transition-colors mb-2'>
                            Frontend Developer
                        </h2>
                        <p className='text-gray-600 dark:text-gray-300'>
                            I am a frontend developer with experience in building responsive and optimized sites.
                        </p>
                    </div>

                    {/* Backend Card */}
                    <div className='bg-white dark:bg-dark/50 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow '>
                        <div className='flex justify-center mb-4'>
                            <FaServer className='text-3xl text-black dark:text-white' />
                        </div>
                        <h2 className='text-xl font-bold text-black dark:text-white hover:text-primary transition-colors mb-2'>
                            Backend Developer
                        </h2>
                        <p className='text-gray-600 dark:text-gray-300'>
                            I have experience developing fast and optimized back-end systems and APIs.
                        </p>
                    </div>

                    {/* UI Designer Card */}
                    <div className='bg-white dark:bg-dark/50 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow '>
                        <div className='flex justify-center mb-4'>
                            <SiNextui className='text-3xl text-black dark:text-white' />
                        </div>
                        <h2 className='text-xl font-bold text-black dark:text-white hover:text-primary transition-colors mb-2'>
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
