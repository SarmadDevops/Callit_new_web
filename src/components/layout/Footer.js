import { Link } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import footerBg from "../../assets/Footer.png";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const handleLearnMoreClick = () => {
    navigate("/");
    setTimeout(() => {
      document.getElementById("about")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

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
    <>
      <div className="bg-black w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-white py-12 sm:py-16 lg:py-20 text-center">
          <p className="text-xs sm:text-sm text-gray-400 mb-2 tracking-wider">
            LET'S TRY! GET FREE SUPPORT
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 px-4">
            Get Our Any Service And Contact Now!
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 px-4 max-w-2xl mx-auto">
            Business tailored design, management & support services Business to
            save we form by injected finance solution.
          </p>
          <div className="flex justify-center mb-6 sm:mb-8">
            <button
              onClick={handleLearnMoreClick}
              className="bg-[#4a0404] hover:bg-[#6a0606] transition-colors text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-md flex items-center gap-2 text-sm sm:text-base font-medium"
            >
              LEARN MORE
              <span className="text-lg sm:text-xl">→</span>
            </button>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 lg:gap-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
              <span className="text-sm sm:text-base">Business Solution</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
              <span className="text-sm sm:text-base">Team Support</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
              <span className="text-sm sm:text-base">Free 24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    <footer
  className="relative bg-black text-white pt-12 sm:pt-16 lg:pt-20 pb-8"
  style={{
    backgroundImage: `url(${footerBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      {/* Logo and Description */}
      <div className="text-center lg:text-left">
        <img
          src={logo}
          alt="Call IT Studio"
          className="h-8 sm:h-10 lg:h-12 mb-4 sm:mb-6 mx-auto lg:mx-0"
        />
        <p className="text-xs sm:text-sm lg:text-base text-gray-300 mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed">
          Will give you a complete account the system, and expound the
          teachings of the great explorer the truth, the master-builder.
        </p>
        <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start">
          <a
            href="https://www.facebook.com/share/1Ap2mhJdnS/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-gray-600 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all duration-300"
          >
            <i className="fab fa-facebook-f text-sm sm:text-base"></i>
          </a>
          <a
            href="https://www.instagram.com/callitstudio?igsh=MWd6eGlvZnV0ZHZlNg=="
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-gray-600 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all duration-300"
          >
            <i className="fab fa-instagram text-sm sm:text-base"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/call-it-studio/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-gray-600 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all duration-300"
          >
            <i className="fab fa-linkedin-in text-sm sm:text-base"></i>
          </a>
        </div>
      </div>

      {/* Contact Info */}
      <div className="text-center lg:text-left">
        <h3 className="text-white text-base sm:text-lg lg:text-xl font-semibold mb-4 sm:mb-6">
          Contact Us
        </h3>
        <ul className="space-y-4 sm:space-y-5">
          {/* Location */}
          <li className="flex items-start gap-2 justify-center ml-14 sm:ml-0 lg:justify-start">
            <i className="fas fa-map-marker-alt text-sm sm:text-base lg:text-lg text-gray-300 flex-shrink-0 mt-0.5 lg:mt-1"></i>
            <a
              href="https://www.google.com/maps/search/?api=1&query=24+Griffin+LARECHS+Scheme,+Near+Railway+Griffin+Institute,+Mughalpura,+Lahore"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm lg:text-base text-gray-300 hover:text-white transition-colors text-left leading-relaxed break-words max-w-[280px] sm:max-w-none"
            >
              24 Griffin Larechs scheme Near RAILWAY GRIFFIN INSTITUTE Mughalpura, Lahore
            </a>
          </li>
          {/* Phone */}
          <li className="flex items-center gap-3 justify-center lg:justify-start">
            <i className="fas fa-phone-alt text-sm sm:text-base lg:text-lg text-gray-300 flex-shrink-0"></i>
            <span className="text-xs sm:text-sm lg:text-base text-gray-300">
              +92-321-3752520
            </span>
          </li>
          {/* Email */}
          <li className="flex items-center gap-3 justify-center lg:justify-start">
            <i className="fas fa-envelope text-sm sm:text-base lg:text-lg text-gray-300 flex-shrink-0"></i>
            <span className="text-xs sm:text-sm lg:text-base text-gray-300 break-all">
              callitstudio@gmail.com
            </span>
          </li>
        </ul>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="mt-12 sm:mt-16 pt-8 border-t border-gray-800">
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 text-center">
          {isHomePage ? (
            <Link
              to="about"
              smooth={true}
              duration={800}
              offset={-70}
              className="text-xs sm:text-sm lg:text-base text-gray-300 hover:text-white transition-colors whitespace-nowrap cursor-pointer"
            >
              About Us
            </Link>
          ) : (
            <button
              onClick={handleAboutClick}
              className="text-xs sm:text-sm lg:text-base text-gray-300 hover:text-white transition-colors whitespace-nowrap cursor-pointer bg-transparent border-none"
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
              className="text-xs sm:text-sm lg:text-base text-gray-300 hover:text-white transition-colors whitespace-nowrap cursor-pointer"
            >
              Services
            </Link>
          ) : (
            <button
              onClick={handleServicesClick}
              className="text-xs sm:text-sm lg:text-base text-gray-300 hover:text-white transition-colors whitespace-nowrap cursor-pointer bg-transparent border-none"
            >
              Services
            </button>
          )}
          <RouterLink
            to="/privacy-policy"
            className="text-xs sm:text-sm lg:text-base text-gray-300 hover:text-white transition-colors whitespace-nowrap"
          >
            Privacy Policy
          </RouterLink>
          <RouterLink
            to="/terms-conditions"
            className="text-xs sm:text-sm lg:text-base text-gray-300 hover:text-white transition-colors whitespace-nowrap"
          >
            Terms & Conditions
          </RouterLink>
        </div>
        <p className="text-xs sm:text-sm lg:text-base text-gray-300 text-center px-4">
          © Copyright 2025 by CallitStudio
        </p>
      </div>
    </div>
  </div>
</footer>
    </>
  );
};

export default Footer;
