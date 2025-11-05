import { X } from "lucide-react";
import logo from "../assets/logo.png";
import Calendy from "./Calendy";
export default function ContactPopup({ isOpen, onClose }) {
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
          <div className="px-4 py-4">
            {/* Only Calendly Component */}
            <Calendy />
          </div>
        </div>
      </div>
    </div>
  );
}
