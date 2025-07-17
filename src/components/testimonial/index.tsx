'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { testimonials } from '@/utils/data/testmonial';
import Image from 'next/image';


export default function TestimonialSlider() {
    return (
        <div className="px-4 sm:px-8 lg:px-20 py-40 overflow-hidden bg-gray-50">
            <Swiper loop autoplay={{ delay: 2500, disableOnInteraction: false }} modules={[Autoplay]}
                spaceBetween={30} speed={1500} slidesPerView={3}
                breakpoints={{
                    300: { slidesPerView: 1 }, 640: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 },
                }} className="mySwiper h-[350px] w-[94%] max-xl:w-full" >
                {testimonials.map((item, idx) => (
                    <SwiperSlide key={idx} className="">
                        <div className={`relative rounded-xl px-6 max-sm:px-2 ${item.bg} text-white text-center flex flex-col justify-center items-center h-full shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                            <div className="relative w-24 h-24 rounded-full border-4 border-white shadow-xl overflow-hidden bg-white">
                                <Image src={item.image} alt={item.title} className="w-full h-full object-cover" loading="lazy" fill />
                            </div>

                            <h3 className="text-xl font-bold mt-6">{item.title}</h3>

                            <p className="text-sm mt-3 mb-6 px-2">{item.description}</p>

                            <div className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-300">
                                →
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
