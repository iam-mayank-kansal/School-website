'use client';

import { AlignJustify, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const data = [
    { navanker: 'Home' },
    { navanker: 'About us' },
    { navanker: 'Admissions' },
    { navanker: 'Facilties' },
    { navanker: 'Student zone' },
    { navanker: 'Events' },
    { navanker: 'Contact us' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full bg-white px-10 max-sm:px-2 flex justify-between items-center h-[100px] z-20 absolute top-0 left-0 right-0">

            <AlignJustify className="hidden max-xl:flex w-[40px] h-[35px]  text-blue-600 cursor-pointer"
                onClick={() => { setIsOpen(true) }} />

            <div className={`fixed bg-white inset-0 w-full hidden  max-xl:flex justify-center items-start h-full transition-all duration-500 z-50 ${isOpen ? '-translate-x-0 overflow-hidden' : '-translate-x-full'}`} >
                <X className=' rounded-[8px] absolute left-5 top-5 w-[40px]  h-[35px] bg-gradient-to-r from-blue-600 to-blue-300 text-white' onClick={() => { setIsOpen(false) }} />
                <div className='w-full h-[60%] flex justify-evenly mt-20 pl-6 flex-col '>
                    {data.map((items, index) => (
                        <Link key={index} className="text-xl hover:text-blue-500 transition-all" href="#">
                            {items.navanker}
                        </Link>
                    ))}

                </div>

            </div>

            <Image src="/images/navbar-img.png" alt="Logo" className="max-sm:w-[100px] max-sm:h-[50px]" width={200} height={40} />
            <div className="w-full flex items-center font-semibold justify-evenly max-xl:gap-10 h-[90%] max-xl:hidden">
                {data.map((items, index) => (
                    <Link key={index} className="text-xl hover:text-blue-500 transition-all" href="#">
                        {items.navanker}
                    </Link>
                ))}
            </div>

            <button className="px-14 text-[18px] max-sm:text-[15px] py-3 max-[370px]:px-4 max-sm:px-8 max-sm:py-2 bg-gradient-to-r from-blue-600 to-blue-300 text-white rounded-md shadow-md">
                Enquiry
            </button>
        </nav>
    );
}
