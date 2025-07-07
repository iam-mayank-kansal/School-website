import ApplyNow from "@/components/applynow";
import ContactUs from "@/components/contactus";
import Counter from "@/components/counter";
import Event from "@/components/event";
import Footer from "@/components/Footer";
import SchoolGallery from "@/components/gallery";
import Header from "@/components/header";
import Navbar from "@/components/Navbar";
import { SchoolInfo } from "@/components/school-Info";
import Subscribe from "@/components/Subscribe";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Event />
      <ApplyNow />
      <Subscribe />
      <SchoolGallery/>
      <SchoolInfo/>
      <ContactUs />
      <Footer />
    </>
  );
}
