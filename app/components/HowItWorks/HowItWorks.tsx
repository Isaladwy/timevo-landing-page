import React from 'react';

const steps = [
  {
    icon: '📦',
    title: 'افتح علبة الكاميرا',
    desc: 'افتح العبوة وتأكد من جميع الملحقات المرفقة مع الكاميرا الأمنية الجديدة.',
    img: '/globe.svg',
  },
  {
    icon: '📶',
    title: 'اتصل بشبكة الواي فاي',
    desc: 'قم بتشغيل الكاميرا ووصّلها بشبكة الواي فاي المنزلية باستخدام تطبيق الجوال.',
    img: '/globe.svg',
  },
  {
    icon: '🛠️',
    title: 'ركّب الكاميرا في المكان المناسب',
    desc: 'ثبّت الكاميرا في الموقع الذي تريده لتغطية مثالية وحماية أفضل.',
    img: '/globe.svg',
  },
  {
    icon: '📱',
    title: 'اضبط الإعدادات عبر التطبيق',
    desc: 'خصص الإعدادات، فعّل التنبيهات، وراقب البث المباشر من هاتفك الذكي.',
    img: '/globe.svg',
  },
  {
    icon: '🛡️',
    title: 'استمتع بالأمان على مدار الساعة',
    desc: 'اطمئن بأن ممتلكاتك محمية بمراقبة مستمرة على مدار 24/7.',
    img: '/globe.svg',
  },
];

const HowItWorks = () => {
  return (
    <section
      dir="rtl"
      className="w-full py-20 bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-900"
    >
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-orange-400 drop-shadow-lg tracking-wide">
          كيف تعمل الكاميرا
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
                  <div className="bg-neutral-800 rounded-2xl shadow-2xl p-6 flex items-center justify-center w-40 h-40 md:w-56 md:h-56">
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
                  <div className="bg-neutral-800 rounded-xl shadow-lg p-6 w-full max-w-md">
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
