import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

// Pages
import Home from "./pages/Home";
import ServiceDetail from "./pages/ServiceDetail";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";

function App() {
  return (
    <Router>
      <div className="bg-darkBg min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service/:id" element={<ServiceDetail />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
