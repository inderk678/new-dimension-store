const categories = [
  {
    title: "T-Shirts",
    description: "Premium oversized essentials",
  },
  {
    title: "Hoodies",
    description: "Heavyweight comfort",
  },
  {
    title: "Bottomwear",
    description: "Cargos & Joggers",
  },
];

export default function Categories() {
  return (
    <section className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-4xl font-bold uppercase">
          Shop by Category
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-10 transition duration-300 hover:-translate-y-2 hover:border-white/30"
            >
              <div className="mb-10 flex h-56 items-center justify-center rounded-xl bg-zinc-900 text-gray-500">
                Image Coming Soon
              </div>

              <h3 className="text-2xl font-semibold">
                {category.title}
              </h3>

              <p className="mt-3 text-gray-400">
                {category.description}
              </p>

              <button className="mt-8 text-sm uppercase tracking-wider transition group-hover:translate-x-2">
                Shop →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}