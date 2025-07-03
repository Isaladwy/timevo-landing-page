import Image from 'next/image';
import React from 'react';

const features = [
  'فيديو بدقة 4K فائقة الوضوح',
  'رؤية ليلية متقدمة',
  'كشف الحركة في الوقت الحقيقي',
  'اتصال صوتي ثنائي الاتجاه',
  'تخزين سحابي آمن',
];

const Features = () => {
  return (
    <section
      dir="rtl"
      className="w-full bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-900 py-20"
    >
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Left: Features List in a card */}
        <div className="flex-1 flex flex-col items-start bg-neutral-800 rounded-2xl shadow-2xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-orange-400 drop-shadow-lg">
            المميزات الرئيسية
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
            <Image
              width={500}
              height={500}
              src="/PIR Motion Detection.webp"
              alt="ميزات كاميرا الأمان الحديثة"
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
