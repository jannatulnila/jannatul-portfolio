'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, User } from 'lucide-react';

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
    <section>
      <div className="container max-w-7xl px-4 md:px-10 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            Get In Touch
          </div>
          <h1 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Contact <span className="bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-md max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s work together to bring your ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto lg:items-stretch">
          {/* Left Column - Contact Info */}
          <div className="flex flex-col">
            {/* Info Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700 relative overflow-hidden flex-1 flex flex-col">
              {/* Decorative gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-500"></div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-400/10 to-blue-400/10 rounded-full -translate-y-12 translate-x-12"></div>
              
              <div className="flex flex-col flex-1">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    Let&apos;s Start a Conversation
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                    I&apos;d love to hear from you! Whether you have a project, idea, or just want to say hello, feel free to reach out.
                  </p>

                  {/* Contact Info Items */}
                  <div className="space-y-6">
                    {[
                      {
                        icon: <Mail className="w-6 h-6" />, 
                        title: 'Email',
                        value: 'jannatulnila74@gmail.com',
                        href: 'mailto:jannatulnila74@gmail.com',
                        color: 'bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'
                      },
                      {
                        icon: <Phone className="w-6 h-6" />, 
                        title: 'Phone',
                        value: '+880 1310-427683',
                        href: 'tel:+8801310427683',
                        color: 'bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'
                      },
                      {
                        icon: <MapPin className="w-6 h-6" />, 
                        title: 'Location',
                        value: 'Gazipur, Dhaka',
                        href: null,
                        color: 'bg-cyan-100 dark:bg-cyan-900/50 text-cyan-600 dark:text-cyan-400'
                      },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="group flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300 hover:scale-105"
                      >
                        <div className={`flex items-center justify-center w-12 h-12 rounded-xl ${item.color}`}>
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                          {item.href ? (
                            <Link
                              href={item.href}
                              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                            >
                              {item.value}
                            </Link>
                          ) : (
                            <p className="text-gray-600 dark:text-gray-300 font-medium">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Info */}
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700 mt-8">
                  <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <span>Usually responds within 24 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="flex flex-col">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700 relative overflow-hidden flex-1 flex flex-col">
              {/* Decorative gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-500"></div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-400/10 to-blue-400/10 rounded-full -translate-y-12 translate-x-12"></div>
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Send me a message
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Fill out the form below and I`ll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col flex-1">
                <div className="space-y-6 flex-1">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-gray-50 dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 focus:bg-white dark:focus:bg-gray-600 text-gray-900 dark:text-white placeholder-gray-500 transition-all duration-300 outline-none"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email address"
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-gray-50 dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 focus:bg-white dark:focus:bg-gray-600 text-gray-900 dark:text-white placeholder-gray-500 transition-all duration-300 outline-none"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="flex-1 flex flex-col">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Message
                    </label>
                    <div className="relative flex-1 flex flex-col">
                      <div className="absolute top-4 left-4 pointer-events-none z-10">
                        <MessageSquare className="w-5 h-5 text-gray-400" />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or just say hello..."
                        className="w-full h-full min-h-[120px] flex-1 pl-12 pr-4 py-4 rounded-xl bg-gray-50 dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 focus:bg-white dark:focus:bg-gray-600 text-gray-900 dark:text-white placeholder-gray-500 transition-all duration-300 outline-none resize-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="group w-full py-3 px-5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-600 hover:to-blue-700 text-white font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 transform disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3"
                  >
                    {status === 'loading' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </button>

                  {/* Status Messages */}
                  {status === 'success' && (
                    <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                      <p className="text-blue-700 dark:text-blue-400 text-center font-medium">
                        ✅ Message sent successfully! I`ll get back to you soon.
                      </p>
                    </div>
                  )}
                  
                  {status === 'error' && (
                    <div className="p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                      <p className="text-red-700 dark:text-red-400 text-center font-medium">
                        ❌ Failed to send message. Please try again or contact me directly.
                      </p>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
