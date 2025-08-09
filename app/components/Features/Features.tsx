import Image from 'next/image';
import React from 'react';

const features = [
  'فيديو عالي الدقة مع رؤية ليلية واضحة',
  'اتصال صوتي/مرئي ثنائي الاتجاه',
  'فتح الباب عن بُعد عبر التطبيق',
  'تنبيهات ذكية عند اكتشاف الزائر',
  'اتصال Wi‑Fi أو PoE حسب الحاجة',
  'تسجيل سحابي وخيار تخزين محلي',
  'دعم متعدد الشقق/الوحدات',
];

const Features = () => {
  return (
    <section dir="rtl" className="w-full  py-20">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Left: Features List in a card */}
        <div className="flex-1 flex flex-col items-start  rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-orange-400 drop-shadow-lg">
            مزايا الأنتركم
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
          <div className="rounded-2xl p-8 flex items-center justify-center w-[300px] h-[300px] md:w-[400px] md:h-[400px] ">
            <Image
              width={500}
              height={500}
              src="/Light.webp"
              alt="ميزات الأنتركم الحديث"
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
