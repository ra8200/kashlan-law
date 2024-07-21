import React from 'react';

interface CardProps {
  title: string;
  description: string;
  image: string;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ title, description, image, onClick }) => (
  <div className="group relative rounded-lg overflow-hidden cursor-pointer" onClick={onClick}>
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat group-hover:scale-105 transition-transform duration-300 ease-in-out"
      style={{ backgroundImage: `url(${image})` }}
    />
    <div className="absolute inset-0 bg-gray-200 group-hover:bg-black/50 transition-colors duration-300 ease-in-out" />
    <div className="relative z-10 p-6 text-black">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

export default Card;