'use client';
import React from 'react';
import { motion } from 'framer-motion';

const campusFeatures = [
    {
        src: "https://images.unsplash.com/photo-1622659097972-68f1d8c1829f?w=800&auto=format&fit=crop&q=80",
        label: "Playground",
        description: "State-of-the-art sports facilities for physical development"
    },
    {
        src: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=800&auto=format&fit=crop&q=80",
        label: "Study Hub",
        description: "Modern learning spaces designed for focus and collaboration"
    },
    {
        src: "https://plus.unsplash.com/premium_photo-1686920245013-365ae71428a2?w=800&auto=format&fit=crop&q=80",
        label: "Creative Arts",
        description: "Inspiring studios for artistic expression and innovation"
    },
    {
        src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop&q=80",
        label: "Smart Classes",
        description: "Technology-enhanced classrooms for interactive learning"
    },
    {
        src: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&auto=format&fit=crop&q=80",
        label: "Science Labs",
        description: "Fully equipped laboratories for hands-on experimentation"
    }
];

export default function CampusFeatures() {
    return (
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-24 px-4 sm:px-6 lg:px-8">
            {/* Section Heading */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-4xl mx-auto mb-16"
            >
                <span className="inline-block px-4 py-2 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-4">
                    Our Facilities
                </span>
                <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
                    Explore Our <span className="text-blue-600">Vibrant Campus</span>
                </h2>
                <p className="text-xl text-gray-600">
                    Discover spaces designed to inspire learning, creativity, and growth
                </p>
            </motion.section>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {campusFeatures.map((feature, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="group relative overflow-hidden rounded-2xl shadow-xl h-96"
                    >
                        <img
                            src={feature.src}
                            alt={feature.label}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent" />

                        <div className="relative -bottom-10 h-full flex flex-col justify-end p-8 text-white">
                            <div className="transform transition-all duration-500 group-hover:-translate-y-7">
                                <h3 className="text-2xl font-bold mb-2">{feature.label}</h3>
                                <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {feature.description}
                                </p>
                            </div>
                        </div>

                        <div className="absolute inset-0 overflow-hidden">
                            <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:left-full transition-all duration-1000" />
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center mt-16"
            >
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    Schedule a Campus Tour
                </button>
            </motion.div>
        </div>
    );
}