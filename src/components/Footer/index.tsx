import { footerSections, socialLinks } from "@/utils/data/footer";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="w-full flex flex-col gap-6 py-10 bg-[#161643] max-xl:h-full justify-center items-center">
      <div className="w-full flex max-xl:flex-wrap  justify-center items-center gap-x-16 max-sm:gap-2 max-md:py-10 px-10 max-md:px-2 max-sm:justify-start">
        <div className="w-[350px] max-sm:w-[95%] h-[350px] max-md:h-[300px] max-sm:h-fit flex flex-col gap-2 max-sm:mb-10">
          <Image src="/images/footer-logo.png" alt="Logo" width={100} height={40} className="max-sm:w-[100px]" />
          <p className="text-lg text-[#ffffffcd] px-5 max-md:px-2">
            857/1, Santnagar, Main Road, Burari<br />Delhi - 110084
          </p>
          <Link href="/" className="text-xl text-[#ffffffcd] px-5 max-md:px-2">
            nalandaschool95@gmail.com
          </Link>
          <div className="flex gap-5 items-center h-[70px] px-4 max-md:px-2">
            {socialLinks.map((item, i) => (
              <div key={i} className={`w-[40px] h-[40px] flex justify-center items-center rounded-full`} style={{ backgroundColor: item.color }}>
                {item.icon}
              </div>
            ))}
          </div>
        </div>

        {footerSections.map((section, index) => (
          <div key={index} className="w-[300px] max-sm:w-[95%] h-[350px] max-md:h-[300px] max-sm:h-fit flex flex-col gap-5 px-10 max-md:px-2 py-5">
            <h2 className="text-2xl text-white border-b-2 border-blue-400 pb-2">{section.title}</h2>
            <div className="flex flex-col gap-3 text-[#ffffffcd]">
              {section.links.map((link, i) => (
                <Link key={i} href={link.href}>{link.label}</Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <hr className="w-[92%] max-md:w-[95%] h-[1.6px] bg-blue-400 border-blue-400" />
      <span className="text-[#ffffffcd] text-sm max-lg:text-center">
        All Right Are Reserved © 2020 - 2026 | Nalanda Modern Public School, Burari, Delhi | Design & Developed By NirmalExpertSolutions.com
      </span>
    </footer>
  );
}
