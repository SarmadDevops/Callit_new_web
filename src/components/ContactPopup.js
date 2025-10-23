import React, { useState } from "react";
import { X, Calendar, Clock, User, CheckCircle } from "lucide-react";
import logo from "../assets/logo.png";

export default function ContactPopup({ isOpen, onClose }) {
  const [selectedDate, setSelectedDate] = useState(8);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return { firstDay, daysInMonth };
  };

  const { firstDay, daysInMonth } = getDaysInMonth(currentMonth);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleDateSelect = (day) => {
    setSelectedDate(day);
  };

  const changeMonth = (direction) => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(currentMonth.getMonth() + direction);
    setCurrentMonth(newMonth);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-60 transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div
          className="relative transform overflow-hidden rounded-2xl bg-[#1a1411] text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-4xl p-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white z-10"
          >
            <X size={24} />
          </button>

          {/* Header */}
          <div className="text-center -mt-16">
            <img
              src={logo}
              alt="Call IT Studio"
              className="w-64 h-64 object-contain mx-auto"
            />
            <h2 className="text-white text-2xl font-bold -mt-14">
              Welcome to Call It studio
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              Your Gateway to Effortless Tech World.
            </p>
          </div>

          {/* Main Content Section */}
          {/* Main Content Section */}
          <div className="px-4 py-4">
            <div className="flex gap-6 items-stretch">
              {/* LEFT COLUMN */}
              <div className="w-[450px] bg-[#1a1411] rounded-xl flex flex-col justify-between p-4">
                <div className="space-y-4 flex-1">
                  {/* Step 1 */}
                  <div className="flex items-center gap-3 px-4 py-4 bg-[#3a332e] rounded-lg cursor-pointer hover:bg-[#4a433e] hover:shadow-md transition-all duration-300 group">
                    <div className="w-8 h-8 rounded-full bg-[#4a433e] flex items-center justify-center flex-shrink-0 group-hover:bg-[#5a534e]">
                      <Calendar size={16} className="text-white" />
                    </div>
                    <span className="text-white font-medium text-sm">
                      Select a Date
                    </span>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-center gap-3 px-4 py-4 bg-[#3a332e] rounded-lg cursor-pointer hover:bg-[#4a433e] hover:shadow-md transition-all duration-300 group">
                    <div className="w-8 h-8 rounded-full bg-[#4a433e] flex items-center justify-center flex-shrink-0 group-hover:bg-[#5a534e]">
                      <Clock size={16} className="text-white" />
                    </div>
                    <span className="text-white font-medium text-sm">
                      Choose a Time
                    </span>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-center gap-3 px-4 py-4 bg-[#3a332e] rounded-lg cursor-pointer hover:bg-[#4a433e] hover:shadow-md transition-all duration-300 group">
                    <div className="w-8 h-8 rounded-full bg-[#4a433e] flex items-center justify-center flex-shrink-0 group-hover:bg-[#5a534e]">
                      <User size={16} className="text-white" />
                    </div>
                    <span className="text-white font-medium text-sm">
                      Enter Your Details
                    </span>
                  </div>

                  {/* Step 4 */}
                  <div className="flex items-center gap-3 px-4 py-4 bg-[#3a332e] rounded-lg cursor-pointer hover:bg-[#4a433e] hover:shadow-md transition-all duration-300 group">
                    <div className="w-8 h-8 rounded-full bg-[#4a433e] flex items-center justify-center flex-shrink-0 group-hover:bg-[#5a534e]">
                      <CheckCircle size={16} className="text-white" />
                    </div>
                    <span className="text-white font-medium text-sm">
                      Confirm Your Details
                    </span>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN - Calendar */}
              <div className="flex-1 bg-white rounded-xl p-4 flex flex-col justify-between">
                {/* Calendar Header */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-xs text-gray-500">Select date:</div>
                    <div className="flex items-center gap-2">
                      <span className="text-red-500 text-xs">◄ Year</span>
                      <span className="text-blue-500 text-xs">Today ►</span>
                    </div>
                  </div>

                  {/* Month Navigation */}
                  <div className="flex items-center justify-between mb-4">
                    <button
                      onClick={() => changeMonth(-1)}
                      className="text-gray-600 hover:text-gray-900 text-lg"
                    >
                      ◄
                    </button>
                    <div className="font-semibold text-gray-900 text-sm">
                      {monthNames[currentMonth.getMonth()]}{" "}
                      <span className="ml-2">October ►</span>
                    </div>
                    <button
                      onClick={() => changeMonth(1)}
                      className="text-gray-600 hover:text-gray-900 text-lg"
                    >
                      ►
                    </button>
                  </div>

                  {/* Week Labels */}
                  <div className="grid grid-cols-7 gap-1 mb-2">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                      (day) => (
                        <div
                          key={day}
                          className="text-center text-[10px] font-medium text-gray-500 py-1"
                        >
                          {day}
                        </div>
                      )
                    )}
                  </div>

                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-1 flex-grow">
                    {[...Array(firstDay)].map((_, i) => (
                      <div key={`empty-${i}`} />
                    ))}
                    {[...Array(daysInMonth)].map((_, i) => {
                      const day = i + 1;
                      const isSelected = selectedDate === day;
                      return (
                        <button
                          key={day}
                          onClick={() => handleDateSelect(day)}
                          className={`aspect-square rounded-md text-xs font-medium transition-all ${
                            isSelected
                              ? "bg-orange-500 text-white"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="flex gap-2 mt-4">
                  <button className="flex-1 py-2 rounded-lg border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-50">
                    Cancel
                  </button>
                  <button className="flex-1 py-2 rounded-lg bg-orange-500 text-white text-sm font-medium hover:bg-orange-600">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
