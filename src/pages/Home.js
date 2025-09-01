import React from "react";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import OurBestServices from "../components/sections/OurBestServices";
import Testimonials from "../components/sections/Testimonials";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <WhyChooseUs />
      <OurBestServices />
    </>
  );
}

export default Home;
