'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeIn, fadeInUp, slideInLeft, slideInRight } from '@/utils/animations';

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
      console.error('Error Sending Message', error);
    }
  };

  return (
    <section className="container mx-auto max-w-5xl px-4 py-16">
      <motion.h1
        {...fadeInUp}
        className="text-4xl font-bold mb-10 text-center"
      >
        Contact Me
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column */}
        <motion.div
          {...slideInLeft}
          className="space-y-8 bg-gray-100 dark:bg-dark/50 p-6 rounded-lg shadow-md"
        >
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl font-semibold">Get in Touch</h2>
            <p className="text-secondary text-lg max-w-md">
              I’d love to hear from you! Whether you have a project, idea, or just want to say hello.
            </p>
          </motion.div>

          <motion.div
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {[
              {
                icon: <FaEnvelope className="w-5 h-5 text-primary" />, 
                title: 'Email',
                value: (
                  <Link
                    href="mailto:jannatulnila74@gmail.com"
                    className="text-secondary hover:text-primary"
                  >
                    jannatulnila74@gmail.com
                  </Link>
                ),
              },
              {
                icon: <FaPhone className="w-5 h-5 text-primary" />, 
                title: 'Phone',
                value: (
                  <Link
                    href="tel:+8801310427683"
                    className="text-secondary hover:text-primary"
                  >
                    +880 1310-427683
                  </Link>
                ),
              },
              {
                icon: <FaMapMarkerAlt className="w-5 h-5 text-primary" />, 
                title: 'Location',
                value: <p className="text-secondary">Gazipur, Dhaka</p>,
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ x: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="flex items-center gap-4"
              >
                {item.icon}
                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  {item.value}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column (Form) */}
        <motion.div
          {...slideInRight}
          className="bg-gray-100 dark:bg-dark/50 p-6 rounded-lg shadow-md"
        >
          <motion.form
            onSubmit={handleSubmit}
            {...fadeIn}
            className="space-y-6"
          >
            {[
              { id: 'name', label: 'Name', type: 'text', rows: 1 },
              { id: 'email', label: 'Email', type: 'email', rows: 1 },
              { id: 'message', label: 'Message', type: 'textarea', rows: 4 },
            ].map((field) => (
              <motion.div key={field.id} {...fadeInUp}>
                <label htmlFor={field.id} className="block text-md font-medium mb-2">
                  {field.label}
                </label>
                {field.type === 'textarea' ? (
                  <textarea
                    id={field.id}
                    name={field.id}
                    rows={field.rows}
                    required
                    value={formData[field.id as keyof FormData] as string}
                    onChange={handleChange}
                    placeholder={`Enter your ${field.label.toLowerCase()}`}
                    className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 dark:text-white border dark:border-gray-600 focus:ring-2 focus:ring-primary outline-none"
                  />
                ) : (
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    required
                    value={formData[field.id as keyof FormData] as string}
                    onChange={handleChange}
                    placeholder={`Enter your ${field.label.toLowerCase()}`}
                    className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 dark:text-white border dark:border-gray-600 focus:ring-2 focus:ring-primary outline-none"
                  />
                )}
              </motion.div>
            ))}

            <motion.button
              type="submit"
              className="w-full py-2 px-4 rounded bg-primary text-white font-semibold hover:bg-primary/90 transition"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </motion.button>

            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-500 text-center"
              >
                Message sent successfully!
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-500 text-center"
              >
                Failed to send message. Please try again.
              </motion.p>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
