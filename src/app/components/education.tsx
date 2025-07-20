import { course, education } from '@/contents/Education';
import React from 'react';

const Education = () => {
    return (
        <section className='py-12 container maz-w-5xl mx-auto px-4'>
           <h2 className='text-3xl font-bold mb-12 text-center'>Education</h2>

           <div className='flex flex-col gap-6 mb-5'>
            {
              education.map((edu, index)=>(
                <article key={index} className='bg-white dark:bg-dark/50 rounded-lg shadow-md p-6'>
                  <h1 className='text-xl font-bold mb-2 hover:text-primary transition-colors'>{edu.degree}</h1>
                  <p className='text-gray-600 dark:text-gray-300 mb-2'>Major:{edu.major}</p>
                  <p className='text-gray-600 dark:text-gray-300 mb-2'>Institution:{edu.institution}</p>
                  <p className='text-gray-600 dark:text-gray-300 mb-2'>Duration:{edu.duration}</p>
                  {
                    edu.highlights.map((highlight, i)=>(
                            <li key={i} className='text-gray-600 dark:text-gray-300 mb-2'>{highlight}</li>
                        
                    ))
                  }
                  

                </article>
              ))  
            }
             {
              course.map((crs, index)=>(
                <article key={index} className='bg-white dark:bg-dark/50 rounded-lg shadow-md p-6'>
                  <h1 className='text-xl font-bold mb-2 hover:text-primary transition-colors'>{crs.course}</h1>
                  <p className='text-gray-600 dark:text-gray-300 mb-2'>Duration:{crs.duration}</p>
                  {
                    crs.highlights.map((highlight, i)=>(
                            <li key={i} className='text-gray-600 dark:text-gray-300 mb-2'>{highlight}</li>
                        
                    ))
                  }
                  

                </article>
              ))  
            }
           </div>
        </section>
    );
};

export default Education;