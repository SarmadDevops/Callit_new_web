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
      className="relative bg-black text-white pt-16 pb-8"
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <img src={logo} alt="Call IT Studio" className="h-12 mb-6" />
            <p className="text-sm text-gray-400 mb-6">
              Will give you a complete account the system, and expound the
              teachings of the great explorer the truth, the master-builder.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:border-white transition-colors"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:border-white transition-colors"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:border-white transition-colors"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:border-white transition-colors"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Service Links */}
          <div className="col-span-1">
            <h3 className="text-white text-lg font-medium mb-6">Service</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-white text-lg font-medium mb-6">Quick Link</h3>
            <ul className="space-y-3">
              {quickLink2.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-white text-lg font-medium mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <i className="fas fa-map-marker-alt mt-1"></i>
                <span>520, West Valley, Arvin and mann</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <i className="fas fa-phone-alt"></i>
                <span>+91 123654789</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <i className="fas fa-envelope"></i>
                <span>info@domainname.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © Copyright 2023 by CallitStudio
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-gray-400 hover:text-white">
                About Us
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white">
                Services
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white">
                News
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white">
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
