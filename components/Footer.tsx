"use client";

import Link from "next/link";
import { MailIcon, PhoneIcon, LinkedinIcon, MapPinIcon } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="bg-secondary/20 py-8 md:py-12">
      <div className="container mx-auto flex flex-col items-start justify-between gap-6 md:flex-row">
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-2">
            <MailIcon className="h-5 w-5" />
            <a 
              onClick={() => window.location.href = 'mailto:intake@kashlanlaw.com'} 
              className="hover:underline"
            >
              intake@kashlanlaw.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <PhoneIcon className="h-5 w-5" />
            <a 
              onClick={() => window.location.href = 'tel:+14709451965'} 
              className="hover:underline"
            >
              (470) 945-1965
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPinIcon className="h-5 w-5" />
            <a href="https://www.google.com/maps/place/Kashlan+Law,+LLC/@34.0373542,-84.3305827,15z/data=!4m6!3m5!1s0x88f575295e837e17:0x88b8b2f612c6279e!8m2!3d34.0373559!4d-84.3310509!16s%2Fg%2F11w2y6rbb4?entry=ttu" className="hover:underline">
              Kashlan Law
              <br />
              1560 Warsaw Road
              <br />
              Roswell, GA 30076
            </a>
          </div>
        </div>
        <div className="flex flex-col items-end gap-4">
          <p className="text-base">&copy; 2024 Kashlan Law. All rights reserved.</p>
          <p className="text-base justify justify-centergap-2 top-2 mt-2">
             By Texting Kashlan Law LLC - you consent to communications via text messaging.
          </p>
          <p className="text-base justify justify-centergap-2 top-2 mt-2">
            By using this site, you agree to our <a href="/privacy-policy" className="underline">Privacy Policy</a> , <a href="/terms-of-service" className="text-bold underline">Terms of Service</a>, and <a href="/disclaimer" className="underline">Disclaimer</a>.
          </p>
        </div>
      </div>
    </footer>
  );
}