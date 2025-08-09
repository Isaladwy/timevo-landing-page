import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <section
      dir="rtl"
      className="relative bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 text-white min-h-[80vh] flex flex-col md:flex-row items-center justify-between py-24 gap-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col items-start justify-center z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-orange-400 drop-shadow-lg tracking-tight">
            تواصل ذكي وآمن على باب منزلك
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-lg text-gray-200">
            أنتركم حديث مع فيديو عالي الدقة، اتصال ثنائي الاتجاه، وفتح الباب عن
            بُعد عبر التطبيق.
          </p>
          <button className="border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white transition px-10 py-4 rounded-full text-xl font-bold shadow-lg backdrop-blur-md">
            استكشف الأنتركم
          </button>
        </div>
        {/* Right: Product Image */}
        <div className="flex-1 flex items-center justify-center z-10">
          <div className="w-[320px] h-[320px] md:w-[420px] md:h-[420px] bg-white/5 backdrop-blur-lg rounded-3xl flex items-center justify-center shadow-2xl border border-orange-400/30 relative">
            <Image
              fill
              src="/Light.webp"
              alt="أنتركم ذكي حديث"
              className="w-3/4 h-3/4 object-contain drop-shadow-2xl"
            />
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none shadow-[0_0_60px_10px_rgba(255,140,0,0.25)]" />
          </div>
        </div>
      </div>
      {/* Decorative background circle */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-orange-800 opacity-10 rounded-bl-full pointer-events-none" />
    </section>
  );
};

export default Hero;
