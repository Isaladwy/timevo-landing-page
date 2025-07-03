import React from 'react';

const BuiltToLast = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between gap-10 py-16 px-6 md:px-20">
      {/* Image */}
      <div className="flex-1 flex items-center justify-center mb-8 md:mb-0">
        <img
          src="/globe.svg"
          alt="Built to Last Smartwatch"
          className="w-[300px] h-[200px] md:w-[400px] md:h-[250px] object-contain drop-shadow-2xl rounded-2xl"
        />
      </div>
      {/* Text */}
      <div className="flex-1 flex flex-col items-start justify-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Built To Last</h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-lg">
          Engineered with premium materials and advanced technology, the Timevo
          Smartwatch is designed to withstand your toughest days. Enjoy
          durability, comfort, and style in one sleek package.
        </p>
      </div>
    </section>
  );
};

export default BuiltToLast;
