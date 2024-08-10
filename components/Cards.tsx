import React from 'react';

interface CardProps {
  title: string;
  description: string;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ title, description, onClick }) => (
  <div className="relative rounded-lg overflow-hidden cursor-pointer" onClick={onClick}>
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-300 ease-in-out transform group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-white" />
    <div className="relative z-10 p-6">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

export default Card;