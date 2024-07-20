"use client"

import { useState, useEffect, MouseEvent } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRightIcon, XIcon } from "@/components/icons"

interface CardData {
  title: string
  description: string
  image: string
}

export default function PersonalInjury() {
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
      title: "Car Accidents",
      description:
        "At Kashlan Law, we understand that car accidents can be life-altering. Our experienced attorneys are dedicated to helping victims of car accidents in the Northern District of Georgia. We fight to secure compensation for medical expenses, lost wages, and pain and suffering. Trust us to handle the legal complexities while you focus on recovery.",
      image: "/carAccident.png",
    },
    {
      title: "DUI Accidents",
      description:
        "DUI accidents often result in severe injuries and emotional trauma. At Kashlan Law, we aggressively pursue justice for victims of DUI accidents in Georgia. Our team works tirelessly to hold intoxicated drivers accountable and secure the compensation you deserve.",
      image: "/dui.png",
    },
    {
      title: "Truck Accidents",
      description:
        "Truck accidents can cause catastrophic injuries due to the sheer size and weight of commercial vehicles. Our attorneys have extensive experience handling truck accident cases in the Northern District of Georgia, ensuring that negligent parties are held responsible and victims receive just compensation.",
      image: "/criminal-law-3.jpg",
    },
    {
      title: "Rideshare Accidents",
      description:
        "Rideshare accidents involve unique legal challenges. At Kashlan Law, we specialize in navigating the complexities of rideshare accident claims, whether you're an injured passenger or another motorist. Our goal is to ensure you receive fair compensation for your injuries and losses.",
      image: "/criminal-law-4.jpg",
    },
    {
      title: "Motorcycle Accidents",
      description:
        "Motorcyclists are particularly vulnerable on the road. Our firm is committed to protecting the rights of motorcycle accident victims in Georgia. We work to secure compensation for medical bills, lost income, and other damages resulting from these often devastating accidents.",
      image: "/criminal-law-5.jpg",
    },
    {
      title: "Bicycle Accidents",
      description:
        "Bicycle accidents can lead to serious injuries. At Kashlan Law, we advocate for the rights of injured cyclists in the Northern District of Georgia. Our attorneys are dedicated to holding negligent drivers accountable and obtaining the financial recovery you need to move forward.",
      image: "/criminal-law-6.jpg",
    },
    {
      title: "Pedestrian Accidents",
      description:
        "Pedestrian accidents frequently result in severe injuries. Our firm provides compassionate and aggressive representation for pedestrian accident victims. We work diligently to ensure you receive compensation for medical expenses, lost wages, and other related costs.",
      image: "/criminal-law-7.jpg",
    },
    {
      title: "Dog Bites",
      description:
        "Dog bite injuries can be both physically and emotionally traumatic. At Kashlan Law, we help victims of dog bites in Georgia seek justice and compensation. Our attorneys are experienced in holding negligent pet owners accountable for the harm caused by their animals.",
      image: "/criminal-law-8.jpg",
    },
    {
      title: "Slip and Fall",
      description:
        "Slip and fall accidents can happen anywhere, from grocery stores to private properties. Our legal team at Kashlan Law is skilled in handling slip and fall cases, ensuring that property owners are held liable for unsafe conditions that cause injuries.",
      image: "/criminal-law-9.jpg",
    },
    {
      title: "Burn Injuries",
      description:
        "Burn injuries can have long-lasting effects. At Kashlan Law, we are dedicated to representing burn injury victims in the Northern District of Georgia. Our attorneys strive to secure compensation for medical treatments, rehabilitation, and other related expenses.",
      image: "/criminal-law-9.jpg",
    },
    {
      title: "Food and Beverage Injuries",
      description:
        "Food and beverage injuries, such as food poisoning or allergic reactions, can be serious. Kashlan Law provides expert legal assistance to victims of food and beverage injuries, helping them obtain compensation for medical costs and other damages.",
      image: "/criminal-law-9.jpg",
    },
    {
      title: "Medical Malpractice",
      description:
        "Medical malpractice can have devastating consequences. Our attorneys at Kashlan Law are committed to holding healthcare providers accountable for negligence. We work tirelessly to ensure victims receive compensation for medical errors, misdiagnoses, and other forms of malpractice.",
      image: "/criminal-law-9.jpg",
    },
    {
      title: "Premises Liability",
      description:
        "Premises liability cases involve injuries sustained on someone else's property due to unsafe conditions. At Kashlan Law, we represent victims in premises liability cases, fighting for the compensation you deserve for your injuries.",
      image: "/criminal-law-9.jpg",
    },
    {
      title: "Wrongful Death",
      description:
        "Losing a loved one due to someone else's negligence is heartbreaking. Our compassionate attorneys at Kashlan Law provide dedicated legal support to families in wrongful death cases. We strive to obtain justice and financial relief for your loss.",
      image: "/criminal-law-9.jpg",
    },
  ]

  return (
    <div className="flex flex-col min-h-dvh">
      <header className="relative w-full bg-[url('/hero2.png')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/70" />
        <div className="container py-20 px-4 md:px-6 relative z-10 text-center text-white">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Personal Injury</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg leading-relaxed">
            Our team of experienced Atlanta Personal Injury attorneys is dedicated to providing the highest level of legal
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
        <section className="py-12 md:py-20 bg-gray-400">
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
                <div className="absolute inset-0 bg-gray-200 group-hover:bg-black/50 transition-colors duration-300 ease-in-out" />
                <div className="relative z-10 p-6 text-black">
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
                  href="/contact"
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