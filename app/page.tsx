"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

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
        <section id="practice" className="py-12 md:py-24 bg-muted">
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
            <Card>
            <CardHeader>
              <CardDescription>Fill out the form below and we will get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Enter your email" type="email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="Enter your phone number" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="practice-area">Practice Area</Label>
                  <Select defaultValue="criminal-law">
                    <SelectTrigger id="practice-area">
                      <SelectValue placeholder="Select practice area" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="criminal-law">Criminal Law</SelectItem>
                      <SelectItem value="personal-injury">Personal Injury</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" placeholder="Describe your legal matter" className="min-h-[100px]" />
                </div>
                <Button>Submit</Button>
              </form>
            </CardContent>
          </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

interface IconProps {
  className?: string;
}

function BriefcaseIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function GavelIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8" />
      <path d="m16 16 6-6" />
      <path d="m8 8 6-6" />
      <path d="m9 7 8 8" />
      <path d="m21 11-8-8" />
    </svg>
  );
}

function ScaleIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="M7 21h10" />
      <path d="M12 3v18" />
      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
    </svg>
  );
}

function XIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
