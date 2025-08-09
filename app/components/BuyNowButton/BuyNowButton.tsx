import React from 'react';

// ضع هنا رابط المنتج الفعلي (استبدل # بالرابط الحقيقي)
const PRODUCT_URL = '#';

const BuyNowButton = () => (
  <a
    href={PRODUCT_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed z-50 bottom-10 right-6 md:bottom-10 md:right-10 bg-orange-500 hover:bg-orange-600 text-white text-lg md:text-xl font-bold rounded-full shadow-2xl px-8 py-4 transition-all duration-200 flex items-center gap-2 animate-bounce"
    style={{ direction: 'rtl' }}
  >
    🛒 اطلب الآن
  </a>
);

export default BuyNowButton;
