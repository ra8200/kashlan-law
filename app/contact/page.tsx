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
              <MailOpenIcon className="h-6 w-6 text-muted-foreground" />
              <a 
                onClick={() => window.location.href = 'mailto:intake@kashlanlaw.com'}
                className="text-sm font-medium"
              >
                intake@kashlanlaw.com
              </a>
            </div>
            <div className="flex gap-4">
              <PhoneIcon className="h-6 w-6 text-muted-foreground" />
              <a href="+14044968178" className="text-sm font-medium">
                (404) 496-8179</a>
            </div>
            <div className="flex gap-4">
              <MapPinIcon className="h-6 w-6 text-muted-foreground" />
              <a
                href="https://www.google.com/maps/place/Kashlan+Law,+LLC/@34.0373542,-84.3305827,15z/data=!4m6!3m5!1s0x88f575295e837e17:0x88b8b2f612c6279e!8m2!3d34.0373559!4d-84.3310509!16s%2Fg%2F11w2y6rbb4?entry=ttu" 
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
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6612.507934733011!2d-84.33362582571664!3d34.03735587316256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f575295e837e17%3A0x88b8b2f612c6279e!2sKashlan%20Law%2C%20LLC!5e0!3m2!1sen!2sus!4v1723055687285!5m2!1sen!2sus"
                width="400"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="aspect-auto"
              ></iframe>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
