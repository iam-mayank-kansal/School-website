'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
    {
        title: 'Language Proficiency Courses',
        description: 'Our language proficiency courses help students become fluent in multiple languages, opening up new opportunities for them.',
        image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e',
        bg: 'bg-purple-500',
    },
    {
        title: 'Classes Completed On Time',
        description: 'We provide reliable and timely classes, ensuring a structured and productive learning journey for our students.',
        image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e',
        bg: 'bg-orange-500',
    },
    {
        title: 'Research Papers Submitted Fully',
        description: 'Our students submit groundbreaking research papers, contributing to knowledge in diverse fields.',
        image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e',
        bg: 'bg-teal-600',
    },
    {
        title: 'Language Proficiency Courses',
        description: 'Our language proficiency courses help students become fluent in multiple languages, opening up new opportunities for them.',
        image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e',
        bg: 'bg-purple-500',
    },
    {
        title: 'Classes Completed On Time',
        description: 'We provide reliable and timely classes, ensuring a structured and productive learning journey for our students.',
        image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e',
        bg: 'bg-orange-500',
    },
    {
        title: 'Research Papers Submitted Fully',
        description: 'Our students submit groundbreaking research papers, contributing to knowledge in diverse fields.',
        image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e',
        bg: 'bg-teal-600',
    },
];

export default function TestimonialSlider() {
    return (
        <div className="px-4 sm:px-8 lg:px-20 py-40 overflow-hidden bg-gray-50">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1} 
                centeredSlides={false}
                pagination={{
                    clickable: true,
                    bulletClass: 'swiper-pagination-bullet !bg-gray-300 !opacity-100 !mx-1.5',
                    bulletActiveClass: 'swiper-pagination-bullet-active !bg-gray-800'
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                className="!pb-12 !overflow-visible"
            >
                {testimonials.map((item, idx) => (
                    <SwiperSlide key={idx} className="!h-auto">
                        <div className={`relative rounded-xl pt-24 pb-8 px-6 ${item.bg} text-white text-center flex flex-col items-center h-full shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full border-4 border-white shadow-xl overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>

                            <h3 className="text-xl font-bold mt-4">{item.title}</h3>
                            <p className="text-sm mt-3 mb-6">{item.description}</p>

                            <div className="mt-auto">
                                <div className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-300 mx-auto">
                                    →
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="flex justify-center gap-4 mt-8">
                <button className="swiper-button-prev w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors">
                    ←
                </button>
                <button className="swiper-button-next w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors">
                    →
                </button>
            </div>
        </div>
    );
}