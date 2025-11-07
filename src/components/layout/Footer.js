import { Link } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import footerBg from "../../assets/Footer.png";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const handleAboutClick = () => {
    if (isHomePage) {
      // If on home page, just scroll
      document.getElementById("about")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      // Navigate to home page first, then scroll after a short delay
      navigate("/");
      setTimeout(() => {
        document.getElementById("about")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  };

  const handleServicesClick = () => {
    if (isHomePage) {
      // If on home page, just scroll
      document.getElementById("services")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      // Navigate to home page first, then scroll after a short delay
      navigate("/");
      setTimeout(() => {
        document.getElementById("services")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  };
  return (
    <footer
      className="relative bg-black text-white pt-12 sm:pt-16 lg:pt-20 pb-8"
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 justify-items-center">
          {/* Logo and Description */}
          <div className="text-center lg:text-left">
            <img
              src={logo}
              alt="Call IT Studio"
              className="h-10 sm:h-12 mb-6 mx-auto lg:mx-0"
            />
            <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-md">
              Will give you a complete account the system, and expound the
              teachings of the great explorer the truth, the master-builder.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://www.facebook.com/share/1Ap2mhJdnS/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-gray-600 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all duration-300"
              >
                <i className="fab fa-facebook-f text-lg"></i>
              </a>
              <a
                href="https://www.instagram.com/callitstudio?igsh=MWd6eGlvZnV0ZHZlNg=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-gray-600 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all duration-300"
              >
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/call-it-studio/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-gray-600 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all duration-300"
              >
                <i className="fab fa-linkedin-in text-lg"></i>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center lg:text-left">
            <h3 className="text-white text-lg sm:text-xl font-semibold mb-6">
              Contact Us
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 justify-center lg:justify-start">
                <i className="fas fa-map-marker-alt mt-1.5 text-lg text-gray-300"></i>
                <a
                  href="https://maps.google.com/?q=H96C+9XM,+Peer+Muhammad+Sadiq+Rd+Mughalpura,+Lahore,+54840"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  H96C+9XM, Peer Muhammad Sadiq Rd Mughalpura, Lahore, 54840
                </a>
              </li>
              <li className="flex items-center gap-4 justify-center lg:justify-start">
                <i className="fas fa-phone-alt text-lg text-gray-300"></i>
                <span className="text-base sm:text-lg text-gray-300">
                  +92-321-3752520
                </span>
              </li>
              <li className="flex items-center gap-4 justify-center lg:justify-start">
                <i className="fas fa-envelope text-lg text-gray-300"></i>
                <span className="text-base sm:text-lg text-gray-300">
                  callitstudio@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
              {isHomePage ? (
                <Link
                  to="about"
                  smooth={true}
                  duration={800}
                  offset={-70}
                  className="text-sm sm:text-base lg:text-lg text-gray-300 hover:text-white transition-colors whitespace-nowrap cursor-pointer"
                >
                  About Us
                </Link>
              ) : (
                <button
                  onClick={handleAboutClick}
                  className="text-sm sm:text-base lg:text-lg text-gray-300 hover:text-white transition-colors whitespace-nowrap cursor-pointer bg-transparent border-none"
                >
                  About Us
                </button>
              )}
              {isHomePage ? (
                <Link
                  to="services"
                  smooth={true}
                  duration={800}
                  offset={-70}
                  className="text-sm sm:text-base lg:text-lg text-gray-300 hover:text-white transition-colors whitespace-nowrap cursor-pointer"
                >
                  Services
                </Link>
              ) : (
                <button
                  onClick={handleServicesClick}
                  className="text-sm sm:text-base lg:text-lg text-gray-300 hover:text-white transition-colors whitespace-nowrap cursor-pointer bg-transparent border-none"
                >
                  Services
                </button>
              )}
              <RouterLink
                to="/privacy-policy"
                className="text-sm sm:text-base lg:text-lg text-gray-300 hover:text-white transition-colors whitespace-nowrap"
              >
                Privacy Policy
              </RouterLink>
              <RouterLink
                to="/terms-conditions"
                className="text-sm sm:text-base lg:text-lg text-gray-300 hover:text-white transition-colors whitespace-nowrap"
              >
                Terms & Conditions
              </RouterLink>
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 text-center">
              © Copyright 2025 by CallitStudio
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
