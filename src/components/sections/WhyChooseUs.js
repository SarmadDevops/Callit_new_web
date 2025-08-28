import React, { useState } from "react";
import whychoseimg from "../../assets/whychoseimg.png";
import initial from "../../assets/initial.png";
import detailed from "../../assets/detailed.png";
import selection from "../../assets/selection.png";
import dumimg from "../../assets/dumimg.png";

const WhyChooseUs = () => {
  const [openQuestion, setOpenQuestion] = useState(null);
  const steps = [
    {
      title: "Initial Consultation and Assessment",
      icon: initial,
    },
    {
      title: "Detailed Estimate and Planning",
      icon: detailed,
    },
    {
      title: "Selection and Preparation",
      icon: selection,
    },
  ];

  const services = [
    "Team Support",
    "Business Management",
    "Business Delivery",
    "Consulting & Solution",
  ];

  return (
    <>
      <section className="py-12 sm:py-16 bg-white">
        <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 relative">
          <div className="flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-16">
            {/* Left Content - Form */}
            <div className="w-full lg:w-1/2 xl:w-[45%]">
              <div className="max-w-[500px] lg:max-w-none bg-white p-6 sm:p-8 shadow-lg rounded-lg mx-auto">
                <div className="flex items-center gap-3 mb-4">
                  <svg
                    className="w-4 h-4 text-[#4a0404]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  <span className="text-sm font-bold text-[#4a0404] tracking-wide">
                    NEED ANY HELP
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-black leading-tight">
                  SEND US A<br />
                  MESSAGE!
                </h2>
                <form className="space-y-6">
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full py-3 px-4 text-base border border-gray-200 focus:outline-none focus:border-[#4a0404] placeholder-gray-400 rounded-md"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full py-3 px-4 text-base border border-gray-200 focus:outline-none focus:border-[#4a0404] placeholder-gray-400 rounded-md"
                      />
                      <input
                        type="tel"
                        placeholder="Phone"
                        className="w-full py-3 px-4 text-base border border-gray-200 focus:outline-none focus:border-[#4a0404] placeholder-gray-400 rounded-md"
                      />
                    </div>
                    <textarea
                      placeholder="Message"
                      rows="3"
                      className="w-full py-3 px-4 text-base border border-gray-200 focus:outline-none focus:border-[#4a0404] placeholder-gray-400 resize-none rounded-md"
                    ></textarea>
                  </div>
                  <button className="w-full sm:w-auto bg-[#4a0404] text-white px-8 py-3 text-base font-medium hover:bg-opacity-90 transition-all duration-300 rounded-md">
                    SEND NOW →
                  </button>
                </form>
              </div>
            </div>

            {/* Right Content - FAQ */}
            <div className="w-full lg:w-1/2 xl:w-[55%]">
              <div className="max-w-[500px] lg:max-w-none mx-auto">
                <div className="mb-8 sm:mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={dumimg}
                      alt="Company Icon"
                      className="w-5 h-5 object-contain"
                    />
                    <p className="text-sm font-bold uppercase text-[#4a0404] tracking-wide">
                      TRUSTED BEST COMPANY
                    </p>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight text-[#1A1A1A]">
                    We Help You Build On
                    <br className="hidden sm:block" />
                    Your Past & Future.
                  </h2>
                  <p className="text-[#666666] text-base sm:text-lg lg:text-xl mb-8 max-w-[600px]">
                    We strongly support best practice sharing across our
                    operations around the world and across various industrial
                  </p>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-4 max-w-[800px]">
                  <div className="border border-gray-200 rounded-lg bg-white shadow-sm">
                    <button
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200 text-lg"
                      onClick={() =>
                        setOpenQuestion(openQuestion === 1 ? null : 1)
                      }
                    >
                      <span className="font-medium text-base sm:text-lg text-[#1A1A1A]">
                        How can I take your service?
                      </span>
                      <svg
                        className="w-6 h-6 text-[#666666] transition-transform duration-200"
                        style={{
                          transform:
                            openQuestion === 1
                              ? "rotate(-180deg)"
                              : "rotate(0)",
                        }}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {openQuestion === 1 && (
                      <div className="px-6 pb-4">
                        <p className="text-[#666666] text-base leading-relaxed">
                          We strongly support best practice sharing across our
                          operations around the world and across various
                          industrial
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="border border-gray-200 rounded-lg bg-white shadow-sm">
                    <button
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200 text-lg"
                      onClick={() =>
                        setOpenQuestion(openQuestion === 2 ? null : 2)
                      }
                    >
                      <span className="font-medium text-base sm:text-lg text-[#1A1A1A]">
                        Understand more easier than before for all
                      </span>
                      <svg
                        className="w-6 h-6 text-[#666666] transition-transform duration-200"
                        style={{
                          transform:
                            openQuestion === 2
                              ? "rotate(-180deg)"
                              : "rotate(0)",
                        }}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {openQuestion === 2 && (
                      <div className="px-6 pb-4">
                        <p className="text-[#666666] text-base leading-relaxed">
                          We strongly support best practice sharing across our
                          operations around the world and across various
                          transpiration.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="border border-gray-200 rounded-lg bg-white shadow-sm">
                    <button
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200 text-lg"
                      onClick={() =>
                        setOpenQuestion(openQuestion === 3 ? null : 3)
                      }
                    >
                      <span className="font-medium text-base sm:text-lg text-[#1A1A1A]">
                        How can I take your service?
                      </span>
                      <svg
                        className="w-6 h-6 text-[#666666] transition-transform duration-200"
                        style={{
                          transform:
                            openQuestion === 3
                              ? "rotate(-180deg)"
                              : "rotate(0)",
                        }}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {openQuestion === 3 && (
                      <div className="px-6 pb-4">
                        <p className="text-[#666666] text-base leading-relaxed">
                          Contact our team for personalized service options and
                          solutions tailored to your needs.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="bg-[#4a0404] rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 max-w-5xl mx-auto relative z-10">
              <div className="text-white lg:w-[45%]">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2 sm:mb-3">
                  We help you with any questions or information you need
                </h3>
                <p className="text-gray-200 text-base sm:text-lg">
                  What do you need assistance with?
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-8 lg:w-[55%]">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 w-full">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-white"
                      >
                        <path
                          d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm sm:text-base text-gray-200">
                        Get Contact Now
                      </p>
                      <p className="text-base sm:text-lg font-medium">
                        +11234 751 328
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:block h-12 w-[1px] bg-white/20"></div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-white"
                      >
                        <path
                          d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M22 6l-10 7L2 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm sm:text-base text-gray-200">
                        Send Email
                      </p>
                      <p className="text-base sm:text-lg font-medium">
                        tolak@envato.com
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  src={dumimg}
                  alt="Contact Support"
                  className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-xl hidden lg:block"
                />
              </div>
            </div>
            <div className="absolute right-0 top-0 h-full w-1/3 bg-white/5 rounded-l-full"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
