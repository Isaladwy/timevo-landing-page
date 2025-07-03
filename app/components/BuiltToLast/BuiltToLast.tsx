import Image from 'next/image';
import React from 'react';

const BuiltToLast = () => {
  return (
    <section className="w-full bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-900 flex flex-col md:flex-row items-center justify-between gap-16 py-20 px-4 md:px-24">
      {/* Image in a card */}
      <div className="flex-1 flex items-center justify-center mb-8 md:mb-0">
        <div className="bg-neutral-800 rounded-2xl shadow-2xl p-8 flex items-center justify-center w-[300px] h-[220px] md:w-[400px] md:h-[280px] border border-orange-400/20">
          <Image
            width={400}
            height={400}
            src="/Battery.webp"
            alt="Durable Security Camera"
            className=" object-contain drop-shadow-2xl"
          />
        </div>
      </div>
      {/* Text */}
      <div className="flex-1 flex flex-col items-start justify-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-400 drop-shadow-lg">
          Built To Last
        </h2>
        <p className="text-lg md:text-xl text-gray-200 max-w-lg">
          Crafted with premium materials, our security camera is engineered for
          durability and reliability. Weather-resistant and robust, it keeps
          your property protected in any condition.
        </p>
      </div>
    </section>
  );
};

export default BuiltToLast;
