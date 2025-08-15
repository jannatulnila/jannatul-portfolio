
import { course, education } from '@/contents/Education';
import React from 'react';
import { GraduationCap, BookOpen, Calendar, MapPin, Award, CheckCircle } from 'lucide-react';

const Education = () => {
    return (
        <section className="py-6 md:py-8 lg:py-12">
            <div className='container max-w-7xl px-4 md:px-20 mx-auto'>
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
                        Academic Journey
                    </div>
                    <h2 className='text-xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4'>
                        Education & <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">Learning</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-md max-w-2xl mx-auto">
                        My academic background and continuous learning journey in technology
                    </p>
                </div>

                {/* Education Cards */}
                <div className='grid gap-8 mb-12'>
                    {/* Formal Education */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-xl shadow-lg">
                                <GraduationCap className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                Formal Education
                            </h3>
                        </div>
                        
                        {education.map((edu, index) => (
                            <article 
                                key={index} 
                                className='group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 p-8 border border-gray-100 dark:border-gray-700 relative overflow-hidden'
                            >
                                {/* Decorative gradient */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-emerald-500"></div>
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-teal-400/10 to-emerald-400/10 rounded-full -translate-y-12 translate-x-12"></div>
                                
                                <div className="space-y-4">
                                    {/* Degree Title */}
                                    <h4 className='text-2xl font-bold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors mb-3'>
                                        {edu.degree}
                                    </h4>
                                    
                                    {/* Info Grid */}
                                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                                        <div className="flex items-center gap-3">
                                            <div className="flex items-center justify-center w-8 h-8 bg-teal-100 dark:bg-teal-900/50 rounded-lg">
                                                <BookOpen className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">Major</p>
                                                <p className='text-gray-700 dark:text-gray-300 font-medium'>{edu.major}</p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center gap-3">
                                            <div className="flex items-center justify-center w-8 h-8 bg-emerald-100 dark:bg-emerald-900/50 rounded-lg">
                                                <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">Institution</p>
                                                <p className='text-gray-700 dark:text-gray-300 font-medium'>{edu.institution}</p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center gap-3 md:col-span-2">
                                            <div className="flex items-center justify-center w-8 h-8 bg-cyan-100 dark:bg-cyan-900/50 rounded-lg">
                                                <Calendar className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">Duration</p>
                                                <p className='text-gray-700 dark:text-gray-300 font-medium'>{edu.duration}</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Highlights */}
                                    {edu.highlights && edu.highlights.length > 0 && (
                                        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                                            <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                                                <Award className="w-4 h-4 text-teal-600" />
                                                Key Highlights
                                            </h5>
                                            <ul className="space-y-2">
                                                {edu.highlights.map((highlight, i) => (
                                                    <li key={i} className='flex items-start gap-3 text-gray-600 dark:text-gray-300'>
                                                        <CheckCircle className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
                                                        <span>{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Courses & Certifications */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-xl shadow-lg">
                                <BookOpen className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                Courses & Certifications
                            </h3>
                        </div>
                        
                        {course.map((crs, index) => (
                            <article 
                                key={index} 
                                className='group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 p-8 border border-gray-100 dark:border-gray-700 relative overflow-hidden'
                            >
                                {/* Decorative gradient */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500"></div>
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-400/10 to-cyan-400/10 rounded-full -translate-y-12 translate-x-12"></div>
                                
                                <div className="space-y-4">
                                    {/* Course Title */}
                                    <h4 className='text-2xl font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors mb-3'>
                                        {crs.course}
                                    </h4>
                                    
                                    {/* Duration */}
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="flex items-center justify-center w-8 h-8 bg-emerald-100 dark:bg-emerald-900/50 rounded-lg">
                                            <Calendar className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Duration</p>
                                            <p className='text-gray-700 dark:text-gray-300 font-medium'>{crs.duration}</p>
                                        </div>
                                    </div>
                                    
                                    {/* Highlights */}
                                    {crs.highlights && crs.highlights.length > 0 && (
                                        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                                            <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                                                <Award className="w-4 h-4 text-emerald-600" />
                                                Course Highlights
                                            </h5>
                                            <ul className="space-y-2">
                                                {crs.highlights.map((highlight, i) => (
                                                    <li key={i} className='flex items-start gap-3 text-gray-600 dark:text-gray-300'>
                                                        <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                                                        <span>{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;