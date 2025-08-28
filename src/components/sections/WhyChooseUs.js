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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-16 relative">
          <div className="flex flex-col lg:flex-row items-start gap-16 max-w-6xl mx-auto">
            {/* Left Content - Form */}
            <div className="lg:w-[400px] w-full bg-white p-6 shadow-[0_0_20px_rgba(0,0,0,0.06)] rounded-sm">
              <div className="flex items-center gap-2 mb-3">
                <svg
                  className="w-3.5 h-3.5 text-[#4a0404]"
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
                <span className="text-xs font-bold text-[#4a0404]">
                  NEED ANY HELP
                </span>
              </div>
              <h2 className="text-xl font-bold mb-6 text-black">
                SEND US A<br />
                MESSAGE!
              </h2>
              <form className="space-y-6">
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full py-2 px-3 text-sm border border-gray-100 focus:outline-none focus:border-[#4a0404] placeholder-gray-400 rounded"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full py-2 px-3 text-sm border border-gray-100 focus:outline-none focus:border-[#4a0404] placeholder-gray-400 rounded"
                    />
                    <input
                      type="tel"
                      placeholder="Phone"
                      className="w-full py-2 px-3 text-sm border border-gray-100 focus:outline-none focus:border-[#4a0404] placeholder-gray-400 rounded"
                    />
                  </div>
                  <textarea
                    placeholder="Message"
                    rows="2"
                    className="w-full py-2 px-3 text-sm border border-gray-100 focus:outline-none focus:border-[#4a0404] placeholder-gray-400 resize-none rounded"
                  ></textarea>
                </div>
                <button className="bg-[#4a0404] text-white px-4 py-2 text-sm font-medium hover:bg-opacity-90 transition-all duration-300 rounded-[4px]">
                  SEND NOW →
                </button>
              </form>
            </div>

            {/* Right Content - FAQ */}
            <div className="lg:flex-1">
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <img
                    src={dumimg}
                    alt="Company Icon"
                    className="w-4 h-4 object-contain"
                  />
                  <p className="text-xs font-bold uppercase text-[#4a0404]">
                    TRUSTED BEST COMPANY
                  </p>
                </div>
                <h2 className="text-4xl font-bold mb-3 leading-tight text-[#1A1A1A]">
                  We Help You Build On
                  <br />
                  Your Past & Future.
                </h2>
                <p className="text-[#666666] text-sm mb-8">
                  We strongly support best practice sharing across our
                  operations around the world and across various industrial
                </p>
              </div>

              {/* FAQ Accordion */}
              <div className="space-y-3">
                <div className="border border-gray-100 rounded bg-white">
                  <button
                    className="w-full px-5 py-3.5 text-left flex justify-between items-center hover:bg-gray-50"
                    onClick={() =>
                      setOpenQuestion(openQuestion === 1 ? null : 1)
                    }
                  >
                    <span className="font-medium text-sm text-[#1A1A1A]">
                      How can I take your service?
                    </span>
                    <svg
                      className="w-5 h-5 text-[#666666]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d={
                          openQuestion === 1
                            ? "M5 15l7-7 7 7"
                            : "M19 9l-7 7-7-7"
                        }
                      />
                    </svg>
                  </button>
                  {openQuestion === 1 && (
                    <div className="px-5 pb-3.5">
                      <p className="text-[#666666] text-sm">
                        We strongly support best practice sharing across our
                        operations around the world and across various
                        industrial
                      </p>
                    </div>
                  )}
                </div>

                <div className="border border-gray-100 rounded bg-white">
                  <button
                    className="w-full px-5 py-3.5 text-left flex justify-between items-center hover:bg-gray-50"
                    onClick={() =>
                      setOpenQuestion(openQuestion === 2 ? null : 2)
                    }
                  >
                    <span className="font-medium text-sm text-[#1A1A1A]">
                      Understand more easier than before for all
                    </span>
                    <svg
                      className="w-5 h-5 text-[#666666]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d={
                          openQuestion === 2
                            ? "M5 15l7-7 7 7"
                            : "M19 9l-7 7-7-7"
                        }
                      />
                    </svg>
                  </button>
                  {openQuestion === 2 && (
                    <div className="px-5 pb-3.5">
                      <p className="text-[#666666] text-sm">
                        We strongly support best practice sharing across our
                        operations around the world and across various
                        transpiration.
                      </p>
                    </div>
                  )}
                </div>

                <div className="border border-gray-100 rounded bg-white">
                  <button
                    className="w-full px-5 py-3.5 text-left flex justify-between items-center hover:bg-gray-50"
                    onClick={() =>
                      setOpenQuestion(openQuestion === 3 ? null : 3)
                    }
                  >
                    <span className="font-medium text-sm text-[#1A1A1A]">
                      How can I take your service?
                    </span>
                    <svg
                      className="w-5 h-5 text-[#666666]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d={
                          openQuestion === 3
                            ? "M5 15l7-7 7 7"
                            : "M19 9l-7 7-7-7"
                        }
                      />
                    </svg>
                  </button>
                  {openQuestion === 3 && (
                    <div className="px-5 pb-3.5">
                      <p className="text-[#666666] text-sm">
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
      </section>

      {/* Contact Info Bar */}
      <section className="py-8 px-10 bg-white">
        <div className="container mx-auto">
          <div className="bg-[#4a0404] rounded-[20px] p-8 relative overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto relative z-10">
              <div className="text-white lg:w-1/2">
                <h3 className="text-xl font-medium mb-1">
                  We help you with any questions or information you need
                </h3>
                <p className="text-gray-200">
                  What do you need assistance with?
                </p>
              </div>
              <div className="flex items-center gap-8 lg:w-1/2 mt-4 lg:mt-0">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
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
                      <p className="text-sm text-gray-200">Get Contact Now</p>
                      <p className="font-medium">+11234 751 328</p>
                    </div>
                  </div>
                  <div className="h-8 w-[1px] bg-white/20"></div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
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
                      <p className="text-sm text-gray-200">Sent Email</p>
                      <p className="font-medium">tolak@envato.com</p>
                    </div>
                  </div>
                </div>
                <img
                  src={dumimg}
                  alt="Contact Support"
                  className="w-32 h-32 object-cover rounded-[15px] hidden lg:block"
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
