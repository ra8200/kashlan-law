"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Card,  CardContent } from "@/components/ui/card";
import { GavelIcon, BriefcaseIcon, ScaleIcon } from "@/components/icons";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        <section className="relative w-full h-[60vh] md:h-[80vh] bg-[url('/hero.png')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative h-full flex flex-col items-center justify-center text-center text-primary-foreground px-4 md:px-6">
            <h1 className="text-4xl md:text-6xl font-bold">Kashlan Law</h1>
            <div className="text-lg md:text-2xl mt-4">
              <p>
                Your legal champions in Georgia, specializing in Criminal Law and Personal Injury.
              </p>
              <p> 
                Expertise meets compassion here, where your fight becomes ours.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 mt-4"
              prefetch={false}
            >
              Contact Us
            </Link>
          </div>
        </section>
        <section id="about" className="py-12 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold">About Us</h2>
                <p className="mt-4 text-muted-foreground text-justify">
                  Kashlan Law serving Georgia, including the bustling city of Atlanta and its expansive metro area, we offer comprehensive legal representation in both Criminal Law and Personal Injury.
                </p>
                <p className="mt-4 text-muted-foreground text-justify">
                  Our experienced attorneys are deeply familiar with the unique legal landscape of the region, from the urban complexities of Atlanta to the varied jurisdictions of the Northern District.
                </p>
                <p className="mt-4 text-muted-foreground text-justify">
                  Whether facing criminal charges or seeking just compensation for personal injuries, our clients benefit from our dedicated pursuit of justice and our commitment to achieving the best possible outcomes. Our firm stands as a beacon of legal expertise and client-focused service, navigating the intricacies of the law with skill and integrity.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <Image src="/kareem1.png" width={400} height={400} alt="About Us" className="rounded-lg" />
              </div>
            </div>
          </div>
        </section>
        <section id="practice" className="py-12 md:py-24 bg-gray-400">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center">Our Practice Areas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
              <Card>
                <CardContent className="p-6">
                  <GavelIcon className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold mt-4">Criminal Law</h3>
                  <p className="text-muted-foreground mt-2">
                  Our Criminal Law practice covers a wide range of services including defense against charges such as DUI, drug offenses, and violent crimes. We provide robust defense strategies tailored to the unique circumstances of each client.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <BriefcaseIcon className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold mt-4">Personal Injury</h3>
                  <p className="text-muted-foreground mt-2">
                  Our Personal Injury practice is dedicated to helping clients receive fair compensation for injuries sustained in accidents, including car accidents, slip and falls, and workplace injuries. We fight tirelessly to protect all the rights of our clients.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <ScaleIcon className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold mt-4">Litigation</h3>
                  <p className="text-muted-foreground mt-2">
                  Our litigation team handles complex legal disputes, including business litigation and real estate conflicts. We are committed to achieving favorable outcomes through meticulous preparation and skilled advocacy.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center">Contact Us</h2>
            <div className="max-w-md mx-auto mt-8">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}