import React from 'react';

const links = [
  { href: '#hero', label: 'الرئيسية' },
  { href: '#features', label: 'المميزات' },
  { href: '#durability', label: 'المتانة' },
  { href: '#howitworks', label: 'كيف تعمل' },
  { href: '#testimonials', label: 'آراء العملاء' },
];

const Footer = () => {
  return (
    <footer
      dir="rtl"
      className="w-full bg-neutral-950 text-gray-300 py-8 px-4 border-t border-orange-500/20 mt-12"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        {/* Site Name/Logo */}
        <div className="mb-4 md:mb-0 text-2xl font-extrabold text-orange-400 select-none">
          كاميرات الرؤية
        </div>
        {/* Quick Links */}
        <ul className="flex flex-wrap gap-6 md:gap-10 text-lg font-semibold mb-4 md:mb-0">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-orange-400 transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Social Media */}
        <div className="flex gap-4 text-2xl">
          <a
            href="#"
            aria-label="تويتر"
            className="hover:text-orange-400 transition"
          >
            🐦
          </a>
          <a
            href="#"
            aria-label="فيسبوك"
            className="hover:text-orange-400 transition"
          >
            📘
          </a>
          <a
            href="#"
            aria-label="انستجرام"
            className="hover:text-orange-400 transition"
          >
            📸
          </a>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 mt-6">
        &copy; {new Date().getFullYear()} جميع الحقوق محفوظة - كاميرات الرؤية
      </div>
    </footer>
  );
};

export default Footer;
