import React from 'react';

const navLinks = [
  { href: '#hero', label: 'الرئيسية' },
  { href: '#features', label: 'المميزات' },
  { href: '#durability', label: 'المتانة' },
  { href: '#howitworks', label: 'كيف تعمل' },
  { href: '#testimonials', label: 'آراء العملاء' },
];

const Navbar = () => {
  return (
    <nav
      dir="rtl"
      className="sticky top-0 z-50 w-full bg-neutral-950 bg-opacity-95 shadow-lg border-b border-orange-500/20"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Site Name/Logo */}
        <div className="text-2xl font-extrabold text-orange-400 tracking-tight select-none">
          كاميرات الرؤية
        </div>
        {/* Nav Links */}
        <ul className="flex gap-6 md:gap-10 items-center text-lg font-semibold">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-gray-200 hover:text-orange-400 transition-colors duration-200 px-2 py-1 rounded"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
