"use client";

import { useState, useEffect, useRef } from "react";
import { CalendarIcon, Clock, CheckCircle } from "lucide-react";

// Get the primary color from CSS variables - we'll extract the RGB values
const getPrimaryColorHex = () => {
  // Default to #800000 (maroon) which matches the CSS variable in globals.css
  return "#800000";
};

const CalendlyScheduler = ({
  calendlyUrl = "https://calendly.com/hr3261331",
}) => {
  const [activeStep, setActiveStep] = useState(1);
  const calendlyContainerRef = useRef(null);
  const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false);
  const primaryColor = getPrimaryColorHex();

  useEffect(() => {
    // Create a container for Calendly's script and styles
    const body = document.body;

    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    body.appendChild(script);

    script.onload = () => {
      setIsCalendlyLoaded(true);
    };

    return () => {
      // Clean up
      if (body.contains(script)) {
        body.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    if (!isCalendlyLoaded || !calendlyContainerRef.current) return;

    // Clear the container first
    if (calendlyContainerRef.current.children.length > 0) {
      calendlyContainerRef.current.innerHTML = "";
    }

    try {
      // @ts-ignore - Calendly is loaded via script
      window.Calendly.initInlineWidget({
        url: calendlyUrl,
        parentElement: calendlyContainerRef.current,
        prefill: {},
        utm: {},
        // Set theme color using direct HEX value
        branding: {
          color: primaryColor,
          textColor: "#ffffff",
        },
      });

      // Apply additional styling after initialization
      setTimeout(() => {
        const styleOverride = document.createElement("style");
        styleOverride.textContent = `
          /* Override any remaining blue elements */
          .calendly-inline-widget .calendar-table .active,
          .calendly-inline-widget .calendar-table .active:hover,
          .calendly-inline-widget .calendar-table td span[data-href]:hover,
          .calendly-inline-widget .calendar-table td[role="button"]:hover,
          .calendly-inline-widget .calendar-table td.calendly-selected,
          .calendly-inline-widget .spot-picker__spots.spot-picker__spots--selected,
          .calendly-inline-widget .spot-picker .spot-picker__column li.spot-picker__spot--selected,
          .calendly-inline-widget button.calendly-button {
            background-color: ${primaryColor} !important;
            border-color: ${primaryColor} !important;
          }
          
          /* Override links */
          .calendly-inline-widget a {
            color: ${primaryColor} !important;
          }
        `;
        document.head.appendChild(styleOverride);

        // Try to find and modify the iframe content if possible
        try {
          if (calendlyContainerRef.current) {
            const iframe = calendlyContainerRef.current.querySelector("iframe");
            if (iframe && iframe.contentDocument) {
              const iframeStyle = document.createElement("style");
              iframeStyle.textContent = styleOverride.textContent;
              iframe.contentDocument.head.appendChild(iframeStyle);
            }
          }
        } catch (err) {
          console.error("Could not access iframe content:", err);
        }
      }, 1000); // Apply after 1 second to ensure Calendly has loaded
    } catch (error) {
      console.error("Error initializing Calendly widget:", error);
    }
  }, [isCalendlyLoaded, calendlyUrl, primaryColor]);

  const handleStepClick = (step) => {
    if (step <= activeStep) {
      setActiveStep(step);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row rounded-xl overflow-hidden shadow-lg">
      {/* Left Info Panel (previously right) */}
      <div className="w-full lg:w-1/2 bg-[#1a1411] text-white p-8 rounded-l-xl">
        <h2 className="text-2xl font-bold mb-4">Schedule an Appointment</h2>
        <p className="mb-6">
          We value your time! Use our calendar to book a meeting with our team
          for questions, assistance, or project discussions—just a few clicks
          away!
        </p>

        <div className="space-y-4">
          {/* Step 1 */}
          <div
            className={`flex items-center p-4 rounded-lg cursor-pointer transition-all ${
              activeStep === 1 ? "bg-[#3a332e] shadow-md" : "hover:bg-[#3a332e]"
            }`}
            onClick={() => handleStepClick(1)}
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#4a433e] flex items-center justify-center mr-4">
              <CalendarIcon className="text-white" size={20} />
            </div>
            <span className="font-medium">Select a Date</span>
          </div>

          {/* Step 2 */}
          <div
            className={`flex items-center p-4 rounded-lg cursor-pointer transition-all ${
              activeStep === 2 ? "bg-[#3a332e] shadow-md" : "hover:bg-[#3a332e]"
            }`}
            onClick={() => handleStepClick(2)}
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#4a433e] flex items-center justify-center mr-4">
              <Clock className="text-white" size={20} />
            </div>
            <span className="font-medium">Choose a Time</span>
          </div>

          {/* Step 3 */}
          <div
            className={`flex items-center p-4 rounded-lg cursor-pointer transition-all ${
              activeStep === 3 ? "bg-[#3a332e] shadow-md" : "hover:bg-[#3a332e]"
            }`}
            onClick={() => handleStepClick(3)}
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#4a433e] flex items-center justify-center mr-4">
              <CheckCircle className="text-white" size={20} />
            </div>
            <span className="font-medium">Confirm Your Details</span>
          </div>
        </div>
      </div>

      {/* Right Calendar Panel (previously left) */}
      <div className="w-full lg:w-1/2 bg-white p-6 rounded-r-xl">
        <div className="relative">
          <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-semibold py-1 px-2 rounded-md rotate-12 shadow-md">
            Currently
          </div>
          <h3 className="text-xl font-semibold mb-4">Select a Day</h3>
        </div>

        {/* Calendar will be rendered by Calendly */}
        <div
          ref={calendlyContainerRef}
          style={{
            height: "500px",
            width: "100%",
            "--primary-color": primaryColor,
          }}
          className="calendly-container"
        ></div>
      </div>
    </div>
  );
};

export default CalendlyScheduler;
