import React from 'react'

const Disclaimer = () => {
  return (
    <div className="flex flex-col min-h-dvh">
        <header className="relative w-full bg-[url('/hero2.png')] bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-secondary/70" />
            <div className="container py-20 px-4 md:px-6 relative z-10 text-center text-white">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Disclaimer</h1>
            </div>
        </header>
        <main className="flex-1">
            <div className="container mx-auto py-16">
                <div className="">
                    <h2 className="text-xl font-semibold">Effective Date: January, 1st, 2025</h2>
                    <p className="mt-4 text-md">
                        The information provided by Kashlan Law LLC on https://www.kash.law (the &quot;Site&quot;) is for general informational purposes only. 
                        </p>
                    <h3 className="mt-8 text-xl font-bold">1. No Legal Advice</h3>
                    <p className="mt-4 text-md">
                        The content on this Site does **not** constitute legal advice.
                        <br />
                        Do **not** act or rely on any information from this Site without consulting a qualified attorney.
                    </p>
                    <h3 className="mt-8 text-xl font-bold">2. No Attorney-Client Relationship</h3>
                    <p className="mt-4 text-md">
                        Viewing this Site or contacting us **does not** create an attorney-client relationship.
                        <br />
                        We require a signed engagement agreement before representation.
                    </p>
                    <h3 className="mt-8 text-xl font-bold">3. Accuracy & No Liability</h3>
                    <p className="mt-4 text-md">
                        We strive to keep content accurate, but we **do not guarantee** its completeness or applicability to your legal situation.
                        <br />
                        Kashlan Law LLC is **not liable** for any errors, omissions, or actions taken based on Site content.
                    </p>
                    <h3 className="mt-8 text-xl font-bold">4. Third-Party Content</h3>
                    <p className="mt-4 text-md">
                        This Site may include external links. We **do not endorse** or take responsibility for third-party content.
                    </p>
                    <h3 className="mt-8 text-xl font-bold">5. State-Specific Laws</h3>
                    <p className="mt-4 text-md">
                        Laws vary by jurisdiction. The legal principles discussed on this Site **may not apply in all states**.
                    </p>
                    <h3 className="mt-8 text-xl font-bold">6. Changes to Disclaimer</h3>
                    <p className="mt-4 text-md">
                        We reserve the right to update this Disclaimer at any time.
                    </p>  
                    <h3 className="mt-8 text-xl font-bold">7.  SMS Disclaimer</h3>
                    <p className="mt-4 text-md">
                        By sending a text message to (470) 945-1965, you acknowledge and consent to receive SMS messages from Kashlan Law LLC. Message frequency may vary. Message and data rates may apply. For support, reply HELP. To opt out, reply STOP.
                    </p>                     
                </div>
            </div>
        </main>
    </div>

    
  )
}

export default Disclaimer