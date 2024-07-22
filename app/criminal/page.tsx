"use client"

import { useState, useEffect, MouseEvent } from "react"
import Image from "next/image"
import Card from "@/components/Cards"
import PopupCard from "@/components/PopupCard"
import criminalCardData from "@/data/criminalCards"
import ContactForm from "@/components/ContactForm";

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

  const handleClickOutside = (event: Event) => {
    if (isOpen && !(event.target as HTMLElement).closest(".popup-content")) {
      handleClosePopup()
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true)
    return () => {
      document.removeEventListener("click", handleClickOutside, true)
    }
  })

  return (
    <div className="flex flex-col min-h-dvh">
      <header className="relative w-full bg-[url('/hero2.png')] bg-cover bg-center bg-no-repeat">
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
                src="/criminalLaw.png" 
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
            {criminalCardData.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
                image={card.image}
                onClick={() => handleCardClick(index)}
              />
            ))}
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
      {isOpen && selectedCard !== null && (
        <PopupCard
          isOpen={isOpen}
          title={criminalCardData[selectedCard].title}
          description={criminalCardData[selectedCard].description}
          image={criminalCardData[selectedCard].image}
          onClose={handleClosePopup}
        />
      )}
    </div>
  )
}