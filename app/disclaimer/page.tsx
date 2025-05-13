export default function Disclaimer() {
  return (
    <div className="w-full">
      <div
        className="relative w-full h-[300px] bg-cover bg-center"
        style={{ backgroundImage: "url('/hero2.png')" }}
      >
        <div className="absolute inset-0 bg-secondary/70 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Disclaimer</h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto p-6 space-y-8 text-lg leading-relaxed text-gray-800">
        <h2 className="text-md font-semibold text-muted-foreground">
          Effective Date: January 1st, 2025
        </h2>

        <section>
          <h3 className="text-2xl font-semibold mb-2">1. No Legal Advice</h3>
          <p>
            The content on this Site does <strong>not</strong> constitute legal
            advice. Do <strong>not</strong> act or rely on any information from
            this Site without consulting a qualified attorney.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-2">
            2. No Attorney-Client Relationship
          </h3>
          <p>
            Viewing this Site or contacting us <strong>does not</strong> create
            an attorney-client relationship. A signed engagement agreement is
            required.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-2">
            3. Accuracy & No Liability
          </h3>
          <p>
            While we strive for accuracy, we <strong>do not guarantee</strong>{" "}
            the completeness or applicability of content. Kashlan Law LLC is{" "}
            <strong>not liable</strong> for reliance on Site content.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-2">
            4. Third-Party Content
          </h3>
          <p>
            This Site may link to external websites. We{" "}
            <strong>do not endorse</strong> or take responsibility for
            third-party content.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-2">
            5. State-Specific Laws
          </h3>
          <p>
            Legal principles may vary by jurisdiction. Not all content may apply
            in every state.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-2">
            6. Changes to Disclaimer
          </h3>
          <p>We reserve the right to update this Disclaimer at any time.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-2">7. SMS Disclaimer</h3>
          <p>
            By texting (470) 945-1965, you consent to receive SMS from Kashlan
            Law LLC. Message frequency varies. Reply HELP for help. STOP to opt
            out.
          </p>
        </section>
      </div>
    </div>
  );
}
// This is a simple disclaimer page for a law firm website. It includes sections on legal advice, attorney-client relationships, accuracy, third-party content, state-specific laws, changes to the disclaimer, and SMS consent. The page is styled using Tailwind CSS and includes a hero image at the top.