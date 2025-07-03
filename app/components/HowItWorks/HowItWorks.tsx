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
    <section className="w-full py-20 px-4 md:px-24 bg-gray-50 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
        How It Works
      </h2>
      <ol className="relative border-l-4 border-purple-300 max-w-2xl mx-auto">
        {steps.map((step, idx) => (
          <li key={idx} className="mb-12 ml-6 last:mb-0 relative">
            <span className="absolute -left-6 flex items-center justify-center w-12 h-12 bg-purple-600 rounded-full text-white text-2xl font-bold shadow-lg">
              {step.icon}
            </span>
            <div className="bg-white rounded-xl shadow-md p-6 ml-2">
              <h3 className="text-lg md:text-xl font-semibold mb-1 mt-1 text-gray-800">
                {step.title}
              </h3>
              <p className="text-gray-600 mb-1">{step.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default HowItWorks;
