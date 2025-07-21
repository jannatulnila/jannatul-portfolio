"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { FaXmark } from 'react-icons/fa6';
import {  IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';
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
        { href: "/contact", label: "Contact" }
    ];

    return (
        <nav className="fixed w-full bg-white/80 dark:bg-dark/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-700 shadow-sm transition-colors">
            <div className="container max-w-7xl mx-auto px-5">
                {/* desktop menu */}
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="text-xl font-bold text-primary">Jannatul</Link>

                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map(link => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`transition-colors ${pathname === link.href ? 'text-primary' : ''}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <button onClick={toggleTheme} className='p-2 rounded-lg hover hover:bg-gray-100  dark:text-white hover:text-primary dark:hover:bg-gray-800 transition-colors '>
                            {
                                theme === "dark" ? (
                                    <IoSunnyOutline className='w-5 h-5' />
                                ) : (
                                    <IoMoonOutline  className='w-5 h-5' />
                                )
                            }
                        </button>
                    </div>
                    <div  className='hidden md:block  '>
                        <a
                            href="https://drive.google.com/file/d/12G321p-9iwyEUW8yBmNoR6hlpcDpqg0W/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block  dark:text-white p-2 rounded-lg hover:text-primary transition border dark:border-white"
                        >
                            Resume
                        </a>
                    </div>
                    <button onClick={toggleMobileMenu} className='md:hidden p-2 rounded-lg hover:bg-gray-100 dark::hover:bg-gray-800 transition-colors cursor-pointer'>
                        {
                            isMobileMenuOpen ? (<FaXmark className='w-6 h-6' />) : (<TiThMenu className='w-5 h-5' />)
                        }
                    </button>

                </div>


                {/* mobile menu (optional) */}
                {
                    isMobileMenuOpen && (
                        <div className='lg:hidden  md:hidden'>
                            <div className='py-4 space-y-4 '>
                                {navLinks.map((link) => (
                                    <div key={link.href} onClick={toggleMobileMenu}>
                                        <Link
                                            href={link.href}
                                            className={`transition-colors ${pathname === link.href ? 'text-primary' : ''}`}
                                        >
                                            {link.label}
                                        </Link>
                                    </div>
                                ))}
                                <button onClick={toggleTheme} className='flex items-center py-2 hover:text-primary transition-colors'>
                                    {
                                        theme === "dark" ? (
                                            <><IoSunnyOutline className='w-5 h-5 mr-2' /> Light Mode</>
                                        ) : (
                                            <><IoMoonOutline  className='w-5 h-5' />Dark Mode</>
                                        )
                                    }
                                </button>
                                <div>
                                    <a
                                        href="https://drive.google.com/file/d/12G321p-9iwyEUW8yBmNoR6hlpcDpqg0W/view?usp=sharing"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block  dark:text-white border dark:border-white py-1 rounded-lg hover:text-primary transition"
                                    >
                                        Resume
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </nav>
    );
};

export default Navbar;
