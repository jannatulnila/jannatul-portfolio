'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { projects } from '@/contents/projects';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProjectDetails = () => {
  const params = useParams(); // get route params in client
  const [project, setProject] = useState<typeof projects[0] | null>(null);

  useEffect(() => {
    if (params?.id) {
      const found = projects.find(p => p.id === params.id);
      setProject(found || null);
    }
  }, [params]);

  if (!project) {
    return <p className="text-center py-10 dark:text-gray-300">Project not found</p>;
  }

  return (
    <section className="container mx-auto px-4 md:px-20 py-10">
      <h1 className="text-3xl font-bold mb-4 text-teal-600 dark:text-teal-400">{project.title}</h1>

      {/* Image Slider */}
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        className="mb-6 rounded-lg overflow-hidden"
      >
        {project.images.map((img, i) => (
          <SwiperSlide key={i}>
            <Image
              src={img}
              width={1200}
              height={700}
              alt={project.title}
              className="rounded-lg object-cover w-full h-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Description */}
      <div className="flex flex-col mb-6">
        <h3 className="font-semibold mb-2 text-teal-600 dark:text-teal-400">Description:</h3>
        <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
      </div>

      {/* Tech Stack */}
      <h3 className="font-semibold mb-2 text-teal-600 dark:text-teal-400">Tech Stack:</h3>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.techStack.map((tech, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-300 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Challenges */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2 text-teal-600 dark:text-teal-400">Challenges Faced:</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
          {project.challengesFaced.map((ch, i) => <li key={i}>{ch}</li>)}
        </ul>
      </div>

      {/* Future Improvements */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2 text-teal-600 dark:text-teal-400">Future Improvements / Plans:</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
          {project.futureImprovements.map((im, i) => <li key={i}>{im}</li>)}
        </ul>
      </div>

      <Link href="/projects" className="text-teal-600 hover:underline dark:text-teal-400">
        ← Back to Projects
      </Link>
    </section>
  );
};

export default ProjectDetails;
