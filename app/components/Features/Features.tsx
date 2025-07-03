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
    <section className="w-full bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-900 py-20 px-4 md:px-24 flex flex-col md:flex-row items-center justify-between gap-16">
      {/* Left: Features List in a card */}
      <div className="flex-1 flex flex-col items-start bg-neutral-800 rounded-2xl shadow-2xl p-8 md:p-12 max-w-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-orange-400 drop-shadow-lg">
          Main Features
        </h2>
        <ul className="space-y-6 text-lg md:text-xl mb-4 text-gray-200 w-full">
          {features.map((feature, idx) => (
            <li
              key={idx}
              className="flex items-center gap-4 bg-neutral-900/60 rounded-xl px-4 py-3 shadow-md"
            >
              <span className="inline-block w-4 h-4 bg-orange-500 rounded-full shadow-lg"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      {/* Right: Product Image in a card */}
      <div className="flex-1 flex items-center justify-center">
        <div className="bg-neutral-800 rounded-2xl shadow-2xl p-8 flex items-center justify-center w-[300px] h-[300px] md:w-[400px] md:h-[400px] border border-orange-400/20">
          <img
            src="/globe.svg"
            alt="Modern Security Camera Features"
            className="w-3/4 h-3/4 object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
