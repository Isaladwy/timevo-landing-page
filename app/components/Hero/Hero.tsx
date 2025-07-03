import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <section className=" text-white min-h-[70vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 gap-10">
      {/* Left: Text Content */}
      <div className="flex-1 flex flex-col items-start justify-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-orange-400">
          SECURITY REDEFINED
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-md text-gray-200">
          Discover the next generation of smart cameras—modern, secure, and
          packed with advanced features for your peace of mind.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 transition px-8 py-3 rounded-full text-lg font-semibold shadow-lg">
          Explore Camera
        </button>
      </div>
      {/* Right: Product Image */}
      <div className="flex-1 flex items-center justify-center z-10">
        <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px]  rounded-3xl flex items-center justify-center ">
          {/* Replace src with your product image */}
          <Image
            width={500}
            height={500}
            src="/LS-WS20L-20X.webp"
            alt="Modern Security Camera"
            className="w-3/4 h-3/4 object-contain drop-shadow-xl"
          />
        </div>
      </div>
      {/* Decorative background circle */}
      <div className="absolute right-0 top-0 w-1/2 h-full  opacity-20 rounded-bl-full pointer-events-none" />
    </section>
  );
};

export default Hero;
