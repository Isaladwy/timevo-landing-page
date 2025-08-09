import React from 'react';

const steps = [
  {
    icon: '📦',
    title: 'افتح العلبة وتفقّد المكوّنات',
    desc: 'تأكد من توفر اللوحة الخارجية، الشاشة الداخلية، مزود الطاقة، وملحقات التثبيت.',
    img: '/Light.webp',
  },
  {
    icon: '🛠️',
    title: 'ثبّت اللوحة الخارجية بجانب الباب',
    desc: 'اختر ارتفاعًا مناسبًا للرؤية وثبّت اللوحة بإحكام لمقاومة العوامل الجوية.',
    img: '/Light.webp',
  },
  {
    icon: '🔌',
    title: 'وصّل بالطاقة والإنترنت',
    desc: 'استخدم Wi‑Fi أو PoE حسب البنية لديك، ثم شغّل الوحدة الداخلية.',
    img: '/Light.webp',
  },
  {
    icon: '📱',
    title: 'أقرن مع التطبيق وعيّن المستخدمين',
    desc: 'أضف أفراد العائلة، فعّل الإشعارات، واضبط جودة الفيديو وطرق فتح الباب.',
    img: '/Light.webp',
  },
  {
    icon: '🔓',
    title: 'افتح الباب عن بُعد وتواصل فورًا',
    desc: 'تحدّث مع الزائر واضغط لفتح الباب من الشاشة أو عبر الهاتف من أي مكان.',
    img: '/Light.webp',
  },
];

const HowItWorks = () => {
  return (
    <section dir="rtl" className="w-full py-20 ">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-orange-400 drop-shadow-lg tracking-wide">
          كيف يعمل الأنتركم
        </h2>
        <div className="relative flex flex-col md:flex-row w-full mx-auto">
          {/* Vertical glowing line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-orange-500 via-orange-400 to-orange-700 shadow-[0_0_16px_4px_rgba(255,140,0,0.3)] z-0" />
          <ol className="flex flex-col gap-16 w-full z-10">
            {steps.map((step, idx) => (
              <li
                key={idx}
                className={`relative flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-0 ${
                  idx % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Step image */}
                <div className="flex-1 flex justify-center items-center mb-6 md:mb-0">
                  <div className=" rounded-2xl  p-6 flex items-center justify-center w-40 h-40 md:w-56 md:h-56">
                    <img
                      src={step.img}
                      alt={step.title}
                      className="w-28 h-28 md:w-40 md:h-40 object-contain"
                    />
                  </div>
                </div>
                {/* Timeline dot and line */}
                <div className="relative flex flex-col items-center md:w-16">
                  <span className="z-10 w-8 h-8 rounded-full bg-orange-500 shadow-[0_0_16px_4px_rgba(255,140,0,0.5)] flex items-center justify-center text-2xl font-bold border-4 border-orange-200">
                    {step.icon}
                  </span>
                  {idx < steps.length - 1 && (
                    <span className="hidden md:block w-1 flex-1 bg-gradient-to-b from-orange-400 to-orange-700 opacity-80 mt-2 mb-2" />
                  )}
                </div>
                {/* Step content */}
                <div className="flex-1 flex flex-col justify-center items-center md:items-start">
                  <div className=" rounded-xl p-6 w-full max-w-md">
                    <h3 className="text-lg md:text-xl font-semibold mb-2 text-orange-300 tracking-wide drop-shadow">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 text-base md:text-lg mb-1">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
