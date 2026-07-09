export default function Newsletter() {
  return (
    <section className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 uppercase tracking-[0.4em] text-gray-500">
          Stay Updated
        </p>

        <h2 className="text-4xl font-black uppercase">
          Never Miss A Drop
        </h2>

        <p className="mt-6 text-gray-400">
          Subscribe to receive updates about new collections,
          exclusive offers and early access to limited releases.
        </p>

        <div className="mt-10 flex flex-col gap-4 md:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-full border border-white/20 bg-transparent px-6 py-4 outline-none"
          />

          <button className="rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:scale-105">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}