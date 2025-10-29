

const Organizers = () => {
  return (
    <>
     {/* Organizers Section with gray background containing white card */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg shadow-md p-6 relative overflow-hidden">

              {/* Subtle texture overlay */}
              <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-gray-300 to-gray-400"></div>

              {/* White card inside gray background */}
              <div className="bg-white rounded-lg shadow-sm relative z-10 overflow-hidden">
                {/* Organizers Header */}
                <div className=" px-6 py-4 border-b border-gray-200">
                  <h2 className="text-xl font-bold text-gray-800 ">
                    ORGANIZERS
                  </h2>
                  <div className="flex mt-2">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="w-2 h-2 bg-[#4a0404] rounded-full"
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Organizers Content */}
                <div className="p-6">
                  {/* Event Logo/Image */}
                  <div className="flex justify-center mb-6">
                    <img
                      src="/goonj .png"
                      alt="Event Logo"
                      className="w-54 h-36 object-contain rounded-lg"
                    />
                  </div>

                  {/* Event Details */}
                  <div className="space-y-3">
                    <div className="flex text-sm">
                      <span className="font-semibold text-gray-800 w-20">
                        Name:
                      </span>
                      <span className="text-gray-700">Ovatheme</span>
                    </div>

                    <div className="flex text-sm">
                      <span className="font-semibold text-gray-800 w-20">
                        Email:
                      </span>
                      <span className="text-gray-700">ovatheme@gmail.com</span>
                    </div>

                    <div className="flex text-sm">
                      <span className="font-semibold text-gray-800 w-20">
                        Phone:
                      </span>
                      <span className="text-gray-700">4000123456789</span>
                    </div>

                    <div className="flex text-sm">
                      <span className="font-semibold text-gray-800 w-20">
                        Website:
                      </span>
                      <span className="text-blue-600 hover:underline cursor-pointer text-sm">
                        http://ovathemes.com
                      </span>
                    </div>

                    <div className="text-sm">
                      <span className="font-semibold text-gray-800 block mb-1">
                        Description:
                      </span>
                      <span className="text-gray-700 leading-relaxed">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </>
    );
}

export default Organizers;