"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#222_0%,#000_70%)]" />

      <div className="relative z-10 mx-auto max-w-6xl text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 uppercase tracking-[0.5em] text-gray-400"
        >
          Premium Streetwear
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-black uppercase leading-none md:text-8xl"
        >
          NEW
          <br />
          DIMENSION
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mx-auto mt-8 max-w-2xl text-lg text-gray-400"
        >
          New Dimension Clothing Co. creates premium oversized streetwear
          designed for people who don't follow trends—they create them.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-5"
        >
          <button className="rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:scale-105">
            Shop Now
          </button>

          <button className="rounded-full border border-white px-8 py-4 transition hover:bg-white hover:text-black">
            New Arrivals
          </button>
        </motion.div>

      </div>

    </section>
  );
}