import React from 'react'

const TermsOfService = () => {
  return (
    <div className="flex flex-col min-h-dvh">
        <header className="relative w-full bg-[url('/hero2.png')] bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-secondary/70" />
            <div className="container py-20 px-4 md:px-6 relative z-10 text-center text-white">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Terms of Service</h1>
            </div>
        </header>
        <main className="flex-1">
            <div className="container mx-auto py-16">
                <div className="">
                    <h2 className="text-xl font-semibold">Effective Date: January, 1st, 2025</h2>
                    <p className="mt-4 text-md">
                        Welcome to Kashlan Law LLC (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). By accessing our website https://www.kash.law (the &quot;Site&quot;) and using our services, you agree to the following terms. 
                    </p>
                    <h3 className="mt-8 text-xl font-bold">1. Acceptannce of Terms</h3>
                    <p className="mt-4 text-md">
                        By using this Site, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree, please discontinue use immediately.
                    </p>
                    <h3 className="mt-8 text-xl font-bold">2. No Attorney-Client Relationship</h3>
                    <p className="mt-4 text-md">
                        Your use of this Site **does not create an attorney-client relationship**.
                        <br />
                        Submitting a contact form or calling us does not establish legal representation.
                    </p>
                    <h3 className="mt-8 text-xl font-bold">3. Permitted Use</h3>
                    <p className="mt-4 text-md">
                        You agree to use this Site for lawful purposes only. You may not misuse our content, impersonate others, or attempt unauthorized access. For SMS communications, you agree to send a text to (470) 945-1965 to initiate contact and acknowledge that doing so opts you into receiving SMS messages from Kashlan Law LLC.
                        <br />
                        You may not misuse our content, impersonate others, or attempt unauthorized access.
                    </p>
                    <h3 className="mt-8 text-xl font-bold">4. Intellectual Property</h3>
                    <p className="mt-4 text-md">
                        All content on this Site, including text, graphics, logos, and images, is **owned by Kashlan Law LLC** or licensed to us.
                        <br />
                        You may not copy, distribute, or modify any content without written permission.
                    </p>
                    <h3 className="mt-8 text-xl font-bold">5. Limitation of Liability</h3>
                    <p className="mt-4 text-md">
                        We do **not** guarantee the accuracy, completeness, or usefulness of information on the Site.
                        <br />
                        Kashlan Law LLC is **not responsible** for any legal actions or damages resulting from reliance on our Site content.
                    </p>
                    <h3 className="mt-8 text-xl font-bold">6. Third-Party Links</h3>
                    <p className="mt-4 text-md">
                        This Site may contain links to third-party websites. We do **not** endorse or control these sites and are **not responsible** for their content or policies.
                    </p>                    
                    <h3 className="mt-8 text-xl font-bold">7. Changes to Terms</h3>
                    <p className="mt-4 text-md">
                        We reserve the right to modify these Terms at any time. Changes will be posted on this page.
                    </p>                    
                    <h3 className="mt-8 text-xl font-bold">8. Governing Law</h3>
                    <p className="mt-4 text-md">
                        These Terms are governed by the laws of the **State of Georgia**.
                    </p>                    
                </div>
            </div>
        </main>
    </div>
  )
}

export default TermsOfService