import React from 'react';

const steps = [
  {
    icon: '📦',
    title: 'Unbox Your Camera',
    desc: 'Open the package and check all included accessories for your new security camera.',
  },
  {
    icon: '📶',
    title: 'Connect to Wi-Fi',
    desc: 'Power on the camera and connect it to your home Wi-Fi network using the mobile app.',
  },
  {
    icon: '🛠️',
    title: 'Mount & Position',
    desc: 'Install the camera at your desired location for optimal coverage and security.',
  },
  {
    icon: '📱',
    title: 'Configure in App',
    desc: 'Customize settings, set up alerts, and view live footage directly from your smartphone.',
  },
  {
    icon: '🛡️',
    title: 'Enjoy 24/7 Security',
    desc: 'Relax knowing your property is protected with round-the-clock monitoring.',
  },
];

const HowItWorks = () => {
  return (
    <section className="w-full py-16 md:py-20 px-2 sm:px-4 md:px-24 flex flex-col items-center bg-neutral-900">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center text-orange-400">
        How It Works
      </h2>
      <ol className="relative border-l-4 border-orange-400 max-w-2xl px-1 sm:px-2 mx-auto">
        {steps.map((step, idx) => (
          <li
            key={idx}
            className="mb-8 sm:mb-12 ml-4 sm:ml-6 flex justify-center items-center last:mb-0 relative"
          >
            <span className="absolute -left-6 top-6 sm:top-8 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-full text-white text-xl sm:text-2xl font-bold shadow-lg">
              {step.icon}
            </span>
            <div className="rounded-xl shadow-lg p-4 sm:p-6 ml-2 w-full bg-neutral-800">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1 mt-1 text-orange-300">
                {step.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base mb-1">
                {step.desc}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default HowItWorks;
