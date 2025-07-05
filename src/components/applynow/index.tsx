export default function ApplyNow() {
    return (
        <section className="w-full h-full flex justify-center items-center">
            <div className="w-[84%] max-sm:w-[95%] h-[500px] max-sm:h-[400px] overflow-hidden bg-[url('/images/about-bg.jpg')] rounded-[8px] bg-cover bg-center bg-no-repeat relative">
                <div className="w-[50%] max-lg:w-[70%] max-sm:w-[100%] max-sm:gap-4 max-sm:p-5 p-10 flex gap-8 flex-col  justify-center h-full absolute right-0 top-0">
                    <h1 className="text-4xl text-white max-sm:text-2xl font-semibold">Apply for Admission</h1>
                    <span className="text-xl text-white">Fall 2019 applications are now open</span>
                    <p className="text-md text-white ">We dont just give students an education and experiences that set them up for success in a career. We help them succeed in their career to discover a field theyre passionate about and dare to lead it.</p>
                    <button className="bg-red-600 border-none rounded-[8px] w-fit px-14 py-3 text-lg text-white ">Apply Now</button>

                </div>
            </div>

        </section>

    )
}