'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-slate-900 text-white shadow-md w-full fixed top-0 z-50">
      <div className="container mx-auto flex flex-wrap items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo-gmu-2.png"
            width={80}
            height={60}
            alt="logo"
            className="cursor-pointer transition-transform transform hover:scale-105"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row md:space-x-8 w-full md:w-auto mt-4 md:mt-0 absolute md:relative bg-slate-900 md:bg-transparent left-0 md:left-auto px-6 md:px-0 top-16 md:top-auto`}
        >
          <Link href="/" className="text-lg font-semibold hover:text-cyan-400 transition-all block py-2">Home</Link>
          <Link href="/about" className="text-lg font-semibold hover:text-cyan-400 transition-all block py-2">About</Link>
          <Link href="/projects" className="text-lg font-semibold hover:text-cyan-400 transition-all block py-2">Projects</Link>
          <Link href="/contact" className="text-lg font-semibold hover:text-cyan-400 transition-all block py-2">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
