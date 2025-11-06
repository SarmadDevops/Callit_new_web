import React, { useEffect } from "react";

const PrivacyPolicy = () => {
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
            Privacy Policy
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Information We Collect */}
        <section className="mb-8 bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-black mb-6">
            1.1 Information We Collect
          </h2>
          <p className="text-black leading-relaxed text-lg mb-6">
            We collect the following information to deliver our creative, tech,
            content writing, event management, and ticket-selling services:
          </p>

          <div className="mb-8 bg-white border border-gray-100 rounded-lg p-5">
            <h3 className="text-xl font-semibold text-black mb-4">
              a. Personal Information
            </h3>
            <ul className="space-y-3 ml-6">
              <li className="text-black leading-relaxed text-lg">
                <strong>Contact Details:</strong> Name, email address, phone
                number, postal address provided during account creation, ticket
                purchases, or service requests.
              </li>
              <li className="text-black leading-relaxed text-lg">
                <strong>Business Information:</strong> Company name, billing
                details, or other information for service agreements or
                ticketing.
              </li>
              <li className="text-black leading-relaxed text-lg">
                <strong>Payment Information:</strong> Credit/debit card details,
                bank account information, or other payment data processed via
                secure third-party gateways.
              </li>
              <li className="text-black leading-relaxed text-lg">
                <strong>Identification Information:</strong> Government-issued
                ID (e.g., CNIC for Pakistani residents) for event entry,
                ticketing compliance, or legal requirements.
              </li>
              <li className="text-black leading-relaxed text-lg">
                <strong>Event-Specific Information:</strong> Age, preferences,
                or other details for ticketing or event requirements.
              </li>
            </ul>
          </div>

          <div className="mb-8 bg-white border border-gray-100 rounded-lg p-5">
            <h3 className="text-xl font-semibold text-black mb-4">
              b. Project-Related Information
            </h3>
            <ul className="space-y-3 ml-6">
              <li className="text-black leading-relaxed text-lg">
                Client-provided materials (e.g., logos, media assets, creative
                briefs) for marketing, content creation, or event services.
              </li>
              <li className="text-black leading-relaxed text-lg">
                Ticket purchase history, seating preferences, or post-event
                feedback.
              </li>
            </ul>
          </div>

          <div className="mb-8 bg-white border border-gray-100 rounded-lg p-5">
            <h3 className="text-xl font-semibold text-black mb-4">
              c. Website Usage and Technical Data
            </h3>
            <ul className="space-y-3 ml-6">
              <li className="text-black leading-relaxed text-lg">
                <strong>Analytics Data:</strong> Website interactions (e.g.,
                pages visited, time spent) via cookies or tools like Google
                Analytics.
              </li>
              <li className="text-black leading-relaxed text-lg">
                <strong>Technical Metadata:</strong> IP address, browser type,
                device information for diagnostics, security, and performance.
              </li>
              <li className="text-black leading-relaxed text-lg">
                <strong>Location Data:</strong> Approximate location from IP
                address or provided address for ticketing or service delivery.
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-100 rounded-lg p-5">
            <h3 className="text-xl font-semibold text-black mb-4">
              d. Third-Party Data
            </h3>
            <ul className="space-y-3 ml-6">
              <li className="text-black leading-relaxed text-lg">
                Information from event promoters, venues, or third-party
                platforms (e.g., payment processors, hosting services).
              </li>
              <li className="text-black leading-relaxed text-lg">
                Publicly available data (e.g., business details from your
                website or social media) relevant to our services.
              </li>
            </ul>
          </div>
        </section>

        {/* How We Collect Information */}
        <section className="mb-8 bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-black mb-6">
            1.2 How We Collect Information
          </h2>
          <ul className="space-y-3 ml-6">
            <li className="text-black leading-relaxed text-lg">
              <strong>Direct Interactions:</strong> Through forms, account
              creation, ticket purchases, or inquiries via email/phone.
            </li>
            <li className="text-black leading-relaxed text-lg">
              <strong>Automated Technologies:</strong> Cookies, web beacons, or
              analytics tools on our website.
            </li>
            <li className="text-black leading-relaxed text-lg">
              <strong>Third Parties:</strong> From payment processors,
              promoters, venues, or platforms supporting our services.
            </li>
            <li className="text-black leading-relaxed text-lg">
              <strong>Event Interactions:</strong> During ticket purchases,
              event attendance, or feedback submission.
            </li>
          </ul>
        </section>

        {/* How We Use Your Information */}
        <section className="mb-8 bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-black mb-6">
            1.3 How We Use Your Information
          </h2>
          <p className="text-black leading-relaxed text-lg mb-4">
            We use your information to:
          </p>
          <ul className="space-y-3 ml-6">
            <li className="text-black leading-relaxed text-lg">
              Deliver creative, tech, content writing, event management, and
              ticket-selling services, including processing orders and
              fulfilling project requests.
            </li>
            <li className="text-black leading-relaxed text-lg">
              Process secure payment transactions for tickets or services.
            </li>
            <li className="text-black leading-relaxed text-lg">
              Communicate via responses to inquiries, order confirmations, event
              updates, or project timelines.
            </li>
            <li className="text-black leading-relaxed text-lg">
              Improve user experience by analyzing website usage, event
              feedback, and service performance.
            </li>
            <li className="text-black leading-relaxed text-lg">
              Send marketing communications (e.g., newsletters, event
              promotions) if you opt-in; you may unsubscribe at any time.
            </li>
            <li className="text-black leading-relaxed text-lg">
              Verify event restrictions (e.g., age) and coordinate with
              promoters/venues for ticketed events.
            </li>
            <li className="text-black leading-relaxed text-lg">
              Comply with legal obligations under Pakistani laws (e.g., tax
              reporting, Prevention of Electronic Crimes Act, 2016) and
              international laws (e.g., GDPR).
            </li>
            <li className="text-black leading-relaxed text-lg">
              Prevent fraud, unauthorized ticket resales, or platform misuse,
              per Pakistan's Financial Institutions Ordinance, 2001.
            </li>
          </ul>
        </section>

        {/* Legal Basis */}
        <section className="mb-8 bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-black mb-6">
            1.4 Legal Basis for Processing
          </h2>
          <p className="text-black leading-relaxed text-lg mb-4">
            We process data based on:
          </p>
          <ul className="space-y-3 ml-6">
            <li className="text-black leading-relaxed text-lg">
              <strong>Consent:</strong> For marketing, ticket purchases, or
              event-related processing.
            </li>
            <li className="text-black leading-relaxed text-lg">
              <strong>Contractual Necessity:</strong> To fulfill service
              agreements or ticket orders.
            </li>
            <li className="text-black leading-relaxed text-lg">
              <strong>Legal Obligation:</strong> For compliance with Pakistani
              and international regulations.
            </li>
            <li className="text-black leading-relaxed text-lg">
              <strong>Legitimate Interests:</strong> For service improvement,
              fraud prevention, or event logistics, provided your rights are not
              overridden.
            </li>
          </ul>
          <p className="text-black leading-relaxed text-lg mt-4">
            For EU residents, we comply with GDPR Article 6, processing data
            based on consent, contract, or legitimate interests.
          </p>
        </section>

        {/* Data Sharing */}
        <section className="mb-8 bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-black mb-6">
            1.5 Data Sharing and Disclosure
          </h2>
          <p className="text-black leading-relaxed text-lg mb-4">
            We do not sell, rent, or trade your personal information. We may
            share it with:
          </p>
          <ul className="space-y-3 ml-6">
            <li className="text-black leading-relaxed text-lg">
              <strong>Third-Party Service Providers:</strong> Payment
              processors, hosting services, or analytics providers assisting our
              operations, bound by confidentiality agreements.
            </li>
            <li className="text-black leading-relaxed text-lg">
              <strong>Event Promoters and Venues:</strong> For ticket
              validation, event entry, or compliance with event requirements.
              Promoters are responsible for their own terms.
            </li>
            <li className="text-black leading-relaxed text-lg">
              <strong>Legal Authorities:</strong> When required by law (e.g.,
              court orders, anti-fraud measures under Pakistan's Prevention of
              Electronic Crimes Act, 2016).
            </li>
            <li className="text-black leading-relaxed text-lg">
              <strong>Business Transfers:</strong> In mergers, acquisitions, or
              asset sales, with equivalent privacy protections.
            </li>
          </ul>
          <p className="text-black leading-relaxed text-lg mt-4">
            As an authorized agent for ticket sales, we share data with
            promoters/venues to fulfill orders but are not liable for their data
            practices beyond contractual obligations.
          </p>
        </section>

        {/* Your Rights */}
        <section className="mb-8 bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-black mb-6">
            1.9 Your Rights
          </h2>
          <p className="text-black leading-relaxed text-lg mb-4">
            You have the right to:
          </p>
          <ul className="space-y-3 ml-6">
            <li className="text-black leading-relaxed text-lg">
              Access, correct, or delete your data.
            </li>
            <li className="text-black leading-relaxed text-lg">
              Restrict processing or request portability (per GDPR).
            </li>
            <li className="text-black leading-relaxed text-lg">
              Object to marketing or withdraw consent.
            </li>
          </ul>
          <p className="text-black leading-relaxed text-lg mt-4">
            Contact us at contact@callit-studio.com or H96C+9XM, Peer Muhammad
            Sadiq Rd Mughalpura, Lahore, 54840. We respond within 30 days (or 15
            days under Pakistan's Data Protection Bill, 2023, if applicable). EU
            residents may contact their data protection authority.
          </p>
        </section>

        {/* Children's Privacy */}
        <section className="mb-8 bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-black mb-6">
            1.12 Children's Privacy
          </h2>
          <p className="text-black leading-relaxed text-lg">
            Our services are not for individuals under 16. We do not knowingly
            collect children's data and will delete it if discovered.
          </p>
        </section>

        {/* Contact Section */}
        <section className="bg-[#4A1018] border border-[#600015] rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-6">
            Contact Information
          </h2>
          <p className="text-white leading-relaxed text-lg mb-6">
            If you have any questions about this Privacy Policy, please contact
            us at:
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
                href="https://maps.google.com/?q=H96C+9XM,+Peer+Muhammad+Sadiq+Rd+Mughalpura,+Lahore,+54840"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                H96C+9XM, Peer Muhammad Sadiq Rd Mughalpura, Lahore, 54840
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
