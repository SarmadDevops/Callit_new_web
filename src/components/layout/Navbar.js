import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import ContactPopup from "../ContactPopup";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);

  // Reset active section when on different pages
  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      setActiveSection("home");
    } else if (path === "/events") {
      setActiveSection("/events");
    } else {
      setActiveSection(""); // Reset for other pages
    }
  }, [location.pathname]); // Now properly using useLocation hook

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle navigation to home page sections
  const handleSectionNavigation = (sectionId) => {
    if (location.pathname === "/") {
      // If already on home page, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveSection(sectionId);
      }
    } else {
      // If on different page, navigate to home first, then scroll
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          setActiveSection(sectionId);
        }
      }, 100); // Small delay to ensure page loads
    }
  };

  const navItems = [
    { name: "Home", to: "home", type: "scroll" },
    { name: "About Us", to: "about", type: "scroll" },
    { name: "Services", to: "services", type: "scroll" },

    { name: "Events", to: "/events", type: "route" },
  ];

  // Hide Navbar on Events Detail pages only (e.g., /events/:id)
  if (location.pathname.startsWith("/events")) {
    return null;
  }

  return (
    <div className="fixed w-full z-50 flex justify-center pt-1 sm:pt-2 md:pt-4 px-2 sm:px-0">
      <div className="relative w-full sm:w-[95%] md:w-[90%] lg:w-[90%] max-w-[1275px]">
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className={`w-full bg-white bg-opacity-10 backdrop-blur-sm transition-all duration-300 rounded-full ${
            scrolled ? "shadow-lg" : ""
          }`}
        >
          <div className="px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="flex justify-between items-center h-12 sm:h-14 md:h-16">
              {/* Logo */}
              <div className="flex items-center">
                <img
                  src={logo}
                  alt="Call IT Studio"
                  className="h-4 sm:h-5 md:h-6 lg:h-8"
                />
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
                {navItems.map((item) =>
                  item.type === "scroll" ? (
                    location.pathname === "/" ? (
                      <ScrollLink
                        key={item.name}
                        to={item.to}
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        onSetActive={() => setActiveSection(item.to)}
                        className={`text-xs lg:text-sm cursor-pointer px-2 lg:px-4 py-1.5 lg:py-2 rounded transition-all duration-300 ${
                          activeSection === item.to
                            ? "bg-[#4a0404] text-white font-medium"
                            : "text-white hover:bg-[#4a0404] hover:bg-opacity-50"
                        }`}
                      >
                        {item.name}
                      </ScrollLink>
                    ) : (
                      <button
                        key={item.name}
                        onClick={() => handleSectionNavigation(item.to)}
                        className={`text-xs lg:text-sm cursor-pointer px-2 lg:px-4 py-1.5 lg:py-2 rounded transition-all duration-300 ${
                          activeSection === item.to
                            ? "bg-[#4a0404] text-white font-medium"
                            : "text-white hover:bg-[#4a0404] hover:bg-opacity-50"
                        }`}
                      >
                        {item.name}
                      </button>
                    )
                  ) : (
                    <RouterLink
                      key={item.name}
                      to={item.to}
                      onClick={() => setActiveSection(item.to)}
                      className={`text-xs lg:text-sm cursor-pointer px-2 lg:px-4 py-1.5 lg:py-2 rounded transition-all duration-300 ${
                        activeSection === item.to
                          ? "bg-[#4a0404] text-white font-medium"
                          : "text-white hover:bg-[#4a0404] hover:bg-opacity-50"
                      }`}
                    >
                      {item.name}
                    </RouterLink>
                  )
                )}
                <button
                  className="bg-[#4a0404] text-white text-xs px-3 lg:px-4 py-1.5 lg:py-2 rounded hover:bg-opacity-90 transition-all duration-300 ml-2"
                  onClick={() => {
                    console.log("Contact button clicked - Desktop");
                    setIsContactPopupOpen(true);
                  }}
                >
                  CONTACT US →
                </button>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  className="text-white p-1 sm:p-1.5"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label="Toggle mobile menu"
                >
                  <svg
                    className="h-4 w-4 sm:h-5 sm:w-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {isMobileMenuOpen ? (
                      <path d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </motion.nav>

        {/* Mobile Menu - Separate from nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-1 sm:mt-2 bg-[#4a0404] bg-opacity-95 backdrop-blur-sm rounded-lg shadow-lg md:hidden overflow-hidden z-[60] mx-1 sm:mx-0"
            >
              <div className="py-3 px-4">
                <div className="flex flex-col space-y-2.5">
                  {navItems.map((item) =>
                    item.type === "scroll" ? (
                      location.pathname === "/" ? (
                        <ScrollLink
                          key={item.name}
                          to={item.to}
                          spy={true}
                          smooth={true}
                          offset={-80}
                          duration={500}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`text-[13px] px-4 py-2 rounded transition-all duration-300 w-full text-center ${
                            activeSection === item.to
                              ? "bg-white text-[#4a0404] font-medium"
                              : "text-white hover:bg-white hover:bg-opacity-20"
                          }`}
                        >
                          {item.name}
                        </ScrollLink>
                      ) : (
                        <button
                          key={item.name}
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            handleSectionNavigation(item.to);
                          }}
                          className={`text-[13px] px-4 py-2 rounded transition-all duration-300 w-full text-center ${
                            activeSection === item.to
                              ? "bg-white text-[#4a0404] font-medium"
                              : "text-white hover:bg-white hover:bg-opacity-20"
                          }`}
                        >
                          {item.name}
                        </button>
                      )
                    ) : (
                      <RouterLink
                        key={item.name}
                        to={item.to}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setActiveSection(item.to);
                        }}
                        className={`text-[13px] px-4 py-2 rounded transition-all duration-300 w-full text-center ${
                          activeSection === item.to
                            ? "bg-white text-[#4a0404] font-medium"
                            : "text-white hover:bg-white hover:bg-opacity-20"
                        }`}
                      >
                        {item.name}
                      </RouterLink>
                    )
                  )}
                  <button
                    className="bg-white text-[#4a0404] text-[13px] px-4 py-2 rounded w-full hover:bg-opacity-90 transition-all duration-300 font-medium"
                    onClick={() => {
                      console.log("Contact button clicked - Mobile");
                      setIsMobileMenuOpen(false);
                      setIsContactPopupOpen(true);
                    }}
                  >
                    CONTACT US →
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Contact Popup */}
      {console.log("ContactPopup render check:", { isContactPopupOpen })}
      <ContactPopup
        isOpen={isContactPopupOpen}
        onClose={() => {
          console.log("ContactPopup close called");
          setIsContactPopupOpen(false);
        }}
      />
    </div>
  );
};

export default Navbar;
