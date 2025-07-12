import { Instagram, Linkedin, Twitter } from 'lucide-react';
import React from 'react';

export default function Team() {
    const members = [
        {
            name: 'Mayank Kansal',
            subject: "Mathematics",
            position: "Maths Teacher",
            expertise: "Algebra & Calculus Specialist"
        },
        {
            name: 'Priyanka Rawat',
            subject: "English",
            position: "English Teacher",
            expertise: "Literature & Creative Writing"
        },
        {
            name: 'Ayushi Bisht',
            subject: "Science",
            position: "Science Teacher",
            expertise: "Physics & Chemistry Expert"
        },
        {
            name: 'Saniya Manral',
            subject: "Arts",
            position: "Arts Teacher",
            expertise: "Fine Arts & Design"
        },
        {
            name: 'Dheeraj Patel',
            subject: "Social Studies",
            position: "SST Teacher",
            expertise: "History & Geography"
        },
        {
            name: 'Disha Bangari',
            subject: "Accountancy",
            position: "Accountancy Teacher",
            expertise: "Financial Accounting Pro"
        }
    ];

    return (
        <div className="max-w-6xl mx-auto px-6 sm:px-6 lg:px-10 py-20">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                    Meet Our <span className="text-indigo-600">Expert Faculty</span>
                </h2>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    Passionate educators dedicated to your academic success
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {members.map((member, index) => (
                    <div
                        key={index}
                        className="relative bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 group"
                    >
                        <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                            <div className="text-white text-6xl font-bold">
                                {member.name.charAt(0)}
                            </div>
                        </div>

                        <div className="p-6 text-center">
                            <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                            <p className="text-indigo-600 font-semibold">{member.position}</p>

                            <div className="mt-3 inline-block px-3 py-1 text-sm font-semibold text-white bg-indigo-500 rounded-full">
                                {member.subject}
                            </div>

                            <p className="mt-4 text-gray-600">{member.expertise}</p>

                            <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center space-x-4">
                                <a href="#" className="text-gray-400 hover:text-indigo-500">
                                    <Twitter />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-indigo-500">
                                    <Linkedin />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-indigo-500">
                                    <Instagram />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
