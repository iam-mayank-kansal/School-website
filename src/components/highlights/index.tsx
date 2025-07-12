'use client';
import React, { useState } from 'react';

export default function Highlights() {
    const highlightsData = [
        {
            title: 'Interactive Live Classes',
            content: `Our live classes are designed to keep students actively involved, with real-time discussions, instant doubt-solving, and fun learning activities led by expert teachers.`,
            image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&auto=format&fit=crop&q=60',
        },
        {
            title: 'Daily Practice Tests',
            content: `With short daily quizzes and subject-wise tests, students strengthen their concepts, track their performance, and build exam confidence over time.`,
            image: 'https://plus.unsplash.com/premium_photo-1735775899834-24b5b61bc995?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEzfHxzY2hvb2wlMjB0ZXN0c3xlbnwwfHwwfHx8MA%3D%3D',
        },
        {
            title: 'Round-the-Clock Support',
            content: `Whether it’s a late-night doubt or help with homework, our support team and mentors are just a message away — 24/7 academic assistance made easy.`,
            image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&auto=format&fit=crop&q=60',
        },
        {
            title: 'Experienced & Caring Faculty',
            content: `Our highly qualified teachers are not only experts in their subjects but also dedicated mentors who genuinely care about each student’s growth and success.`,
            image: 'https://images.unsplash.com/photo-1719159381981-1327b22aff9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbXB1dGVyJTIwY2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D',
        },
    ];

    const [activeHighlight, setActiveHighlight] = useState(highlightsData[0].title);

    return (
        <div className='py-14 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-white via-blue-50 to-red-50'>
            <h1 className='text-4xl md:text-5xl font-bold text-center mb-10'>
                Discover What Makes Us Different
            </h1>

            <div className='flex flex-wrap justify-center gap-4 mb-12'>
                {highlightsData.map(({ title }) => (
                    <button
                        key={title}
                        onClick={() => setActiveHighlight(title)}
                        className={`px-5 py-2 rounded-full text-sm sm:text-base cursor-pointer font-medium shadow transition duration-300 ${activeHighlight === title
                            ? 'bg-blue-600 text-white scale-105'
                            : 'bg-white border border-blue-300 hover:bg-blue-100'
                            }`}
                    >
                        {title}
                    </button>
                ))}
            </div>

            <div className='flex justify-center items-center'>
                {highlightsData.map(({ title, content, image }) => (
                    activeHighlight === title && (
                        <div
                            key={title}
                            className='flex flex-col lg:flex-row items-center gap-10 bg-white shadow-xl border border-blue-100 rounded-3xl p-6 md:p-10 max-w-6xl transition-all duration-300'
                        >
                            <div className='max-w-xl text-center lg:text-left'>
                                <h2 className='text-2xl md:text-3xl font-semibold text-blue-800 mb-4'>
                                    {title}
                                </h2>
                                <p className='text-gray-700 text-md md:text-lg leading-relaxed'>
                                    {content}
                                </p>
                            </div>
                            <img
                                src={image}
                                alt={title}
                                className='w-[320px] md:w-[400px] h-[220px] md:h-[300px] object-cover rounded-xl shadow-md'
                            />
                        </div>
                    )
                ))}
            </div>
        </div>
    );
}
