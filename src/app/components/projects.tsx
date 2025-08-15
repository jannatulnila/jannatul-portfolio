
"use client";
import { projects } from "@/contents/projects";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-6 md:py-8 lg:py-12">
        <div className="container max-w-7xl px-4 md:px-20 mx-auto">
           <h1 className="text-xl md:text-3xl font-bold mb-5 text-center text-teal-600">
        My Projects
      </h1>
      <div className="flex flex-col gap-8">
        {projects.map((project, index) => (
          <article
            key={index}
            className="bg-white dark:bg-dark/50 rounded-lg p-6 flex flex-col md:flex-row items-center md:items-start gap-6 shadow hover:shadow-lg transition-shadow duration-300"
          >
            {/* Image container */}
            <div className="w-full md:w-1/2 rounded-lg overflow-hidden">
              <Slider {...settings}>
                {project.images.map((img, i) => (
                  <Image
                    key={i}
                    src={img}
                    width={800}
                    height={450}
                    className="w-full h-auto rounded-lg"
                    alt={project.title}
                  />
                ))}
              </Slider>
            </div>

            {/* Text content */}
            <div className="w-full md:w-1/2 flex flex-col">
              <h4 className="text-xl font-semibold mb-2 text-teal-700 dark:text-teal-400">
                {project.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-4">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 mt-auto flex-wrap">
                <Link
                  href={project.liveLink}
                  target="_blank"
                  className="flex items-center gap-2 text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 transition-colors"
                >
                  <FaExternalLinkAlt className="w-3 h-4" />
                  <span>Live Link</span>
                </Link>
                <Link
                  href={project.clientRepo}
                  target="_blank"
                  className="flex items-center gap-2 text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 transition-colors"
                >
                  <FaGithub className="w-5 h-5" />
                  <span>Client</span>
                </Link>
                {project.serverRepo && (
                  <Link
                    href={project.serverRepo}
                    target="_blank"
                    className="flex items-center gap-2 text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 transition-colors"
                  >
                    <FaGithub className="w-5 h-5" />
                    <span>Server</span>
                  </Link>
                )}
                <div>
                  <Link
                    href={`/projects/${project.id}`}
                    className="text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 font-medium hover:underline"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
        </div>
      
    </section>
  );
};

export default Projects;
