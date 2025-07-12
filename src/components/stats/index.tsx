'use client';
import React from 'react';
import { Calculator, Pencil, TentTree, User, Activity, BookOpen, Users, Feather } from 'lucide-react';

export default function StatsSection() {
    const stats = [
        {
            icon: Activity,
            value: 75,
            label: 'Outdoor Activities',
            description: 'Engaging outdoor programs for holistic development'
        },
        {
            icon: BookOpen,
            value: 237,
            label: 'Academic Lessons',
            description: 'Comprehensive curriculum across all subjects'
        },
        {
            icon: Users,
            value: 32,
            label: 'Dedicated Teachers',
            description: 'Certified and experienced faculty members'
        },
        {
            icon: Feather,
            value: 457,
            label: 'Creative Projects',
            description: 'Arts and innovation initiatives annually'
        }
    ];

    return (
        <section className="relative py-10 md:py-10 px-4 sm:px-8 lg:px-16 xl:px-24 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://buraripublicschool.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-08-at-12.48.24-PM.jpeg')] bg-cover bg-center bg-no-repeat brightness-75"></div>
            <div className="absolute inset-0 bg-blue-900/70"></div>

            <div className="relative max-w-7xl mx-auto z-10">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Our <span className="text-red-300">Achievements</span>
                    </h2>
                    <p className="text-blue-100 max-w-2xl mx-auto text-lg">
                        Numbers that reflect our commitment to excellence in education
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/20 hover:bg-white/10 cursor-pointer transition-all duration-300 group"
                        >
                            <div className="flex flex-col items-center text-center gap-4">
                                <div className="p-4 rounded-full ${index % 2 === 0 ? 'bg-blue-500/20' : 'bg-red-500/20'} group-hover:bg-white/20 transition-colors">
                                    <item.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                                </div>

                                <div className="flex items-center gap-2">
                                    <span className="text-3xl md:text-4xl font-bold text-white">
                                        {item.value}
                                    </span>
                                    <span className="text-xl text-red-300">+</span>
                                </div>

                                <h3 className="text-lg md:text-xl font-semibold text-white">
                                    {item.label}
                                </h3>
                                <p className="text-sm md:text-base text-blue-100">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="px-8 py-3 bg-red-600 cursor-pointer hover:bg-red-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg">
                        Discover More Achievements
                    </button>
                </div>
            </div>
        </section>
    );
}
