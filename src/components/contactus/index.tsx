const contactDetails = new Map([
    ["Address", "857/1, Santnagar, Main Road, Burari, Delhi – 110084"],
    ["Phone No", "+011-41925327, 41925328"],
    ["Fax", "+91-9999214404"],
    ["Email", "nalandaschool95@gmail.com"]
]);

export default function ContactUs() {
    return (
        <section className="w-full py-10 flex justify-center items-center bg-white">
            <div className="w-[84%] max-lg:flex-col max-lg:w-[84%] max-sm:w-[91%] max-lg:justify-center max-lg:items-center flex gap-10">
                {/* Left Section */}
                <div className="w-[50%] max-lg:w-full flex flex-col  gap-5 max-sm:gap-2">
                    <h1 className="text-blue-500 text-4xl font-semibold">Contact Us.</h1>
                    <h2 className="text-2xl text-gray-800">Nalanda Modern Public School</h2>
                    <p className="text-gray-600 text-xl max-sm:text-[16px]">
                     Feel free to contact us for any queries. Whether it's about admissions, academics, or school facilities we're here to help you.
                    </p>
                    <div className="flex flex-col gap-3 text-gray-800">
                        {[...contactDetails].map(([label, value]) => (
                            <p key={label}>
                                <strong className="text-lg">{label}:</strong> {value}
                            </p>
                        ))}
                    </div>
                    <button className="px-10 py-3  text-white text-[18px] rounded-[8px] bg-gradient-to-r from-blue-600 to-blue-300 w-fit">
                        Explore More
                    </button>
                </div>

                {/* Right Section (Map) */}
                <div className="lg:w-[50%] w-full flex justify-center lg:justify-end">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.1639294474226!2d77.19550377550493!3d28.744522175603773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cffa701d6385f%3A0xacc6c194847ee592!2sSkillsYard!5e0!3m2!1sen!2sin!4v1751626988481!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-3xl border min-h-[350px]"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
