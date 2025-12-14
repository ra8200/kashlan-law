"use client";

import Link from "next/link";
import {
  MailIcon,
  PhoneIcon,
  LinkedinIcon,
  MapPinIcon,
} from "@/components/icons";

export default function Footer() {
  return (
    <footer className="bg-secondary/20 py-8 md:py-12">
      <div className="container mx-auto flex flex-col items-start justify-between gap-6 md:flex-row">
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-2">
            <MailIcon className="h-5 w-5" />
            <a
              onClick={() =>
                (window.location.href = "mailto:intake@kashlanlaw.com")
              }
              className="hover:underline"
            >
              intake@kashlanlaw.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <PhoneIcon className="h-5 w-5" />
            <a
              onClick={() => (window.location.href = "tel:+14709451965")}
              className="hover:underline"
            >
              (470) 945-1965
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPinIcon className="h-5 w-5" />
            <a
              href="https://www.google.com/maps/place/1355+Terrell+Mill+Rd+bldg+1480+Ste+200,+Marietta,+GA+30067/@33.9174294,-84.4650282,17z/data=!3m1!4b1!4m6!3m5!1s0x88f511bdf980d825:0xa63978ee19abd377!8m2!3d33.9174294!4d-84.4650282!16s%2Fg%2F11v150j3n4?entry=ttu&g_ep=EgoyMDI1MTAyNy4wIKXMDSoASAFQAw%3D%3D"
              className="hover:underline"
            >
              Kashlan Law
              <br />
              1355 Terrell Mill Road
              <br />
              Building 1480 Suite 200
              <br />
              Marietta, GA 30067
            </a>
          </div>
        </div>
        <div className="flex flex-col items-end gap-4">
          <p className="text-base">
            &copy; 2024 Kashlan Law. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 max-w-md text-right">
            By opting into SMS from a web form or other medium, you are agreeing
            to receive SMS messages from Kashlan Law LLC. These may include
            appointment scheduling, reminders, post-visit instructions, lab
            notifications, and billing updates. Message frequency varies.
            Message and data rates may apply. Reply STOP to opt out. HELP for
            help.
          </p>

          <p className="text-base justify justify-centergap-2 top-2 mt-2">
            By using this site, you agree to our{" "}
            <a href="/privacy-policy" className="underline">
              Privacy Policy
            </a>{" "}
            ,{" "}
            <a href="/terms-of-service" className="text-bold underline">
              Terms of Service
            </a>
            , and{" "}
            <a href="/disclaimer" className="underline">
              Disclaimer
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
