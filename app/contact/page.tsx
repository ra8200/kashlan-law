"use client";

import ContactForm from "@/components/ContactForm";
import { MapPinIcon, PhoneIcon, MailOpenIcon } from "@/components/icons";

export default function Contact() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid max-w-6xl grid-cols-1 gap-8 px-4 md:px-6 lg:grid-cols-2">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
          <p className="text-muted-foreground md:text-xl">
            Have a legal matter you need assistance with? Reach out to our experienced attorneys today.
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <MapPinIcon className="h-6 w-6 text-muted-foreground" />
              <a
                href="https://www.google.com/maps/place/The+Raffaeli+Professional+Building,+1560+Warsaw+Rd,+Roswell,+GA+30076/@34.0373603,-84.3336258,17z/data=!3m1!4b1!4m6!3m5!1s0x88f574c705296c8f:0xea2f30385256a721!8m2!3d34.0373559!4d-84.3310509!16s%2Fg%2F11bw3ym_1n?entry=ttu" 
                className="text-sm font-medium"
              >
                Kashlan Law
                <br />
                1560 Warsaw Road
                <br />
                Roswell, Georgia 30076
              </a>
            </div>
            <div className="flex gap-4">
              <PhoneIcon className="h-6 w-6 text-muted-foreground" />
              <a href="+14044968178" className="text-sm font-medium">(404) 496-8179</a>
            </div>
            <div className="flex gap-4">
              <MailOpenIcon className="h-6 w-6 text-muted-foreground" />
              <a 
                href="k@kash.law"
                className="text-sm font-medium"
              >
                k@kash.law
              </a>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
