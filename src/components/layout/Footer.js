import React from "react";
import logo from "../../assets/logo.png";
import footerBg from "../../assets/Footer.png";

const Footer = () => {
  const quickLinks = [
    { title: "Why choose us", href: "#" },
    { title: "Our Service", href: "#" },
    { title: "Partners", href: "#" },
    { title: "Core values", href: "#" },
    { title: "Our projects", href: "#" },
  ];

  const quickLink2 = [
    { title: "Gallery", href: "#" },
    { title: "Packages", href: "#" },
    { title: "Team", href: "#" },
    { title: "Contact", href: "#" },
    { title: "News", href: "#" },
  ];

  return (
    <footer
      className="relative bg-black text-white pt-12 sm:pt-16 lg:pt-20 pb-8"
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and Description */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <img
              src={logo}
              alt="Call IT Studio"
              className="h-10 sm:h-12 mb-6"
            />
            <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-md lg:max-w-none">
              Will give you a complete account the system, and expound the
              teachings of the great explorer the truth, the master-builder.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border-2 border-gray-600 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all duration-300"
              >
                <i className="fab fa-facebook-f text-lg"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border-2 border-gray-600 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all duration-300"
              >
                <i className="fab fa-twitter text-lg"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border-2 border-gray-600 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all duration-300"
              >
                <i className="fab fa-youtube text-lg"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border-2 border-gray-600 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all duration-300"
              >
                <i className="fab fa-linkedin-in text-lg"></i>
              </a>
            </div>
          </div>

          {/* Service Links */}
          <div className="col-span-1">
            <h3 className="text-white text-lg sm:text-xl font-semibold mb-6">
              Service
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-base sm:text-lg block"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-white text-lg sm:text-xl font-semibold mb-6">
              Quick Link
            </h3>
            <ul className="space-y-4">
              {quickLink2.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-base sm:text-lg block"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-white text-lg sm:text-xl font-semibold mb-6">
              Contact Us
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <i className="fas fa-map-marker-alt mt-1.5 text-lg text-gray-300"></i>
                <span className="text-base sm:text-lg text-gray-300">
                  520, West Valley, Arvin and mann
                </span>
              </li>
              <li className="flex items-center gap-4">
                <i className="fas fa-phone-alt text-lg text-gray-300"></i>
                <span className="text-base sm:text-lg text-gray-300">
                  +91 123654789
                </span>
              </li>
              <li className="flex items-center gap-4">
                <i className="fas fa-envelope text-lg text-gray-300"></i>
                <span className="text-base sm:text-lg text-gray-300">
                  info@domainname.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-base sm:text-lg text-gray-300 text-center sm:text-left">
              © Copyright 2023 by CallitStudio
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end gap-6 sm:gap-8">
              <a
                href="#"
                className="text-base sm:text-lg text-gray-300 hover:text-white transition-colors"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-base sm:text-lg text-gray-300 hover:text-white transition-colors"
              >
                Services
              </a>
              <a
                href="#"
                className="text-base sm:text-lg text-gray-300 hover:text-white transition-colors"
              >
                News
              </a>
              <a
                href="#"
                className="text-base sm:text-lg text-gray-300 hover:text-white transition-colors"
              >
                Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
