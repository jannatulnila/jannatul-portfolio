"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

import { motion } from "framer-motion"
import { fadeInUp } from '@/utils/animations';

const Hero = () => {
    return (
        <section className='py-12 container  max-w-6xl mx-auto px-4 '>
            <div className='max-w-3xl mx-auto text-center '>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    className='flex flex-col items-center mb-4'>
                    <Image src="/profile.jpg" alt='profile' width={100} height={100} className='rounded-full mb-4 w-32 h-32 object-cover ring-2 ring-primary' />
                </motion.div>
                <motion.h1
                    {...fadeInUp}
                    transition={{ delay: 0.5 }}
                    className='text-2xl md:text-5xl font-bold mb-4'>Hi, I&apos;m <span className='text-primary'>Jannatul Fardous Nila</span></motion.h1 >
                <motion.p
                    {...fadeInUp}
                    transition={{ delay: 0.5 }}
                    className='text-xl md:2xl  text-gray-600 dark:text-gray-300 mb-4'> Full Stack Web Developer | UI/UX Focused | Frontend & Accessibility Advocate
                </motion.p>
                <div className='flex justify-center space-x-4 mb-6'>
                    <Link href="https://github.com/jannatulnila" className=' text-2xl text-gray-600 hover:text-primary dark:text-gray-300' aria-label='GitHub Profile'> <FaGithub /></Link>
                    <Link href="https://www.linkedin.com/in/jannatul-fardous-nila" className=' text-2xl text-gray-600 hover:text-primary dark:text-gray-300'>  <FaLinkedin /></Link>
                </div>
                <div className=' flex flex-col md:flex-row justify-center gap-4'>
                    <Link href="/resume-of-jannatul.pdf" target='_blank' className=' bg-primary inline-block w-full md:w-auto text-white px-4 py-3 rounded-lg hover:bg-primary/60 transition-colors'>View Resume</Link>
                    <Link href="/contact" className=' bg-gray-500 inline-block w-full md:w-auto text-white px-4 py-3 rounded-lg hover:bg-gray-300 transition-colors'>Contact Me</Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;