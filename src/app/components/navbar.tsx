"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { FaXmark } from 'react-icons/fa6';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';
import { TiThMenu } from 'react-icons/ti';
import { useTheme } from '../context/themeContext';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Navigation items
    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/projects", label: "Projects" },
        { href: "/contact", label: "Contact" },
        { href: "/skills", label: "Skills" }
    ];

    return (
        <nav className="fixed w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md z-50 border-b border-gray-100 dark:border-slate-800 shadow-lg transition-all duration-300">
            <div className="container max-w-7xl px-4 md:px-20 mx-auto">
                {/* Desktop Menu */}
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-emerald-500/25 transition-all duration-300 group-hover:scale-110">
                            <span className="text-white font-bold text-sm">JN</span>
                        </div>
                        <span className="hidden sm:block text-slate-800 dark:text-white font-semibold text-lg">Portfolio</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map(link => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative font-medium transition-all duration-300 hover:scale-105 ${
                                    pathname === link.href 
                                        ? 'text-emerald-600 dark:text-emerald-400' 
                                        : 'text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400'
                                } after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-emerald-500 after:to-teal-500 after:transition-all after:duration-300 hover:after:w-full ${
                                    pathname === link.href ? 'after:w-full' : ''
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        
                        {/* Theme Toggle */}
                        <button 
                            onClick={toggleTheme} 
                            className='p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 hover:scale-110'
                        >
                            {theme === "dark" ? (
                                <IoSunnyOutline className='w-5 h-5' />
                            ) : (
                                <IoMoonOutline className='w-5 h-5' />
                            )}
                        </button>
                    </div>

                    {/* Resume Button */}
                    <div className='hidden md:block'>
                        <a
                            href="https://drive.google.com/file/d/12G321p-9iwyEUW8yBmNoR6hlpcDpqg0W/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-medium rounded-xl hover:from-emerald-600 hover:to-teal-700 hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105"
                        >
                            Resume
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={toggleMobileMenu} 
                        className='md:hidden p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300'
                    >
                        {isMobileMenuOpen ? (
                            <FaXmark className='w-6 h-6' />
                        ) : (
                            <TiThMenu className='w-5 h-5' />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className='md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-gray-100 dark:border-slate-800'>
                        <div className='py-6 space-y-4'>
                            {navLinks.map((link) => (
                                <div key={link.href} onClick={toggleMobileMenu}>
                                    <Link
                                        href={link.href}
                                        className={`block py-2 px-4 rounded-lg font-medium transition-all duration-300 ${
                                            pathname === link.href 
                                                ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20' 
                                                : 'text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20'
                                        }`}
                                    >
                                        {link.label}
                                    </Link>
                                </div>
                            ))}
                            
                            {/* Mobile Theme Toggle */}
                            <button 
                                onClick={toggleTheme} 
                                className='flex items-center py-2 px-4 w-full text-left rounded-lg font-medium text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-300'
                            >
                                {theme === "dark" ? (
                                    <>
                                        <IoSunnyOutline className='w-5 h-5 mr-3' />
                                        Light Mode
                                    </>
                                ) : (
                                    <>
                                        <IoMoonOutline className='w-5 h-5 mr-3' />
                                        Dark Mode
                                    </>
                                )}
                            </button>
                            
                            {/* Mobile Resume Button */}
                            <div className="px-4">
                                <a
                                    href="https://drive.google.com/file/d/12G321p-9iwyEUW8yBmNoR6hlpcDpqg0W/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-medium rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300"
                                >
                                    Download Resume
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;