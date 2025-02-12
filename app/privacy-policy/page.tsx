import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col min-h-dvh">
        <header className="relative w-full bg-[url('/hero2.png')] bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-secondary/70" />
            <div className="container py-20 px-4 md:px-6 relative z-10 text-center text-white">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Privacy Policy</h1>
            </div>
        </header>
        <main className="flex-1">
            <div className="container mx-auto py-16">
              <h4 className="text-md font-semibold">Effective Date: January, 1st, 2025</h4>
              <p className="mt-4 text-md">
                Kashlan Law LLC (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website https://www.kashlanlaw.com (the &quot;Site&quot;), contact us, or provide your information. 
              </p>
              <h3 className="mt-8 text-xl font-bold">1. Information We Collect</h3>
              <p className="mt-4 text-md">
                We collect the following types of information:
                <br />
                - Personal Information: Name, email address, phone number, and other details you provide through our contact form.
                <br />
                - Automatically Collected Data: IP address, browser type, operating system, and website usage statistics.
                <br />
                - Cookies & Tracking Technologies: We use cookies to enhance user experience and analyze website traffic.
              </p>
              <h3 className="mt-8 text-xl font-bold">2. How We Use Your Information</h3>
              <p className="mt-4 text-md">
                We may use the information we collect to:
                <br />
                - Respond to inquiries and provide legal information.
                <br />
                - Send SMS notifications (with your consent).
                <br />
                - Improve our website and services.
                <br />
                - Comply with legal obligations.
              </p>
              <h3 className="mt-8 text-xl font-bold">3. SMS & Communication Consent</h3>
              <p className="mt-4 text-md">
                By providing your phone number or texting us first, you consent to receive SMS messages from Kashlan Law LLC regarding legal inquiries, updates, and other relevant information. To initiate contact, send a text to (470) 945-1965. Message frequency varies. Message and data rates may apply. Reply STOP to opt-out, or HELP for assistance. 
                <br />
                Reply **STOP** to opt-out, or **HELP** for assistance.
              </p>
              <h3 className="mt-8 text-xl font-bold">4. How We Protect Your Data</h3>
              <p className="mt-4 text-md">
                  We implement security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
              </p>
              <h3 className="mt-8 text-xl font-bold">5. Sharing Your Information</h3>
              <p className="mt-4 text-md">
                We do not sell, rent, or trade your personal information. However, we may disclose data when:
                <br />
                - Required by law.
                <br />
                - Necessary to protect our legal rights.
                <br />
                - Providing services through trusted third-party vendors (who are bound by confidentiality agreements).
              </p>
              <h3 className="mt-8 text-xl font-bold">6. Your Rights & Choices</h3>
              <p className="mt-4 text-md">
                Opt-Out: You can opt out of receiving communications at any time.
                <br />
                Access & Update: You may request access, updates, or deletion of your personal data by contacting us.
              </p>
              <h3 className="mt-8 text-xl font-bold">7. Changes to This Policy</h3>
              <p className="mt-4 text-md">
                We reserve the right to update or modify this Privacy Policy at any time. Please review this page periodically for changes.
              </p>                    
            </div>
        </main>
    </div>
  )
}

export default PrivacyPolicy