"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import { motion} from "framer-motion"
import { fadeIn, fadeInUp, slideInLeft, slideInRight } from '@/utils/animations';

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
      console.error("Error Sending Message", error);
    }
  };

  return (
    <section className="container mx-auto max-w-5xl px-4 py-16">
      <motion.h1 
       {...fadeInUp}className="text-4xl font-bold mb-10 text-center">Contact Me</motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side */}
        <motion.div
        {...slideInLeft}
         className="space-y-8">
            <motion.div {...fadeInUp}>
          <h2 className="text-2xl font-semibold">Get in Touch</h2>
          <p className="text-secondary text-lg max-w-md">
            I’d love to hear from you! Whether you have a project, idea, or just want to say hello.
          </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
           className="space-y-4"
            variants={fadeIn}
            initial="initial"
            animate="animate"
         >
            <motion.div className="flex items-center gap-4"
            variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}>
              <FaEnvelope className="w-5 h-5 text-primary" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <Link href="mailto:jannatulnila74@gmail.com" className="text-secondary hover:text-primary">
                  jannatulnila74@gmail.com
                </Link>
              </div>
            </motion.div>
            <motion.div className="flex items-center gap-4"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaPhone className="w-5 h-5 text-primary" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <Link href="tel:+8801310427683" className="text-secondary hover:text-primary">
                  +880 1310-427683
                </Link>
              </div>
            </motion.div>
            <motion.div
            variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            className="flex items-center gap-4">
              <FaMapMarkerAlt className="w-5 h-5 text-primary" />
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-secondary">Gazipur, Dhaka</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Form */}
        <motion.div
        {...slideInRight}
        className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
          <motion.form onSubmit={handleSubmit} 
          variants={fadeIn}
            initial="initial"
            animate="animate"
          className="space-y-6">
            <motion.div
            variants={fadeInUp}
            >
              <label htmlFor="name" className="block text-md font-medium mb-2">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 dark:text-white border dark:border-gray-600 focus:ring-2 focus:ring-primary outline-none"
              />
            </motion.div>

            <motion.div
            variants={fadeInUp}
            >
              <label htmlFor="email" className="block text-md font-medium mb-2">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 dark:text-white border dark:border-gray-600 focus:ring-2 focus:ring-primary outline-none"
              />
            </motion.div>

            <motion.div
            variants={fadeInUp}
            >
              <label htmlFor="message" className="block text-md font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 dark:text-white border dark:border-gray-600 focus:ring-2 focus:ring-primary outline-none"
              />
            </motion.div>

            <motion.button
              type="submit"
              className="w-full py-2 px-4 rounded bg-primary text-white font-semibold hover:bg-primary/90 transition"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </motion.button>

            {status === "success" && (
              <motion.p
               initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              className="text-green-500 text-center">Message sent successfully!</motion.p>
            )}
            {status === "error" && (
              <motion.p
              initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-center">Failed to send message. Please try again.</motion.p>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
