import Image from 'next/image';
import React from 'react';

const features = [
  '4K Ultra HD Video',
  'Advanced Night Vision',
  'Real-Time Motion Detection',
  'Two-Way Audio Communication',
  'Secure Cloud Storage',
];

const Features = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between gap-10 py-16 px-6 md:px-20 ">
      {/* Left: Features List */}
      <div className="flex-1 flex flex-col items-start">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-400">
          Main Features
        </h2>
        <ul className="space-y-4 text-lg md:text-xl mb-8 text-gray-300">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <span className="inline-block w-3 h-3 bg-orange-500 rounded-full"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      {/* Right: Product Image */}
      <div className="flex-1 flex items-center justify-center">
        <Image
          width={400}
          height={400}
          src="/PIR Motion Detection.webp"
          alt="Modern Security Camera Features"
          className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] object-contain drop-shadow-xl"
        />
      </div>
    </section>
  );
};

export default Features;
