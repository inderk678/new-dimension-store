"use client";

import Link from "next/link";
import { Heart, ShoppingBag, Search, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-black uppercase tracking-[0.25em] transition hover:opacity-80"
        >
          New Dimension
        </Link>


        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 text-sm uppercase tracking-wider md:flex">

          <Link
            href="/"
            className="transition hover:text-gray-300"
          >
            Home
          </Link>

          <Link
            href="/shop"
            className="transition hover:text-gray-300"
          >
            Shop
          </Link>

          <Link
            href="/new-arrivals"
            className="transition hover:text-gray-300"
          >
            New Arrivals
          </Link>

          <Link
            href="/about"
            className="transition hover:text-gray-300"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="transition hover:text-gray-300"
          >
            Contact
          </Link>

        </nav>


        {/* Right Icons */}
        <div className="flex items-center gap-5">

          <Link href="/search">
            <Search
              size={20}
              className="transition hover:scale-110 hover:text-gray-300"
            />
          </Link>


          <Link href="/wishlist">
            <Heart
              size={20}
              className="transition hover:scale-110 hover:text-gray-300"
            />
          </Link>


          <Link href="/cart" className="relative">

            <ShoppingBag
              size={20}
              className="transition hover:scale-110 hover:text-gray-300"
            />

            {/* Cart Count (ready for later) */}
            <span className="absolute -right-2 -top-2 hidden h-4 w-4 items-center justify-center rounded-full bg-white text-[10px] text-black">
              0
            </span>

          </Link>


          {/* Mobile Menu */}
          <button className="md:hidden">
            <Menu
              size={24}
              className="transition hover:text-gray-300"
            />
          </button>

        </div>

      </div>
    </header>
  );
}