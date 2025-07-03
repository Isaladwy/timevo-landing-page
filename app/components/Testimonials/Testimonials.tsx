import React from 'react';

const testimonials = [
  {
    name: 'علياء و.',
    review:
      'الكاميرا سهلة التركيب والرؤية الليلية واضحة جدًا. أشعر بالأمان أكثر الآن!',
    rating: 5,
    avatar: '🧑‍🦰',
  },
  {
    name: 'باسل ك.',
    review:
      'تنبيهات الحركة تعمل بشكل ممتاز وأحببت إمكانية المتابعة من هاتفي في أي وقت.',
    rating: 5,
    avatar: '🧔',
  },
  {
    name: 'سارة ل.',
    review:
      'قيمة رائعة مقابل السعر. التخزين السحابي والصوت ثنائي الاتجاه مفيدان جدًا!',
    rating: 4,
    avatar: '👩‍🦱',
  },
];

const Testimonials = () => {
  return (
    <section
      dir="rtl"
      className="w-full py-20 px-4 md:px-24 bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-900 flex flex-col items-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center text-orange-400 drop-shadow-lg">
        آراء عملائنا
      </h2>
      <div className="flex flex-col md:flex-row gap-10 w-full max-w-5xl justify-center items-stretch">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-neutral-800 rounded-2xl shadow-2xl p-8 flex-1 min-w-[250px] max-w-sm mx-auto border border-orange-400/20"
          >
            <span className="text-5xl mb-6 rounded-full border-4 border-orange-400/40 shadow-lg p-2 bg-neutral-900">
              {t.avatar}
            </span>
            <p className="text-gray-200 text-lg mb-6 text-center">
              "{t.review}"
            </p>
            <div className="flex items-center mb-3">
              {Array.from({ length: t.rating }).map((_, i) => (
                <span key={i} className="text-orange-400 text-xl">
                  ★
                </span>
              ))}
              {Array.from({ length: 5 - t.rating }).map((_, i) => (
                <span key={i} className="text-gray-600 text-xl">
                  ★
                </span>
              ))}
            </div>
            <span className="text-gray-400 text-base font-semibold">
              {t.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
