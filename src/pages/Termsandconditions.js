import React, { useEffect } from "react";

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header Section */}
      <div className="bg-black py-24">
        <div className="max-w-6xl mx-auto px-4">
          {/* Page Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-center text-white">
            Terms & Conditions
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction Section */}
        <section className="mb-8 bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-black mb-6">
            1. INTRODUCTION
          </h2>
          <p className="text-black leading-relaxed text-lg mb-4">
            These Terms and Conditions ("Terms") govern your access to and use
            of Call IT Studio's services, including our website, creative
            services, technology solutions, content writing, event management,
            and ticket sales. By accessing or using our services, you agree to
            be bound by these Terms. If you disagree with any part of these
            Terms, please do not use our services.
          </p>
        </section>

        {/* Service Scope Section */}
        <section className="mb-8 bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-black mb-6">
            2. SERVICE SCOPE
          </h2>
          <p className="text-black leading-relaxed text-lg mb-4">
            Call IT Studio provides:
          </p>
          <ul className="space-y-3 ml-6">
            <li className="text-black leading-relaxed text-lg">
              <strong>Creative Services:</strong> Graphic design, branding,
              marketing materials, video production, and multimedia content
              creation.
            </li>
            <li className="text-black leading-relaxed text-lg">
              <strong>Technology Solutions:</strong> Web development, mobile
              applications, software development, IT consulting, and digital
              transformation services.
            </li>
            <li className="text-black leading-relaxed text-lg">
              <strong>Content Writing:</strong> Copywriting, blog content,
              technical documentation, social media content, and marketing copy.
            </li>
            <li className="text-black leading-relaxed text-lg">
              <strong>Event Management:</strong> Event planning, coordination,
              promotion, venue booking, and logistical support for corporate and
              private events.
            </li>
            <li className="text-black leading-relaxed text-lg">
              <strong>Ticket Sales:</strong> Acting as an authorized agent for
              ticket sales to various events, including concerts, conferences,
              and entertainment shows.
            </li>
          </ul>
        </section>

        {/* User Responsibilities Section */}
        <section className="mb-8 bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-black mb-6">
            3. USER RESPONSIBILITIES
          </h2>
          <p className="text-black leading-relaxed text-lg mb-4">
            By using our services, you agree to:
          </p>
          <ul className="space-y-3 ml-6">
            <li className="text-black leading-relaxed text-lg">
              Provide accurate, current, and complete information during
              registration or service requests.
            </li>
            <li className="text-black leading-relaxed text-lg">
              Maintain the confidentiality of your account credentials and
              notify us immediately of any unauthorized access.
            </li>
            <li className="text-black leading-relaxed text-lg">
              Use our services only for lawful purposes and in compliance with
              all applicable laws, including Pakistani regulations (Prevention
              of Electronic Crimes Act, 2016) and international standards.
            </li>
            <li className="text-black leading-relaxed text-lg">
              Respect intellectual property rights and not reproduce,
              distribute, or misuse our proprietary content without
              authorization.
            </li>
            <li className="text-black leading-relaxed text-lg">
              Provide necessary materials (e.g., logos, content, specifications)
              for service delivery in a timely manner.
            </li>
          </ul>
        </section>

        {/* Payment Terms Section */}
        <section className="mb-8 bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-black mb-6">
            4. PAYMENT TERMS
          </h2>
          <ul className="space-y-3 ml-6">
            <li className="text-black leading-relaxed text-lg">
              <strong>Service Payments:</strong> Payments for creative, tech,
              and content services are due as outlined in individual project
              agreements or invoices.
            </li>
            <li className="text-black leading-relaxed text-lg">
              <strong>Ticket Payments:</strong> Ticket purchases must be
              completed at the time of booking through secure payment gateways.
            </li>
            <li className="text-black leading-relaxed text-lg">
              <strong>Currency:</strong> All prices are listed in Pakistani
              Rupees (PKR) unless otherwise specified.
            </li>
            <li className="text-black leading-relaxed text-lg">
              <strong>Late Payments:</strong> Overdue payments may incur service
              suspension and late fees as specified in individual agreements.
            </li>
            <li className="text-black leading-relaxed text-lg">
              <strong>Refunds:</strong> Refund policies vary by service type and
              are subject to the terms outlined in specific agreements or ticket
              policies.
            </li>
          </ul>
        </section>

        {/* Intellectual Property Section */}
        <section className="mb-8 bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-black mb-6">
            5. INTELLECTUAL PROPERTY
          </h2>
          <ul className="space-y-3 ml-6">
            <li className="text-black leading-relaxed text-lg">
              <strong>Our Content:</strong> All content, trademarks, logos, and
              intellectual property on our website and in our services remain
              the property of Call IT Studio unless otherwise specified.
            </li>
            <li className="text-black leading-relaxed text-lg">
              <strong>Client-Provided Materials:</strong> You retain ownership
              of materials you provide to us and grant us a license to use them
              solely for delivering agreed services.
            </li>
            <li className="text-black leading-relaxed text-lg">
              <strong>Work Product:</strong> Ownership of deliverables (e.g.,
              designs, code, content) transfers to you upon full payment, unless
              otherwise specified in project agreements.
            </li>
            <li className="text-black leading-relaxed text-lg">
              <strong>Third-Party Content:</strong> We are not responsible for
              third-party content, including event details, promotional
              materials, or external links.
            </li>
          </ul>
        </section>

        {/* Limitation of Liability Section */}
        <section className="mb-8 bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-black mb-6">
            6. LIMITATION OF LIABILITY
          </h2>
          <ul className="space-y-3 ml-6">
            <li className="text-black leading-relaxed text-lg">
              <strong>Service Delivery:</strong> We strive to deliver
              high-quality services but cannot guarantee specific outcomes or
              results.
            </li>
            <li className="text-black leading-relaxed text-lg">
              <strong>Ticket Sales:</strong> As an authorized agent, we are not
              liable for event cancellations, changes, or issues beyond our
              control. Event-specific terms apply.
            </li>
            <li className="text-black leading-relaxed text-lg">
              <strong>Technical Issues:</strong> We are not liable for temporary
              service interruptions, data loss, or technical failures beyond our
              reasonable control.
            </li>
            <li className="text-black leading-relaxed text-lg">
              <strong>Maximum Liability:</strong> Our total liability for any
              claim shall not exceed the amount paid by you for the specific
              service in question.
            </li>
            <li className="text-black leading-relaxed text-lg">
              <strong>Force Majeure:</strong> We are not liable for delays or
              failures due to circumstances beyond our reasonable control (e.g.,
              natural disasters, government actions, pandemics).
            </li>
          </ul>
        </section>

        {/* Termination Section */}
        <section className="mb-8 bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-black mb-6">7. TERMINATION</h2>
          <ul className="space-y-3 ml-6">
            <li className="text-black leading-relaxed text-lg">
              <strong>By You:</strong> You may terminate services by providing
              written notice as specified in individual agreements.
            </li>
            <li className="text-black leading-relaxed text-lg">
              <strong>By Us:</strong> We may terminate or suspend services for
              breach of these Terms, non-payment, or other violations.
            </li>
            <li className="text-black leading-relaxed text-lg">
              <strong>Effect of Termination:</strong> Upon termination, access
              to services will cease, but payment obligations for completed work
              remain.
            </li>
            <li className="text-black leading-relaxed text-lg">
              <strong>Data Retention:</strong> We may retain data as required by
              law or for legitimate business purposes after termination.
            </li>
          </ul>
        </section>

        {/* Governing Law Section */}
        <section className="mb-8 bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-black mb-6">
            8. GOVERNING LAW
          </h2>
          <p className="text-black leading-relaxed text-lg mb-4">
            These Terms are governed by the laws of Pakistan. Any disputes
            arising from or relating to these Terms or our services shall be
            subject to the exclusive jurisdiction of the courts in Lahore,
            Punjab, Pakistan.
          </p>
        </section>

        {/* Privacy and Data Protection Section */}
        <section className="mb-8 bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-black mb-6">
            9. PRIVACY AND DATA PROTECTION
          </h2>
          <p className="text-black leading-relaxed text-lg mb-4">
            Your privacy is important to us. Our collection, use, and protection
            of your personal data are governed by our Privacy Policy, which
            forms an integral part of these Terms. By using our services, you
            consent to our data practices as outlined in our Privacy Policy.
          </p>
        </section>

        {/* Changes to Terms Section */}
        <section className="mb-8 bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-black mb-6">
            10. CHANGES TO TERMS
          </h2>
          <p className="text-black leading-relaxed text-lg mb-4">
            We reserve the right to modify these Terms at any time. Updated
            Terms will be posted on our website with the effective date.
            Continued use of our services after changes constitutes acceptance
            of the revised Terms.
          </p>
        </section>

        {/* Contact Section */}
        <section className="bg-[#4A1018] border border-[#600015] rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-6">
            11. CONTACT INFORMATION
          </h2>
          <p className="text-white leading-relaxed text-lg mb-6">
            If you have any questions about these Terms & Conditions, please
            contact us at:
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <i className="fas fa-envelope text-lg text-gray-300"></i>
              <span className="text-base sm:text-lg text-gray-300">
                contact@callit-studio.com
              </span>
            </div>
            <div className="flex items-center gap-4">
              <i className="fas fa-phone-alt text-lg text-gray-300"></i>
              <span className="text-base sm:text-lg text-gray-300">
                +92-3213752520
              </span>
            </div>
            <div className="flex items-start gap-4">
              <i className="fas fa-map-marker-alt mt-1.5 text-lg text-gray-300"></i>
              <a
                href="https://www.google.com/maps/search/?api=1&query=24+Griffin+LARECHS+Scheme,+Near+Railway+Griffin+Institute,+Mughalpura,+Lahore"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                24 Griffin Larechs scheme Near RAILWAY GRIFFIN INSTITUTE Mughalpura, Lahore
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
