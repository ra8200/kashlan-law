import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { XIcon, ArrowRightIcon } from '@/components/icons';


interface PopupCardProps {
  isOpen: boolean;
  title: string;
  description: string;
  image: string;
  onClose: () => void;
}

const PopupCard: React.FC<PopupCardProps> = ({ isOpen, title, description, image, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative bg-white rounded-lg popup-content max-w-2xl">
        <Button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={onClose}>
          <XIcon className="w-6 h-6" />
        </Button>
        <div className="group relative rounded-lg overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat group-hover:scale-105 transition-transform duration-300 ease-in-out"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-black/70 group-hover:bg-black/50 transition-colors duration-300 ease-in-out" />
          <Image 
            src="/placeholder.svg"
            alt={title} 
            width={800}
            height={400} 
            className="w-full h-auto" 
          />
          <div className="relative z-10 p-6 text-white">
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="mt-4 text-sm leading-relaxed">{description}</p>
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
  );
};

export default PopupCard;
