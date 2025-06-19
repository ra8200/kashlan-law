export default function PrivacyPolicy() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="relative w-full h-[300px] bg-cover bg-center"
        style={{ backgroundImage: "url('/hero2.png')" }}
      >
        <div className="absolute inset-0 bg-secondary/70 bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto p-6">
        <h4 className="text-sm text-muted-foreground">
          Effective Date: January 1st, 2025
        </h4>

        <div className="mt-6 space-y-8 text-lg leading-relaxed text-gray-800">
          <p>
            Kashlan Law LLC is committed to protecting your privacy. This
            Privacy Policy describes how we collect, use, disclose, and protect
            your information when you visit our website, https://www.kash.law/,
            or interact with us in any other manner.
          </p>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Information We Collect
            </h2>
            <p>
              We may collect the following types of information from you:
              <br />
              <strong>Personal Information:</strong> full name, phone number,
              email address, and mailing address you provide via our website,
              phone, or email.
              <br />
              <strong>Automatically Collected:</strong> IP address, browser
              type, operating system, referring URLs, and pages viewed.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              How We Use Your Information
            </h2>
            <p>
              We use your information for:
              <br />
              1. Appointment reminders
              <br />
              2. Billing questions
              <br />
              3. Case status updates
              <br />
              4. Improving our services
              <br />
              5. Legal compliance
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Consent to Receive Text Messages
            </h2>
            <p>
              By providing your phone number and opting in, you consent to
              receive SMS messages from Kashlan Law LLC related to your inquiry
              or our services. Message frequency varies. Message and data rates
              may apply. Reply STOP to opt out. HELP for help.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Information Sharing and Disclosure
            </h2>
            <p>
              We do not sell or rent your personal data. We never share your SMS
              consent or phone number for third-party marketing.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Data Security</h2>
            <p>
              We take steps to protect your information, though no method is
              100% secure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Your Rights and Choices
            </h2>
            <p>
              You can opt out of marketing at any time. You may also request to
              access or correct your data by contacting us.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Third-Party Websites
            </h2>
            <p>
              We are not responsible for the privacy practices of external
              websites linked on our site.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              SMS Message Communication
            </h2>
            <p>
              Kashlan Law LLC or its authorized agents may send SMS through your
              provider. Opt-in data will never be sold or transferred. Reply
              STOP to cancel. HELP for help.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Children’s Privacy</h2>
            <p>
              Our site is not intended for children under 13. If data is
              collected inadvertently, we will delete it.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Changes to This Privacy Policy
            </h2>
            <p>
              This policy may change. Check this page regularly for updates.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
            <p>
              Kashlan Law LLC
              <br />
              1355 Terrell Mill Road, Building 1480 Suite 200, Marietta, GA 30067 
              <br />
              (470) 945-1965
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
// This code defines a Privacy Policy page for a law firm website. It includes sections on information collection, usage, consent for SMS messages, data security, and contact information. The page is styled using Tailwind CSS classes.
