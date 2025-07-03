import React from 'react';

const features = [
  'Extended Battery Life',
  'Microphone, Call, Track, Volume',
  'Seamless Connectivity',
  'Secure: Noise cancellation',
  'IPX4 Sweat and Splash Resistant',
];

const Features = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between gap-10 py-16 px-6 md:px-20">
      {/* Left: Features List */}
      <div className="flex-1 flex flex-col items-start">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Main Features</h2>
        <ul className="space-y-4 text-lg md:text-xl mb-8">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <span className="inline-block w-3 h-3 bg-purple-600 rounded-full"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      {/* Right: Product Image */}
      <div className="flex-1 flex items-center justify-center">
        <img
          src="/globe.svg"
          alt="Timevo Smartwatch Features"
          className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] object-contain drop-shadow-xl"
        />
      </div>
    </section>
  );
};

export default Features;
