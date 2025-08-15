"use client";
import React from 'react';
import { Github, Linkedin, Download, Mail, Code, Palette } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="container max-w-7xl mx-auto px-4 md:px-20" >
      
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-0">
          
          {/* Left Side - Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Greeting */}
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-2 font-light">
                Hello, I am
              </p>
              <h1 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                Jannatul Fardous{' '}
                <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                  Nila
                </span>
              </h1>
            </div>

            {/* Job Title & Description */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm border border-teal-200 dark:border-teal-700">
                  <Code className="w-4 h-4 text-teal-600" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Full Stack Developer
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm border border-teal-200 dark:border-teal-700">
                  <Palette className="w-4 h-4 text-teal-600" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    UI/UX Focused
                  </span>
                </div>
              </div>

              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200 leading-relaxed">
                Frontend & Accessibility Advocate
              </h2>

              <p className="text-gray-600 dark:text-gray-400 text-md leading-relaxed max-w-lg">
                Creating beautiful, accessible web experiences with modern technologies. 
                Passionate about crafting user-centered designs that make a difference.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com/jannatulnila"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-10 h-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl text-gray-600 dark:text-gray-400 hover:text-white hover:bg-gray-900 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 border border-gray-200 dark:border-gray-700"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/jannatul-fardous-nila"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl text-gray-600 dark:text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 border border-gray-200 dark:border-gray-700"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="/resume-of-jannatul.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-6 py-2 rounded-xl hover:from-teal-700 hover:to-emerald-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                View Resume
              </a>
              <a
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-teal-200 dark:border-teal-700 text-gray-700 dark:text-gray-300 px-6 py-2 rounded-xl hover:bg-teal-50 dark:hover:bg-teal-900/50 hover:border-teal-400 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                <Mail className="w-5 h-5 group-hover:animate-pulse" />
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="relative bg-gradient-to-br from-teal-100 to-emerald-100 dark:from-teal-800 dark:to-emerald-800 rounded-full p-6 shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105">
                <div className="relative overflow-hidden rounded-full ring-4 ring-white dark:ring-gray-800 shadow-xl">
                  <Image
                    src="/profile2.png"
                    alt="profile"
                    width={320}
                    height={320}
                    className="rounded-full w-80 h-80 ring-2 ring-blue-600 object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-teal-500 rounded-full animate-bounce opacity-80"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-emerald-500 rounded-full animate-bounce animation-delay-1000 opacity-80"></div>
              </div>
            </div>
          </div>
        </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
