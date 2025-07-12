'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, School, Globe, Quote } from 'lucide-react';

export default function About() {
    return (
        <section className="relative overflow-hidden text-gray-800">
            <div className="flex flex-col-reverse items-center lg:flex-row gap-20 py-20 px-6 sm:px-12 lg:px-24 xl:px-40 bg-gradient-to-br from-white via-blue-50 to-red-50 relative">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
                    <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-blue-400 mix-blend-multiply filter blur-xl"></div>
                    <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-red-300 mix-blend-multiply filter blur-xl"></div>
                </div>

                <motion.div
                    className="w-full lg:w-1/2 flex flex-col justify-center gap-6 z-10"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <div className="inline-block">
                        <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold text-red-600 bg-red-100">
                            About Our Institution
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                        Discover <span className="bg-clip-text text-blue-500">Burari Public School</span>
                    </h1>
                    <div className="space-y-4">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Founded by Ved Prakash Educational Trust, our school empowers young minds through academic
                            excellence, innovation, and holistic development. Rooted in values, inspired by progress.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            From AI-powered classrooms to GPS-enabled transport, we offer future-ready education with
                            robust infrastructure, modern labs, and global exposure.
                        </p>
                    </div>
                    <div className="flex gap-4 mt-4">
                        <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            Explore Programs
                        </button>
                        <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition">
                            Meet Our Faculty
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    className="w-full lg:w-1/2 relative z-10"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className="relative">
                        <img
                            src="https://buraripublicschool.com/wp-content/uploads/2023/12/1e312570-eeff-408d-aed5-5de3664fc7ce.jpg"
                            alt="Burari Public School Campus"
                            className="w-full h-auto max-h-[500px] object-cover rounded-xl shadow-2xl border-8 border-white"
                        />
                        <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                            <div className="flex items-center gap-2">
                                <div className="p-2 bg-blue-100 rounded-full">
                                    <School className="w-5 h-5 text-blue-600" />
                                </div>
                                <span className="font-semibold text-sm">Since 2005</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="px-6 sm:px-12 lg:px-24 xl:px-40 py-16 bg-white">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Burari Public School?</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We combine tradition with innovation to create a learning environment that nurtures every student's potential.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            icon: <Award className="w-8 h-8 text-blue-600" />,
                            label: "Certified Teachers",
                            bg: "bg-blue-100"
                        },
                        {
                            icon: <BookOpen className="w-8 h-8 text-red-600" />,
                            label: "Modern Curriculum",
                            bg: "bg-red-100"
                        },
                        {
                            icon: <School className="w-8 h-8 text-blue-600" />,
                            label: "Smart Classes",
                            bg: "bg-blue-100"
                        },
                        {
                            icon: <Globe className="w-8 h-8 text-red-600" />,
                            label: "Global Exposure",
                            bg: "bg-red-100"
                        }
                    ].map(({ icon, label, bg }, i) => (
                        <motion.div
                            key={i}
                            className="group p-5 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-transparent"
                            whileHover={{ y: -5 }}
                        >
                            <div className='flex items-center  gap-6'>
                                <div className={`${bg} p-4 rounded-full w-14 h-14 flex items-center justify-center mb-2`}>
                                    {icon}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{label}</h3>
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}