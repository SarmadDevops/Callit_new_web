import React, { useState } from "react";
import { Check } from "lucide-react";
import ContactPopup from "./ContactPopup";

export default function ServicesPricingPlan() {
  const [showContact, setShowContact] = useState(false);
  const plans = [
    {
      name: "Starter Spark",
      badge: "Starter Pack",
      price: "$499",
      period: "/Month",
      features: [
        "Essential team support (designer + writer + strategist)",
        "8–10 social media posts per month",
        "2 blog posts OR 2 technical write-ups",
        "Monthly content calendar",
        "Light ad management (Google OR Facebook)",
        "Monthly analytics report",
        "Basic content strategy",
        "Basic tech guidance",
        "Up to 3 revisions per month",
        
      ],
    },
    {
      name: "Marketing Maestro",
      badge: "Best value",
      price: "$1,499",
      period: "/Month",
      popular: true,
      features: [
        "Dedicated team (designer + senior writer + marketing manager)",
        "16–20 social media posts per month",
        "4 blog posts / case studies / technical documents",
        "Full content strategy (SEO + marketing + brand tone)",
        "Weekly content calendar updates",
        "Paid ads management (Google + Facebook/Instagram)",
        "Email marketing content (4 emails/month)",
        "Up to 6 revisions per month",
        
      ],
    },
    {
      name: "Growth Guru",
      badge: "Most popular",
      price: "$1,999",
      period: "/Month",
      features: [
        "Full dedicated team (designer, animator, senior writer, strategist, ads expert)",
        "30–40 social posts + reels + animations",
        "8–10 blogs, whitepapers, or technical documents",
        "Complete digital strategy (content, SEO, marketing funnels)",
        "Bi-weekly growth planning meetings",
        "Advanced ad campaigns (Google + Meta + Retargeting)",
        "Email sequences, newsletters, landing pages",
        "Unlimited revisions (fair use)",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 via-red-900 to-red-950 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1250px] mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white mb-12 sm:mb-16 px-4">
          Pricing Plan
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-red-950/50 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${
                plan.popular
                  ? "border-red-400 shadow-xl shadow-red-500/20"
                  : "border-red-800/50 hover:border-red-700"
              }`}
            >
              {/* Header */}
              <div className="mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    {plan.name}
                  </h2>
                  <span className="px-3 py-1 bg-red-800/50 border border-red-700 rounded-full text-xs text-red-200 w-fit">
                    {plan.badge}
                  </span>
                </div>

                <div className="flex items-baseline mb-6">
                  <span className="text-4xl sm:text-5xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-lg sm:text-xl text-red-300 ml-1">
                    {plan.period}
                  </span>
                </div>

                <button
                  className="w-full py-3 px-6 bg-transparent border-2 border-red-400 text-red-300 rounded-full font-semibold hover:bg-red-400 hover:text-white transition-all duration-300"
                  onClick={() => setShowContact(true)}
                >
                  Get Started
                </button>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-4">
                  Features
                </h3>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-red-100"
                    >
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 flex-shrink-0 mt-1" />
                      <span className="text-xs sm:text-sm leading-relaxed break-words">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ContactPopup
        isOpen={showContact}
        onClose={() => setShowContact(false)}
      />
    </div>
  );
}
