"use client";

import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function About() {
  const pathname = usePathname() || "/";

  return (
    <div className="w-full">
      <div
        className="relative w-full h-[300px] bg-cover bg-center"
        style={{ backgroundImage: "url('/hero2.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Kareem A. Kashlan</h1>
          <Button className="mt-4 bg-black text-white">Get a Free Consultation</Button>
        </div>
      </div>
      <div className="max-w-5xl mx-auto p-6">
        <div className="flex flex-col md:flex-row mt-6">
          <div className="md:w-1/3">
            <Image 
              alt="Kareem A. Kashlan" 
              src="/kareem3.png"
              width={500}
              height={500} 
              className="rounded-md" 
            />
          </div>
          <div className="md:w-2/3 md:pl-6 mt-6 md:mt-0">
            <h2 className="text-2xl font-bold text-grey-700">Partner</h2>
            <div className="mt-4 text-lg">
              <p>
                Kareem A. Kashlan, a Georgia native, graduated from Mercer University School of Law. He earned his undergraduate degree from Georgia State University majoring in Political Science and minoring in Public Policy. He attended Alpharetta High School.
              </p>
              <p>
                After completing his education, Kareem began his legal career by clerking with Chief Judge Jeff Hanson and Judge Jeffery O. Monroe in The State Court of Macon-Bibb County. He later joined a boutique Plaintiff Litigation firm where he was able to represent members of the local community during their legal disputes.
              </p>
              <p>
                Kareem has represented clients from all walks in life in matters ranging from simple Probate petitions to more Complex Business Litigation suits. He has Defended clients from questionable Governmental actions to pursuing hundreds of thousands of dollars on behalf of his clients.
              </p>
              <p>
                As a licensed Attorney in the State of Georgia, Kareem is barred to practice law in all Georgia Trial Courts as well as the GA Court of Appeals. He is also licensed to practice law in Federal Courts including the Federal Court of Appeals.
              </p>
              <p>
                As a licensed Attorney in the State of Georgia, Kareem is barred to practice law in all Georgia Trial Courts as well as the GA Court of Appeals. He is also licensed to practice law in Federal Courts including the Federal Court of Appeals.
              </p>
              <p>
                With an emphasis on zealous advocacy, judicial equity, and a humanistic approach, Kareem has built a reputation as a dedicated and compassionate representative for his clients. His commitment to providing personalized legal services and his ability to navigate the complexities of the legal system have earned him the trust and respect of his clients.
              </p>
              <p>
                In addition to his legal work, Kareem is actively involved in his community and has been recognized for his contributions to various charitable organizations. He is also a member of several professional organizations, including the Georgia Bar Association, American Bar Association, Georgia Criminal Law, Georgia Association of Criminal Defense Lawyers, and Georgia Trial Lawyers Association.
              </p>
              <p>      
                Overall, Kareem Kashlan’s education, experience, and commitment to client service make him a trusted and respected attorney in the legal community of Georgia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
