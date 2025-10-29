


const TestimonialCard = () => {
  return (
    <>
      {/* Testimonial Card Content */}
       <div className="bg-[#4a0404] rounded-xl p-6 text-white relative overflow-hidden">
              {/* Quote Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                  </svg>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-center text-white/90 mb-6 text-sm leading-relaxed">
                Neque porro est qui dolorem ipsum quia quaed inventore veritatis
                et
              </p>

              {/* Author Section */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-white/20 mb-2 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <span className="font-medium text-white">Alex Handson</span>
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-full -mb-10 -ml-10"></div>
              <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-full -mt-8 -mr-8"></div>
            </div>
    </>
  );
}

export default TestimonialCard;