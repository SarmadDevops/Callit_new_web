import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", to: "home" },
    { name: "About Us", to: "about" },
    { name: "Services", to: "services" },
    { name: "Projects", to: "projects" },
    { name: "Events", to: "events" },
  ];

  return (
    <div className="fixed w-full z-50 flex justify-center pt-1 sm:pt-2 md:pt-4">
      <div className="relative w-[98%] sm:w-[95%] md:w-[90%] lg:w-[85%] max-w-[1000px]">
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className={`w-full bg-white bg-opacity-10 backdrop-blur-sm transition-all duration-300 rounded-full ${
            scrolled ? "shadow-lg" : ""
          }`}
        >
          <div className="px-2 sm:px-4 md:px-6 lg:px-8">
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
                {navItems.map((item) => (
                  <Link
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
                  </Link>
                ))}
                <button className="bg-[#4a0404] text-white text-xs px-3 lg:px-4 py-1.5 lg:py-2 rounded hover:bg-opacity-90 transition-all duration-300 ml-2">
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
              className="absolute top-full left-0 right-0 mt-1 sm:mt-2 bg-[#4a0404] bg-opacity-95 backdrop-blur-sm rounded-lg shadow-lg md:hidden overflow-hidden"
            >
              <div className="py-3 px-4">
                <div className="flex flex-col space-y-2.5">
                  {navItems.map((item) => (
                    <Link
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
                    </Link>
                  ))}
                  <button className="bg-white text-[#4a0404] text-[13px] px-4 py-2 rounded w-full hover:bg-opacity-90 transition-all duration-300 font-medium">
                    CONTACT US →
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
