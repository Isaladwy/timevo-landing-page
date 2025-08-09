import Image from 'next/image';
import React from 'react';

const BuiltToLast = () => {
  return (
    <section dir="rtl" className="w-full  py-20">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Image in a card */}
        <div className="flex-1 flex items-center justify-center mb-8 md:mb-0">
          <div className=" rounded-2xl  p-8 flex items-center justify-center w-[300px] h-[220px] md:w-[400px] md:h-[280px]  ">
            <Image
              width={400}
              height={400}
              src="/Battery.webp"
              alt="وحدة أنتركم متينة"
              className=" object-contain drop-shadow-2xl"
            />
          </div>
        </div>
        {/* Text */}
        <div className="flex-1 flex flex-col items-start justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-400 drop-shadow-lg">
            مصمم ليدوم
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-lg">
            صُنِع الأنتركم من مواد عالية الجودة ليوفّر تحمّلًا واعتماديةً طويلة
            الأمد. اللوحة الخارجية مقاومة للعوامل الجوية بمعيار IP65، والشاشة
            الداخلية بزجاج مقسّى لمظهر أنيق وحماية إضافية — أداء ثابت في كل
            الظروف.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BuiltToLast;
