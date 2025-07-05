export default function Subscribe() {
    return (
        <div className="w-full h-[400px] max-sm:my-10 max-sm:h-full flex justify-center items-center">

            <div className="w-[84%]  h-[70%]   max-sm:py-10 max-sm:w-[95%] flex flex-col justify-center items-center gap-5 rounded-[8px] bg-gradient-to-r from-blue-600 to-blue-700">
                <h1 className="text-4xl max-sm:text-2xl max-sm:text-center font-semibold text-white">Subscribe To Newsletter</h1>
                <p className="text-lg text-white text-center w-[50%] max-sm:w-[95%]">The Campaign for the Kingster University is the largest fundraising campaign in history. With a historic</p>
                <div className="flex gap-8 w-[70%] max-sm:w-[90%] max-sm:gap-4 max-sm:flex-col justify-center">
                    <input type="text" className="bg-white rounded-[8px] max-sm:w-full py-3 w-[55%] pl-8" placeholder="Your Email Address" />
                    <button className="bg-white text-black px-10 py-2.5 rounded-[8px]  text-xl " type="submit">Subscribe</button>
                </div>
            </div>

        </div>
    )
}