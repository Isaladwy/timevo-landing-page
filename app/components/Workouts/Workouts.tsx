import React from 'react';

const workoutFeatures = [
  { icon: '🏃‍♂️', label: 'Distance Tracking' },
  { icon: '⏱️', label: 'Multi-Sport Modes' },
  { icon: '💤', label: 'Sleep Monitoring' },
  { icon: '💧', label: 'Water Resistance' },
  { icon: '🔥', label: 'Calorie Burn Tracking' },
  { icon: '❤️', label: 'Blood Pressure Track' },
  { icon: '🧘‍♂️', label: 'Guided Breath Sessions' },
  { icon: '📈', label: 'Joy Indicator' },
];

const Workouts = () => {
  return (
    <section className="w-full bg-black py-20 px-4 md:px-24 flex flex-col md:flex-row items-center justify-center gap-12">
      {/* Left: Image */}
      <div className="flex-1 flex items-center justify-center">
        <img
          src="/globe.svg"
          alt="Elevate Your Workouts"
          className="w-[320px] h-[320px] md:w-[400px] md:h-[400px] object-contain drop-shadow-2xl rounded-2xl"
        />
      </div>
      {/* Right: Heading + Features Grid */}
      <div className="flex-1 flex flex-col items-center md:items-start justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center md:text-left">
          Elevate Your Workouts
        </h2>
        <div className="grid grid-cols-2 gap-6 w-full max-w-md">
          {workoutFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-white rounded-xl px-6 py-5 shadow-md min-w-[170px]"
            >
              <span className="text-2xl md:text-3xl">{feature.icon}</span>
              <span className="text-base md:text-lg font-medium text-gray-800">
                {feature.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workouts;
