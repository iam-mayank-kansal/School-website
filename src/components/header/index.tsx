'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
    const [fitImage, setImage] = useState(0);

    const data = [
        "/images/header-img1.jpg", "/images/header-img2.jpg",
        "/images/header-img3.jpg",
        "/images/header-img4.webp",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setImage(prev => (prev + 1) % data.length);
        }, 7500);
        return () => clearInterval(interval);
    }, [fitImage, data.length]);


    return (
        <header className="w-full relative z-10 overflow-hidden h-[730px] max-sm:h-[700px] flex flex-col justify-center items-center
         ">
            <div className="absolute inset-0 bg-[#000000af] z-10"></div>

            {data.map((src, index) => (
                <Image key={index} src={src}
                    className={`!w-full !h-full absolute inset-0 object-cover object-center zooming-image transition-opacity duration-1000 ease-in-out ${fitImage === index ? 'opacity-100 z-0' : 'opacity-0'}`}
                    alt={`Background ${index}`}
                    width={1020} height={20} />
            ))}
            <span className="z-20 flex w-[50%] max-sm:w-full flex-col gap-[30px] max-sm:gap-5 justify-center items-center max-sm:items-center">
                <p className="tracking-widest w-full max-sm:text-[20px] text-center text-2xl text-white">
                    Welcome To Our School
                </p>
                <h1 className="text-[45px] w-[680px] max-sm:w-[100%] max-md:text-3xl max-sm:text-[27px] leading-[1.1] text-center font text-white tracking-wider ">
                    Empowering Young Minds for a Brighter Future
                </h1>
                <button className="px-16  cursor-pointer text-white text-[18px] rounded-[8px] py-3
                 bg-gradient-to-r from-blue-600 to-blue-300
                 ">
                    Explore More
                </button>
            </span>



        </header>
    );
}


