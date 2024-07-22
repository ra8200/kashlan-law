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
              <p className="text-sm font-medium">
                1560 Warsaw Road
                <br />
                Roswell, Georgia 30076
              </p>
            </div>
            <div className="flex gap-4">
              <PhoneIcon className="h-6 w-6 text-muted-foreground" />
              <p className="text-sm font-medium">(404) 496-46</p>
            </div>
            <div className="flex gap-4">
              <MailOpenIcon className="h-6 w-6 text-muted-foreground" />
              <p className="text-sm font-medium">k@kash.law</p>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
