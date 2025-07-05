import ApplyNow from "@/components/applynow";
import ContactUs from "@/components/contactus";
import Event from "@/components/event";
import Footer from "@/components/Footer";
import Header from "@/components/header";
import Navbar from "@/components/Navbar";
import Subscribe from "@/components/Subscribe";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Event />
      <ApplyNow />
      <Subscribe />
      <ContactUs />
      <Footer />
    </>
  );
}
