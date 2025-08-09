import Link from 'next/link';
import React from 'react';

const navLinks = [
  { href: '#features', label: 'المزايا' },
  { href: '#durability', label: 'التحمّل والاعتمادية' },
  { href: '#howitworks', label: 'كيف يعمل الأنتركم' },
  { href: '#testimonials', label: 'آراء المستخدمين' },
];

const Navbar = () => {
  return (
    <nav
      dir="rtl"
      className="sticky top-0 z-50 text-sm w-full bg-neutral-950 bg-opacity-95 shadow-lg border-b border-orange-500/20"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-3 py-3">
        {/* Site Name/Logo */}
        <Link
          href="#hero"
          className="md:text-2xl text-xs font-extrabold text-orange-400 tracking-tight select-none"
        >
          أنتركم ذكي
        </Link>
        {/* Nav Links */}
        <ul className="flex gap-6 md:gap-10 items-center justify-center text-xs md:text-2xl ">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-gray-200 hover:text-orange-400 transition-colors duration-200 px-2 py-1 rounded"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
