"use client";

import { MailIcon, PhoneIcon, LinkedinIcon, MapPinIcon } from "@/components/icons";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="bg-muted py-8 md:py-12">
      <div className="container mx-auto flex flex-col items-start justify-between gap-6 md:flex-row">
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-2">
            <MailIcon className="h-5 w-5 text-muted-foreground" />
            <a 
              onClick={() => window.location.href = 'mailto:intake@kashlanlaw.com'} 
              className="text-muted-foreground hover:underline bg-muted"
            >
              intake@kashlanlaw.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <PhoneIcon className="h-5 w-5 text-muted-foreground" />
            <a 
              onClick={() => window.location.href = 'tel:+14044968178'} 
              className="text-muted-foreground hover:underline bg-muted"
            >
            (404) 496-8178
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPinIcon className="h-5 w-5 text-muted-foreground" />
            <a href="https://www.google.com/maps/place/The+Raffaeli+Professional+Building,+1560+Warsaw+Rd,+Roswell,+GA+30076/@34.0373603,-84.3336258,17z/data=!3m1!4b1!4m6!3m5!1s0x88f574c705296c8f:0xea2f30385256a721!8m2!3d34.0373559!4d-84.3310509!16s%2Fg%2F11bw3ym_1n?entry=ttu" className="text-muted-foreground hover:underline">
              Kashlan Law
              <br />
              1560 Warsaw Road
              <br />
              Roswell, GA 30076
            </a>
          </div>
        </div>
        <div className="flex flex-col items-end gap-4 text-xs text-muted-foreground">
          <p className="text-base">&copy; 2024 Kashlan Law. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}