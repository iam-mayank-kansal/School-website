import { eventData } from "@/utils/data/event";
import Image from "next/image";

export default function Event() {

    return (
        <section className="w-full py-10 flex flex-col my-10 gap-8 justify-center items-center bg-gray-50">
           <div className="flex flex-col justify-center items-center w-[84%] max-md:w-full ">
             <h2 className="text-4xl p-5 font-semibold text-center">Our School Event</h2>
            <p className="text-[18px] text-gray-400 text-center">The school events calendar was packed with exciting activities, including sports day, cultural festivals, and academic competitions, fostering a vibrant community spirit and student engagement.

            </p>
           </div>
            <div className="w-[84%] grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-16">
                {eventData.map((event, index) => (
                    <div
                        key={index}
                        className="w-full max-w-[380px] h-[430px]  mx-auto flex flex-col bg-white rounded-[10px] shadow-md overflow-hidden"
                    >
                        <div className="relative  w-full h-[230px]">
                            <Image
                                src={`/${event.img}`}
                                alt={event.heading}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="p-4 flex flex-col flex-grow gap-1">
                            <h3 className="text-xl font-semibold mb-2">{event.heading}</h3>
                            <h3 className="text-sm text-gray-600 mb-1">{event.para}</h3>
                            <p className="text-sm text-gray-600 mb-1">📅 {event.data}</p>
                            <p className="text-sm text-gray-600">📍 {event.loc}</p>
                            <div className="mt-auto pt-4">
                                <button className="w-full cursor-pointer text-white text-[16px] rounded-[8px] py-3 bg-gradient-to-r from-blue-600 to-blue-400">
                                    Explore Event
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
