import Link from 'next/link';
import React from 'react';

const navLinks = [
  { href: '#features', label: 'المميزات' },
  { href: '#durability', label: 'المتانة' },
  { href: '#howitworks', label: 'كيف تعمل' },
  { href: '#testimonials', label: 'آراء العملاء' },
];

const Navbar = () => {
  return (
    <nav
      dir="rtl"
      className="sticky top-0 z-50 text-l w-full bg-neutral-950 bg-opacity-95 shadow-lg border-b border-orange-500/20"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Site Name/Logo */}
        <Link
          href="#hero"
          className="md:text-2xl text-l font-extrabold text-orange-400 tracking-tight select-none"
        >
          كاميرات الرؤية
        </Link>
        {/* Nav Links */}
        <ul className="flex gap-6 md:gap-10 items-center text-sm font-semibold">
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
