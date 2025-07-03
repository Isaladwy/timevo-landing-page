import React from 'react';

const testimonials = [
  {
    name: 'Alice W.',
    review:
      'The camera was easy to set up and the night vision is crystal clear. I feel much safer now!',
    rating: 5,
    avatar: '🧑‍🦰',
  },
  {
    name: 'Brian K.',
    review:
      'Motion alerts work perfectly and I love being able to check in from my phone anytime.',
    rating: 5,
    avatar: '🧔',
  },
  {
    name: 'Sophie L.',
    review:
      'Great value for the price. The cloud storage and two-way audio are super useful!',
    rating: 4,
    avatar: '👩‍🦱',
  },
];

const Testimonials = () => {
  return (
    <section className="w-full py-16 px-4 md:px-24 bg-neutral-900 flex flex-col items-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-center text-orange-400">
        What Our Customers Say
      </h2>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl justify-center items-stretch">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-neutral-800 rounded-xl shadow-lg p-6 flex-1 min-w-[250px] max-w-sm mx-auto"
          >
            <span className="text-4xl mb-4">{t.avatar}</span>
            <p className="text-gray-200 text-base mb-4 text-center">
              "{t.review}"
            </p>
            <div className="flex items-center mb-2">
              {Array.from({ length: t.rating }).map((_, i) => (
                <span key={i} className="text-orange-400 text-lg">
                  ★
                </span>
              ))}
              {Array.from({ length: 5 - t.rating }).map((_, i) => (
                <span key={i} className="text-gray-600 text-lg">
                  ★
                </span>
              ))}
            </div>
            <span className="text-gray-400 text-sm font-semibold">
              {t.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
