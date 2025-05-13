export default function TermsOfService() {
  return (
    <div className="w-full">
      <div
        className="relative w-full h-[300px] bg-cover bg-center"
        style={{ backgroundImage: "url('/hero2.png')" }}
      >
        <div className="absolute inset-0 bg-secondary/70 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Terms of Service</h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto p-6 space-y-8 text-lg leading-relaxed text-gray-800">
        <h2 className="text-md font-semibold text-muted-foreground">
          Effective Date: January 1st, 2025
        </h2>

        <section>
          <h3 className="text-2xl font-semibold mb-2">
            1. Acceptance of Terms
          </h3>
          <p>
            By using our website, you agree to these Terms of Service. If you
            disagree, discontinue use immediately.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-2">
            2. No Attorney-Client Relationship
          </h3>
          <p>
            Use of the Site does <strong>not</strong> form an attorney-client
            relationship. Legal representation requires a formal agreement.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-2">3. Permitted Use</h3>
          <p>
            You may only use the Site for lawful purposes. Initiating SMS
            contact implies consent to receive related messages.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-2">
            4. Intellectual Property
          </h3>
          <p>
            All content is owned by Kashlan Law LLC. You may not copy or reuse
            without permission.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-2">
            5. Limitation of Liability
          </h3>
          <p>
            We are <strong>not responsible</strong> for actions taken based on
            Site content. Use it at your own risk.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-2">6. Third-Party Links</h3>
          <p>
            External links do not imply endorsement. We are{" "}
            <strong>not responsible</strong> for third-party sites or content.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-2">7. Changes to Terms</h3>
          <p>
            We may modify these terms at any time. Please review them
            periodically.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-2">8. Governing Law</h3>
          <p>These Terms are governed by the laws of the State of Georgia.</p>
        </section>
      </div>
    </div>
  );
}

// This code defines a Terms of Service page for a law firm's website. It includes sections on acceptance of terms, no attorney-client relationship, permitted use, intellectual property, limitation of liability, third-party links, changes to terms, and governing law. The page is styled with Tailwind CSS and includes a hero image at the top.