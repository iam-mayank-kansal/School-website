"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const schoolGallery = [
  { imageUrl: "/images/classroom-img.jpg" },
  { imageUrl: "/images/school-front-img.jpg" },
  { imageUrl: "/images/art-exhibition.jpg" },
  { imageUrl: "/images/sport-img.jpg" },
];

export default function SchoolGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (url: string) => setSelectedImage(url);
  const closeModal = () => setSelectedImage(null);

  return (
    <section className="py-16 w-full flex flex-col gap-10 h-full relative bg-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">
          School <span className="text-blue-600">Gallery</span>
        </h2>
        <p className="text-gray-600">Explore highlights from our campus life</p>
      </div>

      <div className="px-8 max-sm:px-2 w-full">
        <Swiper
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[Autoplay]}
          spaceBetween={30}
          speed={1500}
          slidesPerView={3}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper h-[300px] max-sm:w-full w-[87%] mx-auto"
        >
          {schoolGallery.map((item, index) => (
            <SwiperSlide key={index} className="py-5">
              <div
                className="bg-white shadow-lg rounded-lg overflow-hidden h-full flex flex-col cursor-pointer"
                onClick={() => openModal(item.imageUrl)}
              >
                <Image
                  src={item.imageUrl}
                  alt="gallery-img"
                  width={400}
                  height={300}
                  className="w-full h-[300px] object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      
      {selectedImage && (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl max-h-[7000px]">
            <Image
              src={selectedImage}
              alt="fullscreen"
              width={1000}
              height={700}
              className="w-full h-full object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl font-bold"
              onClick={closeModal}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
