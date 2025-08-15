'use client';

import React, { useState } from 'react';
import { 
  Code, 
  FileCode, 
  Palette, 
  Database, 
  Settings, 
  Globe, 
  GitBranch,
  Github,
  Package,
  Layers
} from 'lucide-react';

// Define types
interface Skill {
  icon: React.ReactElement;
  label: string;
  category: 'Frontend' | 'Backend' | 'Tools';
}

interface Category {
  color: string;
  activeColor: string;
  title: string;
  icon: React.ReactElement;
}

interface SkillsGroup {
  [key: string]: Skill[];
}

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const skills: Skill[] = [
    // Frontend
    { icon: <Globe className="w-8 h-8 text-teal-500 dark:text-teal-400" />, label: 'HTML5', category: 'Frontend' },
    { icon: <Palette className="w-8 h-8 text-emerald-500 dark:text-emerald-400" />, label: 'CSS3', category: 'Frontend' },
    { icon: <FileCode className="w-8 h-8 text-teal-600 dark:text-teal-400" />, label: 'JavaScript', category: 'Frontend' },
    { icon: <Code className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />, label: 'TypeScript', category: 'Frontend' },
    { icon: <Layers className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />, label: 'Tailwind CSS', category: 'Frontend' },
    { icon: <Code className="w-8 h-8 text-teal-500 dark:text-teal-300" />, label: 'React', category: 'Frontend' },
    { icon: <FileCode className="w-8 h-8 text-gray-700 dark:text-gray-300" />, label: 'Next.js', category: 'Frontend' },
    
    // Backend & Database
    { icon: <Database className="w-8 h-8 text-teal-600 dark:text-teal-400" />, label: 'MongoDB', category: 'Backend' },
    { icon: <Database className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />, label: 'Firebase', category: 'Backend' },
    { icon: <Globe className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />, label: 'WordPress', category: 'Backend' },
    
    // Tools
    { icon: <GitBranch className="w-8 h-8 text-teal-500 dark:text-teal-400" />, label: 'Git', category: 'Tools' },
    { icon: <Github className="w-8 h-8 text-gray-700 dark:text-gray-300" />, label: 'GitHub', category: 'Tools' },
    { icon: <Package className="w-8 h-8 text-emerald-500 dark:text-emerald-400" />, label: 'NPM', category: 'Tools' },
    { icon: <Settings className="w-8 h-8 text-cyan-500 dark:text-cyan-400" />, label: 'Figma', category: 'Tools' },
  ];

  const categories: { [key: string]: Category } = {
    All: { 
      color: 'bg-teal-50 hover:bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:hover:bg-teal-900/50 dark:text-teal-300 border-teal-200 dark:border-teal-700', 
      activeColor: 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white border-transparent shadow-lg shadow-teal-500/25',
      title: 'All Skills',
      icon: <Code className="w-5 h-5" />
    },
    Frontend: { 
      color: 'bg-teal-50 hover:bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:hover:bg-teal-900/50 dark:text-teal-300 border-teal-200 dark:border-teal-700', 
      activeColor: 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white border-transparent shadow-lg shadow-teal-500/25',
      title: 'Frontend',
      icon: <Globe className="w-5 h-5" />
    },
    Backend: { 
      color: 'bg-emerald-50 hover:bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:hover:bg-emerald-900/50 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700', 
      activeColor: 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-transparent shadow-lg shadow-emerald-500/25',
      title: 'Backend',
      icon: <Database className="w-5 h-5" />
    },
    Tools: { 
      color: 'bg-cyan-50 hover:bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:hover:bg-cyan-900/50 dark:text-cyan-300 border-cyan-200 dark:border-cyan-700', 
      activeColor: 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white border-transparent shadow-lg shadow-cyan-500/25',
      title: 'Tools',
      icon: <Settings className="w-5 h-5" />
    }
  };

  // Fixed the reduce function with proper typing
  const groupedSkills: SkillsGroup = skills.reduce((acc: SkillsGroup, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const getDisplayedSkills = (): Skill[] => {
    if (activeCategory === 'All') {
      return skills;
    }
    return groupedSkills[activeCategory] || [];
  };

  return (
    <section className="py-6 md:py-8 lg:py-12">
      <div className="container max-w-7xl px-4 md:px-20 mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
              Technical Skills
            </div>
            
            <h2 className="text-xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              Skills & <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">Technologies</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-md mb-12 max-w-2xl mx-auto leading-relaxed">
              The tools and technologies I use to bring ideas to life and create amazing digital experiences
            </p>

            {/* Category Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {Object.entries(categories).map(([categoryKey, category]) => {
                const isActive = activeCategory === categoryKey;
                return (
                  <button
                    key={categoryKey}
                    onClick={() => setActiveCategory(categoryKey)}
                    className={`group flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 border-2 ${
                      isActive 
                        ? category.activeColor
                        : category.color
                    }`}
                  >
                    <span className={`transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}>
                      {category.icon}
                    </span>
                    {category.title}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Skills Display */}
          <div className="text-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
              {getDisplayedSkills().map((skill, index) => (
                <div
                  key={`${skill.label}-${index}`}
                  className="group flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-lg hover:shadow-teal-500/10 hover:scale-105 transition-all duration-300 transform border border-gray-100 dark:border-gray-700 hover:border-teal-200 dark:hover:border-teal-600 relative overflow-hidden"
                  style={{
                    animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
                  }}
                >
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Icon */}
                  <div className="relative mb-4 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                    {skill.icon}
                  </div>
                  
                  {/* Label */}
                  <p className="relative text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">
                    {skill.label}
                  </p>
                  
                  {/* Decorative dot */}
                  <div className="absolute top-3 right-3 w-2 h-2 bg-teal-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {getDisplayedSkills().length === 0 && (
              <div className="text-center py-16">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 dark:bg-teal-900/50 rounded-full mb-4">
                  <Settings className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                </div>
                <div className="text-gray-500 dark:text-gray-400 text-lg font-medium mb-2">
                  No skills found
                </div>
                <div className="text-gray-400 dark:text-gray-500 text-sm">
                  Try selecting a different category
                </div>
              </div>
            )}
          </div>
          
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;