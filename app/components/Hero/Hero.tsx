import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 text-white min-h-[70vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 gap-10">
      {/* Left: Text Content */}
      <div className="flex-1 flex flex-col items-start justify-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">TECH AT HAND</h1>
        <p className="text-lg md:text-2xl mb-8 max-w-md">
          Experience innovation & comfort with the new Timevo Smartwatch.
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 transition px-8 py-3 rounded-full text-lg font-semibold shadow-lg">
          Shop Now
        </button>
      </div>
      {/* Right: Product Image */}
      <div className="flex-1 flex items-center justify-center z-10">
        <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-gradient-to-tr from-purple-700 to-gray-900 rounded-3xl flex items-center justify-center shadow-2xl">
          {/* Replace src with your product image */}
          <img
            src="/globe.svg"
            alt="Timevo Smartwatch"
            className="w-3/4 h-3/4 object-contain drop-shadow-xl"
          />
        </div>
      </div>
      {/* Decorative background circle */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-purple-800 opacity-20 rounded-bl-full pointer-events-none" />
    </section>
  );
};

export default Hero;
