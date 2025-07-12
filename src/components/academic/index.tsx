'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, BookMarked, BrainCircuit, FileDown, ChevronRight, Award, FlaskConical, Landmark, Palette } from 'lucide-react';
import Link from 'next/link';

const streams = [
    {
        name: 'Science',
        description: 'Empowering students with analytical thinking and practical lab-based knowledge.',
        subjects: ['Physics', 'Chemistry', 'Biology', 'Math', 'Computer Science'],
        color: 'from-blue-500 to-blue-400',
        icon: <FlaskConical className="text-blue-100" />,
        bgColor: 'bg-blue-500'
    },
    {
        name: 'Commerce',
        description: 'Creating future business leaders and financial experts.',
        subjects: ['Business Studies', 'Economics', 'Accountancy', 'Math', 'Entrepreneurship'],
        color: 'from-emerald-500 to-emerald-400',
        icon: <Landmark className="text-emerald-100" />,
        bgColor: 'bg-emerald-500'
    },
    {
        name: 'Arts',
        description: 'Exploring society, language, and creativity through an interdisciplinary approach.',
        subjects: ['History', 'Political Science', 'Sociology', 'Psychology', 'Literature'],
        color: 'from-purple-500 to-purple-400',
        icon: <Palette className="text-purple-100" />,
        bgColor: 'bg-purple-500'
    }
];

export default function Academic() {
    const [active, setActive] = useState(0);

    return (
        <section className="px-4 sm:px-8 lg:px-16 py-16 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 mb-4">
                        <Award className="mr-2 h-4 w-4" /> Academic Excellence
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text ">
                        Our Academic Programs
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Discover a world of learning designed to nurture future innovators, leaders, and creators through our specialized streams.
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {streams.map((s, i) => (
                        <motion.button
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center ${active === i
                                ? `${s.bgColor} text-white shadow-lg`
                                : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                                }`}
                            onClick={() => setActive(i)}
                        >
                            <span className="mr-2">{s.icon}</span>
                            {s.name}
                        </motion.button>
                    ))}
                </div>

                <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className={`rounded-3xl bg-gradient-to-br ${streams[active].color} p-8 shadow-2xl overflow-hidden relative`}
                >
                    <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-white/10"></div>
                    <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-white/5"></div>

                    <div className="relative z-10">
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="md:w-1/2">
                                <h3 className="text-3xl font-bold mb-4 text-white flex items-center gap-3">
                                    <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                                        {streams[active].icon}
                                    </div>
                                    {streams[active].name} Stream
                                </h3>
                                <p className="text-lg text-white/90 mb-8">{streams[active].description}</p>

                                <div className="mt-6">
                                    <h4 className="text-xl font-semibold mb-3 text-white flex items-center gap-2">
                                        <FileDown className="text-white/90" />
                                        Curriculum Resources:
                                    </h4>
                                    <ul className="space-y-2">
                                        <li>
                                            <Link
                                                href={`/pdfs/${streams[active].name.toLowerCase()}-overview.pdf`}
                                                target="_blank"
                                                className="hover:underline flex items-center text-white/90 hover:text-white transition"
                                            >
                                                <ChevronRight className="mr-2 h-4 w-4" />
                                                {streams[active].name} Detailed Syllabus
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/pdfs/common-timetable.pdf"
                                                target="_blank"
                                                className="hover:underline flex items-center text-white/90 hover:text-white transition"
                                            >
                                                <ChevronRight className="mr-2 h-4 w-4" />
                                                Annual Timetable & Schedule
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/pdfs/career-pathways.pdf"
                                                target="_blank"
                                                className="hover:underline flex items-center text-white/90 hover:text-white transition"
                                            >
                                                <ChevronRight className="mr-2 h-4 w-4" />
                                                Career Pathways Guide
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="md:w-1/2">
                                <h4 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
                                    <BookOpen className="text-white/90" />
                                    Core Subjects
                                </h4>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {streams[active].subjects.map((subject, i) => (
                                        <motion.div
                                            key={i}
                                            whileHover={{ y: -3 }}
                                            className="rounded-xl p-4 bg-white/20 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all"
                                        >
                                            <div className="flex items-center">
                                                <div className="p-2 mr-3 rounded-lg bg-white/10">
                                                    <BookMarked className="h-5 w-5 text-white" />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-white">{subject}</h4>
                                                    <p className="text-sm text-white/70">Comprehensive curriculum</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-6 border-t border-white/20">
                            <Link
                                href="/admissions"
                                className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-indigo-600 font-medium hover:bg-gray-100 transition shadow-md hover:shadow-lg"
                            >
                                Learn About Admissions
                                <ChevronRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}