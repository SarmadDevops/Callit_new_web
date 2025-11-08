import { Check } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-0.5 bg-gray-800"></div>
              <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                ABOUT US
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Who Are We?
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed">
              We are a passionate team of creative and tech-savvy individuals
              who love working with digital solutions. With experts in media,
              IT, and marketing, each of us brings unique skills to the table.
              Together, we aim to inculcate creativity in technology to produce
              amazing results.
            </p>

            {/* Mission Section */}
            <div className="flex gap-4 mb-6 bg-white p-4 rounded-lg shadow-md">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center">
                  <img
                    src="/missionicon.png"
                    alt="mission Icon"
                    className="w-6 h-6"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Our Mission
                </h3>
                <p className="text-gray-600 text-sm">
                  At Call IT Studio, our mission is to empower businesses
                  through innovative IT solutions.
                </p>
              </div>
            </div>

            {/* History Section */}
            <div className="flex gap-4 mb-8 bg-white p-4 rounded-lg shadow-md">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center">
                  <img
                    src="/historyicon.png"
                    alt="history Icon"
                    className="w-6 h-6"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Our History
                </h3>
                <p className="text-gray-600 text-sm">
                  Call IT Studio was established with a vision to bridge the gap
                  between complex technology and business needs.
                </p>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-gray-800" />
                <span className="text-gray-700 font-medium">
                  Free Project Consultations
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-gray-800" />
                <span className="text-gray-700 font-medium">
                  Customer-Centered Approach
                </span>
              </div>
            </div>

            {/* Read More Button */}
            <button
              className="px-6 py-3 rounded transition-colors flex items-center gap-2 group text-white"
              style={{ backgroundColor: "#4a0404" }}
            >
              <span className="font-semibold">READ MORE</span>
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </div>

          {/* Right Content - Images */}
          <div className="relative h-full">
            <div className="grid grid-cols-2 gap-4 h-full">
              {/* Working Image - Left side, starts lower */}
              <div className="col-span-1">
                <img
                  src="Aboutusimage1.jpg"
                  alt="Team collaboration"
                  className="w-full h-96 lg:h-[600px] object-cover rounded-lg shadow-lg lg:mt-16"
                />
              </div>

              {/* Team Member Image with Badge - Right side, full height */}
              <div className="col-span-1 relative">
                <img
                  src="Aboutusimage2.jpg"
                  alt="Team member"
                  className="w-full h-96 lg:h-[600px] object-cover rounded-lg shadow-lg"
                />

                {/* Experience Badge */}
                <div
                  className="absolute bottom-4 right-4 text-white px-6 py-3 rounded shadow-lg"
                  style={{ backgroundColor: "#4a0404" }}
                >
                  <div className="text-3xl font-bold">25+</div>
                  <div className="text-xs font-medium">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gray-900 opacity-10 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
