"use client"
import { projects } from '@/contents/projects';
import Image from 'next/image';
import Link from 'next/link';
import React from "react";
import Slider from "react-slick"
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Projects = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true, 
        autoplaySpeed: 2000, 
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 1 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 }
            },
        ]
    };

    return (
        <section className='py-12  container max-w-6xl mx-auto '>
            <h1 className='text-3xl font-bold  mb-12 text-center'>My Projects</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {
                    projects.map((project, index) => (
                        <article key={index} className='bg-white dark:bg-dark/50 rounded-lg shadow-md p-6'>
                            <div className='relative aspect-video mb-4 rounded-lg overflow-hidden'>
                                <Slider {...settings} >
                                    {
                                        project.images.map((img, index) => (

                                            <Image key={index}
                                                src={img}
                                                width={800}
                                                height={450}
                                                className='w-full h-auto rounded-lg'
                                                alt={project.title} />

                                        ))
                                    }
                                </Slider>
                            </div>
                            <h4 className='text-xl font-semibold mb-2'>{project.title}</h4>
                            <p className=' text-gray-600 dark:text-gray-300 mb-4'>{project.description}</p>
                            <div className='flex flex-wrap gap-2 mb-4'>
                                {
                                    project.techStack.map((tech,i) => (
                                        <span key={i} className='px-3 py-1 bg-primary/10 text-primary rounded-full text-sm'>{tech}</span>
                                    ))
                                }
                            </div>
                            <div className='flex gap-4 mt-2'>
                                <Link href={project.liveLink} target='_blank' className='flex items-center gap-2 text-secondary hover:text-primary transition-colors '><FaExternalLinkAlt className='w-3 h-4' /><span>Live Link</span> </Link>
                                <Link href={project.clientRepo} target='_blank' className='flex items-center gap-2 text-secondary hover:text-primary transition-colors '><FaGithub className='w-5 h-5' /><span>Client</span> </Link>
                                
                                  {
                                    project.serverRepo && <Link href={project.serverRepo} target='_blank' className='flex items-center gap-2 text-secondary hover:text-primary transition-colors '><FaGithub className='w-5 h-5' /><span>Server</span> </Link>
                                  }
                            </div>

                        </article>
                    ))
                }
            </div>

        </section>
    );
};

export default Projects;