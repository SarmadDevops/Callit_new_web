import React from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import OurBestServices from "./components/sections/OurBestServices";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import "./App.css";

function App() {
  return (
    <div className="bg-darkBg min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <WhyChooseUs />
      <OurBestServices />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
