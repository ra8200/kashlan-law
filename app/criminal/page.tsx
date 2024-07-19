"use client"

import { useState, useEffect, MouseEvent } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface CardData {
  title: string
  description: string
  image: string
}

export default function CriminalLaw() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState<number | null>(null)

  const handleCardClick = (index: number) => {
    setSelectedCard(index)
    setIsOpen(true)
  }

  const handleClosePopup = () => {
    setIsOpen(false)
    setSelectedCard(null)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (isOpen && !(event.target as HTMLElement).closest(".popup-content")) {
      handleClosePopup()
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false)
    return () => {
      document.removeEventListener("click", handleClickOutside, false)
    }
  }, [isOpen])

  const cardData: CardData[] = [
    {
      title: "Criminal Defense",
      description:
        "Our criminal defense attorneys have extensive experience representing clients in a wide range of criminal matters, including felonies and misdemeanors.",
      image: "/criminal-law-1.jpg",
    },
    {
      title: "Juvenile Offenses",
      description:
        "Our team understands the unique challenges and considerations involved in juvenile criminal cases, and we are committed to protecting the rights of young offenders.",
      image: "/criminal-law-2.jpg",
    },
    {
      title: "White Collar Crimes",
      description:
        "Our attorneys have extensive experience defending clients accused of white-collar crimes, such as fraud, embezzlement, and money laundering.",
      image: "/criminal-law-3.jpg",
    },
    {
      title: "Traffic Violations",
      description:
        "Our attorneys can assist you with a wide range of traffic violations, including DUI, reckless driving, and speeding tickets.",
      image: "/criminal-law-4.jpg",
    },
    {
      title: "Domestic Violence",
      description:
        "Our team understands the sensitive nature of domestic violence cases and provides compassionate and effective legal representation.",
      image: "/criminal-law-5.jpg",
    },
    {
      title: "Drug Crimes",
      description:
        "Our attorneys have extensive experience defending clients charged with drug-related offenses, including possession, distribution, and trafficking.",
      image: "/criminal-law-6.jpg",
    },
    {
      title: "Expungement",
      description:
        "Our attorneys can assist you with expunging your criminal record, giving you a fresh start and improving your opportunities in life.",
      image: "/criminal-law-7.jpg",
    },
    {
      title: "Probation Violations",
      description:
        "If you have been accused of violating the terms of your probation, our attorneys can help you navigate the legal system and protect your rights.",
      image: "/criminal-law-8.jpg",
    },
    {
      title: "Appeals",
      description:
        "Our experienced appellate attorneys can review your case and determine if there are grounds for an appeal, ensuring that your rights are fully protected.",
      image: "/criminal-law-9.jpg",
    },
  ]

  return (
    <div className="flex flex-col min-h-dvh">
      <header className="relative w-full bg-[url('/hero2.png)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/70" />
        <div className="container py-20 px-4 md:px-6 relative z-10 text-center text-white">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Criminal Law</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg leading-relaxed">
            Our team of experienced criminal defense attorneys is dedicated to providing the highest level of legal
            representation for a wide range of criminal matters.
          </p>
        </div>
      </header>
      <main className="flex-1">
        <section className="container mx-auto py-16">
          <div className="flex flex-col items-center md:flex-row md:space-x-8">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold">About Us</h2>
              <p className="mt-4 text-lg">
                Kashlan Law is a personal injury law firm dedicated to providing exceptional legal
                representation and support to individuals who have suffered injuries due to the negligence of others in Atlanta. With
                a strong commitment to justice and a track record of success, our firm has become a trusted ally for those
                in need of legal assistance in personal injury cases.
              </p>
              <h2 className="mt-8 text-2xl font-bold">Our Mission</h2>
              <p className="mt-4 text-lg">
                At Kashlan Law, our mission is clear: to help victims of personal injury seek the compensation and
                justice they deserve. We believe that everyone deserves a voice in the legal system, and we are dedicated
                to being that voice for our clients.
              </p>
            </div>
            <div className="mt-8 md:mt-0 md:w-1/2">
              <Image 
                src="/personalInjury.png" 
                alt="Team" 
                width={800}
                height={400}
                className="w-full h-auto rounded-lg" 
              />
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20">
          <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="group relative rounded-lg overflow-hidden cursor-pointer"
                onClick={() => handleCardClick(index)}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  style={{ backgroundImage: `url(${card.image})` }}
                />
                <div className="absolute inset-0 bg-black/70 group-hover:bg-black/50 transition-colors duration-300 ease-in-out" />
                <div className="relative z-10 p-6 text-white">
                  <h3 className="text-xl font-bold">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed">{card.description}</p>
                  <Link
                    href="#"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium hover:underline"
                    prefetch={false}
                  >
                    Learn More
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      {isOpen && selectedCard !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="relative bg-white rounded-lg popup-content max-w-2xl">
            <Button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={handleClosePopup}>
              <XIcon className="w-6 h-6" />
            </Button>
            <div className="group relative rounded-lg overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat group-hover:scale-105 transition-transform duration-300 ease-in-out"
                style={{ backgroundImage: `url(${cardData[selectedCard].image})` }}
              />
              <div className="absolute inset-0 bg-black/70 group-hover:bg-black/50 transition-colors duration-300 ease-in-out" />
              <Image
                src="/placeholder.svg"
                alt={cardData[selectedCard].title}
                width={800}
                height={400}
                className="w-full h-auto"
              />
              <div className="relative z-10 p-6 text-white">
                <h3 className="text-xl font-bold">{cardData[selectedCard].title}</h3>
                <p className="mt-4 text-sm leading-relaxed">{cardData[selectedCard].description}</p>{" "}
                <Link
                  href="#"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium hover:underline"
                  prefetch={false}
                >
                  Get a Free Consultation <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}


function XIcon(props: React.SVGProps<SVGSVGElement>) {
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
  )
}
