"use client";

import Link from "next/link";
import { Heart, ShoppingBag, Search, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="text-xl font-black uppercase tracking-widest">
          NEW DIMENSION
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden gap-8 text-sm uppercase md:flex">
          <Link href="/" className="hover:text-gray-300 transition">
            Home
          </Link>

          <Link href="/shop" className="hover:text-gray-300 transition">
            Shop
          </Link>

          <Link href="/new-arrivals" className="hover:text-gray-300 transition">
            New Arrivals
          </Link>

          <Link href="/about" className="hover:text-gray-300 transition">
            About
          </Link>

          <Link href="/contact" className="hover:text-gray-300 transition">
            Contact
          </Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-5">

          <Search
            className="cursor-pointer transition hover:scale-110"
            size={20}
          />

          <Heart
            className="cursor-pointer transition hover:scale-110"
            size={20}
          />

          <ShoppingBag
            className="cursor-pointer transition hover:scale-110"
            size={20}
          />

          <Menu
            className="cursor-pointer transition md:hidden"
            size={24}
          />

        </div>
      </div>
    </header>
  );
}