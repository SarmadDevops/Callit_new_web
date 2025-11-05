import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import "./App.css";

// Pages
import Home from "./pages/Home";
import ServiceDetail from "./pages/ServiceDetail";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import PreviousEventDetail from "./pages/PreviousEventDetail";
import FasanaEIshqDetail from "./pages/FasanaEIshqDetail";

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
          <Route
            path="/previous-events/:id"
            element={<PreviousEventDetail />}
          />
          <Route path="/fasana-e-ishq" element={<FasanaEIshqDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
