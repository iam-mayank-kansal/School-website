import About from "@/components/about";
import Academic from "@/components/academic";
import ApplyNow from "@/components/applynow";
import ContactUs from "@/components/contactus";
import Event from "@/components/event";
import Feature from "@/components/features";
import Footer from "@/components/Footer";
import Header from "@/components/header";
import Highlights from "@/components/highlights";
import Navbar from "@/components/Navbar";
import StatsSection from "@/components/stats";
import Subscribe from "@/components/Subscribe";
import Team from "@/components/teacher";
import Testimonials from "@/components/testimonial";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Academic />
      <Feature />
      <Testimonials />
      <StatsSection />
      <Event />
      <ApplyNow />
      <Highlights />
      <Team />
      <Subscribe />
      <ContactUs />
      <Footer />
    </>
  );
}
